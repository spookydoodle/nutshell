import React from "react";
import { Layout } from "../layouts/Layout";
import { NavbarTitle } from "../layouts/NavbarTitle";
import { CoinflowSlideshow } from "../slideshows/coinflow/coinflow-slideshow";
import { NutshellPageContent } from "./NutshellPageContent";

interface Props {
    slideshow: CoinflowSlideshow;
}

export const NutshellPage: React.FC<Props> = ({ slideshow }) => {
    React.useEffect(() => {
        slideshow.start(5000);

        return () => {
            slideshow.stop();
        };
    }, []);

    return (
        <Layout
            slideshow={slideshow}
            // TODO: use same header for mobile
            header={<NavbarTitle title={slideshow.name} titleShort={slideshow.shortName} backIcon hidden="smDown" />}
        >
            <NutshellPageContent slideshow={slideshow} />
        </Layout>
    );
};
