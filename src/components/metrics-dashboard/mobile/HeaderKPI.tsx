import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box, Typography } from '@mui/material';
import * as MetricTypes from "../metric-types";
import { fontSizes } from "../../../styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            color: "rgba(255, 255, 255, .87)",
            textTransform: "uppercase",
            fontWeight: "bold",
        },
        spaceBetween: {
            display: "flex",
            justifyContent: "space-between",
        },
        value: {
            color: "rgba(255, 255, 255, .87)",
            textAlign: "right",
            fontWeight: "bold",
        },
        delta: {
            fontWeight: "bold",
            textAlign: "right",
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
// TODO: Fix font sizes
export const HeaderKPI: React.FC<Props> = ({ name, item }) => {
    const classes = useStyles();
    const { tile } = item;

    return (
        <Box className={classes.spaceBetween}>
            <Typography fontSize={fontSizes.h3} className={classes.header}>
                {name}
            </Typography>
            <Box>
                <Typography fontSize={fontSizes.h3} noWrap className={classes.value}>
                    {tile?.primary
                        ? (tile?.primaryFormatted ?? tile.primary)
                        : 0}
                </Typography>

                <Typography
                    noWrap
                    className={classNames(classes.delta, {
                        [classes.deltaNeg]: tile?.primaryIsBad,
                        [classes.deltaPos]: tile?.primaryIsGood,
                    })}
                >
                    {tile?.primaryDeltaFormatted ?? tile?.primaryDelta ?? "-"}
                </Typography>
            </Box>
        </Box>
    );
};
