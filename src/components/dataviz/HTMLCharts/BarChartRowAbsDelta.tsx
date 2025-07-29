import React from "react";
import classNames from "classnames";
import { Grid, Typography, Box } from "@mui/material";
import { useStyles } from "./styles";

export interface BarProps {
    i: number;
    category: string;
    filler: boolean;
    value?: number;
    valueFormatted?: string;
    delta?: number;
    deltaFormatted?: string;
    isDeltaGood?: boolean;
    isDeltaBad?: boolean;
    max: number;
    min: number;
    rankColor?: "primary" | "secondary";
    labelSize?: "sm" | "md";
    absPosition?: "behind-bar" | "align-column";
}

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
        () => labelSize === "sm" ? classes.textSm : classes.textMd,
        [labelSize]
    );

    return value !== undefined ? (
        <Grid
            id={`chart-row-${category}-${i}`}
            item
            container
            direction="row"
            className={classNames(classes.row, { [classes.hide]: filler })}
        >
            <Grid container item xs={6} justifyContent="space-between">
                <Grid item container xs={7}>
                    <Typography
                        component="span"
                        noWrap
                        title={`${i + 1}. ${category}`}
                        className={classNames(classes.labels, textClassName)}
                    >
                        <Typography
                            component="span"
                            color="textSecondary"
                            className={classNames(classes.labels, textClassName, classes.rank)}
                        >
                            {`${i + 1}. `}
                        </Typography>
                        {category}
                    </Typography>
                </Grid>

                <Grid item container justifyContent="flex-start" xs={5}>
                    <Typography noWrap className={classNames(classes.labels, classes.label, textClassName)}>
                        {valueFormatted ? valueFormatted : value}
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                item
                xs={4}
                className={classNames(classes.barContainer, classes.padding)}
            >
                {/* For negative bars */}
                {min < 0 && (
                    <Box
                        width={`${(Math.abs(min) / (Math.abs(min) + (max > 0 ? max : 0))) * 100}%`}
                        className={classes.barContainer}
                    >
                        <Box
                            width={`${((value < 0 ? value : min) / min) * 100}%`}
                            className={classNames(classes.bar, classes.right, { [classes.neutralSecondary]: value < 0 })}
                        />
                    </Box>
                )}

                {/* For positive bars */}
                {max > 0 && (
                    <Box
                        width={`${(max / ((min < 0 ? Math.abs(min) : 0) + max)) * 100}%`}
                        className={classes.barContainer}
                    >
                        <Box
                            width={`${((value >= 0 ? value : max) / max) * 100}%`}
                            className={`${classes.bar} ${value >= 0 ? classes.neutralPrimary : undefined
                                }`}
                        />
                    </Box>
                )}
            </Grid>

            {delta && (
                <Grid item xs={2} container justifyContent="flex-end">
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
    ) : null;
};
