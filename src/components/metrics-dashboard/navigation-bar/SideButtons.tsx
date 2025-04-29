import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Typography, Tooltip } from '@mui/material';
import { animations } from "../../../styles/animations";
import { fontSizes } from "../../../styles/themes";
import { Header } from "../../../types/types";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
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
        container: {
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            height: "100%",
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
    header: Header;
    onSequenceClick?: (index: number) => void;
    sequences?: string[];
    currentSequence: string;
}

export const SideButtons: React.FC<Props> = ({
    header,
    onSequenceClick,
    sequences,
    currentSequence
}) => {
    const classes = useStyles();
    const onSeqClick = (i: number) => () => onSequenceClick?.(i);

    return (
        <div className={classes.container}>
            {header?.titleSecondaryShort && (
                <Tooltip
                    title={header.titleSecondary || header.titleSecondaryShort}
                    placement="top"
                    arrow
                >
                    <Typography
                        fontSize={fontSizes.h3}
                        color="inherit"
                        component="span"
                        className={classes.breadCrumbsText}
                    >
                        {header.titleSecondaryShort}
                    </Typography>
                </Tooltip>
            )}

            {sequences?.map((sequence, i) => (
                <Tooltip
                    key={i}
                    title={sequence === currentSequence ? sequence : `Change to ${sequence}`}
                    placement="top"
                    arrow
                >
                    <Typography
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
                    </Typography>
                </Tooltip>
            )) ?? null}
        </div>
    );
}
