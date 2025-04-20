import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box, Grid, Hidden } from '@mui/material';
import { Player } from "../navigation/Player";
import { Ticker } from "./ticker/Ticker";
import { NavTitlesSales } from "./NavTitlesSales";
import { Content } from "./Content";
import { BarChart } from "../dataviz/HTMLCharts/BarChart";
import { Bestsellers } from "./Bestsellers";
import * as Hooks from '../../hooks';
import * as MetricTypes from "./types";
import { SalesSlideshow } from "../../slideshow/sales/sales-slideshow";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        content: {
            width: "98vw",
            marginTop: "2vh",
            position: "relative",
        },
        chartContainer: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
        },
        divider: {
            marginTop: ".5em",
            marginBottom: ".5em",
        },
        spaceEvenly: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }
    })
);

interface Props {
    slideshow: SalesSlideshow;
    play: boolean;
    setPlay: (play: boolean) => void;
    data: MetricTypes.SlidesStateData;
    tickerData?: Map<string, MetricTypes.TickerData>;
    setOpenDialog: (open: boolean) => void;
    primaryMeasureName: string;
}

export const Slideshow: React.FC<Props> = ({
    slideshow,
    play,
    setPlay,
    data,
    tickerData,
    // setOpenDialog,
    primaryMeasureName
}) => {
    const classes = useStyles();
    const appId = Hooks.useAppId();
    const [index, setIndex] = Hooks.useSubjectState(slideshow.index$);
    const [_prevIndex, setPrevIndex] = Hooks.useSubjectState(slideshow.prevIndex$);
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [duration, setDuration] = Hooks.useSubjectState(slideshow.duration$);
    const [showTicker, setShowTicker] = Hooks.useSubjectState(slideshow.showTicker$);

    const dataKeys = data ? [...data.keys()] : [];
    const dataValues = data ? [...data.values()] : [];
    const sequencesN = dataKeys.length;

    const slides: MetricTypes.SlideData = dataValues.flat(1);

    const totalLen = slides.length;
    const seqLen = totalLen / dataKeys.length; // TODO: Repair this to get the seqLen of current time box

    // For the 'legend' in Player components (marks, sequences)
    const labels: Array<string> = slides
        .filter((_slide, i) => i < seqLen)
        .map((slide) => slide.headers.titleSecondaryShort);
    const sequences = dataKeys;

    const getMaxRows = (_i: number) =>
        Math.max(
            ...[...slides[index].data.values()]
                .map((s) => [...s.main.values()].map((e) => e.data.length))
                .flat(2)
        );

    // Change index every 'duration' seconds. Index is used to display current slide in Transitions
    const [_seqIndex, setSeqIndex] = useState(0);

    useEffect(() => {
        if (play) {
            const interval = setInterval(() => {
                setIndex((prev) => {
                    setSeqIndex(Math.floor((prev + 1) / seqLen));
                    setPrevIndex(prev % totalLen);
                    return (prev + 1) % totalLen;
                });
            }, duration);

            return () => {
                clearInterval(interval);
            };
        }
    }, [play, slides, duration, totalLen]);

    const getComponents = (name: string) =>
        slides.map((slide, ind) => {
            const entries = [...(slide.data.get(name)?.main.entries() || [])];
            return <Box className={classes.spaceEvenly}>
                {entries
                    .map(([key, val], i) => {
                        return val.type === "bar-chart" ? (
                            <Box key={`chart-${name}-${key}-${i}`} className={classes.chartContainer}>
                                <BarChart
                                    variant="scroll"
                                    type="abs-delta"
                                    rankColor="primary"
                                    labelSize="md"
                                    play={play}
                                    scrollId={`${appId}-${name.replace(" ", "-").toLowerCase()}`}
                                    slideDuration={duration}
                                    data={
                                        val.data.map((row) => ({
                                            category: row.name,
                                            value: row.primary,
                                            valueFormatted: row.primaryFormatted,
                                            delta: row.primaryDelta,
                                            deltaFormatted: row.primaryDeltaFormatted,
                                            isDeltaGood: row.primaryIsGood,
                                            isDeltaBad: row.primaryIsBad,
                                        })) || []
                                    }
                                    maxRows={getMaxRows(index)}
                                    applySort={true}
                                />
                            </Box>
                        ) : val.type === "items" && val.data.length > 0 ? (
                            <Bestsellers key={`items-${name}-${ind}-${i}`} title={key} data={val.data} divider={i < entries.length - 1} />
                        ) : null;
                    })}
            </Box>;
        });

    const onSequenceClick = (seqInd: number) =>
        setIndex((prev: number) => {
            setSeqIndex(seqInd % totalLen);

            return (prev % seqLen) + seqLen * seqInd;
        });

    const onBreadClick = (index: number) =>
        setIndex(
            (prev: number) => index + Math.floor(prev / seqLen) * seqLen // TODO: repair this to take into consideration current sequence name
        );

    const setIndexOnPlayer = (n: number, prev: number, next?: boolean) => {
        setSeqIndex((prevSeqInd) => {
            let newSeqInd = prevSeqInd;

            if (next && n === 0 && prev === seqLen - 1) {
                newSeqInd = (prevSeqInd + 1) % sequencesN;
            } else if (next && n === seqLen - 1 && prev === 0) {
                newSeqInd = (sequencesN + prevSeqInd - 1) % sequencesN;
            }

            setIndex((n + newSeqInd * seqLen) % totalLen);
            setPrevIndex((prev + newSeqInd * seqLen) % totalLen);

            return newSeqInd;
        });
    };

    return (
        <Grid container justifyContent="center">
            <Grid container item className={classes.content}>
                <NavTitlesSales
                    animationsInitialized={animationsInitialized}
                    current={slides[index].headers}
                    next={slides[(index + 1) % totalLen].headers}
                    play={play}
                    onSequenceClick={onSequenceClick}
                    index={index}
                    seqLen={seqLen}
                    onBreadClick={onBreadClick}
                    sequences={sequences}
                    currentSequence={slides[index].headers.sequence}
                    primaryMeasureName={primaryMeasureName}
                />

                {[...slides[index].data.entries()].map(([name, value], i) => (
                    <Hidden key={`${name}-${i}`} mdDown={i > 0} lgDown={i === 1}>
                        <Content
                            animationsInitialized={animationsInitialized}
                            name={name}
                            tileData={value.tile} // TODO: consider changing to Transitions and passing components
                            components={getComponents(name)}
                            index={index}
                        />
                    </Hidden>
                ))}

                {tickerData && showTicker ? (
                    <Hidden lgDown>
                        <Ticker
                            animationsInitialized={animationsInitialized}
                            text="Turbocharged by spookydoodle"
                            data={tickerData}
                        />
                    </Hidden>
                ) : null}

                <Player
                    animationsInitialized={animationsInitialized}
                    play={play}
                    setPlay={setPlay}
                    index={index % seqLen}
                    length={labels.length}
                    setIndex={setIndexOnPlayer}
                    duration={duration}
                    setDuration={setDuration}
                    labels={labels}
                    sequences={[""]}
                    // seqName={sequences[Math.floor(index / seqLen)]}
                    // setOpenDialog={setOpenDialog}
                    showTicker={showTicker}
                    setShowTicker={setShowTicker}
                />
            </Grid>
        </Grid>
    );
};
