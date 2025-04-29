import * as MetricTypes from '../../components/metrics-dashboard/metric-types';

export type Timebox = 'YTD' | 'QTD' | 'MTD';

export type Category = "Realms" | "Sectors" | "Products";

export interface Data {
    /**
     * Name of the primary measure to be displayed in top left title of the dashboard.
     */
    primaryMeasureName: string;
    /**
     * Defines data to display at all times in tile components above dynamic content, such as charts or products.
     */
    tiles: MetricTypes.Tile<Timebox>[];
    /**
     * Defines data to display in horizontal bar charts. 
     * Each element will be displayed on a separate slide.
     */
    charts: MetricTypes.ChartData<Timebox>[]
    /**
     * Defines data to display in the products section. Products will be grouped on each slide by `slideName`.
     */
    products: MetricTypes.ProductsItem<Timebox>[];
    /**
     * Defines data to display in the footer ticker component.
     */
    ticker: MetricTypes.TickerItem<Timebox>[];
}