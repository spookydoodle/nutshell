import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box, Typography } from '@mui/material';
import * as MetricTypes from "../types";
import { fontSizes } from "../../../styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            textAlign: "center",
            borderRadius: "2px 2px 0 0",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "10px",
        },
        title: {
            fontWeight: "bold"
        },
        value: {
            fontWeight: "bold",
        },
        delta: {
            fontWeight: "bold",
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
    name?: string;
    data?: MetricTypes.Datum;
}

export const MobileTile: React.FC<Props> = ({ name, data }) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            {name && (
                <Typography fontSize={fontSizes.h6} noWrap className={classes.title}>
                    {name?.toUpperCase()}
                </Typography>
            )}

            <Typography fontSize={fontSizes.h6} noWrap className={classes.value}>
                {data?.primary
                    ? data?.primaryFormatted
                        ? data.primaryFormatted
                        : data.primary
                    : 0}
            </Typography>

            <Typography
                fontSize={fontSizes.h6}
                noWrap
                className={classNames(classes.delta, {
                    [classes.deltaNeg]: data?.primaryIsBad,
                    [classes.deltaPos]: data?.primaryIsGood,
                })}
            >
                {data?.primaryDeltaFormatted
                    ? data.primaryDeltaFormatted
                    : data?.primaryDelta || "-"}
            </Typography>
        </Box>
    );
};
