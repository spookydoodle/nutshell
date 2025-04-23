import React, { useEffect } from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Grid, useMediaQuery } from '@mui/material';
import { Slideshow, Slideshow as SlideshowType } from "../../logic/slideshow/slideshow";
import { Player } from "../navigation/Player";
import { Ticker } from "./ticker/Ticker";
import * as Hooks from '../../hooks';
import * as MetricTypes from "./types";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        content: {
            width: "98vw",
            marginTop: "2vh",
            position: "relative",
        }
    })
);

interface Props {
    slideshow: Slideshow;
    children?: React.ReactNode;
}

export const DesktopContainer: React.FC<Props> = ({ slideshow, children }) => {
    const classes = useStyles();
    const isLgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
    const [play] = Hooks.useSubjectState(slideshow.play$);
    const [index, setIndex] = Hooks.useSubjectState(slideshow.index$);
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [duration] = Hooks.useSubjectState(slideshow.duration$);
    const [showTicker] = Hooks.useSubjectState(slideshow.showTicker$);

    const slidesData = React.useMemo(() => slideshow.getSlidesData?.(), [slideshow]);
    const tickerData = React.useMemo(() => slideshow.getTickerData?.(), [slideshow]);

    const dataKeys = slidesData ? [...slidesData.keys()] : [];
    const dataValues = slidesData ? [...slidesData.values()] : [];

    const slides: MetricTypes.SlideData = dataValues.flat(1);

    const totalLen = slides.length;
    const seqLen = totalLen / dataKeys.length; // TODO: Repair this to get the seqLen of current time box

    // For the 'legend' in Player components (marks, sequences)
    const labels: Array<string> = slides
        .filter((_slide, i) => i < seqLen)
        .map((slide) => slide.headers.titleSecondaryShort);
    
    const handleIndexChange = React.useCallback(
        (n: number) => setIndex((prev) => prev + (n - prev % length)),
        [length]
    );
    
    return (
        <Grid container justifyContent="center">
            <Grid container item className={classes.content}>
                {children}

                {tickerData && showTicker && !isLgDown ? (
                    <Ticker
                        animationsInitialized={animationsInitialized}
                        text={SlideshowType.tickerTitle}
                        data={tickerData}
                    />
                ) : null}

                <Player
                    slideshow={slideshow}
                    index={index % labels.length}
                    onIndexChange={handleIndexChange}
                    length={labels.length}
                    labels={labels}
                    sequences={[""]}
                    // seqName={sequences[Math.floor(index / seqLen)]}
                />
            </Grid>
        </Grid>
    );
};
