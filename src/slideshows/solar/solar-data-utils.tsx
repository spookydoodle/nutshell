import * as Utils from "../../utils";
import * as MetricTypes from "../../components/metrics-dashboard/metric-types";
import * as SolarTypes from './solar-types';

export const getMetricDelta = (val: number, property: SolarTypes.Property, metricsData: SolarTypes.MetricsData): number => {
    return val / metricsData[property].data["Earth"];
};

export const getSum = (arr: number[]): number => {
    return arr.reduce((acc: number, val: number) => acc + val);
};

export const getRange = (arr: number[]): string => {
    const from = Utils.Formats.formatNumber(arr.reduce((acc, val) => Math.min(acc, val), 0), { scaling: 1, decimals: 1 });
    const to = Utils.Formats.formatNumber(arr.reduce((acc, val) => Math.max(acc, val), 0), { scaling: 1, decimals: 1 });

    return `${from} - ${to}`;
};

export const getAvg = (arr: number[]): number => {
    const newArr = arr.filter((n) => !isNaN(n));
    return getSum(newArr) / newArr.length;
};

export const suffix = "×E";
// const suffixExt = " × E";

// const planetNames = Object.keys(METRIC_DATA);

// const arr = new Array(
//     Math.floor(planetNames.length / 3 + (planetNames.length % 3 !== 0 ? 1 : 0))
// ).fill(null);

// const metricSlides: [SolarTypes.Category, MetricTypes.SlideData<SolarTypes.Category>][] = [
//     [
//         "Metrics",
//         arr.map((x, n): MetricTypes.SlideDataItem<SolarTypes.Category> => ({
//             header: {
//                 category: "Metrics",
//                 sequence: "Metrics",
//                 titlePrimary: "Solar System",
//                 titlePrimaryShort: "SS",
//                 titleSecondary: "Vs. the Earth",
//                 titleSecondaryShort: `M${n + 1}`,
//             },
//             data: new Map(
//                 Object.entries(METRIC_DATA)
//                     .filter((_el, i) => i >= n * 3 && i < (n + 1) * 3)
//                     .map(([metric, metricData]): [SolarTypes.Property, MetricTypes.Item] => [
//                         metric as SolarTypes.Property,
//                         {
//                             main: new Map([
//                                 [
//                                     "Total",
//                                     {
//                                         type: "bar-chart",
//                                         name: "TODO: Name",
//                                         data: Object.entries(metricData.data).map(
//                                             ([planet, value]): MetricTypes.Datum => {
//                                                 const delta = getMetricDelta(value, metric as SolarTypes.Property);

//                                                 return {
//                                                     name: planet,
//                                                     primary: value,
//                                                     primaryFormatted: Utils.Formats.formatNumber(
//                                                         value,
//                                                         {
//                                                             scaling: 1,
//                                                             // metricData.decimals as Decimals
//                                                             decimals: 1
//                                                         }
//                                                     ),
//                                                     primaryDelta: delta,
//                                                     primaryDeltaFormatted: `${Utils.Formats.formatNumber(
//                                                         delta,
//                                                         { scaling: 1, decimals: 1 }
//                                                     )}${suffix}`,
//                                                     primaryIsGood: delta > 1,
//                                                     primaryIsBad: delta < 1,
//                                                 };
//                                             }
//                                         ),
//                                     },
//                                 ],
//                             ]),
//                             tile: {
//                                 name: metric,
//                                 tooltip: METRIC_DEF[metric as SolarTypes.Property],
//                                 primary: getSum(Object.values(metricData.data)),
//                                 primaryFormatted: `${getRange(
//                                     Object.values(metricData.data)
//                                 )} ${metricData.unit}`,
//                                 primaryDelta: getAvg(Object.values(metricData.data)),
//                                 primaryDeltaFormatted: `Avg: ${Utils.Formats.formatNumber(
//                                     getAvg(Object.values(metricData.data)),
//                                     { scaling: 1, decimals: 2 }
//                                 )} ${metricData.unit}`,
//                             },
//                         },
//                     ])
//             ),
//         })),
//     ],
// ];

// const planetsSlides: [SolarTypes.Category, MetricTypes.SlideData<SolarTypes.Category>][] = [
//     [
//         "Planets",
//         new Array(
//             Math.floor(Object.keys(PLANET_IMG).length / 3) +
//             (Object.keys(PLANET_IMG).length % 3 !== 0 ? 1 : 0)
//         )
//             .fill(null)
//             .map((_x, n): MetricTypes.SlideDataItem<SolarTypes.Category> => ({
//                 header: {
//                     category: "Planets",
//                     sequence: "Planets",
//                     titlePrimary: "Solar System",
//                     titlePrimaryShort: "SS",
//                     titleSecondary: "Planets show",
//                     titleSecondaryShort: `P ${n * 3 + 1} - ${(n + 1) * 3}`,
//                 },
//                 data: new Map(
//                     Object.entries(PLANET_IMG)
//                         .filter((_planet, i) => i >= n * 3 && i < (n + 1) * 3)
//                         .map(([planet, planetData], i): [string, MetricTypes.Item] => {
//                             const tile: MetricTypes.Datum =  {
//                                 name: planet,
//                                 primary: i + 1,
//                                 primaryFormatted: PLANET_FACTS[n * 3 + i],
//                             };
//                             const main: MetricTypes.MainDataItem = new Map([
//                                 [
//                                     "Total",
//                                     {
//                                         type: "items",
//                                         name: "TODO: Name",
//                                         data: planetData.map(
//                                             ({ name, description, img, link }) => ({
//                                                 name: name,
//                                                 description: description,
//                                                 img: { src: img },
//                                                 link: link,
//                                                 // TODO: Check display
//                                                 primary: 0,
//                                                 primaryFormatted: "",
//                                             })
//                                         ),
//                                     },
//                                 ],
//                             ]);
//                             return [planet, { main, tile }];
//                         })
//                 ),
//             })),
//     ],
// ];

export const getTickerData = (metricsData: SolarTypes.MetricsData): MetricTypes.TickerStateData => new Map([
    [
        "Solar System Metrics VS. the Earth",
        new Map(
            Object.entries(metricsData).map(([metric, metricData]): [string, MetricTypes.Datum[]] => [
                `${metric} (${metricData.unit})`,

                Object.entries(metricData.data).map(([planet, value]): MetricTypes.Datum => {
                    const delta = getMetricDelta(value, metric as SolarTypes.Property, metricsData);

                    return {
                        name: planet,
                        primary: value,
                        primaryFormatted: Utils.Formats.formatNumber(
                            value,
                            { scaling: 1, decimals: metricData.decimals as MetricTypes.Decimals }
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
