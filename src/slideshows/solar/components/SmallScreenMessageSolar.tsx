import { SmallScreenComponentProps } from "../../../logic/slideshow/slideshow";
import { SmallScreenMessage } from "../../../components/navigation/SmallScreenMessage";
import * as MetricTypes from "../../../components/metrics-dashboard/metric-types";
import * as Hooks from '../../../hooks';

export const SmallScreenMessageSolar: React.FC<SmallScreenComponentProps<MetricTypes.StateDataMap>> = ({ slideshow }) => {
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    
    return <SmallScreenMessage variant="Solar" animationsInitialized={animationsInitialized} />
};
