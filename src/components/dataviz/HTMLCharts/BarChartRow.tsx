import { BarChartRowAbsDelta, BarProps } from "./BarChartRowAbsDelta";
import { BarChartRowAbsDeltaMulti } from "./BarChartRowAbsDeltaMulti";
import { BarChartRowDeltaAbs } from "./BarChartRowDeltaAbs";

interface Props {
    type: "delta-abs" | "abs-delta" | "abs-delta-multi";
}

export const BarChartRow: React.FC<Props & BarProps> = ({ type, ...props }) => {
    switch (type) {
        case 'abs-delta': return <BarChartRowAbsDelta {...props} />;
        case 'delta-abs': return <BarChartRowDeltaAbs {...props} />;
        case 'abs-delta-multi': return <BarChartRowAbsDeltaMulti {...props} />;
    }
};
