import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, IconButton, Typography, Tooltip, Grid, Theme, useMediaQuery } from '@mui/material';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            display: "flex",
            alignItems: "center",
            columnGap: "10px"
        },
        playerInput: {
            textAlign: "right",
            fontSize: "14px",
        },
        iconContainer: {
            width: "10px !important",
        },
        iconSm: {
            width: 20,
            height: 20,
        },
    })
);

interface Props {
    duration: number;
    setDuration: React.Dispatch<React.SetStateAction<number>>;
}

export const SlideDurationInput: React.FC<Props> = ({ duration, setDuration }) => {
    const classes = useStyles();
    const hiddenLgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
    const minVal = 5000;
    const maxVal = 60000;

    return (
        <Box className={classes.container}>
            {!hiddenLgDown ? (
                <Typography
                    className={classes.playerInput}>
                    Slide duration: {duration / 1000}s
                </Typography>
            ) : (
                <Typography variant="body2" className={classes.playerInput}>
                    Duration: {duration / 1000}s
                </Typography>
            )}

            <Grid container direction="column" className={classes.iconContainer}>
                <Tooltip
                    title="5 seconds more"
                    aria-label="slide duration more"
                    placement="right"
                    arrow
                >
                    <IconButton
                        color="inherit"
                        aria-label="next"
                        onClick={() =>
                            setDuration((prev: number) =>
                                prev < maxVal ? prev + minVal : prev
                            )
                        }
                        className={classes.iconSm}
                    >
                        <KeyboardArrowUpIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Tooltip
                    title="5 seconds less"
                    aria-label="slide duration less"
                    placement="right"
                    arrow
                >
                    <IconButton
                        color="inherit"
                        aria-label="next"
                        onClick={() =>
                            setDuration((prev: number) =>
                                prev > minVal ? prev - minVal : prev
                            )
                        }
                        className={classes.iconSm}
                    >
                        <KeyboardArrowDownIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Grid>
        </Box>
    );
};
