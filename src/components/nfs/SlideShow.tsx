import React, { useState } from "react";
import * as rxjs from 'rxjs';
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Box, Theme, useMediaQuery } from '@mui/material';
import { Background } from "./Background";
import { Player } from "../navigation/Player";
import { Transitions } from "../metrics-dashboard/Transitions";
import { SmallScreenMessage } from "../metrics-dashboard/SmallScreenMessage";
import { imgPerSlide } from "../../slideshows/nfs/nfs-data";
import { Progress } from "./Progress";
import { InfoPanels } from "./InfoPanels";
import * as Data from "../../slideshows/nfs/nfs-data";
import * as Hooks from '../../hooks';
import { Slideshow } from "../../logic/slideshow/slideshow";
import { NutshellData } from "./types";

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
    slideshow: Slideshow<NutshellData>;
}

export const SlideShow: React.FC<Props> = ({ slideshow }) => {
    const classes = useStyles();
    const isSmDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const [slideIndex, setSlideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const [prevSlideIndex, setPrevSlideIndex] = useState(0);

    const playerLabels = React.useMemo(() => slideshow.getPlayerLabels(), [slideshow]);
    const totalLen = React.useMemo(() => slideshow.data?.games?.length || 0, [slideshow]);

    React.useEffect(() => {
        const subscription = slideshow.slideIndex$
            .pipe(rxjs.pairwise())
            .subscribe(([previous]) => {
                setPrevSlideIndex(previous)
            });

        return () => {
            subscription.unsubscribe();
        };
    }, []);
    
    const isSwitchingWithinSlide = React.useMemo(
        () => {
            const forwards = slideIndex > prevSlideIndex && slideIndex % imgPerSlide !== 0;
            const backwards = slideIndex < prevSlideIndex && Math.floor(slideIndex / imgPerSlide) === Math.floor(prevSlideIndex / imgPerSlide);
            return forwards || backwards;
        },
        [slideIndex, prevSlideIndex]
    );
    const isSwitchingToEarlierSlide = !isSwitchingWithinSlide && (slideIndex < prevSlideIndex || (prevSlideIndex === 0 && slideIndex === totalLen * imgPerSlide - 1));

    return (
        <Grid container justifyContent="center">
            <Grid container item className={classes.content}>
                {!isSmDown ? (
                    <>
                        <Box className={classes.cinema}>
                            <Transitions
                                variant={
                                    isSwitchingWithinSlide
                                        ? "fade-in"
                                        : isSwitchingToEarlierSlide
                                            ? "swipe-cube-to-right"
                                            : "swipe-cube-to-left"
                                }
                                components={slideshow.data.games
                                    .map(({ background }) => background.map((src, i) => <Background key={src} src={src} index={i} />))
                                    .flat(1)}
                                index={slideIndex}
                            />
                        </Box>

                        <Transitions
                            variant={slideIndex % imgPerSlide === 0 ? "fade-in-slide-out" : "none"}
                            components={slideshow.data.games
                                .map((slide, ind) => slide.background.map(() => <InfoPanels slide={slide} ind={ind} applyStyle={!isSwitchingWithinSlide} />))
                                .flat(1)}
                            index={slideIndex}
                        />

                        <Player
                            slideshow={slideshow as Slideshow}
                            index={Math.floor(slideIndex / imgPerSlide)}
                            onIndexChange={(n: number) => {
                                setSlideIndex((prev) => {
                                    setPrevSlideIndex(Math.floor(prev / imgPerSlide) * imgPerSlide);
                                    return n * imgPerSlide;
                                });
                            }}
                            secondaryIndex={slideIndex}
                            onSecondaryIndexChange={(n: number) => {
                                setSlideIndex((prev) => {
                                    setPrevSlideIndex(prev);
                                    return n;
                                });
                            }}
                            playerLabels={playerLabels}
                            sequences={sequences}
                            categoryPrimary="game"
                            categorySecondary="image"
                        />

                        <Progress slideIndex={slideIndex} onIndexChange={setSlideIndex} onPrevIndexChange={setPrevSlideIndex} />
                    </>
                ) : null}

                {!isMdUp ? (
                    <SmallScreenMessage variant="NFS" />
                ) : null}
            </Grid>
        </Grid>
    );
};
