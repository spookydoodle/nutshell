import React, { useState, useEffect } from "react";
import { Hidden } from '@mui/material';
import { NutshellLayout } from "../layouts/Nutshell";
import { TitleLogoBar } from "../layouts/Header";
import { Slideshow } from "../components/metrics-dashboard/Slideshow";
import { Mobile } from "../components/metrics-dashboard/mobile/Mobile";
import * as Utils from "../utils";
import data from "../data/nutshell-data";

const newData = Utils.Metrics.convertToMap(data);

export const NutshellDashboard: React.FC = () => {
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
            animationsInitialized={animationsInitialized}
            header={
                <Hidden smDown>
                    <TitleLogoBar title='_NUTSHELL_DASHBOARD' titleShort='_NUTSHELL' backIcon={true} />
                </Hidden>
            }
        >
            {slidesData && (
                <>
                    <Hidden smDown>
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
