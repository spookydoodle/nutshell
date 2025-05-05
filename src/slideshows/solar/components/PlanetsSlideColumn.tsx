import React from "react";
import { Slideshow } from "../../../logic/slideshow/slideshow";
import { Column } from "../../../components/metrics-dashboard/Column";
import { ImgTiles } from "../../../components/metrics-dashboard/ImgTiles";
import * as MetricTypes from "../../../components/metrics-dashboard/metric-types";
import * as Hooks from '../../../hooks';
import * as SolarTypes from "../solar-types";

interface Props {
    slideshow: Slideshow<SolarTypes.SolarData>;
    data: SolarTypes.SolarData;
    column: SolarTypes.Planet;
}

export const PlanetsSlideColumn: React.FC<Props> = ({ slideshow, data, column }) => {
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);

    const tileData = React.useMemo(
        (): MetricTypes.Datum => ({
            name: column,
            primary: 1,
            primaryFormatted: data.planets[column].fact,
        }),
        [column, data.planets]
    );

    const planetData = React.useMemo(
        (): MetricTypes.Datum[] => data.planets[column].posts
            .map(({ name, description, img, link }) => ({
                name: name,
                description: description,
                img: { src: img },
                link: link,
                primary: 0,
                primaryFormatted: "",
            })),
        [data.planets, column]
    );

    return (
        <Column
            animationsInitialized={animationsInitialized}
            name={column}
            tileData={tileData}
            component={<ImgTiles data={planetData} />}
        />
    );
};
