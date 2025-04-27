import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Theme, useMediaQuery } from '@mui/material';
import { NavTitles } from "./solar/NavTitles";
import { Content } from "./Content";
import { BarChart } from "../dataviz/HTMLCharts/BarChart";
import { ImgTiles } from "./ImgTiles";
import { Slideshow } from "../../logic/slideshow/slideshow";
import { SlidesStateData, SlideData } from "../../types/types";
import * as Hooks from '../../hooks';
import { StateDataMap } from "./types";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        chartContainer: {
            height: "100%",
            overflow: "hidden"
        }
    })
);

interface Props {
    slideshow: Slideshow;
}

export const DesktopSolarContent: React.FC<Props> = ({ slideshow }) => {
    const classes = useStyles();
    const isOnlyXs = useMediaQuery((theme: Theme) => theme.breakpoints.only('xs'));
    const appId = Hooks.useAppId();
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [slideIndex, setSlideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const [play] = Hooks.useSubjectState(slideshow.play$);
    const [duration] = Hooks.useSubjectState(slideshow.duration$);
    const data = (slideshow.data as StateDataMap).slides
    const dataKeys = [...data.keys()];
    const dataValues = [...data.values()];

    const slides: SlideData = dataValues.flat(1);
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

    return (
        <>
            <NavTitles
                animationsInitialized={animationsInitialized}
                current={slides[slideIndex].headers}
                next={slides[(slideIndex + 1) % totalLen].headers}
                play={play}
                index={slideIndex}
                setIndex={setSlideIndex}
                seqLen={seqLen}
                onBreadClick={(index: number) =>
                    setSlideIndex(
                        (prev: number) => index + Math.floor(prev / seqLen) * seqLen // TODO: repair this to take into consideration current sequence name
                    )
                }
                sequences={sequences}
                currentSequence={slides[slideIndex].headers.sequence}
            />
            {[...slides[slideIndex].data.entries()].map(([name, value], i) => !(i > 0 && isOnlyXs) ? (
                <Content
                    animationsInitialized={animationsInitialized}
                    name={name}
                    tileData={value.tile} // TODO: consider changing to Transitions and passing components
                    component={getComponents(name)[slideIndex]}
                />
            ) : null)}
        </>
    );
};
