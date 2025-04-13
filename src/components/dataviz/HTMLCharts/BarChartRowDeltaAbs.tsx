import React from "react";
import classNames from "classnames";
import * as MUI from "@mui/material";
import { useStyles } from "./styles";
import { BarProps } from "./types";

export const BarChartRowDeltaAbs: React.FC<BarProps> = ({
    i,
    category,
    filler,
    value,
    valueFormatted,
    delta,
    deltaFormatted,
    isDeltaGood,
    isDeltaBad,
    min,
    max,
    labelSize = "md",
}) => {
    const classes = useStyles();

    const textClassName = React.useMemo(
        () => labelSize === "sm" ? classes.textSm: classes.textMd,
        [labelSize]
    );

    return value ? (
        <MUI.Grid
            id={`chart-row-${i}`}
            item
            container
            direction="row"
            className={classNames(classes.row, { [classes.hide]: filler })}
        >
            <MUI.Grid container item xs={6} justifyContent="space-between">
                <MUI.Grid item container xs={9}>
                    <MUI.Typography
                        component="span"
                        noWrap
                        className={classNames(classes.labels, textClassName)}
                    >
                        <MUI.Typography
                            component="span"
                            color="textSecondary"
                            className={classNames(classes.labels, textClassName, classes.rank)}
                        >{`${i + 1}. `}</MUI.Typography>
                        {category}
                    </MUI.Typography>
                </MUI.Grid>

                {delta && (
                    <MUI.Grid item xs={3} container justifyContent="flex-end">
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

            <MUI.Grid item xs={3} className={classes.barContainer}>
                <MUI.Box
                    width={`${(value / max) * 100}%`}
                    className={classNames(classes.bar, classes.neutralPrimary)}
                />
            </MUI.Grid>

            <MUI.Grid item container justifyContent="flex-start" xs={3}>
                <MUI.Typography noWrap className={classNames(classes.labels, classes.label, textClassName)}>
                    {valueFormatted ? valueFormatted : value}
                </MUI.Typography>
            </MUI.Grid>
        </MUI.Grid>
    ) : (
        <div></div>
    );
};
