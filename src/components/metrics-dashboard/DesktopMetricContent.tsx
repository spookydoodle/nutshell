import React, { useEffect } from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box, useMediaQuery } from '@mui/material';
import { Slideshow } from "../../logic/slideshow/slideshow";
import { NavTitles } from "./NavTitles";
import { Content } from "./Content";
import { BarChart } from "../dataviz/HTMLCharts/BarChart";
import { Bestsellers } from "./Bestsellers";
import * as Hooks from '../../hooks';
import * as MetricTypes from "./types";
import { DesktopContainer } from "./DesktopContainer";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
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
    slideshow: Slideshow;
}

export const DesktopMetricContent: React.FC<Props> = ({ slideshow }) => {
    const classes = useStyles();
    const isLgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
    const hiddenMdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const appId = Hooks.useAppId();
    const [play] = Hooks.useSubjectState(slideshow.play$);
    const [index, setIndex] = Hooks.useSubjectState(slideshow.index$);
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [duration] = Hooks.useSubjectState(slideshow.duration$);

    const slidesData = React.useMemo(() => slideshow.getSlidesData?.(), [slideshow]);

    const dataKeys = slidesData ? [...slidesData.keys()] : [];
    const dataValues = slidesData ? [...slidesData.values()] : [];

    const slides: MetricTypes.SlideData = dataValues.flat(1);

    const totalLen = slides.length;
    const seqLen = totalLen / dataKeys.length; // TODO: Repair this to get the seqLen of current time box
    const sequences = dataKeys;

    const getMaxRows = (_i: number) =>
        Math.max(
            ...[...slides[index].data.values()]
                .map((s) => [...s.main.values()].map((e) => e.data.length))
                .flat(2)
        );

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

    const onSequenceClick = (seqInd: number) => {
        setIndex((prev) => ((prev % seqLen) + seqLen * seqInd));
    };

    const onBreadClick = (index: number) => {
        setIndex(
            (prev) => index + Math.floor(prev / seqLen) * seqLen // TODO: repair this to take into consideration current sequence name
        );
    };
    
    return (
        <>
            <NavTitles
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
            />

            {[...slides[index].data.entries()].map(([name, value], i) => !(isLgDown && i === 1) && !(hiddenMdDown && i > 0) ? (
                <Content
                    key={`${name}-${i}`}
                    animationsInitialized={animationsInitialized}
                    name={name}
                    tileData={value.tile} // TODO: consider changing to Transitions and passing components
                    components={getComponents(name)}
                    index={index}
                />
            ) : null)}
        </>
    );
};
