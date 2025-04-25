import React from "react";
import { SlideshowSolar } from "../components/metrics-dashboard/SlideshowSolar";
import { Slideshow } from "../logic/slideshow/slideshow";
import * as Hooks from '../hooks';
import * as MetricTypes from "../components/metrics-dashboard/types";

interface Props {
    slideshow: Slideshow<MetricTypes.StateDataMap>;
}

export const NutshellSolar: React.FC<Props> = ({ slideshow }) => {
    // Delay the transitions 5 seconds, when all CSS transitions are finished
    const [play, setPlay] = Hooks.useSubjectState(slideshow.play$);

    const selectedData = slideshow.data;
    const slidesData = selectedData.slides;

    return (
        <SlideshowSolar slideshow={slideshow} data={slidesData} />
    );
};
