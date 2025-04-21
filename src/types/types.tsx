export type Mode = "light" | "dark" | undefined;

export type Device = 'desktop' | 'mobile';

export interface Dimension<T = string> {
    key: T;
    text: string;
    shortText?: string;
}

export interface Measure {
    value: number;
    unit?: string;
}

export interface ImgSrc {
    src: string;
    fallback?: string;
}

export interface Value {
    name: string;
    /**
     * Provide already with units, prefix, suffix, e.g. '$ 234 K'
     */
    primary?: number;
    /**
     * Provide already with units, prefix, suffix, e.g. '$ 234 K'
     */
    primaryFormatted?: string;
    /**
     * Provide already with prefix and suffix, e.g. '+10.2% VS LY'
     */
    primaryDelta?: number;
    /**
     * Provide already with prefix and suffix, e.g. '+10.2% VS LY'
     */
    primaryDeltaFormatted?: string;
    primaryIsGood?: boolean;
    primaryIsBad?: boolean;
    /**
     *  Provide already with units, prefix, suffix, e.g. '$ 234 K'
     */
    secondary?: number;
    /**
     * Provide already with units, prefix, suffix, e.g. '$ 234 K'
     */
    secondaryFormatted?: string;
    /**
     * Provide already with prefix and suffix, e.g. '+10.2% VS LY'
     */
    secondaryDelta?: number;
    /**
     * Provide already with prefix and suffix, e.g. '+10.2% VS LY'
     */
    secondaryDeltaFormatted?: string;
    secondaryIsGood?: boolean;
    secondaryIsBad?: boolean;
    attributePrimary?: Dimension;
    attributeSecondary?: Dimension;
    img?: ImgSrc;
    description?: string;
    tooltip?: string;
    link?: string;
}

export type StateDataArr = Array<{
    name: string;
    value: StateDataItem;
}>;

export type StateDataItem = Array<{
    name: string; // e.g.: Need For Speed section (could be covers/cars)
    value: Array<{
        name: string; // Content panels: 90s, 00s, 10s
        value: Array<{
            name: string; // tiles / bar-charts / items
            value: Array<{
                name: string; // some categories
                value: Array<Value>; // name: Hot Pursuit / Mercuryt, value: $ 100 K, delta: "+10% VS previous title / 1.2 x Earth"
            }>;
        }>;
    }>;
}>;

export type ComponentType = "bar-chart" | "items" | "tiles" | "ticker";

// Example: NFS (Need for Speed) -> Covers -> 90's -> tiles -> Values
// Example: NFS (Need for Speed) -> Cars -> 00's-> tiles -> Values
// Example: SS (solar system) -> Metrics -> Mass -> bar-charts -> Planets Bar Chart Values
export type StateDataMap = Map<
    string, // app-name: solar-system / need-for-nutshell
    {
        slides?: SlidesStateData;
        ticker?: TickerStateData;
    }
>;

export type SlidesStateData = Map<string, SlideData>; // Sequence name => data

export type SlideData = Array<SlideDataItem>;
export interface SlideDataItem {
    headers: Header;
    data: Map<
        string, // 90's / 00's / 10's or Mass / Density / Diameter
        {
            tile: Value; // Could be also Array<Value>
            main: Map<
                string,
                {
                    type: ComponentType;
                    data: DataItem;
                }
            >;
        }
    >;
}

export interface Header {
    // for each slide
    category: string; // Chart / Images -> for BreadCrumbs component (middle top)
    sequence: string; // For Player component, above the slider
    titlePrimary: string;
    titlePrimaryShort: string;
    titleSecondary: string;
    titleSecondaryShort: string;
}

export type TickerStateData = Map<string, TickerData>; // sequence => planet => metric => Value
export type TickerData = Map<string, DataItem>;
export type DataItem = Array<Value>;

export interface State {
    appId: string;
}

export interface DataItemType {
    title: string;
    src: string;
}

export interface Action {
    name: string;
    path: string;
}

export interface Comment {
    _id: string;
    author: string;
    created: Date;
    body: string;
}

export interface ValidationError {
    error: string;
    touched: boolean;
}

export interface PostLayout {
    id: string;
    title: string;
    subtitle: string;
    body?: string;
    content?: React.ReactNode;
    additional?: React.ReactNode;
}

export interface Post {
    id: string;
    title: string;
    subtitle: string;
    body?: string;
    content?: React.ReactNode;
}

export interface FeedLayout {
    children?: React.ReactNode;
    contentLeft: React.ReactNode;
    contentRight: React.ReactNode;
}

export interface Landing {
    title: string;
    subtitle: string;
    button: { name: string; path: string };
}

export type Scaling = 1 | 1000 | 1000000;
export type Decimals = 0 | 1 | 2 | 3 | 4;

export type Metric =
    | "Mass"
    | "Diameter"
    | "Density"
    | "Gravity"
    | "Escape Velocity"
    | "Rotation Period"
    | "Length of Day"
    | "Distance from Sun"
    | "Perihelion"
    | "Aphelion"
    | "Orbital Period"
    | "Orbital Velocity"
    | "Orbital Inclination"
    | "Orbital Eccentricity"
    | "Obliquity to Orbit"
    | "Mean Temperature"
    | "Surface Pressure"
    | "Number of Moons";
// | "Ring System"
// | "Global Magnetic Field";

export type TransitionVariant =
    | "none"
    | "fade-in"
    | "slide-in"
    | "fade-in-slide-out"
    | "swipe-cube-to-left"
    | "swipe-cube-to-right";

