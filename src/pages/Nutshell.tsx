import React from "react";
import { Layout } from "../layouts/Layout";
import { NavbarTitle } from "../layouts/NavbarTitle";
import { CoinflowSlideshow } from "../slideshows/coinflow/coinflow-slideshow";
import { NutshellCoinflowContent } from "./NutshellContent";

interface Props {
    slideshow: CoinflowSlideshow;
}

export const Nutshell: React.FC<Props> = ({ slideshow }) => {
    React.useEffect(() => {
        slideshow.start(5000);

        return () => {
            slideshow.stop();
        };
    }, []);

    return (
        <Layout
            slideshow={slideshow}
            header={<NavbarTitle title={slideshow.name} titleShort={slideshow.shortName} backIcon hidden="mdDown" />}
        >
            <NutshellCoinflowContent slideshow={slideshow} />
        </Layout>
    );
};
