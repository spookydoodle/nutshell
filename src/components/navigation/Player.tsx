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

interface Props<T = unknown> {
    slideshow: Slideshow<T>;
    data: T;
    categoryPrimary?: string;
    categorySecondary?: string;
}

export const Player: React.FC<Props> = ({
    slideshow,
    data,
    categoryPrimary,
    categorySecondary,
}) => {
    const classes = useStyles();
    const isXlUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));
    const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const isMdDown = !isMdUp;
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [slideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const [duration, setDuration] = Hooks.useSubjectState(slideshow.duration$);
    const [pin, setPin] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [hover, setHover] = React.useState(false);
    const [openSettings, setOpenSettings] = React.useState(false);

    const playerLabels = React.useMemo(
        () => slideshow.getPlayerLabels(data),
        [slideshow, data]
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

    const handleMouseOver = React.useCallback(() => setHover(true), []);
    const handleMouseOut = React.useCallback(() => setHover(false), []);
    const handleSettingsOpen = React.useCallback(() => setOpenSettings(true), []);
    const handleSettingsClose = React.useCallback(() => setOpenSettings(false), []);

    const slideIn = React.useMemo(
        () => !animationsInitialized ? false : pin || show || hover,
        [animationsInitialized, pin, show, hover]
    );

    const playerSettingsButton = <PlayerSettingsButton pin={pin} setPin={setPin} handleSettingsOpen={handleSettingsOpen} />;
    
    return (
        <>
            <Box>
                <Slide in={slideIn} direction="up">
                    <Grid container justifyContent="center" alignItems="center" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={classes.container}>
                        <Grid item xs={12} md={4} lg={3} container justifyContent="center" alignItems="center">
                            <PlayerButtons
                                slideshow={slideshow}
                                index={playerIndex}
                                playerLabelsLength={playerLabels.length}
                                categoryPrimary={categoryPrimary}
                                categorySecondary={categorySecondary}
                            />
                            {isMdDown ? playerSettingsButton : null}
                        </Grid>

                        {isMdUp ? (
                            <>
                                <Slider slideshow={slideshow} index={playerIndex} playerLabels={playerLabels} />
                                <Grid item xs={4} md={3} container justifyContent="space-around" alignItems="center" className={classes.settingsButtonsContainer}>
                                    {isXlUp ? <SlideDurationInput duration={duration} setDuration={setDuration} /> : null}
                                    {playerSettingsButton}
                                </Grid>
                            </>
                        ) : null}
                    </Grid>
                </Slide>
            </Box>

            <SettingsDialog slideshow={slideshow} openSettings={openSettings} handleSettingsClose={handleSettingsClose} />
        </>
    );
};
