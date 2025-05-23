import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, IconButton, Typography, Tooltip, Theme } from '@mui/material';
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { Slideshow } from '../../logic/slideshow/slideshow';
import * as Hooks from '../../hooks';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            color: "rgba(255, 255, 255, .6)",
            "&:hover": {
                color: "rgba(255, 255, 255, .87)",
            },
        },
        playIcon: {
            // border: "solid 2px rgba(226, 226, 226)",
            borderRadius: "100px",
            height: 36,
            width: 36,
            "&$play": {
                color: "#000",
                backgroundColor: "rgba(226, 226, 226)",
                marginLeft: "1em",
                marginRight: "1em",
                "&:hover": {
                    backgroundColor: "#FFF",
                    color: theme.palette.secondary.main,
                },
            },
        },
        play: {},
        duration: {
            display: "flex",
            alignItems: "center",
        },
    })
);

interface Props {
    slideshow: Slideshow;
    index: number;
    playerLabelsLength: number;
    categoryPrimary?: string;
    categorySecondary?: string;
}

export const PlayerButtons: React.FC<Props> = ({
    slideshow,
    index,
    playerLabelsLength,
    categoryPrimary = "slide",
    categorySecondary = "slide",
}) => {
    const classes = useStyles();
    const [play, setPlay] = Hooks.useSubjectState(slideshow.play$);

    const handleIndexChange = React.useCallback(
        (index: number) => slideshow.onPlayerIndexChange(index, playerLabelsLength),
        [slideshow]
    );

    return (
        <>
            <Tooltip
                title={`${play ? "Pause" : "Play"} slideshow`}
                aria-label={`${play ? "pause" : "play"} slideshow`}
                arrow
            >
                <IconButton
                    color="inherit"
                    aria-label="play/pause"
                    onClick={() => setPlay((prev) => !prev)}
                    className={`${classes.playIcon} ${classes.play}`}
                >
                    {play ? (
                        <PauseIcon fontSize="small" />
                    ) : (
                        <PlayArrowIcon fontSize="small" />
                    )}
                </IconButton>
            </Tooltip>

            <Box className={classes.duration}>
                <Tooltip
                    title={`Previous ${categoryPrimary}`}
                    aria-label={`previous ${categoryPrimary}`}
                    arrow
                >
                    <IconButton
                        color="inherit"
                        aria-label={`previous ${categoryPrimary} icon`}
                        onClick={() => handleIndexChange(index > 0 ? index - 1 : playerLabelsLength - 1)}
                        className={classes.icon}
                    >
                        <SkipPreviousIcon fontSize="small" />
                    </IconButton>
                </Tooltip>

                {slideshow.onPlayerSecondaryPreviousButtonClick ? (
                    <Tooltip
                        title={`Previous ${categorySecondary}`}
                        aria-label={`previous ${categorySecondary}`}
                        arrow
                    >
                        <IconButton
                            color="inherit"
                            aria-label={`previous ${categorySecondary} icon`}
                            onClick={() => slideshow.onPlayerSecondaryPreviousButtonClick?.(playerLabelsLength)}
                            className={classes.icon}
                        >
                            <FastRewindIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                ) : undefined}

                <Tooltip
                    title={`${categoryPrimary} ${index + 1} out of ${playerLabelsLength}`}
                    aria-label="slide number"
                    arrow
                >
                    <Typography variant="body2" style={{ margin: "0 1em" }}>
                        {index + 1} / {playerLabelsLength}
                    </Typography>
                </Tooltip>

                {slideshow.onPlayerSecondaryNextButtonClick ? (
                    <Tooltip
                        title={`Next ${categorySecondary}`}
                        aria-label={`next ${categorySecondary}`}
                        arrow
                    >
                        <IconButton
                            color="inherit"
                            aria-label={`next ${categorySecondary} icon`}
                            onClick={() => slideshow.onPlayerSecondaryNextButtonClick?.(playerLabelsLength)}
                            className={classes.icon}
                        >
                            <FastForwardIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                ) : undefined}

                <Tooltip
                    title={`Next ${categoryPrimary}`}
                    aria-label={`next ${categoryPrimary}`}
                    arrow
                >
                    <IconButton
                        color="inherit"
                        aria-label={`next ${categoryPrimary} icon`}
                        onClick={() => handleIndexChange(index < playerLabelsLength - 1 ? index + 1 : 0)}
                        className={classes.icon}
                    >
                        <SkipNextIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Box>
        </>
    );
};
