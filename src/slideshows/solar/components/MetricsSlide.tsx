import React from "react";
import { Theme, useMediaQuery } from '@mui/material';
import { SolarSlideshow } from "../solar-slideshow";
import { Slideshow } from "../../../logic/slideshow/slideshow";
import { Column } from "../../../components/metrics-dashboard/Column";
import * as Hooks from '../../../hooks';
import * as SolarTypes from "../solar-types"
import * as Utils from "../solar-data-utils";import { formatNumber } from "../../../utils/formats";
;

interface Props {
    slideshow: Slideshow<SolarTypes.SolarData>;
    data: SolarTypes.SolarData;
}

export const MetricsSlide: React.FC<Props> = ({ slideshow, data }) => {
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [slideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const isLgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

    const columnsToRender = React.useMemo(
        () => SolarSlideshow.getMetricsColumnsToRender(slideIndex, { isLgUp }),
        [slideIndex, isLgUp]
    );

    // console.log({ data, animationsInitialized })
    return (
        columnsToRender.map((column) => {
            const property = data.metrics[column as SolarTypes.Property];
            const propertyData = Object.values(data.metrics[column as SolarTypes.Property].data);
            return (
                <Column
                    key={column}
                    animationsInitialized={animationsInitialized}
                    name={column}
                    tileData={{
                        name: column,
                        tooltip: property.definition,
                        primary: Utils.getSum(propertyData),
                        primaryFormatted: `${Utils.getRange(propertyData)} ${property.unit}`,
                        primaryDelta: Utils.getAvg(propertyData),
                        primaryDeltaFormatted: `Avg: ${formatNumber(
                            Utils.getAvg(propertyData),
                            { scaling: 1, decimals: 2 }
                        )} ${property.unit}`,
                    }}
                    component={<></>}
                />
            );
        })
    );
};
