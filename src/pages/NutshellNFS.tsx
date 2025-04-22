import React from "react";
import { ImagePreloadWrapper } from "../components/nfs/ImagePreloadWrapper";
import { SlideShow } from "../components/nfs/SlideShow";
import { NutshellData } from "../components/nfs/types";
import { Slideshow } from "../logic/slideshow/slideshow";

interface Props {
    slideshow: Slideshow<NutshellData>;
}

export const NutshellNFS: React.FC<Props> = ({ slideshow }) => {
    return (
        <ImagePreloadWrapper>
            <SlideShow slideshow={slideshow} />
        </ImagePreloadWrapper>
    );
};
