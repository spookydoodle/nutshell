import { Decimals, Metric } from "../../types/types";
import {
    PLANET_IMG,
    PLANET_FACTS,
    METRIC_DATA,
    METRIC_DEF,
} from "./solar-system-data";
import * as Utils from "../../utils";
import { StateDataMap, TickerStateData, SlideData, Datum, MainDataItem } from "../../components/metrics-dashboard/metric-types";

const getMetricDelta = (val: number, metric: Metric): number => {
    return val / METRIC_DATA[metric].data["Earth"];
};

const getSum = (arr: Array<number>): number => {
    return arr.reduce((acc: number, val: number) => acc + val);
};

const getRange = (arr: Array<number>): string => {
    const from = Utils.Formats.formatNumber(arr.reduce((acc, val) => Math.min(acc, val), 0), { scaling: 1, decimals: 1 });
    const to = Utils.Formats.formatNumber(arr.reduce((acc, val) => Math.max(acc, val), 0), { scaling: 1, decimals: 1 });

    return `${from} - ${to}`;
};

const getAvg = (arr: Array<number>): number => {
    const newArr = arr.filter((n) => !isNaN(n));
    return getSum(newArr) / newArr.length;
};

const suffix = "×E";
// const suffixExt = " × E";

const planetNames = Object.keys(METRIC_DATA);

const arr = new Array(
    Math.floor(planetNames.length / 3 + (planetNames.length % 3 !== 0 ? 1 : 0))
).fill(null);

const metricSlides: Array<[string, SlideData]> = [
    [
        "Metrics",
        arr.map((x, n) => ({
            headers: {
                category: "Metrics",
                sequence: "Metrics",
                titlePrimary: "Solar System",
                titlePrimaryShort: "SS",
                titleSecondary: "Vs. the Earth",
                titleSecondaryShort: `M${n + 1}`,
            },
            data: new Map(
                Object.entries(METRIC_DATA)
                    .filter((el, i) => i >= n * 3 && i < (n + 1) * 3)
                    .map(([metric, metricData]) => [
                        metric,
                        {
                            main: new Map([
                                [
                                    "Total",
                                    {
                                        type: "bar-chart",
                                        name: "TODO: Name",
                                        data: Object.entries(metricData.data).map(
                                            ([planet, value]) => {
                                                const delta = getMetricDelta(value, metric as Metric);

                                                return {
                                                    name: planet,
                                                    primary: value,
                                                    primaryFormatted: Utils.Formats.formatNumber(
                                                        value,
                                                        {
                                                            scaling: 1,
                                                            // metricData.decimals as Decimals
                                                            decimals: 1
                                                        }
                                                    ),
                                                    primaryDelta: delta,
                                                    primaryDeltaFormatted: `${Utils.Formats.formatNumber(
                                                        delta,
                                                        { scaling: 1, decimals: 1 }
                                                    )}${suffix}`,
                                                    primaryIsGood: delta > 1,
                                                    primaryIsBad: delta < 1,
                                                };
                                            }
                                        ),
                                    },
                                ],
                            ]),
                            tile: {
                                name: metric,
                                tooltip: METRIC_DEF[metric as Metric],
                                primary: getSum(Object.values(metricData.data)),
                                primaryFormatted: `${getRange(
                                    Object.values(metricData.data)
                                )} ${metricData.unit}`,
                                primaryDelta: getAvg(Object.values(metricData.data)),
                                primaryDeltaFormatted: `Avg: ${Utils.Formats.formatNumber(
                                    getAvg(Object.values(metricData.data)),
                                    { scaling: 1, decimals: 2 }
                                )} ${metricData.unit}`,
                            },
                        },
                    ])
            ),
        })),
    ],
];

const planetsSlides: Array<[string, SlideData]> = [
    [
        "Planets",
        new Array(
            Math.floor(Object.keys(PLANET_IMG).length / 3) +
            (Object.keys(PLANET_IMG).length % 3 !== 0 ? 1 : 0)
        )
            .fill(null)
            .map((x, n) => ({
                headers: {
                    category: "Planets",
                    sequence: "Planets",
                    titlePrimary: "Solar System",
                    titlePrimaryShort: "SS",
                    titleSecondary: "Planets show",
                    titleSecondaryShort: `P ${n * 3 + 1} - ${(n + 1) * 3}`,
                },
                data: new Map(
                    Object.entries(PLANET_IMG)
                        .filter((_planet, i) => i >= n * 3 && i < (n + 1) * 3)
                        .map(([planet, planetData], i) => {
                            const tile: Datum =  {
                                name: planet,
                                primary: i + 1,
                                primaryFormatted: PLANET_FACTS[n * 3 + i],
                            };
                            const main: MainDataItem = new Map([
                                [
                                    "Total",
                                    {
                                        type: "items",
                                        name: "TODO: Name",
                                        data: planetData.map(
                                            ({ name, description, img, link }) => ({
                                                name: name,
                                                description: description,
                                                img: { src: img },
                                                link: link,
                                                // TODO: Check display
                                                primary: 0,
                                                primaryFormatted: "",
                                            })
                                        ),
                                    },
                                ],
                            ]);
                            return [planet, { main, tile }];
                        })
                ),
            })),
    ],
];

const tickerData: TickerStateData = new Map([
    [
        "Solar System Metrics VS. the Earth",
        new Map(
            Object.entries(METRIC_DATA).map(([metric, metricData]) => [
                `${metric} (${metricData.unit})`,

                Object.entries(metricData.data).map(([planet, value]) => {
                    const delta = getMetricDelta(value, metric as Metric);

                    return {
                        name: planet,
                        primary: value,
                        primaryFormatted: Utils.Formats.formatNumber(
                            value,
                            { scaling: 1, decimals: metricData.decimals as Decimals }
                        ),
                        primaryDelta: delta,
                        primaryDeltaFormatted: `${Utils.Formats.formatNumber(delta, { scaling: 1, decimals: 3 })}${suffix}`,
                        primaryIsGood: delta > 1,
                        primaryIsBad: delta < 1,
                    };
                }),
            ])
        ),
    ],
]);

export const createStateData = (): StateDataMap => ({
    slides: new Map([...metricSlides, ...planetsSlides]),
    ticker: tickerData,
});
