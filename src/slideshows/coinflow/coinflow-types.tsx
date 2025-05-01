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
    tiles: Tile<Timebox, Column>[];
    /**
     * Defines data to display in horizontal bar charts. 
     * Each element will be displayed on a separate slide.
     */
    charts: ChartData<Category, Timebox, Column>[]
    /**
     * Defines data to display in the products section. Products will be grouped on each slide by `slideName`.
     */
    products: ProductsItem<Timebox, Column, Row>[];
    /**
     * Defines data to display in the footer ticker component.
     */
    ticker: TickerItem<Timebox, Column>[];
}


/**
 * Data required to display a KPI in a tile component.
 */
export interface Tile<TTimebox extends string, TColumn extends string> {
    columnName: MetricTypes.Dimension<TColumn, TColumn>;
    measures: MetricTypes.Measures<TTimebox>;
}


export interface ChartData<TCategory extends string, TTimebox extends string, TColumn extends string> {
    category: TCategory;
    data: ChartBreakdownItem<TTimebox, TColumn>[];
}

/**
 * Data required to render a single bar in a horizontal bar chart.
 */
export interface ChartBreakdownItem<TTimebox extends string, TColumn extends string> {
    columnName: MetricTypes.Dimension<TColumn, TColumn>;
    characteristicValue: MetricTypes.Dimension;
    measures: MetricTypes.Measures<TTimebox>;
}


/**
 * Data required to show case a single product.
 */
export interface ProductsItem<TTimebox extends string, TColumn extends string, TRow extends string> {
    /**
     * Creates a slide per each
     */
    slideName: MetricTypes.Dimension;
    /**
     * Name of the column by which to split the dashboard in columns.
     */
    columnName: MetricTypes.Dimension<TColumn, TColumn>;
    /**
     * Splits product section into rows.
     */
    rowName: MetricTypes.Dimension<TRow, TRow>;
    /**
     * Displayed in tooltip on hover of the product image
     */
    attributePrimary: MetricTypes.Dimension;
    /**
     * Displayed in tooltip on hover of the product image
     */
    attributeSecondary: MetricTypes.Dimension;
    imageURL: MetricTypes.Dimension;
    measures: MetricTypes.Measures<TTimebox>;
}

/**
 * Data required to display an element in the footer ticker.
 */
export interface TickerItem<TTimebox extends string, TColumn extends string> {
    /**
     * Used to group the sequence of ticker elements.
     */
    tickerItemParent: MetricTypes.Dimension;
    /**
     * Characteristic for ticker element.
     */
    tickerItem: MetricTypes.Dimension;
    columnName: MetricTypes.Dimension<TColumn, TColumn>;
    measures: MetricTypes.Measures<TTimebox>;
}

export type DataValue<
    TTimebox extends string,
    TColumn extends string,
    TRow extends string
> = Tile<TTimebox, TColumn>[] | ChartBreakdownItem<TTimebox, TColumn>[] | TickerItem<TTimebox, TColumn>[] | ProductsItem<TTimebox, TColumn, TRow>[];

export type DataItem<
    TTimebox extends string,
    TColumn extends string,
    TRow extends string
> =
    | ChartBreakdownItem<TTimebox, TColumn>
    | Tile<TTimebox, TColumn>
    | ChartBreakdownItem<TTimebox, TColumn>
    | TickerItem<TTimebox, TColumn>
    | ProductsItem<TTimebox, TColumn, TRow>;
