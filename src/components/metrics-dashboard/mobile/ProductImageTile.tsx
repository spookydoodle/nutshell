import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography, Theme } from '@mui/material';
import { ProductImage } from "../ProductImage";
import * as MetricTypes from "../types";
import { fontSizes } from "../../../styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        borderRadiusAll: {
            borderRadius: "4px",
        },
        borderRadiusBottom: {
            borderRadius: "0 0 4px 4px",
        },
        borderRadiusTop: {
            borderRadius: "4px 4px 0 0",
        },
        tile: {
            width: "120px",
            height: "120px",
            backgroundColor: "rgba(255, 255, 255, .87)",
            padding: "10px",
            marginBottom: "8px",
            position: 'relative'
        },
        tileContainer: {
            width: "120px",
            display: "flex",
            flexDirection: "column",
            marginRight: theme.spacing(2),
        },
        tileTitle: {
            color: "rgba(255, 255, 255, .76)"
        },
        tileSubtitle: {
            color: "rgba(255, 255, 255, .6)"
        },
        flexAlignBottom: {
            marginTop: "auto",
        },
    })
);

interface Props {
    value: MetricTypes.Datum;
    i: number;
}

export const ProductImageTile: React.FC<Props> = ({ value, i }) => {
    const classes = useStyles();

    return (
        <Box className={classes.tileContainer}>
            <Box className={classNames(classes.tile, classes.borderRadiusAll)}>
                <ProductImage value={value} i={i} size='full-size' />
            </Box>

            <Typography fontSize={fontSizes.h5} className={classes.tileTitle} gutterBottom>
                #{i + 1} {value.attributePrimary?.text}
            </Typography>
            <Typography fontSize={fontSizes.h6} className={classNames(classes.tileSubtitle, classes.flexAlignBottom)}>
                {value?.primaryFormatted ?? value.primary},{" "}{value?.secondaryFormatted ?? value.secondary}
            </Typography>
        </Box>
    );
};
