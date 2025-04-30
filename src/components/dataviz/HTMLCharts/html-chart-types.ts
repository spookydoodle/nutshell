export interface BarProps {
    i: number;
    category: string;
    filler: boolean;
    value?: number;
    valueFormatted?: string;
    delta?: number;
    deltaFormatted?: string;
    isDeltaGood?: boolean;
    isDeltaBad?: boolean;
    max: number;
    min: number;
    rankColor?: "primary" | "secondary";
    labelSize?: "sm" | "md";
    absPosition?: "behind-bar" | "align-column";
}
