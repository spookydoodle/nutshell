import React from "react";
import { Theme, useMediaQuery } from '@mui/material';
import { SolarSlideshow } from "../solar-slideshow";
import { Slideshow } from "../../../logic/slideshow/slideshow";
import { Column } from "../../../components/metrics-dashboard/Column";
import * as Hooks from '../../../hooks';
import * as SolarTypes from "../solar-types";

interface Props {
    slideshow: Slideshow<SolarTypes.SolarData>;
    data: SolarTypes.SolarData;
}

export const PlanetsSlide: React.FC<Props> = ({ slideshow, data }) => {
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [slideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const isLgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

    const columnsToRender = React.useMemo(
        () => SolarSlideshow.getPlanetsColumnsToRender(slideIndex, { isLgUp }),
        [slideIndex, isLgUp]
    );

    return (
        columnsToRender.map((column, i) => {
            const planet = data.planets[column as SolarTypes.Planet];
            return (
                <Column
                    key={column}
                    animationsInitialized={animationsInitialized}
                    name={column}
                    tileData={{
                        name: column,
                        primary: i + 1,
                        primaryFormatted: planet.fact,
                    }}
                    component={<></>}
                />
            );
        })
    );
};
