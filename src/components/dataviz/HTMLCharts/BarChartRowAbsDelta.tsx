import React from "react";
import classNames from "classnames";
import * as MUI from "@mui/material";
import { useStyles } from "./styles";
import { BarProps } from "./types";

export const BarChartRowAbsDelta: React.FC<BarProps> = ({
    i,
    category,
    filler,
    value,
    valueFormatted,
    delta,
    deltaFormatted,
    isDeltaGood,
    isDeltaBad,
    max,
    min,
    labelSize = "md",
}) => {
    const classes = useStyles();

    const textClassName = React.useMemo(
        () => labelSize === "sm" ? classes.textSm: classes.textMd,
        [labelSize]
    );

    return value !== undefined ? (
        <MUI.Grid
            id={`chart-row-${category}-${i}`}
            item
            container
            direction="row"
            className={classNames(classes.row, { [classes.hide]: filler })}
        >
            <MUI.Grid container item xs={6} justifyContent="space-between">
                <MUI.Grid item container xs={7}>
                    <MUI.Typography
                        component="span"
                        noWrap
                        className={classNames(classes.labels, textClassName)}
                    >
                        <MUI.Typography
                            component="span"
                            color="textSecondary"
                            className={classNames(classes.labels, textClassName, classes.rank)}
                        >
                            {`${i + 1}. `}
                        </MUI.Typography>
                        {category}
                    </MUI.Typography>
                </MUI.Grid>

                <MUI.Grid item container justifyContent="flex-start" xs={5}>
                    <MUI.Typography noWrap className={classNames(classes.labels, classes.label, textClassName)}>
                        {valueFormatted ? valueFormatted : value}
                    </MUI.Typography>
                </MUI.Grid>
            </MUI.Grid>

            <MUI.Grid
                item
                xs={4}
                className={classNames(classes.barContainer, classes.padding)}
            >
                {/* For negative bars */}
                {min < 0 && (
                    <MUI.Box
                        width={`${(Math.abs(min) / (Math.abs(min) + (max > 0 ? max : 0))) * 100}%`}
                        className={classes.barContainer}
                    >
                        <MUI.Box
                            width={`${((value < 0 ? value : min) / min) * 100}%`}
                            className={classNames(classes.bar, classes.right, { [classes.neutralSecondary]: value < 0 })}
                        />
                    </MUI.Box>
                )}

                {/* For positive bars */}
                {max > 0 && (
                    <MUI.Box
                        width={`${(max / ((min < 0 ? Math.abs(min) : 0) + max)) * 100}%`}
                        className={classes.barContainer}
                    >
                        <MUI.Box
                            width={`${((value >= 0 ? value : max) / max) * 100}%`}
                            className={`${classes.bar} ${value >= 0 ? classes.neutralPrimary : undefined
                                }`}
                        />
                    </MUI.Box>
                )}
            </MUI.Grid>

            {delta && (
                <MUI.Grid item xs={2} container justifyContent="flex-end">
                    <MUI.Typography
                        component="span"
                        noWrap
                        className={classNames(classes.labels, classes.delta, textClassName, {
                            [classes.deltaPos]: isDeltaGood,
                            [classes.deltaNeg]: isDeltaBad,
                            [classes.deltaMax]: delta <= -1000 || delta >= 1000
                        })}
                    >
                        {deltaFormatted ? deltaFormatted : delta ? delta : undefined}
                    </MUI.Typography>
                </MUI.Grid>
            )}
        </MUI.Grid>
    ) : null;
};
