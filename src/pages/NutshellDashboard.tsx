import React, { useState, useEffect } from "react";
import { Hidden } from '@mui/material';
import { Layout } from "../layouts/Layout";
import { NavbarTitle } from "../layouts/NavbarTitle";
import { Slideshow } from "../components/metrics-dashboard/Slideshow";
import { Mobile } from "../components/metrics-dashboard/mobile/Mobile";
import { CoinflowSlideshow } from "../slideshows/coinflow/coinflow-slideshow";
import * as Hooks from "../hooks";
import * as Utils from "../utils";

interface Props {
    slideshow: CoinflowSlideshow;
}

export const NutshellDashboard: React.FC<Props> = ({ slideshow }) => {
    const [play, setPlay] = Hooks.useSubjectState(slideshow.play$);
    const [animationsInitialized, setAnimationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const newData = Utils.Metrics.convertToMap(slideshow.data);

    useEffect(() => {
        if (!animationsInitialized) {
            const timeout = setTimeout(() => {
                setAnimationsInitialized(true);
                setPlay(true);
            }, 5000);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [animationsInitialized]);

    const selectedData = newData;
    const tickerData = selectedData?.ticker;
    const slidesData = selectedData?.slides;

    const [_openDialog, setOpenDialog] = useState(false);

    return (
        <Layout
            slideshow={slideshow}
            header={
                <Hidden mdDown>
                    <NavbarTitle title={slideshow.name} titleShort={slideshow.shortName} backIcon />
                </Hidden>
            }
        >
            {slidesData && (
                <>
                    <Hidden mdDown>
                        <Slideshow
                            slideshow={slideshow}
                            play={play}
                            setPlay={setPlay}
                            data={slidesData}
                            tickerData={tickerData}
                            setOpenDialog={setOpenDialog}
                            primaryMeasureName={slideshow.data.primaryMeasureName}
                        />
                    </Hidden>

                    <Hidden mdUp>
                        <Mobile data={slideshow.data} primaryMeasureName={slideshow.data.primaryMeasureName} />
                    </Hidden>
                </>
            )}
        </Layout>
    );
};
