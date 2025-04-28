import React, { useState } from "react";
import * as rxjs from 'rxjs';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Theme } from '@mui/material';
import { Slideshow } from "../../logic/slideshow/slideshow";
import { Background } from "./Background";
import { Transitions } from "../metrics-dashboard/Transitions";
import { imgPerSlide } from "../../slideshows/nfs/nfs-data";
import { Progress } from "./Progress";
import { InfoPanels } from "./InfoPanels";
import * as Hooks from '../../hooks';
import { NutshellData } from "../../slideshows/nfs/nfs-types";

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

interface Props {
    slideshow: Slideshow<NutshellData>;
}

export const SlideShow: React.FC<Props> = ({ slideshow }) => {
    const classes = useStyles();
    const [slideIndex, setSlideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const [prevSlideIndex, setPrevSlideIndex] = useState(0);

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

    const backgroundComponents = slideshow.data.games
    .map((slide) => slide.background.map((src, i) => <Background key={src} src={src} index={i} />))
    .flat(1);

    const gameComponents = slideshow.data.games
    .map((slide, ind) => slide.background.map(() => <InfoPanels slide={slide} ind={ind} applyStyle={!isSwitchingWithinSlide} />))
    .flat(1);

    return (
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
                    component={backgroundComponents[Math.min(slideIndex, backgroundComponents.length - 1)]}
                />
            </Box>

            <Transitions
                variant={slideIndex % imgPerSlide === 0 ? "fade-in-slide-out" : "none"}
                component={gameComponents[Math.min(slideIndex, backgroundComponents.length - 1)]}
            />

            <Progress slideIndex={slideIndex} onIndexChange={setSlideIndex} onPrevIndexChange={setPrevSlideIndex} />
        </>
    );
};
