export interface Size {
    width: number;
    height: number;
}

export interface Position {
    top: number;
    bottom: number;
    right: number;
    left: number;
}

export interface DataRow {
    category: string;
    value: number;
}

export interface BarChart {
    data: Array<{ category: string; value: number }>;
    size: Size;
    resize?: "fixed" | "responsive";
    color?: string;
}

export interface BarChartDataItem {
    category: string;
    subcategory?: string;
    value: number;
    valueFormatted?: string;
    delta?: number;
    deltaFormatted?: string;
    isDeltaGood?: boolean;
    isDeltaBad?: boolean;
    filler?: boolean;
    subitems?: BarChartData;
}

export type BarChartData = Array<BarChartDataItem>;

export type BarChartType = "delta-abs" | "abs-delta" | "abs-delta-multi";
