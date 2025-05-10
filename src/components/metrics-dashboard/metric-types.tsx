import { ImgSrc } from "../../types";

export type Scaling = 1 | 1000 | 1000000;
export type Decimals = 0 | 1 | 2 | 3 | 4;
export type ComponentType = "bar-chart" | "items" | "tiles" | "ticker";

export interface Dimension<T extends string = string, TText extends string = string> {
    key: T;
    text: TText;
    shortText?: string;
}

export interface Measures<TSequence extends string> {
    primaryMeasure: Measure<TSequence>;
    /**
     * Difference from a reference measure value.
     */
    primaryMeasureDelta: Measure<TSequence>;
    secondaryMeasure?: Measure<TSequence>;
}

export interface Measure<TSequence extends string> extends MeasureOptions {
    valueBySequence: ValueBySequence<TSequence>;
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

export type ValueBySequence<T extends string> = {
    [key in T]: number;
}

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

export interface Header<TCategory extends string = string> {
    /**
     * Will be used for breadcrumbs and player sequence name
     */
    category: string;
    sequence: string;
    titlePrimary: string;
    titlePrimaryShort?: string;
    titleSecondary: string;
    titleSecondaryShort?: string;
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

// TODO: Delete
/**
 * @example YTD -> Column Name 1 -> tiles -> Data
 * @example MTD -> Column Name 1 -> bar-charts -> Realms Bar Chart Data
 */
export type StateDataMap<TCategory extends string> = {
    slides: SlidesStateData<TCategory>;
    ticker?: TickerStateData;
};

export type StateDataMapMobile<TSequence extends string, TColumn extends string> = Map<
    TSequence,
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

export interface ChartMobile {
    characteristicName: string;
    data: Datum[];
}

export type SlidesStateData<TCategory extends string> = Map<string, SlideData<TCategory>>;

export type SlideData<TCategory extends string> = SlideDataItem<TCategory>[];

export interface SlideDataItem<TCategory extends string> {
    header: Header<TCategory>;
    data: Map<string, Item>;
}

/**
 * Keys of the map are the main sections of the data, for example periodic value such as: YTD, QTD.
 * Values are further mappings for sub sections.
 */
export type TickerStateData = Map<string, TickerData>; 

export interface TickerDatum extends Omit<Datum, 'primary' | 'primaryFormatted'> {
    primary?: number;
    primaryFormatted?: string;
};
/**
 * Keys of the map are sub sections of main sections, for example a region value
 */
export type TickerData = Map<string,TickerDatum[]>;
