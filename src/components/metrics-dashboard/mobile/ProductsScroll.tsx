import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Theme, Typography, useTheme } from '@mui/material';
import { ProductImageTile } from "./ProductImageTile";
import * as MetricTypes from "../metric-types";
import { fontSizes } from "../../../styles";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        horizontalScroll: {
            display: "flex",
            columnGap: "20px",
            width: "100%",
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
                display: "none"
            },
        },
        header: {
            color: "rgba(255, 255, 255, .87)",
            fontWeight: "bold",
        },
    })
);

interface Props {
    title: string;
    values: MetricTypes.Datum[];
}

export const ProductsScroll: React.FC<Props> = ({ title, values }) => {
    const classes = useStyles();

    return (
        <Box>
            <Typography fontSize={fontSizes.h4} className={classes.header} paragraph>
                {title}
            </Typography>
            <Box onTouchMove={(e) => e.stopPropagation()} className={classes.horizontalScroll}>
                {values.map((value, i) => (
                    <Box key={`slide-${value.name}`}>
                        <ProductImageTile value={value} i={i} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
