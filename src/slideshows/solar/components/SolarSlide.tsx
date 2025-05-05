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
    // const slidesData = data.slides
    // const dataKeys = [...slidesData.keys()];
    // const dataValues = [...slidesData.values()];

    // const slides = dataValues.flat(1);
    // const sequences = dataKeys;

    // const getMaxRows = (_i: number) =>
    //     Math.max(
    //         ...[...slides[slideIndex].data.values()]
    //             .map((s) => [...s.main.values()].map((e) => e.data.length))
    //             .flat(2)
    //     );

    // const getComponents = (name: string) =>
    //     slides.map((slide, ind) => (
    //         <>
    //             {[...(slide.data.get(name)?.main.entries() || [])].map(
    //                 ([key, val], i) =>
    //                     val.type === "bar-chart" ? (
    //                         <Grid
    //                             key={`chart-${name}-${key}-${i}`}
    //                             container
    //                             justifyContent="center"
    //                             alignItems="center"
    //                             className={classes.chartContainer}
    //                         >
    //                             <BarChart
    //                                 variant="scroll"
    //                                 // variant="fade"
    //                                 type="abs-delta"
    //                                 rankColor="primary"
    //                                 labelSize="sm"
    //                                 play={play}
    //                                 scrollId={`${appId}-${name.replace(" ", "-").toLowerCase()}`}
    //                                 slideDuration={duration}
    //                                 data={
    //                                     val.data.map((row) => ({
    //                                         category: row.name,
    //                                         value: row.primary || 0,
    //                                         valueFormatted: row.primaryFormatted,
    //                                         delta: row.primaryDelta,
    //                                         deltaFormatted: row.primaryDeltaFormatted,
    //                                         isDeltaGood: row.primaryIsGood,
    //                                         isDeltaBad: row.primaryIsBad,
    //                                     })) || []
    //                                 }
    //                                 maxRows={getMaxRows(slideIndex)}
    //                             />
    //                         </Grid>
    //                     ) : val.type === "items" && val.data.length > 0 ? (
    //                         <ImgTiles key={`items-${name}-${ind}-${i}`} data={val.data} />
    //                     ) : undefined
    //             )}
    //         </>
    //     ));
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
