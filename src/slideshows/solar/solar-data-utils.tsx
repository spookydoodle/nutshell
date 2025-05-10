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

export const getTickerData = (metricsData: SolarTypes.MetricsData): MetricTypes.TickerStateData => {
    return new Map([
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
                            primaryFormatted: Utils.Formats.formatNumber(value, { scaling: 1, decimals: metricData.decimals as MetricTypes.Decimals }),
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
};

export const getNewsHeadlinesTickerData = (data: Map<SolarTypes.Planet, SolarTypes.NewsHeadline[]>): MetricTypes.TickerStateData => {
    const entries = [...data.entries()] as [SolarTypes.Planet, SolarTypes.NewsHeadline[]][];
    
    return new Map([
        [
            "Solar System News",
            new Map(
                entries.map(([planet, newsHeadlines]): [string, MetricTypes.TickerDatum[]] => [
                    planet[0].toUpperCase() + planet.substring(1),
                    newsHeadlines.map(({ headline, provider }): MetricTypes.TickerDatum => {
                        return { name: `${headline} (${provider})` };
                    }),
                ])
            ),
        ],
    ]);
};
