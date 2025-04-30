import { ImgSrc } from "../../types";

export interface Dimension<T extends string = string, TText extends string = string> {
    key: T;
    text: TText;
    shortText?: string;
}

export interface Measures<TTimebox extends string> {
    primaryMeasure: Measure<TTimebox>;
    /**
     * Difference from a reference measure value.
     */
    primaryMeasureDelta: Measure<TTimebox>;
    secondaryMeasure?: Measure<TTimebox>;
}

export interface Measure<TTimebox extends string> extends MeasureOptions {
    valueByTimebox: ValueByTimebox<TTimebox>;
}

export interface MeasureOptions {
    unit?: string;
    /**
     * If true, unit will be displayed as prefix when formatting the value in a user friendly manner. 
     * Defaults to false, which means the unit will be added as a suffix.
     */
    showUnitBefore?: boolean;
    scaling?: Scaling;
    decimals?: Decimals;
    showPlusSign?: boolean;
    suffix?: string;
    prefix?: string;
}

export type ValueByTimebox<T extends string> = {
    [key in T]: number;
}

export type Scaling = 1 | 1000 | 1000000;
export type Decimals = 0 | 1 | 2 | 3 | 4;

export interface ChartData<TCategory extends string, TTimebox extends string, TColumn extends string> {
    category: TCategory;
    data: ChartBreakdownItem<TTimebox, TColumn>[];
}

export interface ChartMobile {
    characteristicName: string;
    data: Datum[];
}

/**
 * Data required to display a KPI in a tile component.
 */
export interface Tile<TTimebox extends string, TColumn extends string> {
    columnName: Dimension<TColumn, TColumn>;
    measures: Measures<TTimebox>;
}

/**
 * Data required to display an element in the footer ticker.
 */
export interface TickerItem<TTimebox extends string, TColumn extends string> {
    /**
     * Used to group the sequence of ticker elements.
     */
    tickerItemParent: Dimension;
    /**
     * Characteristic for ticker element.
     */
    tickerItem: Dimension;
    columnName: Dimension<TColumn, TColumn>;
    measures: Measures<TTimebox>;
}

/**
 * Data required to render a single bar in a horizontal bar chart.
 */
export interface ChartBreakdownItem<TTimebox extends string, TColumn extends string> {
    columnName: Dimension<TColumn, TColumn>;
    characteristicValue: Dimension;
    measures: Measures<TTimebox>;
}

/**
 * Data required to show case a single product.
 */
export interface ProductsItem<TTimebox extends string, TColumn extends string, TRow extends string> {
    /**
     * Creates a slide per each
     */
    slideName: Dimension;
    /**
     * Name of the column by which to split the dashboard in columns.
     */
    columnName: Dimension<TColumn, TColumn>;
    /**
     * Splits product section into rows.
     */
    rowName: Dimension<TRow, TRow>;
    /**
     * Displayed in tooltip on hover of the product image
     */
    attributePrimary: Dimension;
    /**
     * Displayed in tooltip on hover of the product image
     */
    attributeSecondary: Dimension;
    imageURL: Dimension;
    measures: Measures<TTimebox>;
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

export interface Datum {
    key?: string;
    name: string;
    primary: number;
    // TODO: Change to formatFunction: (value: number) => string
    /**
     * Provide already with units, prefix, suffix, e.g. '$ 234 K' 
     */
    primaryFormatted: string;
    primaryDelta?: number;
    /**
     * Provide already with units, prefix, suffix, e.g. '$ 234 K'
     */
    primaryDeltaFormatted?: string;
    /**
     * If `true`, primary value will be colored in green.
     */
    primaryIsGood?: boolean;
    /**
     * If `true`, primary value will be colored in red.
     */
    primaryIsBad?: boolean;
    secondary?: number;
    /**
     * Provide already with units, prefix, suffix, e.g. '$ 234 K'
     */
    secondaryFormatted?: string;
    secondaryDelta?: number;
    /**
     * Provide already with units, prefix, suffix, e.g. '$ 234 K'
     */
    secondaryDeltaFormatted?: string;
    /**
     * If `true`, secondary value will be colored in green.
     */
    secondaryIsGood?: boolean;
    /**
     * If `true`, secondary value will be colored in red.
     */
    secondaryIsBad?: boolean;
    /**
     * Displayed in a toolitp.
     */
    attributePrimary?: Dimension;
    /**
     * Displayed in a toolitp.
     */
    attributeSecondary?: Dimension;
    /**
     * Image source URL.
     */
    img?: ImgSrc;
    /**
     * More detailed breakdown of this datum.
     */
    subitems?: Datum[];
    description?: string;
    tooltip?: string;
    link?: string;
}

export type StateDataArr = {
    name: string; // FF
    value: StateDataItem;
}[];

export type StateDataItem = Array<{
    name: string; // YTD, MTD
    value: Array<{
        name: string; // Colum nName 1, Column Name 2, Column Name 3
        value: Array<{
            name: string; // tiles / bar-charts / items
            value: Array<{
                name: string; // Total / Realms / Sectors / Product Type 1 / Product Type 2
                value: Datum[];
            }>;
        }>;
    }>;
}>;

export type ComponentType = "bar-chart" | "items" | "tiles" | "ticker";

/**
 * @example YTD -> Column Name 1 -> tiles -> Data
 * @example MTD -> Column Name 1 -> bar-charts -> Realms Bar Chart Data
 */
export type StateDataMap = {
    slides: SlidesStateData;
    ticker?: TickerStateData;
};

export type StateDataMapMobile<TTimebox extends string, TColumn extends string> = Map<
    TTimebox,
    StateDataMapItemMobile<TColumn>
>;

export type StateDataMapItemMobile<TColumn extends string> = Map<
    TColumn,
    StateDataItemMobile
>;

export interface StateDataItemMobile {
    tile: Datum;
    charts: ChartMobile[];
    products: Item[];
}

export type SlidesStateData = Map<string, SlideData>;

export type SlideData = SlideDataItem[];

export interface SlideDataItem {
    header: Header;
    data: Map<string, Item>;
}

// TODO: Rename
export interface Item {
    tile: Datum;
    main: MainDataItem;
}

// TODO: Rename
export type MainDataItem = Map<
    string,
    MainDataItemItem
>;

export interface MainDataItemItem {
    type: ComponentType;
    name: string;
    data: Datum[];
}

export interface Header {
    /**
     * Will be used for breadcrumbs and player sequence name
     */
    category: string;
    sequence: string;
    titlePrimary: string;
    titlePrimaryShort: string;
    titleSecondary: string;
    titleSecondaryShort: string;
}

/**
 * Keys of the map are the main sections of the data, for example periodic value such as: YTD, QTD.
 * Values are further mappings for sub sections.
 */
export type TickerStateData = Map<string, TickerData>; 

/**
 * Keys of the map are sub sections of main sections, for example a region value
 */
export type TickerData = Map<string, Datum[]>;
