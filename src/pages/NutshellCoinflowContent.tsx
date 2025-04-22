import React from "react";
import { Theme, useMediaQuery } from '@mui/material';
import { Slideshow } from "../components/metrics-dashboard/Slideshow";
import { Mobile } from "../components/metrics-dashboard/mobile/Mobile";
import { CoinflowSlideshow } from "../slideshows/coinflow/coinflow-slideshow";
import * as MetricTypes from "../components/metrics-dashboard/types";

interface Props {
    slideshow: CoinflowSlideshow;
    data: MetricTypes.SlidesStateData;
}

export const NutshellCoinflowContent: React.FC<Props> = ({ slideshow, data }) => {
    const isOnlyXs = useMediaQuery((theme: Theme) => theme.breakpoints.only('xs'));

    return !isOnlyXs ? (
        <Slideshow
            slideshow={slideshow}
            data={data}
            primaryMeasureName={slideshow.data.primaryMeasureName}
        />
    ) : (
        <Mobile data={slideshow.data} primaryMeasureName={slideshow.data.primaryMeasureName} />
    );
};
