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
    const [index, setIndex] = Hooks.useSubjectState(slideshow.index$);
    const [prevIndex, setPrevIndex] = useState(0);

    const labels: string[] = React.useMemo(() => slideshow.data && slideshow.data.games ? slideshow.data?.games?.map((game) => game.label) : [""], [slideshow]);
    const totalLen = React.useMemo(() => slideshow.data?.games?.length || 0, [slideshow]);

    React.useEffect(() => {
        const subscription = slideshow.index$
            .pipe(rxjs.pairwise())
            .subscribe(([previous, current]) => {
                setPrevIndex(previous)
            });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const isAnimationFadeIn = (index > prevIndex && index % imgPerSlide !== 0) ||
        (index < prevIndex && Math.floor(index / imgPerSlide) === Math.floor(prevIndex / imgPerSlide))

    // Going back
    const isAnimationBack = !isAnimationFadeIn && (index < prevIndex || (prevIndex === 0 && index === totalLen * imgPerSlide - 1))
    
    const applyStyle = React.useMemo(
        () => {
            const a = index > prevIndex && index % Data.imgPerSlide !== 0;
            const b = index < prevIndex && Math.floor(index / Data.imgPerSlide) === Math.floor(prevIndex / Data.imgPerSlide);
            return !(a || b);
        },
        [index, prevIndex]
    );

    return (
        <Grid container justifyContent="center">
            <Grid container item className={classes.content}>
                {!isSmDown ? (
                    <>
                        <Box className={classes.cinema}>
                            <Transitions
                                variant={
                                    isAnimationFadeIn
                                        ? "fade-in"
                                        : isAnimationBack
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
                                .map((slide, ind) => slide.background.map(() => <InfoPanels slide={slide} ind={ind} applyStyle={applyStyle} />))
                                .flat(1)}
                            index={index}
                        />

                        <Player
                            slideshow={slideshow as Slideshow}
                            length={totalLen}
                            index={Math.floor(index / imgPerSlide)}
                            onIndexChange={(n: number) => {
                                setIndex((prev) => {
                                    setPrevIndex(Math.floor(prev / imgPerSlide) * imgPerSlide);
                                    return n * imgPerSlide;
                                });
                            }}
                            secondaryIndex={index}
                            onSecondaryIndexChange={(n: number) => {
                                setIndex((prev) => {
                                    setPrevIndex(prev);
                                    return n;
                                });
                            }}
                            labels={labels}
                            sequences={sequences}
                            categoryPrimary="game"
                            categorySecondary="image"
                        />

                        <Progress slideIndex={index} onIndexChange={setIndex} onPrevIndexChange={setPrevIndex} />
                    </>
                ) : null}

                {!isMdUp ? (
                    <SmallScreenMessage variant="NFS" />
                ) : null}
            </Grid>
        </Grid>
    );
};
