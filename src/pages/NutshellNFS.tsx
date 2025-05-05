import React from "react";
import { ImagePreloadWrapper } from "../components/nfs/ImagePreloadWrapper";
import { SlideShow } from "../components/nfs/SlideShow";
import { NutshellData } from "../slideshows/nfs/nfs-types";
import { Slideshow } from "../logic/slideshow/slideshow";

interface Props {
    slideshow: Slideshow<NutshellData>;
    data: NutshellData;
}

export const NutshellNFS: React.FC<Props> = ({ slideshow, data }) => {
    return (
        <ImagePreloadWrapper>
            <SlideShow slideshow={slideshow} data={data} />
        </ImagePreloadWrapper>
    );
};
