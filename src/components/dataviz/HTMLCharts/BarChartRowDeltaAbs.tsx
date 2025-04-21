import React from "react";
import classNames from "classnames";
import { Grid, Typography, Box } from "@mui/material";
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
        () => labelSize === "sm" ? classes.textSm : classes.textMd,
        [labelSize]
    );

    return value ? (
        <Grid
            id={`chart-row-${i}`}
            item
            container
            direction="row"
            className={classNames(classes.row, { [classes.hide]: filler })}
        >
            <Grid container item xs={6} justifyContent="space-between">
                <Grid item container xs={9}>
                    <Typography
                        component="span"
                        noWrap
                        className={classNames(classes.labels, textClassName)}
                    >
                        <Typography
                            component="span"
                            color="textSecondary"
                            className={classNames(classes.labels, textClassName, classes.rank)}
                        >{`${i + 1}. `}</Typography>
                        {category}
                    </Typography>
                </Grid>

                {delta && (
                    <Grid item xs={3} container justifyContent="flex-end">
                        <Typography
                            component="span"
                            noWrap
                            className={classNames(classes.labels, classes.delta, textClassName, {
                                [classes.deltaPos]: isDeltaGood,
                                [classes.deltaNeg]: isDeltaBad,
                                [classes.deltaMax]: delta <= -1000 || delta >= 1000
                            })}
                        >
                            {deltaFormatted ? deltaFormatted : delta ? delta : undefined}
                        </Typography>
                    </Grid>
                )}
            </Grid>

            <Grid item xs={3} className={classes.barContainer}>
                <Box
                    width={`${(value / max) * 100}%`}
                    className={classNames(classes.bar, classes.neutralPrimary)}
                />
            </Grid>

            <Grid item container justifyContent="flex-start" xs={3}>
                <Typography noWrap className={classNames(classes.labels, classes.label, textClassName)}>
                    {valueFormatted ? valueFormatted : value}
                </Typography>
            </Grid>
        </Grid>
    ) : (
        <div></div>
    );
};
