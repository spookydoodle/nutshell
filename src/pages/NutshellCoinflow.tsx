import React from "react";
import { Layout } from "../layouts/Layout";
import { NavbarTitle } from "../layouts/NavbarTitle";
import { CoinflowSlideshow } from "../slideshows/coinflow/coinflow-slideshow";
import { NutshellCoinflowContent } from "./NutshellCoinflowContent";
import * as Utils from "../utils";

interface Props {
    slideshow: CoinflowSlideshow;
}

export const NutshellCoinflow: React.FC<Props> = ({ slideshow }) => {
    React.useEffect(() => {
        slideshow.start(5000);

        return () => {
            slideshow.stop();
        };
    }, []);

    const newData = Utils.Metrics.convertToMap(slideshow.data);
    const selectedData = newData;
    const tickerData = selectedData?.ticker;
    const slidesData = selectedData?.slides;

    return (
        <Layout
            slideshow={slideshow}
            header={<NavbarTitle title={slideshow.name} titleShort={slideshow.shortName} backIcon hidden="mdDown" />}
        >
            {slidesData ? (
                <NutshellCoinflowContent slideshow={slideshow} data={slidesData} tickerData={tickerData} />
            ) : null}
        </Layout>
    );
};
