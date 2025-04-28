import { SmallScreenMessage } from "../../../components/navigation/SmallScreenMessage";
import { NutshellData } from "../nfs-types";
import { SmallScreenComponentProps } from "../../../logic/slideshow/slideshow";
import * as Hooks from '../../../hooks';

export const SmallScreenMessageNfs: React.FC<SmallScreenComponentProps<NutshellData>> = ({ slideshow }) => {
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);

    return <SmallScreenMessage variant="NFS" animationsInitialized={animationsInitialized} />
};
