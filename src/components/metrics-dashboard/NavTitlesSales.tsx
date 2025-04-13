import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import * as MUI from '@mui/material';
import { animations } from "../../styles/animations";
import { fontSizes } from "../../styles/themes";
import { BreadCrumbs } from "./BreadCrumbs";
import { Header } from "../../types/types";

const useStyles = makeStyles((theme: MUI.Theme) =>
    createStyles({
        cardHeader: {
            marginTop: "2vh !important",
            paddingLeft: "5px",
            paddingRight: "5px",
            color: "rgba(255, 255, 255, .6)",
            opacity: 0,
            transform: "translateY(2em)",
            animation: `$no-transform 2s 3s cubic-bezier(0, .5, 0, 1) forwards`,
        },
        cardHeaderTitle: {
            textTransform: "uppercase",
            fontSize: fontSizes.h2,
            fontWeight: "bold",
            [theme.breakpoints.down("md")]: {
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
            columnGap: "5px"
        },
        breadCrumbsText: {
            fontSize: fontSizes.h2,
            [theme.breakpoints.down("md")]: {
                fontSize: fontSizes.h3,
            },
            [theme.breakpoints.only("xs")]: {
                fontSize: fontSizes.h4,
            },
            color: "white",
            marginRight: ".5em",
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
    onSequenceClick?: (index: number) => void;
    index: number;
    seqLen: number;
    onBreadClick: (index: number) => void;
    sequences?: Array<string>;
    currentSequence: string;
    primaryMeasureName: string;
}

export const NavTitlesSales = ({
    animationsInitialized = true,
    current,
    // next,
    play = true,
    onSequenceClick,
    index,
    seqLen,
    onBreadClick,
    sequences,
    currentSequence,
    primaryMeasureName
}: Props) => {
    const classes = useStyles();

    const onSeqClick = (i: number) => () => onSequenceClick?.(i);

    return (
        <MUI.Grid
            item
            container
            justifyContent="space-between"
            xs={12}
            className={classNames(classes.cardHeader, { [classes.pauseAnim]: animationsInitialized })}
        >
            <MUI.Grid item xs={12} sm={8} lg={4} className={classNames(classes.cardHeaderTitle, classes.underline)}>
                <MUI.Typography
                    fontSize={fontSizes.h3}
                    color="inherit"
                    component="span"
                    className={classes.cardHeaderTitle}
                    noWrap
                >
                    {current.titlePrimary}
                </MUI.Typography>
                {current?.titleSecondary && (
                    <>
                        <MUI.Typography
                            fontSize={fontSizes.h3}
                            color="secondary"
                            component="span"
                            className={classes.cardHeaderTitle}
                            noWrap
                        >
                            {" // "}
                        </MUI.Typography>
                        <MUI.Typography
                            fontSize={fontSizes.h3}
                            color="inherit"
                            component="span"
                            className={classes.cardHeaderTitle}
                            noWrap
                        >
                            {current.titleSecondary}
                        </MUI.Typography>
                    </>
                )}
            </MUI.Grid>

            <MUI.Hidden lgDown>
                <MUI.Grid item xs={4}>
                    <BreadCrumbs
                        animationsInitialized={animationsInitialized}
                        play={play}
                        index={index % seqLen < 3 ? index % seqLen : 2}
                        color="white"
                        onBreadClick={onBreadClick}
                        primaryMeasureName={primaryMeasureName}
                    />
                </MUI.Grid>
            </MUI.Hidden>

            <MUI.Hidden only="xs">
                <MUI.Grid item xs={4} className={classes.breadCrumbsContainer}>
                    {current?.titleSecondaryShort && (
                        <MUI.Tooltip
                            title={current.titleSecondary || current.titleSecondaryShort}
                            placement="top"
                            arrow
                        >
                            <MUI.Typography
                            fontSize={fontSizes.h3}
                                color="inherit"
                                component="span"
                                className={classes.breadCrumbsText}
                            >
                                {current.titleSecondaryShort}
                            </MUI.Typography>
                        </MUI.Tooltip>
                    )}

                    {sequences &&
                        sequences.map((sequence, i) => (
                            <MUI.Tooltip
                                key={i}
                                title={sequence === currentSequence ? sequence : `Change to ${sequence}`}
                                placement="top"
                                arrow
                            >
                                <MUI.Typography
                                    fontSize={fontSizes.h3}
                                    color="inherit"
                                    component="span"
                                    className={classNames(
                                        classes.breadCrumbsText,
                                        sequence === currentSequence
                                            ? classes.active
                                            : classes.inactive
                                    )}
                                    onClick={onSeqClick(i)}
                                >
                                    {sequence}
                                </MUI.Typography>
                            </MUI.Tooltip>
                        ))}
                </MUI.Grid>
            </MUI.Hidden>
        </MUI.Grid>
    );
};
