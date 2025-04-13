import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import * as MUI from '@mui/material';
import { fontSizes } from "../../../styles/themes";
import { animations } from "../../../styles/animations";
import { Header } from "../../../types/types";

const useStyles = makeStyles((theme: MUI.Theme) =>
    createStyles({
        cardHeader: {
            marginTop: "2vh !important",
            paddingLeft: "10px",
            paddingRight: "10px",
            color: "rgba(255, 255, 255, .6)",
            opacity: 0,
            transform: "translateY(2em)",
            animation: `$no-transform 2s 3s cubic-bezier(0, .5, 0, 1) forwards`,
        },
        cardHeaderTitle: {
            textTransform: "uppercase",
            fontSize: fontSizes.h2,
            fontWeight: "bold",
            [theme.breakpoints.down("sm")]: {
                fontSize: fontSizes.h3,
            },
            [theme.breakpoints.only("xs")]: {
                fontSize: fontSizes.h4,
            },
            marginTop: "1vh",
            marginBottom: "1vh",
            "&$underline": {
                position: "relative",
                color: "rgba(255, 255, 255, .87)",
                "&::after": {
                    content: "''",
                    position: "absolute",
                    width: "2.5em",
                    borderBottom: ".15em solid",
                    borderBottomColor: theme.palette.secondary.main,
                    left: 0,
                    bottom: "-.1em",
                    zIndex: 10,
                },
            },
        },
        underline: {},
        breadCrumbsContainer: {
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            columnGap: "10px"
        },
        breadCrumbsText: {
            fontSize: fontSizes.h2,
            [theme.breakpoints.down("sm")]: {
                fontSize: fontSizes.h3,
            },
            [theme.breakpoints.only("xs")]: {
                fontSize: fontSizes.h4,
            },
            color: "white",
            marginRight: "5px",
            "&$active": {
                opacity: 1,
            },
            "&$inactive": {
                opacity: 0.6,
                cursor: "pointer",
            },
            "&:hover": {
                opacity: 1,
            },
        },
        active: {},
        inactive: {},
        ...animations,
    })
);

interface Props {
    animationsInitialized?: boolean;
    current: Header;
    next: Header;
    play?: boolean;
    index: number;
    setIndex: (index: number) => void;
    seqLen: number;
    onBreadClick: (index: number) => void;
    sequences?: Array<string>;
    currentSequence: string;
}

// TODO: Merge with navtitlessales
export const NavTitles: React.FC<Props> = ({
    animationsInitialized = true,
    current,
    // next,
    // play = true,
    // index,
    setIndex,
    // seqLen,
    // onBreadClick,
    sequences,
    currentSequence,
}) => {
    const classes = useStyles();

    return (
        <MUI.Grid
            item
            container
            justifyContent="space-between"
            xs={12}
            className={classNames(classes.cardHeader, { [classes.pauseAnim]: animationsInitialized })}
        >
            <MUI.Grid item xs={12} sm={8} className={classNames(classes.cardHeaderTitle, classes.underline)}>
                <MUI.Typography fontSize={fontSizes.h2} color="inherit" component="span" className={classes.cardHeaderTitle} noWrap>
                    {current.titlePrimary}
                </MUI.Typography>
                {current?.titleSecondary && (
                    <>
                        <MUI.Typography fontSize={fontSizes.h2} color="secondary" component="span" className={classes.cardHeaderTitle}>
                            {" // "}
                        </MUI.Typography>
                        <MUI.Typography fontSize={fontSizes.h2} color="inherit" component="span" className={classes.cardHeaderTitle} noWrap>
                            {current.titleSecondary}
                        </MUI.Typography>
                    </>
                )}
            </MUI.Grid>

            <MUI.Hidden only="xs">
                <MUI.Grid item xs={4} className={classes.breadCrumbsContainer}>
                    {current?.titleSecondaryShort && (
                        <MUI.Tooltip title={current.titleSecondary || current.titleSecondaryShort} placement="top" arrow>
                            <MUI.Typography fontSize={fontSizes.h2} color="inherit" component="span" className={classes.breadCrumbsText}>
                                {current.titleSecondaryShort}
                            </MUI.Typography>
                        </MUI.Tooltip>
                    )}

                    {sequences?.map((sequence, i) => (
                        <MUI.Tooltip
                            key={i}
                            title={sequence === currentSequence ? sequence : `Change to ${sequence}`}
                            placement="top"
                            arrow
                        >
                            <MUI.Typography
                                fontSize={fontSizes.h2}
                                color="inherit"
                                component="span"
                                className={classNames(classes.breadCrumbsText, sequence === currentSequence ? classes.active : classes.inactive)}
                                onClick={() => setIndex(i === 0 ? 0 : 6)} // TODO: Implement correct logic
                            >
                                {sequence}
                            </MUI.Typography>
                        </MUI.Tooltip>
                    )) ?? null}
                </MUI.Grid>
            </MUI.Hidden>
        </MUI.Grid>
    );
};
