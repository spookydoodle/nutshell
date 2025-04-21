import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Grid, Slide, Theme, useMediaQuery } from '@mui/material';
import { Slider } from "./Slider";
import { PlayerButtons } from "./PlayerButtons";
import { SlideDurationInput } from "./SlideDurationInput";
import { PlayerSettingsButton } from "./PlayerSettingsButton";
import { SettingsDialog } from "./SettingsDialog";
import { Slideshow } from "../../logic/slideshow/slideshow";

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
    animationsInitialized: boolean;
    play: boolean;
    setPlay: React.Dispatch<React.SetStateAction<boolean>>;
    index: number;
    secondaryIndex?: number;
    length: number;
    setIndex: (index: number, prev: number) => void;
    setSecondaryIndex?: (index: number, prev: number) => void;
    duration: number;
    setDuration: React.Dispatch<React.SetStateAction<number>>;
    labels?: Array<string>;
    sequences: Array<string>;
    categoryPrimary?: string;
    categorySecondary?: string;
    showTicker: boolean;
    setShowTicker: (on: boolean) => void;
}

export const Player: React.FC<Props> = ({
    slideshow,
    animationsInitialized,
    play,
    setPlay,
    index,
    secondaryIndex,
    length,
    setIndex,
    setSecondaryIndex,
    duration,
    setDuration,
    labels,
    sequences,
    categoryPrimary,
    categorySecondary,
    showTicker,
    setShowTicker,
}) => {
    const classes = useStyles();
    const hiddenXlDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('xl'));
    const hiddenMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const hiddenMdDown = !hiddenMdUp;
    const hiddenOnlyXs = useMediaQuery((theme: Theme) => theme.breakpoints.only('xs'));
    const [pin, setPin] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [hover, setHover] = React.useState(false);
    const [openSettings, setOpenSettings] = React.useState(false);

    React.useEffect(() => {
        const onMouseMove = () => setShow(true);
        window.addEventListener("mousemove", onMouseMove, false);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
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
                                play={play}
                                setPlay={setPlay}
                                index={index}
                                setIndex={setIndex}
                                secondaryIndex={secondaryIndex}
                                setSecondaryIndex={setSecondaryIndex}
                                length={length}
                                categoryPrimary={categoryPrimary}
                                categorySecondary={categorySecondary}
                            />
                            {!hiddenMdUp && !hiddenOnlyXs ? (
                                <PlayerSettingsButton pin={pin} setPin={setPin} handleSettingsOpen={handleSettingsOpen} />
                            ) : null}
                        </Grid>

                        {!hiddenMdDown ? (
                            <>
                                <Slider index={index} length={length} setIndex={setIndex} labels={labels || []} sequences={sequences} />

                                <Grid item xs={4} md={3} container justifyContent="space-around" alignItems="center" className={classes.settingsButtonsContainer}>
                                    {!hiddenXlDown ? (
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
