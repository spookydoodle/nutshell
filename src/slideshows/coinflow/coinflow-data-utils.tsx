import * as MetricTypes from "../../components/metrics-dashboard/metric-types";
import * as Types from "../../types";
import * as Utils from "../../utils";
import { Timebox } from "./coinflow-types";

const filterByPositive = (
    data: MetricTypes.DataValue<Timebox>,
    columnName: string,
    timebox: Timebox
): MetricTypes.DataItem<Timebox>[] => {
    return data.filter((row) => row?.columnName?.key === columnName && Number(row.measures.primaryMeasure.valueByTimebox[timebox]) > 0);
};

const filterByDimension = (
    data: MetricTypes.ChartBreakdownItem<Timebox>[],
    name: string
): Array<MetricTypes.DataItem<Timebox>> => {
    return data.filter((row) => row.characteristicValue.key === name);
};

const getTileData = (
    data: MetricTypes.DataValue<Timebox>,
    columnName: string,
    timebox: Timebox
): MetricTypes.Datum[] => {
    const tiles = filterByPositive(data, columnName, timebox);

    return tiles.map((row) => {
        const { valueByTimebox: primaryValue, ...primaryOptions } = row.measures.primaryMeasure;
        const { valueByTimebox: deltaValue, ...deltaOptions } = row.measures.primaryMeasureDelta;

        return {
            name: columnName,
            primary: primaryValue[timebox],
            primaryFormatted: Utils.Formats.formatNumber(primaryValue[timebox], primaryOptions),
            primaryDelta: deltaValue[timebox],
            primaryDeltaFormatted: deltaOptions.unit === '%' ? Utils.Formats.formatPercentageDelta(deltaValue[timebox], deltaOptions) : Utils.Formats.formatNumber(deltaValue[timebox], deltaOptions),
            primaryIsGood: Number(deltaValue[timebox]) > 0,
            primaryIsBad: Number(deltaValue[timebox]) <= 0,
        };
    });
};

const getChartsData = (
    data: MetricTypes.DataValue<Timebox>,
    columnName: string,
    timebox: Timebox,
    tickerItemsData?: MetricTypes.TickerItem<Timebox>[]
): MetricTypes.Datum[] => {
    const charts = filterByPositive(data, columnName, timebox) as MetricTypes.ChartBreakdownItem<Timebox>[];

    return charts.map((row) => {
        const { valueByTimebox: primaryValue, ...primaryOptions } = row.measures.primaryMeasure;
        const { valueByTimebox: deltaValue, ...deltaOptions } = row.measures.primaryMeasureDelta;
        const subitems = tickerItemsData ? getTickerItemsData(tickerItemsData, [columnName], timebox, row.characteristicValue.text) : undefined;

        return {
            name: row.characteristicValue.text,
            primary: primaryValue[timebox],
            primaryFormatted: Utils.Formats.formatNumber(primaryValue[timebox], primaryOptions),
            primaryDelta: deltaValue[timebox],
            primaryDeltaFormatted: deltaOptions.unit === '%' ? Utils.Formats.formatPercentageDelta(deltaValue[timebox], deltaOptions) : Utils.Formats.formatNumber(deltaValue[timebox], deltaOptions),
            primaryIsGood: Number(deltaValue[timebox]) > 0,
            primaryIsBad: Number(deltaValue[timebox]) <= 0,
            attributePrimary: row.characteristicValue,
            subitems
        };
    })
};

