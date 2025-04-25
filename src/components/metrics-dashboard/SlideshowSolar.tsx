import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Theme, useMediaQuery } from '@mui/material';
import { Player } from "../navigation/Player";
import { NavTitles } from "./solar/NavTitles";
import { Content } from "./Content";
import { BarChart } from "../dataviz/HTMLCharts/BarChart";
import { ImgTiles } from "./ImgTiles";
import { Ticker } from "./ticker/Ticker";
import { SmallScreenMessage } from "./SmallScreenMessage";
import { SlidesStateData, SlideData } from "../../types/types";
import * as Hooks from '../../hooks';
import { Slideshow } from "../../logic/slideshow/slideshow";
import * as MetricTypes from "./types";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        content: {
            width: "98vw",
            marginTop: "2vh",
            position: "relative",
        },
        chartContainer: {
            height: "100%",
            overflow: "hidden"
        },
        divider: {
            marginTop: ".5em",
            marginBottom: ".5em",
        },
    })
);

interface Props {
    slideshow: Slideshow<MetricTypes.StateDataMap>;
    data: SlidesStateData;
}

export const SlideshowSolar: React.FC<Props> = ({ slideshow, data }) => {
    const classes = useStyles();
    const isSmDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const isLgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
    const isOnlyXs = useMediaQuery((theme: Theme) => theme.breakpoints.only('xs'));
    const appId = Hooks.useAppId();
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [index, setIndex] = Hooks.useSubjectState(slideshow.index$);
    const [play] = Hooks.useSubjectState(slideshow.play$);
    const [duration] = Hooks.useSubjectState(slideshow.duration$);
    const [showTicker] = Hooks.useSubjectState(slideshow.showTicker$);
    const tickerData = React.useMemo(() => slideshow.getTickerData?.(), [slideshow]);

    const dataKeys = data ? [...data.keys()] : [];
    const dataValues = data ? [...data.values()] : [];

    const slides: SlideData = dataValues.flat(1);

    // For the 'legend' in Player components (marks, sequences)
    const labels: Array<string> = slides.map(
        (slide) => slide.headers.titleSecondaryShort
    );
    const sequences = dataKeys;

    const getMaxRows = (_i: number) =>
        Math.max(
            ...[...slides[index].data.values()]
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
                                    maxRows={getMaxRows(index)}
                                />
                            </Grid>
                        ) : val.type === "items" && val.data.length > 0 ? (
                            <ImgTiles key={`items-${name}-${ind}-${i}`} data={val.data} />
                        ) : undefined
                )}
            </>
        ));

    const handleIndexChange = React.useCallback(
        (n: number) => setIndex((prev) => prev + (n - prev % length)),
        [length]
    );

    return (
        <Grid container justifyContent="center">
            <Grid container item className={classes.content}>
                {!isSmDown ? (
                    <>
                        <NavTitles
                            animationsInitialized={animationsInitialized}
                            current={slides[index].headers}
                            next={slides[(index + 1) % totalLen].headers}
                            play={play}
                            index={index}
                            setIndex={setIndex}
                            seqLen={seqLen}
                            onBreadClick={(index: number) =>
                                setIndex(
                                    (prev: number) => index + Math.floor(prev / seqLen) * seqLen // TODO: repair this to take into consideration current sequence name
                                )
                            }
                            sequences={sequences}
                            currentSequence={slides[index].headers.sequence}
                        />

                        {[...slides[index].data.entries()].map(([name, value], i) => !(i > 0 && isOnlyXs) ? (
                            <Content
                                animationsInitialized={animationsInitialized}
                                name={name}
                                tileData={value.tile} // TODO: consider changing to Transitions and passing components
                                components={getComponents(name)}
                                index={index}
                            />
                        ) : null)}

                        {tickerData && showTicker && !isLgDown ? (
                            <Ticker animationsInitialized={animationsInitialized} title="Turbocharged by spookydoodle" data={tickerData} />
                        ) : null}

                        <Player
                            slideshow={slideshow as Slideshow}
                            index={index % totalLen}
                            onIndexChange={handleIndexChange}
                            length={totalLen}
                            labels={labels}
                            sequences={sequences}
                        />
                    </>
                ) : null}

                {!isMdUp ? (
                    <SmallScreenMessage variant="Solar" animationsInitialized={animationsInitialized} />
                ) : null}
            </Grid>
        </Grid>
    );
};
