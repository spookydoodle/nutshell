import React from "react";
import { Theme, useMediaQuery } from '@mui/material';
import { Slideshow } from "../../../logic/slideshow/slideshow";
import { NavigationBar } from "../../../components/metrics-dashboard/navigation-bar/NavigationBar";
import * as Hooks from '../../../hooks';
import * as SolarTypes from "../solar-types";
import { SolarSlideshow } from "../solar-slideshow";
import { MetricsSlide } from "./MetricsSlide";
import { PlanetsSlide } from "./PlanetsSlide";

interface Props {
    slideshow: Slideshow<SolarTypes.SolarData>;
    data: SolarTypes.SolarData;
}

export const SolarSlide: React.FC<Props> = ({ slideshow, data }) => {
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [slideIndex, setSlideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const isLgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

    const {
        metricsSlidesCount,
        category,
        activeSequence,
        activeSequenceIndex,
        titlePrimary,
        titlePrimaryShort,
        titleSecondary,
        titleSecondaryShort
    } = React.useMemo(
        () => SolarSlideshow.getSlideStats(slideIndex, { isLgUp }),
        [slideIndex, isLgUp]
    );

    const handleSequenceItemClick = React.useCallback(
        (name: SolarTypes.Category, _index: number) => {
            setSlideIndex(name === 'Metrics' ? 0 : metricsSlidesCount);
        },
        [isLgUp, metricsSlidesCount]
    );

    return (
        <>
            <NavigationBar
                header={{
                    category,
                    sequence: activeSequence,
                    titlePrimary,
                    titlePrimaryShort,
                    titleSecondary,
                    titleSecondaryShort
                }}
                pauseAnimations={animationsInitialized}
                sequenceItems={SolarSlideshow.sequenceItems}
                activeSequenceIndex={activeSequenceIndex}
                onSequenceItemClick={handleSequenceItemClick}
            />
            {slideIndex < metricsSlidesCount
                ? <MetricsSlide slideshow={slideshow} data={data} />
                : <PlanetsSlide slideshow={slideshow} data={data} />}
        </>
    );
};
