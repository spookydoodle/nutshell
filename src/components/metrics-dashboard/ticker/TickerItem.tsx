import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { fontSizes } from "../../../styles/themes";
import * as Types from "../../../types/types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textContainer: {
            marginTop: "4vh",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            display: "inline-block",
        },
        tickerText: {
            fontSize: fontSizes.h2,
            [theme.breakpoints.down("sm")]: {
                fontSize: fontSizes.h3,
            },
        },
        characteristic1: {
            fontWeight: "bold",
        },
        colSecondary: {
            color: theme.palette.secondary.main,
        },
        KPI: {
            fontWeight: "bold",
        },
        deltaPos: {
            fontWeight: "bold",
            color: theme.palette.success.main,
        },
        deltaNeg: {
            fontWeight: "bold",
            color: theme.palette.error.main,
        },
        separator: {
            backgroundColor: "rgba(255, 255, 255, .87)",
            borderRadius: "50%",
            width: "5px",
            height: "5px",
            marginLeft: "10px",
            marginRight: "10px",
            marginBottom: "1vh",
            display: "inline-block",
        }
    })
);

interface Props {
    categoryIndex: number;
    itemIndex: number;
    primaryCategory: string;
    secondaryCategory: string;
    value: Types.Value;
}

export const TickerItem: React.FC<Props> = ({ categoryIndex, itemIndex, primaryCategory, secondaryCategory, value }) => {
    const classes = useStyles();

    const showPrimaryCategory = React.useMemo(
        () => categoryIndex === 0 && itemIndex === 0,
        [categoryIndex, itemIndex]
    );

    const showSecondaryCategory = React.useMemo(
        () => itemIndex === 0,
        [categoryIndex, itemIndex]
    );

    return (
        <p className={classNames(classes.textContainer, classes.tickerText)}>
            {showPrimaryCategory ? (
                <span className={classNames(classes.characteristic1, classes.colSecondary, classes.tickerText)}>
                    {`${primaryCategory} // `}
                </span>
            ) : null}

            {showSecondaryCategory && (
                <span className={classNames(classes.characteristic1, classes.colSecondary, classes.tickerText)}>
                    {`${secondaryCategory}: `}
                </span>
            )}

            {`${value.name}: `}

            {value?.primary ? (
                <span className={classNames(classes.KPI, classes.tickerText)}>
                    {value?.primaryFormatted ?? value.primary}
                    {(value?.primaryDelta !== undefined || value?.primaryDeltaFormatted) ? (
                        <span
                            className={classNames(classes.tickerText, {
                                [classes.deltaPos]: value?.primaryIsGood,
                                [classes.deltaNeg]: value?.primaryIsBad,
                            })}
                        >
                            {` (${value?.primaryDeltaFormatted ?? value.primaryDelta})`}
                        </span>
                    ) : null}
                </span>
            ) : null}

            <span className={classNames(classes.separator, classes.tickerText)} />
        </p>
    );
};
