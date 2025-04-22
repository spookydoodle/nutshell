import React from "react";
import { Theme, useMediaQuery } from '@mui/material';
import { Slideshow } from "../components/metrics-dashboard/Slideshow";
import { Mobile } from "../components/metrics-dashboard/mobile/Mobile";
import { CoinflowSlideshow } from "../slideshows/coinflow/coinflow-slideshow";
import * as MetricTypes from "../components/metrics-dashboard/types";

interface Props {
    slideshow: CoinflowSlideshow;
}

export const NutshellCoinflowContent: React.FC<Props> = ({ slideshow }) => {
    const isOnlyXs = useMediaQuery((theme: Theme) => theme.breakpoints.only('xs'));

    return !isOnlyXs ? (
        <Slideshow
            slideshow={slideshow}
            primaryMeasureName={slideshow.data.primaryMeasureName}
        />
    ) : (
        <Mobile data={slideshow.data} primaryMeasureName={slideshow.data.primaryMeasureName} />
    );
};
