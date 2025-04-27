import { SmallScreenComponentProps } from "../../logic/slideshow/slideshow";
import { SmallScreenMessage } from "../navigation/SmallScreenMessage";
import * as Hooks from '../../hooks';

export const SmallScreenMessageSolar: React.FC<SmallScreenComponentProps> = ({ slideshow }) => {
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    
    return <SmallScreenMessage variant="Solar" animationsInitialized={animationsInitialized} />
};
