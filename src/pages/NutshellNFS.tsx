import React from "react";
import { NutshellLayout } from "../layouts/Nutshell";
import { TitleLogoBar } from "../layouts/TitleLogoBar";
import { ImagePreloadWrapper } from "../components/nfs/ImagePreloadWrapper";
import { SlideShow } from "../components/nfs/SlideShow";
import { NfsSlideshow } from "../slideshow/nfs/nfs-slideshow";

interface Props {
    slideshow: NfsSlideshow;
}

export const NutshellNFS: React.FC<Props> = ({ slideshow }) => {
    return (
        <NutshellLayout
            slideshow={slideshow}
            header={<TitleLogoBar title='_NEED_FOR_NUTSHELL' titleShort='_NFS_NUTSHELL' backIcon />}
        >
            <ImagePreloadWrapper>
                <SlideShow slideshow={slideshow} />
            </ImagePreloadWrapper>
        </NutshellLayout>
    );
};
