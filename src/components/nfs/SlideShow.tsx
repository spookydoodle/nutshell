import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Box, Theme, useMediaQuery } from '@mui/material';
import { Background } from "./Background";
import { Player } from "../navigation/Player";
import { Transitions } from "../metrics-dashboard/Transitions";
import { SmallScreenMessage } from "../metrics-dashboard/SmallScreenMessage";
import { imgPerSlide } from "../../slideshows/nfs/nfs-data";
import { Progress } from "./Progress";
import { InfoPanels } from "./InfoPanels";
import { NfsSlideshow } from "../../slideshows/nfs/nfs-slideshow";
import * as Hooks from '../../hooks';

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        content: {
            position: "relative",
        },
        cinema: {
            position: "fixed",
            top: 0,
            height: "100vh",
            width: "100%",
        }
    })
);

const sequences = ["Timeline"];

interface Props {
    slideshow: NfsSlideshow;
}

export const SlideShow: React.FC<Props> = ({ slideshow }) => {
    const classes = useStyles();
    const hiddenSmDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const hiddenMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const [play, setPlay] = Hooks.useSubjectState(slideshow.play$);
    const [index, setIndex] = Hooks.useSubjectState(slideshow.index$);
    const [duration, setDuration] = Hooks.useSubjectState(slideshow.duration$);
    const [prevIndex, setPrevIndex] = Hooks.useSubjectState(slideshow.prevIndex$);
    const [showTicker, setShowTicker] = Hooks.useSubjectState(slideshow.showTicker$);

    const labels: string[] = React.useMemo(() => slideshow.data && slideshow.data.games ? slideshow.data?.games?.map((game) => game.label) : [""], [slideshow]);
    const totalLen = React.useMemo(() => slideshow.data?.games?.length || 0, [slideshow]);

    React.useEffect(() => {
        if (!play) {
            return;
        }
        const interval = setInterval(() => {
            setIndex((prev) => {
                setPrevIndex(prev);
                return (prev + 1) % (totalLen * imgPerSlide);
            });
        }, duration / imgPerSlide);

        return () => {
            clearInterval(interval);
        };
    }, [play, duration]);

    return (
        <Grid container justifyContent="center">
            <Grid container item className={classes.content}>
                {!hiddenSmDown ? (
                    <>
                        <Box className={classes.cinema}>
                            <Transitions
                                variant={
                                    (index > prevIndex && index % imgPerSlide !== 0) ||
                                        (index < prevIndex &&
                                            Math.floor(index / imgPerSlide) ===
                                            Math.floor(prevIndex / imgPerSlide))
                                        ? "fade-in"
                                        : index < prevIndex ||
                                            (prevIndex === 0 && index === totalLen * imgPerSlide - 1)
                                            ? "swipe-cube-to-right"
                                            : "swipe-cube-to-left"
                                }
                                components={slideshow.data.games
                                    .map(({ background }) => background.map((src, i) => <Background key={src} src={src} index={i} />))
                                    .flat(1)}
                                index={index}
                            />
                        </Box>

                        <Transitions
                            variant={index % imgPerSlide === 0 ? "fade-in-slide-out" : "none"}
                            components={slideshow.data.games
                                .map((slide, ind) => slide.background.map(() => <InfoPanels slide={slide} ind={ind} index={index} prevIndex={prevIndex} />))
                                .flat(1)}
                            index={index}
                        />

                        <Player
                            slideshow={slideshow}
                            animationsInitialized={true}
                            play={play}
                            setPlay={setPlay}
                            index={Math.floor(index / imgPerSlide)}
                            secondaryIndex={index}
                            length={totalLen}
                            setIndex={(n: number, prev: number) => {
                                setIndex(n * imgPerSlide);
                                setPrevIndex(prev * imgPerSlide);
                            }}
                            setSecondaryIndex={(n: number, prev: number) => {
                                setIndex(n);
                                setPrevIndex(prev);
                            }}
                            duration={duration}
                            setDuration={setDuration}
                            labels={labels}
                            sequences={sequences}
                            categoryPrimary="game"
                            categorySecondary="image"
                            showTicker={showTicker}
                            setShowTicker={setShowTicker}
                        />

                        <Progress slideIndex={index} onIndexChange={setIndex} onPrevIndexChange={setPrevIndex} />
                    </>
                ) : null}

                {!hiddenMdUp ? (
                    <SmallScreenMessage variant="NFS" />
                ) : null}
            </Grid>
        </Grid>
    );
};