const getTickerItemsData = (
    data: MetricTypes.TickerItem<Timebox>[],
    columnNames: Array<string>,
    timebox: Timebox,
    tickerItemParent?: string,
    withTimebox?: boolean
): MetricTypes.Datum[] => {
    return data
        .filter((row) => (row.tickerItemParent.text !== "" || row.tickerItem.text !== "") && row.measures.primaryMeasure.valueByTimebox[timebox] > 0)
        .filter((row) => columnNames.includes(row.columnName.key) && (!tickerItemParent || tickerItemParent === row.tickerItemParent.text))
        .map((row) => {
            const { valueByTimebox: primaryValue, ...primaryOptions } = row.measures.primaryMeasure;
            const { valueByTimebox: deltaValue, ...deltaOptions } = row.measures.primaryMeasureDelta;

            return {
                key: row.tickerItem.key,
                name: Utils.Formats.formatTickerItemName(row.tickerItem, row.tickerItem, timebox, withTimebox),
                primary: primaryValue[timebox],
                primaryFormatted: `${Utils.Formats.formatNumber(primaryValue[timebox], primaryOptions)}`,
                primaryDelta: deltaValue[timebox],
                primaryDeltaFormatted: Utils.Formats.formatPercentageDelta(deltaValue[timebox], deltaOptions),
                primaryIsGood: Number(deltaValue[timebox]) > 0,
                primaryIsBad: Number(deltaValue[timebox]) <= 0,
                attributePrimary: row.columnName,
                attributeSecondary: row.tickerItemParent
            };
        });
};

const getProductsData = (
    data: MetricTypes.DataValue<Timebox>,
    columnName: string,
    timebox: Timebox,
    slideName: string,
    rowName: MetricTypes.Dimension
): MetricTypes.Datum[] => {
    // Fix type casting
    return (filterByPositive(data, columnName, timebox) as MetricTypes.ProductsItem<Timebox>[])
        .filter((row) => row.slideName.key === slideName && row.rowName.key === rowName.key)
        .map((row) => {
            const { valueByTimebox: primaryValue, ...primaryOptions } = row.measures.primaryMeasure;
            const datum: MetricTypes.Datum = {
                name: row.attributePrimary.key,
                primary: primaryValue[timebox],
                primaryFormatted: Utils.Formats.formatNumber(primaryValue[timebox], primaryOptions),
                attributePrimary: row.attributePrimary,
                attributeSecondary: row.attributeSecondary,
                img: {
                    src: row.imageURL.key,
                },
            };

            if (row.measures.secondaryMeasure) {
                const { valueByTimebox: secondaryValue, ...secondaryOptions } = row.measures.secondaryMeasure;

                datum['secondary'] = secondaryValue[timebox];
                datum['secondaryFormatted'] = Utils.Formats.formatNumber(secondaryValue[timebox], secondaryOptions);
            }

            return datum;
        })
        .sort((a, b) => Number(b.primary) - Number(a.primary))
        .filter((row, i) => row.primary > 0 && i < 5);
};

export const getUnique = (res: MetricTypes.Data<Timebox>, key: 'slideName' | 'columnName' | 'rowName') => {
    const unique: MetricTypes.Dimension[] = [];

    for (const product of res.products) {
        if (!unique.some((s) => s.key === product[key].key)) {
            unique.push(product[key]);
        }
    }

    return unique;
};

export const getUniqueTimeboxes = (res: MetricTypes.Data<Timebox>): Timebox[] => {
    return [...new Set(res.tiles.map((tile) => Object.keys(tile.measures.primaryMeasure.valueByTimebox) as Timebox[]).flat(1))];
};

export const convertToMapMobile = (res: MetricTypes.Data<Timebox>): MetricTypes.StateDataMapMobile => {
    const productSlides = getUnique(res, 'slideName');
    const rowNames = getUnique(res, 'rowName');
    const columnNames = getUnique(res, 'columnName').map((el) => el.text);
    const timeboxes = getUniqueTimeboxes(res);

    return new Map(
        timeboxes.map((timebox) => [
            timebox,
            new Map(
                columnNames.map((columnName: string) => [
                    columnName,
                    {
                        tile: getTileData(res.tiles, columnName, timebox)[0],
                        charts: res.charts.map((c) => ({
                            characteristicName: c.characteristicName,
                            data: getChartsData(c.data, columnName, timebox, res.ticker)
                        })),
                        products: productSlides.map((slide) => ({
                            tile: getTileData(
                                // TODO: Test this
                                filterByDimension(res.charts[1].data, slide.key),
                                columnName,
                                timebox
                            )[0],
                            main: new Map(
                                rowNames.map((rowName) => [
                                    rowName.text,
                                    {
                                        type: "items" as MetricTypes.ComponentType,
                                        name: slide.text,
                                        data: getProductsData(
                                            res.products,
                                            columnName,
                                            timebox,
                                            slide.key,
                                            rowName
                                        ),
                                    },
                                ])
                            ),
                        })),
                    },
                ])
            ),
        ])
    );
};

