import * as MetricTypes from '../../components/metrics-dashboard/metric-types';

export type Category = "Realms" | "Sectors" | "Products";
export type Subcategory = "Charts" | "Products";
export type Timebox = 'YTD' | 'QTD' | 'MTD';
export type Column = 'PneumaPost Catalogue' | 'The AetherNet Emporium' | 'The Cogwheel Bazaar';
export type Row = 'Main line' | 'Secondary line';

export interface Data {
    /**
     * Name of the primary measure to be displayed in top left title of the dashboard.
     */
    primaryMeasureName: string;
    /**
     * Defines data to display at all times in tile components above dynamic content, such as charts or products.
     */
    tiles: MetricTypes.Tile<Timebox, Column>[];
    /**
     * Defines data to display in horizontal bar charts. 
     * Each element will be displayed on a separate slide.
     */
    charts: MetricTypes.ChartData<Category, Timebox, Column>[]
    /**
     * Defines data to display in the products section. Products will be grouped on each slide by `slideName`.
     */
    products: MetricTypes.ProductsItem<Timebox, Column, Row>[];
    /**
     * Defines data to display in the footer ticker component.
     */
    ticker: MetricTypes.TickerItem<Timebox, Column>[];
}