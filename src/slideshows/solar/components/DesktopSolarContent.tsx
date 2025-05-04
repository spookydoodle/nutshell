import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Theme, useMediaQuery } from '@mui/material';
import { Slideshow } from "../../../logic/slideshow/slideshow";
import { Column } from "../../../components/metrics-dashboard/Column";
import { BarChart } from "../../../components/dataviz/HTMLCharts/BarChart";
import { ImgTiles } from "../../../components/metrics-dashboard/ImgTiles";
import { NavigationBar } from "../../../components/metrics-dashboard/navigation-bar/NavigationBar";
import * as MetricTypes from "../../../components/metrics-dashboard/metric-types";
import * as Hooks from '../../../hooks';
import * as SolarTypes from "../solar-types";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        chartContainer: {
            height: "100%",
            overflow: "hidden"
        }
    })
);

interface Props {
    slideshow: Slideshow<MetricTypes.StateDataMap<SolarTypes.Category>>;
    data: MetricTypes.StateDataMap<SolarTypes.Category>;
}

export const DesktopSolarContent: React.FC<Props> = ({ slideshow, data }) => {
    const classes = useStyles();
    const isOnlyXs = useMediaQuery((theme: Theme) => theme.breakpoints.only('xs'));
    const appId = Hooks.useAppId();
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [slideIndex, setSlideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const [play] = Hooks.useSubjectState(slideshow.play$);
    const [duration] = Hooks.useSubjectState(slideshow.duration$);
    const slidesData = data.slides
    const dataKeys = [...slidesData.keys()];
    const dataValues = [...slidesData.values()];

    const slides = dataValues.flat(1);
    const sequences = dataKeys;

    const getMaxRows = (_i: number) =>
        Math.max(
            ...[...slides[slideIndex].data.values()]
                .map((s) => [...s.main.values()].map((e) => e.data.length))
                .flat(2)
        );

    const totalLen = slides.length;
    const seqLen = totalLen / 2; // TODO: Repair this to get the seqLen of current time box

    const getComponents = (name: string) =>
        slides.map((slide, ind) => (
            <>
                {[...(slide.data.get(name)?.main.entries() || [])].map(
                    ([key, val], i) =>
                        val.type === "bar-chart" ? (
                            <Grid
                                key={`chart-${name}-${key}-${i}`}
                                container
                                justifyContent="center"
                                alignItems="center"
                                className={classes.chartContainer}
                            >
                                <BarChart
                                    variant="scroll"
                                    // variant="fade"
                                    type="abs-delta"
                                    rankColor="primary"
                                    labelSize="sm"
                                    play={play}
                                    scrollId={`${appId}-${name.replace(" ", "-").toLowerCase()}`}
                                    slideDuration={duration}
                                    data={
                                        val.data.map((row) => ({
                                            category: row.name,
                                            value: row.primary || 0,
                                            valueFormatted: row.primaryFormatted,
                                            delta: row.primaryDelta,
                                            deltaFormatted: row.primaryDeltaFormatted,
                                            isDeltaGood: row.primaryIsGood,
                                            isDeltaBad: row.primaryIsBad,
                                        })) || []
                                    }
                                    maxRows={getMaxRows(slideIndex)}
                                />
                            </Grid>
                        ) : val.type === "items" && val.data.length > 0 ? (
                            <ImgTiles key={`items-${name}-${ind}-${i}`} data={val.data} />
                        ) : undefined
                )}
            </>
        ));

    const handleSequenceItemClick = React.useCallback(
        (_name: string, index: number) => {
            setSlideIndex(index === 0 ? 0 : 6); // TODO: Calculate
        },
        []
    );

    return (
        <>
            <NavigationBar
                header={slides[slideIndex].header}
                pauseAnimations={animationsInitialized}
                sequenceItems={sequences}
                activeSequenceIndex={sequences.findIndex((s) => s === slides[slideIndex].header.sequence)}
                onSequenceItemClick={handleSequenceItemClick}
            />
            {[...slides[slideIndex].data.entries()].map(([name, value], i) => !(i > 0 && isOnlyXs) ? (
                <Column
                    animationsInitialized={animationsInitialized}
                    name={name}
                    tileData={value.tile} // TODO: consider changing to Transitions and passing components
                    component={getComponents(name)[slideIndex]}
                />
            ) : null)}
        </>
    );
};
