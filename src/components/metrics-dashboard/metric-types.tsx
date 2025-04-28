export interface Dimension {
    key: string;
    text: string;
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

export interface Data<TTimebox extends string = string> {
    /**
     * Name of the primary measure to be displayed in top left title of the dashboard.
     */
    primaryMeasureName: string;
    /**
     * Defines data to display at all times in tile components above dynamic content, such as charts or products.
     */
    tiles: Tile<TTimebox>[];
    /**
     * Defines data to display in horizontal bar charts. 
     * Each element will be displayed on a separate slide.
     */
    charts: ChartData<TTimebox>[]
    /**
     * Defines data to display in the products section. Products will be grouped on each slide by `slideName`.
     */
    products: ProductsItem<TTimebox>[];
    /**
     * Defines data to display in the footer ticker component.
     */
    ticker: TickerItem<TTimebox>[];
}

export interface ChartData<TTimebox extends string> {
    characteristicName: string;
    characteristicNameShort: string;
    data: ChartBreakdownItem<TTimebox>[];
}

export interface Chart {
    characteristicName: string;
    data: Datum[];
}

/**
 * Data required to display a KPI in a tile component.
 */
export interface Tile<TTimebox extends string> {
    columnName: Dimension;
    measures: Measures<TTimebox>;
}

/**
 * Data required to display an element in the footer ticker.
 */
export interface TickerItem<TTimebox extends string> {
    /**
     * Used to group the sequence of ticker elements.
     */
    tickerItemParent: Dimension;
    /**
     * Characteristic for ticker element.
     */
    tickerItem: Dimension;
    columnName: Dimension;
    measures: Measures<TTimebox>;
}

/**
 * Data required to render a single bar in a horizontal bar chart.
 */
export interface ChartBreakdownItem<TTimebox extends string> {
    columnName: Dimension;
    characteristicValue: Dimension;
    measures: Measures<TTimebox>;
}

/**
 * Data required to show case a single product.
 */
export interface ProductsItem<TTimebox extends string> {
    /**
     * Creates a slide per each
     */
    slideName: Dimension;
    /**
     * Name of the column by which to split the dashboard in columns.
     */
    columnName: Dimension;
    /**
     * Splits product section into two rows.
     */
    rowName: Dimension;
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

export type DataValue<TTimebox extends string> = Tile<TTimebox>[] | ChartBreakdownItem<TTimebox>[] | TickerItem<TTimebox>[] | ProductsItem<TTimebox>[];

export type DataItem<TTimebox extends string> =
    | ChartBreakdownItem<TTimebox>
    | Tile<TTimebox>
    | ChartBreakdownItem<TTimebox>
    | TickerItem<TTimebox>
    | ProductsItem<TTimebox>;

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

export interface ImgSrc {
    src: string;
    fallback?: string;
}

export type StateDataArr = Array<{
    name: string; // FF
    value: StateDataItem;
}>;

type StateDataItem = Array<{
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

type Category = "Realms" | "Sectors" | "Products";

type ComponentType = "bar-chart" | "items" | "tiles" | "ticker";

// Example: YTD -> Column Name 1 -> tiles -> Data
// Example: YTD -> Column Name 1 -> bar-charts -> Realms Bar Chart Data
type StateDataMap = {
    slides: SlidesStateData;
    ticker?: TickerStateData;
};

type StateDataMapMobile = Map<
    string, // timebox
    Map<
        string,
        {
            tile: Datum;
            charts: Chart[];
            products: Items;
        }
    >
>;

type SlidesStateData = Map<string, SlideData>;

type SlideData = Array<SlideDataItem>;
interface SlideDataItem {
    headers: Header;
    data: Map<string, Item>;
}

// TODO: rename
interface Item {
    tile: Datum; // Could be also Values
    main: MainDataItem;
}

type Items = Array<Item>;

type MainDataItem = Map<
    string,
    {
        type: ComponentType;
        name: string;
        data: Datum[];
    }
>;

interface Header {
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
type TickerStateData = Map<string, TickerData>; 

/**
 * Keys of the map are sub sections of main sections, for example a region value
 */
type TickerData = Map<string, Datum[]>;

interface StateType<TTimebox extends string> {
    whoAmIRequestDone: boolean;
    data?: Data<TTimebox>;
}

interface DataItemType {
    title: string;
    src: string;
}

interface ActionType {
    name: string;
    path: string;
}

interface CommentType {
    _id: string;
    author: string;
    created: Date;
    body: string;
}

interface ValidationErrorType {
    error: string;
    touched: boolean;
}

interface PostLayoutType {
    id: string;
    title: string;
    subtitle: string;
    body?: string;
    content?: React.ReactElement;
    additional?: React.ReactNode;
}

interface PostType {
    id: string;
    title: string;
    subtitle: string;
    body?: string;
    content?: React.ReactNode;
}

interface FeedLayoutType {
    children?: React.ReactNode;
    contentLeft: React.ReactNode;
    contentRight: React.ReactNode;
}

interface LandingType {
    title: string;
    subtitle: string;
    button: { name: string; path: string };
}

type Edge = "top" | "bottom" | "left" | "right";

export type {
    Category,
    StateDataMap,
    StateDataMapMobile,
    StateType,
    ComponentType,
    DataItemType,
    ActionType,
    CommentType,
    ValidationErrorType,
    PostLayoutType,
    PostType,
    FeedLayoutType,
    LandingType,
    StateDataItem,
    TickerStateData,
    TickerData,
    SlidesStateData,
    SlideData,
    SlideDataItem,
    Item,
    Items,
    MainDataItem,
    Header,
    Edge,
};
