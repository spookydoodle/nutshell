import React from "react";
import classNames from "classnames";
import * as MUI from "@mui/material";
import { useStyles } from "./styles";
import { BarProps } from "./types";

export const BarChartRowAbsDeltaMulti: React.FC<BarProps> = ({
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
    absPosition,
    labelSize = "md",
}) => {
    const classes = useStyles();

    const textClassName = React.useMemo(
        () => labelSize === "sm" ? classes.textSm: classes.textMd,
        [labelSize]
    );

    return value ? (
        <MUI.Grid
            id={`chart-row-${category}-${i}`}
            container
            item
            xs={12}
            direction="row"
            className={classNames(classes.row, { [classes.hide]: filler })}
        >
            <MUI.Grid container item xs={5}>
                <MUI.Typography
                    component="span"
                    noWrap
                    className={classNames(classes.labels, textClassName, classes.paddingLeft)}
                >
                    <MUI.Typography
                        component="span"
                        color="textSecondary"
                        className={`${classes.labels} ${textClassName
                            } ${classes.rank} ${classes.paddingLeft}`}
                    >{`${i + 1}. `}</MUI.Typography>
                    {category}
                </MUI.Typography>
            </MUI.Grid>

            <MUI.Grid item container xs={7}>
                <MUI.Grid
                    item
                    xs={absPosition === "behind-bar" ? 5 : 4}
                    className={classes.barContainer}
                >
                    <MUI.Box
                        width={`${(value / max) * (absPosition === "behind-bar" ? 50 : 100)}%`}
                        className={classNames(classes.bar, classes.neutralPrimary)}
                    />

                    {absPosition === "behind-bar" && (
                        <MUI.Typography
                            component="span"
                            // noWrap
                            className={classNames(classes.labels, classes.label, textClassName)}
                        >
                            {valueFormatted ? valueFormatted : value}
                        </MUI.Typography>
                    )}
                </MUI.Grid>

                {absPosition === "align-column" && (
                    <MUI.Grid item container justifyContent="flex-start" xs={1}>
                        <MUI.Typography noWrap className={classNames(classes.labels, classes.label, textClassName)}>
                            {valueFormatted ? valueFormatted : value}
                        </MUI.Typography>
                    </MUI.Grid>
                )}

                <MUI.Grid container item xs={12} lg={7} className={classes.barContainer}>
                    {/* Negative delta */}
                    <MUI.Grid item container justifyContent="flex-end" xs={6}>
                        {delta && delta < 0 ? (
                            <>
                                <MUI.Typography
                                    component="span"
                                    noWrap
                                    className={classNames(classes.labels, classes.delta, textClassName, {
                                        [classes.deltaNeg]: isDeltaBad,
                                        [classes.deltaMax]: delta <= -1000
                                    })}
                                >
                                    {deltaFormatted ? deltaFormatted : delta}
                                </MUI.Typography>

                                <MUI.Box
                                    width={`${(Math.abs(delta < -100 ? -100 : delta) / 100) * 50}%`}
                                    className={classNames(classes.bar, delta < -100 ? classes.negExceed : classes.neg, classes.marginLeft)}
                                />
                            </>
                        ) : (
                            <></>
                        )}
                    </MUI.Grid>

                    {/* Positive delta */}
                    <MUI.Grid item container justifyContent="flex-start" xs={6}>
                        {delta && delta > 0 ? (
                            <>
                                <MUI.Box
                                    width={`${(Math.abs(delta > 100 ? 100 : delta) / 100) * 50}%`}
                                    className={`${classes.bar} ${delta > 100 ? classes.posExceed : classes.pos
                                        } ${classes.marginRight}`}
                                />

                                <MUI.Typography
                                    component="span"
                                    noWrap
                                    className={`${classes.labels} ${classes.delta} ${isDeltaGood ? classes.deltaPos : undefined
                                        } ${delta >= 1000 ? classes.deltaMax : ""}`}
                                >
                                    {deltaFormatted ? deltaFormatted : delta}
                                </MUI.Typography>
                            </>
                        ) : (
                            <></>
                        )}
                    </MUI.Grid>
                </MUI.Grid>
            </MUI.Grid>
        </MUI.Grid>
    ) : (
        <div></div>
    );
};
