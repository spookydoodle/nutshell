import { SmallScreenMessage } from "../navigation/SmallScreenMessage";
import { SmallScreenComponentProps } from "../../logic/slideshow/slideshow";
import * as Hooks from '../../hooks';

export const SmallScreenMessageNfs: React.FC<SmallScreenComponentProps> = ({ slideshow }) => {
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);

    return <SmallScreenMessage variant="NFS" animationsInitialized={animationsInitialized} />
};