export const convertToMap = (res: MetricTypes.Data<Timebox>): MetricTypes.StateDataMap => {
    const productSlides = getUnique(res, 'slideName');
    const rowNames = getUnique(res, 'rowName');
    const columnNames = getUnique(res, 'columnName').map((el) => el.key);
    const timeboxes = getUniqueTimeboxes(res);

    return {
        slides: new Map(
            timeboxes.map((timebox) => [
                timebox,
                [
                    ...res.charts.map((c) => ({
                        headers: {
                            category: c.characteristicName as MetricTypes.Category,
                            sequence: timebox,
                            titlePrimary: `${timebox} ${res.primaryMeasureName}`,
                            titlePrimaryShort: "",
                            titleSecondary: `By ${c.characteristicName}`,
                            titleSecondaryShort: c.characteristicNameShort,
                        },
                        data: new Map(
                            columnNames.map((columnName) => [
                                columnName,
                                {
                                    tile: getTileData(res.tiles, columnName, timebox)[0],
                                    main: new Map([
                                        [
                                            "Total",
                                            {
                                                type: "bar-chart" as Types.ComponentType,
                                                name: c.characteristicName,
                                                data: getChartsData(
                                                    c.data,
                                                    columnName,
                                                    timebox
                                                ),
                                            },
                                        ],
                                    ]),
                                },
                            ])
                        ),
                    })),
                    ...productSlides.map((slide) => ({
                        headers: {
                            category: "Products" as MetricTypes.Category,
                            sequence: timebox,
                            titlePrimary: `${timebox} ${res.primaryMeasureName}`,
                            titlePrimaryShort: "",
                            titleSecondary: slide.text,
                            titleSecondaryShort: slide.shortText ?? slide.text ?? '',
                        },
                        data: new Map(
                            columnNames.map((columnName) => [
                                columnName,
                                {
                                    tile: getTileData(
                                        // Test this
                                        filterByDimension(res.charts[1].data, slide.key),
                                        // filterByDimension(res.characteristic2, slide.key),
                                        columnName,
                                        timebox
                                    )[0],
                                    main: new Map(
                                        rowNames.map(
                                            (rowName) => [
                                                rowName.text,
                                                {
                                                    type: "items" as MetricTypes.ComponentType,
                                                    name: slide.text,
                                                    data: getProductsData(
                                                        res.products,
                                                        columnName,
                                                        timebox,
                                                        slide.key,
                                                        rowName
                                                    ),
                                                },
                                            ]
                                        )
                                    ),
                                },
                            ])
                        ),
                    })),
                ],
            ])
        ),
        ticker: new Map(
            timeboxes.map((timebox) => [
                timebox,
                new Map(
                    getUniqueTickerItemParents(res.ticker).map((tickerItemParent: string) => [
                        tickerItemParent,
                        getTickerItemsData(
                            res.ticker,
                            columnNames,
                            timebox,
                            tickerItemParent,
                            true
                        ),
                    ])
                ),
            ])
        ),
    };
};

const getUniqueTickerItemParents = (data: MetricTypes.TickerItem<Timebox>[]): Array<string> => [
    ...new Set(data.map((row) => row.tickerItemParent.text)),
];
