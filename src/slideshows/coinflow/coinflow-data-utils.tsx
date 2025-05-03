import * as MetricTypes from "../../components/metrics-dashboard/metric-types";
import * as Utils from "../../utils";
import * as CoinflowTypes from "./coinflow-types";

const filterByPositive = (
    data: CoinflowTypes.DataValue<CoinflowTypes.Timebox, CoinflowTypes.Column, CoinflowTypes.Row>,
    columnName: string,
    timebox: CoinflowTypes.Timebox
): CoinflowTypes.DataItem<CoinflowTypes.Timebox, CoinflowTypes.Column, CoinflowTypes.Row>[] => {
    return data.filter((row) => row?.columnName?.key === columnName && Number(row.measures.primaryMeasure.valueBySequence[timebox]) > 0);
};

export const filterByDimensionText = (
    data: CoinflowTypes.ChartBreakdownItem<CoinflowTypes.Timebox, CoinflowTypes.Column>[],
    text: string
): CoinflowTypes.DataItem<CoinflowTypes.Timebox, CoinflowTypes.Column, CoinflowTypes.Row>[] => {
    return data.filter((row) => row.characteristicValue.text === text);
};

export const getTileData = (
    data: CoinflowTypes.DataValue<CoinflowTypes.Timebox, CoinflowTypes.Column, CoinflowTypes.Row>,
    columnName: string,
    timebox: CoinflowTypes.Timebox
): MetricTypes.Datum => {
    const tiles = filterByPositive(data, columnName, timebox);

    return tiles.map((row) => {
        const { valueBySequence: primaryValue, ...primaryOptions } = row.measures.primaryMeasure;
        const { valueBySequence: deltaValue, ...deltaOptions } = row.measures.primaryMeasureDelta;

        return {
            name: columnName,
            primary: primaryValue[timebox],
            primaryFormatted: Utils.Formats.formatNumber(primaryValue[timebox], primaryOptions),
            primaryDelta: deltaValue[timebox],
            primaryDeltaFormatted: deltaOptions.unit === '%' ? Utils.Formats.formatPercentageDelta(deltaValue[timebox], deltaOptions) : Utils.Formats.formatNumber(deltaValue[timebox], deltaOptions),
            primaryIsGood: Number(deltaValue[timebox]) > 0,
            primaryIsBad: Number(deltaValue[timebox]) <= 0,
        };
    })[0];
};

export const getChartsData = (
    data: CoinflowTypes.DataValue<CoinflowTypes.Timebox, CoinflowTypes.Column, CoinflowTypes.Row>,
    columnName: CoinflowTypes.Column,
    timebox: CoinflowTypes.Timebox,
    tickerItemsData?: CoinflowTypes.TickerItem<CoinflowTypes.Timebox, CoinflowTypes.Column>[]
): MetricTypes.Datum[] => {
    const charts = filterByPositive(data, columnName, timebox) as CoinflowTypes.ChartBreakdownItem<CoinflowTypes.Timebox, CoinflowTypes.Column>[];

    return charts.map((row) => {
        const { valueBySequence: primaryValue, ...primaryOptions } = row.measures.primaryMeasure;
        const { valueBySequence: deltaValue, ...deltaOptions } = row.measures.primaryMeasureDelta;
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

export const getTickerItemsData = (
    data: CoinflowTypes.TickerItem<CoinflowTypes.Timebox, CoinflowTypes.Column>[],
    columns: CoinflowTypes.Column[],
    timebox: CoinflowTypes.Timebox,
    tickerItemParent?: string,
    withTimebox?: boolean
): MetricTypes.Datum[] => {
    return data
        .filter((row) =>
            columns.includes(row.columnName.text) 
            && (!tickerItemParent || tickerItemParent === row.tickerItemParent.text)
            && (row.tickerItemParent.text !== "" || row.tickerItem.text !== "") 
            && row.measures.primaryMeasure.valueBySequence[timebox] > 0
        )
        .map((row) => {
            const { valueBySequence: primaryValue, ...primaryOptions } = row.measures.primaryMeasure;
            const { valueBySequence: deltaValue, ...deltaOptions } = row.measures.primaryMeasureDelta;

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

export const getProductsData = (
    data: CoinflowTypes.DataValue<CoinflowTypes.Timebox, CoinflowTypes.Column, CoinflowTypes.Row>,
    columnName: CoinflowTypes.Column,
    timebox: CoinflowTypes.Timebox,
    slideName: string,
    rowName: MetricTypes.Dimension
): MetricTypes.Datum[] => {
    // Fix type casting
    return (filterByPositive(data, columnName, timebox) as CoinflowTypes.ProductsItem<CoinflowTypes.Timebox, CoinflowTypes.Column, CoinflowTypes.Row>[])
        .filter((row) => row.slideName.text === slideName && row.rowName.text === rowName.text)
        .map((row) => {
            const { valueBySequence: primaryValue, ...primaryOptions } = row.measures.primaryMeasure;
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
                const { valueBySequence: secondaryValue, ...secondaryOptions } = row.measures.secondaryMeasure;

                datum['secondary'] = secondaryValue[timebox];
                datum['secondaryFormatted'] = Utils.Formats.formatNumber(secondaryValue[timebox], secondaryOptions);
            }

            return datum;
        })
        .sort((a, b) => Number(b.primary) - Number(a.primary))
        .filter((row, i) => row.primary > 0 && i < 5);
};
