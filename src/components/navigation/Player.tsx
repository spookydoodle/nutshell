import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Grid, Slide, Theme, useMediaQuery } from '@mui/material';
import { Slider } from "./Slider";
import { PlayerButtons } from "./PlayerButtons";
import { SlideDurationInput } from "./SlideDurationInput";
import { PlayerSettingsButton } from "./PlayerSettingsButton";
import { SettingsDialog } from "./SettingsDialog";
import { Slideshow } from "../../logic/slideshow/slideshow";
import * as Hooks from '../../hooks';
import * as Types from '../../types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            zIndex: 100,
            width: "100%",
            height: "120px",
            [theme.breakpoints.down("sm")]: {
                height: "5em",
            },
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(31, 31, 31, 0)",
            color: "rgba(255, 255, 255, .87)",
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .4) 20%, rgba(0, 0, 0, .95) 40%, rgba(0, 0, 0, 1) 100%)`,
        },
        settingsButtonsContainer: {
            paddingRight: "20px",
            paddingLeft: "20px",
            [theme.breakpoints.down("sm")]: {
                paddingRight: "10px",
                paddingLeft: "10px",
            },
        },
    })
);

interface Props {
    slideshow: Slideshow;
    categoryPrimary?: string;
    categorySecondary?: string;
}

export const Player: React.FC<Props> = ({
    slideshow,
    categoryPrimary,
    categorySecondary,
}) => {
    const classes = useStyles();
    const isXlDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('xl'));
    const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const isMdDown = !isMdUp;
    const isOnlyXs = useMediaQuery((theme: Theme) => theme.breakpoints.only('xs'));
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [slideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const [duration, setDuration] = Hooks.useSubjectState(slideshow.duration$);
    const [showTicker, setShowTicker] = Hooks.useSubjectState(slideshow.showTicker$);
    const [pin, setPin] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [hover, setHover] = React.useState(false);
    const [openSettings, setOpenSettings] = React.useState(false);

    const playerLabels = React.useMemo(
        () => slideshow.getPlayerLabels(),
        [slideshow]
    );

    const playerIndex = React.useMemo(
        () => slideshow.getPlayerIndex(slideIndex, playerLabels.length),
        [slideshow, slideIndex, playerLabels]
    );

    React.useEffect(() => {
        const handleMouseMove = () => setShow(true);
        window.addEventListener("mousemove", handleMouseMove, false);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    React.useEffect(() => {
        if (!show) {
            return
        }

        const timeout = setTimeout(() => setShow(false), 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, [show]);

    const onHover = React.useCallback(() => setHover(true), []);
    const onOut = React.useCallback(() => setHover(false), []);
    const handleSettingsOpen = React.useCallback(() => setOpenSettings(true), []);
    const handleSettingsClose = React.useCallback(() => setOpenSettings(false), []);

    const slideIn = React.useMemo(
        () => !animationsInitialized ? false : pin || show || hover,
        [animationsInitialized, pin, show, hover]
    );
    
    return (
        <>
            <Box onMouseOver={onHover} onMouseOut={onOut}>
                <Slide in={slideIn} direction="up">
                    <Grid container justifyContent="center" alignItems="center" className={classes.container}>
                        <Grid item xs={12} md={4} lg={3} container justifyContent="center" alignItems="center">
                            <PlayerButtons
                                slideshow={slideshow}
                                index={playerIndex}
                                playerLabelsLength={playerLabels.length}
                                categoryPrimary={categoryPrimary}
                                categorySecondary={categorySecondary}
                            />
                            {!isMdUp && !isOnlyXs ? (
                                <PlayerSettingsButton pin={pin} setPin={setPin} handleSettingsOpen={handleSettingsOpen} />
                            ) : null}
                        </Grid>

                        {!isMdDown ? (
                            <>
                                <Slider slideshow={slideshow} index={playerIndex} playerLabels={playerLabels} />

                                <Grid item xs={4} md={3} container justifyContent="space-around" alignItems="center" className={classes.settingsButtonsContainer}>
                                    {!isXlDown ? (
                                        <SlideDurationInput duration={duration} setDuration={setDuration} />
                                    ) : null}

                                    <PlayerSettingsButton pin={pin} setPin={setPin} handleSettingsOpen={handleSettingsOpen} />
                                </Grid>
                            </>
                        ) : null}
                    </Grid>
                </Slide>
            </Box>

            <SettingsDialog
                slideshow={slideshow}
                openSettings={openSettings}
                handleSettingsClose={handleSettingsClose}
                duration={duration}
                setDuration={setDuration}
                showTicker={showTicker}
                setShowTicker={setShowTicker}
            />
        </>
    );
};
