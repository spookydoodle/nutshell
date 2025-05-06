import React, { useCallback, useState } from "react";
import * as rxjs from 'rxjs';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Theme } from '@mui/material';
import { SlideComponentProps } from "../../../logic/slideshow/slideshow";
import { Background } from "./Background";
import { Transitions } from "../../../components/metrics-dashboard/Transitions";
import { imgPerSlide } from "../nfs-data";
import { SlideNavigation } from "./SlideNavigation";
import { InfoPanels } from "./InfoPanels";
import * as Hooks from '../../../hooks';
import * as NfsTypes from "../nfs-types";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        cinema: {
            position: "fixed",
            top: 0,
            height: "100vh",
            width: "100%",
        }
    })
);

export const NfsSlide: React.FC<SlideComponentProps<NfsTypes.NutshellData>> = ({ slideshow, data }) => {
    const classes = useStyles();
    const [slideIndex, setSlideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const [prevSlideIndex, setPrevSlideIndex] = useState(0);

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

    const gameIndex = React.useMemo(
        () => Math.floor(slideIndex / imgPerSlide),
        [slideIndex]
    );

    const prevGameIndex = React.useMemo(
        () => Math.floor(prevSlideIndex / imgPerSlide),
        [prevSlideIndex]
    );

    const imgIndex = React.useMemo(
        () => slideIndex % imgPerSlide,
        [slideIndex]
    );

    const isSwitchingWithinSlide = React.useMemo(
        () => {
            const forwards = slideIndex > prevSlideIndex && imgIndex !== 0;
            const backwards = slideIndex < prevSlideIndex && gameIndex === prevGameIndex;

            return forwards || backwards;
        },
        [slideIndex, prevSlideIndex, imgIndex, gameIndex, prevGameIndex]
    );

    const isSwitchingToEarlierSlide = React.useMemo(
        () => !isSwitchingWithinSlide && (slideIndex < prevSlideIndex || (prevSlideIndex === 0 && slideIndex === data.games.length * imgPerSlide - 1)),
        [isSwitchingWithinSlide, slideIndex, prevSlideIndex, data.games.length]
    );

    const backgroundSrc = React.useMemo(
        () => data.games[gameIndex].background[imgIndex],
        [data, gameIndex, imgIndex]
    );

    const handleSlideNavigationItemClick = useCallback(
        (i: number) => {
            if (i === imgIndex) {
                return;
            }
            setSlideIndex((prev: number) => prev - (prev % imgPerSlide) + i);
        },
        [imgIndex]
    );

    return (
        <>
            <Box className={classes.cinema}>
                <Transitions
                    variant={isSwitchingWithinSlide
                        ? "fade-in"
                        : isSwitchingToEarlierSlide
                            ? "swipe-cube-to-right"
                            : "swipe-cube-to-left"}
                    component={<Background src={backgroundSrc} />}
                />
            </Box>
            <Transitions
                variant={imgIndex === 0 ? "fade-in-slide-out" : "none"}
                component={<InfoPanels slide={data.games[gameIndex]} index={imgIndex} applyStyle={!isSwitchingWithinSlide} />}
            />
            <SlideNavigation activeItemIndex={imgIndex} onClick={handleSlideNavigationItemClick} />
        </>
    );
};
