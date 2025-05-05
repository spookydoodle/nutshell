import React from "react";
import { Theme, useMediaQuery } from '@mui/material';
import { SolarSlideshow } from "../solar-slideshow";
import { Slideshow } from "../../../logic/slideshow/slideshow";
import { MetricsColumn } from "./MetricsColumn";
import * as Hooks from '../../../hooks';
import * as SolarTypes from "../solar-types";

interface Props {
    slideshow: Slideshow<SolarTypes.SolarData>;
    data: SolarTypes.SolarData;
}

export const MetricsSlide: React.FC<Props> = ({ slideshow, data }) => {
    const [slideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const isLgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

    const columnsToRender = React.useMemo(
        () => SolarSlideshow.getMetricsColumnsToRender(slideIndex, { isLgUp }),
        [slideIndex, isLgUp]
    );

    const maxRows = React.useMemo(
        () => columnsToRender.reduce<number>(
            (acc, val) => Math.max(acc, Object.keys(data.metrics[val].data).length),
            0,
        ),
        [columnsToRender, data.metrics]
    );

    return (
        columnsToRender.map((column) => (
            <MetricsColumn
                slideshow={slideshow}
                data={data}
                column={column}
                maxRows={maxRows}
                property={data.metrics[column]}
            />
        ))
    );
};
