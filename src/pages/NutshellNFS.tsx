import React from "react";
import { Layout } from "../layouts/Layout";
import { NavbarTitle } from "../layouts/NavbarTitle";
import { ImagePreloadWrapper } from "../components/nfs/ImagePreloadWrapper";
import { SlideShow } from "../components/nfs/SlideShow";
import { NfsSlideshow } from "../slideshows/nfs/nfs-slideshow";

interface Props {
    slideshow: NfsSlideshow;
}

export const NutshellNFS: React.FC<Props> = ({ slideshow }) => {
    return (
        <Layout
            slideshow={slideshow}
            header={<NavbarTitle title={slideshow.name} titleShort={slideshow.shortName} backIcon />}
        >
            <ImagePreloadWrapper>
                <SlideShow slideshow={slideshow} />
            </ImagePreloadWrapper>
        </Layout>
    );
};
