import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import * as MUI from '@mui/material';
import * as MetricTypes from "./types";

const useStyles = makeStyles((theme: MUI.Theme) =>
    createStyles({
        header: {
            color: "rgba(255, 255, 255, .87)",
            fontSize: "1.4rem",
            textTransform: "uppercase",
            fontWeight: "bold",
        },
        spaceBetween: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
        },
        value: {
            color: "rgba(255, 255, 255, .87)",
            textAlign: "right",
            fontWeight: "bold",
            fontSize: "1.4rem",
        },
        delta: {
            fontWeight: "bold",
            textAlign: "right",
            fontSize: "1rem",
        },
        deltaPos: {
            color: theme.palette.success.main,
        },
        deltaNeg: {
            color: theme.palette.error.main,
        },
    })
);

interface Props {
    name: string;
    item: MetricTypes.Item;
}

export const HeaderKPI: React.FC<Props> = ({ name, item }) => {
    const classes = useStyles();
    const { tile } = item;

    return (
        <MUI.Box className={classes.spaceBetween}>
            <MUI.Typography className={classes.header} paragraph>
                {name}
            </MUI.Typography>
            <MUI.Box>
                <MUI.Typography noWrap className={classes.value}>
                    {tile?.primary
                        ? (tile?.primaryFormatted ?? tile.primary)
                        : 0}
                </MUI.Typography>

                <MUI.Typography
                    noWrap
                    className={classNames(classes.delta, {
                        [classes.deltaNeg]: tile?.primaryIsBad,
                        [classes.deltaPos]: tile?.primaryIsGood,
                    })}
                >
                    {tile?.primaryDeltaFormatted ?? tile?.primaryDelta ?? "-"}
                </MUI.Typography>
            </MUI.Box>
        </MUI.Box>
    );
};
