import React from "react";
import { Theme, useMediaQuery } from '@mui/material';
import { SolarSlideshow } from "../solar-slideshow";
import { Slideshow } from "../../../logic/slideshow/slideshow";
import * as Hooks from '../../../hooks';
import * as SolarTypes from "../solar-types";
import { PlanetsSlideColumn } from "./PlanetsSlideColumn";

interface Props {
    slideshow: Slideshow<SolarTypes.SolarData>;
    data: SolarTypes.SolarData;
}

export const PlanetsSlide: React.FC<Props> = ({ slideshow, data }) => {
    const [slideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const isLgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

    const columnsToRender = React.useMemo(
        () => SolarSlideshow.getPlanetsColumnsToRender(slideIndex, { isLgUp }),
        [slideIndex, isLgUp]
    );

    return columnsToRender.map((column) => (
        <PlanetsSlideColumn key={column} slideshow={slideshow} data={data} column={column} />
    ))
};
