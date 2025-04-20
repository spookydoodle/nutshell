import React, { useState, useEffect } from "react";
import { Hidden } from '@mui/material';
import { NutshellLayout } from "../layouts/Nutshell";
import { TitleLogoBar } from "../layouts/TitleLogoBar";
import { Slideshow } from "../components/metrics-dashboard/Slideshow";
import { Mobile } from "../components/metrics-dashboard/mobile/Mobile";
import * as Utils from "../utils";
import data from "../data/nutshell-data";
import { Slideshow as SlideshowType } from "../slideshow/slideshow";

const newData = Utils.Metrics.convertToMap(data);

interface Props {
    slideshow: SlideshowType;
}

export const NutshellDashboard: React.FC<Props> = ({ slideshow }) => {
    const [play, setPlay] = useState(false);
    const [animationsInitialized, setAnimationsInitialized] = useState(false);

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
        <NutshellLayout
            slideshow={slideshow}
            animationsInitialized={animationsInitialized}
            header={
                <Hidden mdDown>
                    <TitleLogoBar title='_NUTSHELL_DASHBOARD' titleShort='_NUTSHELL' backIcon />
                </Hidden>
            }
        >
            {slidesData && (
                <>
                    <Hidden mdDown>
                        <Slideshow
                            animationsInitialized={animationsInitialized}
                            play={play}
                            setPlay={setPlay}
                            data={slidesData}
                            tickerData={tickerData}
                            setOpenDialog={setOpenDialog}
                            primaryMeasureName={data.primaryMeasureName}
                        />
                    </Hidden>

                    <Hidden mdUp>
                        <Mobile data={data} primaryMeasureName={data.primaryMeasureName} />
                    </Hidden>
                </>
            )}
        </NutshellLayout>
    );
};
