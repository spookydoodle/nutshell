import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import * as MUI from '@mui/material';
import ProductTileCol from "./ProductTileCol";
import ProductTileRow from "./ProductTileRow";
import * as MetricTypes from "./types";
import { fontSizes } from "../../styles/themes";

const useStyles = makeStyles((_theme: MUI.Theme) =>
    createStyles({
        topTitle: {
            fontSize: fontSizes.h5,
            fontWeight: "bold",
            paddingLeft: "1em",
            paddingTop: ".5vh",
            paddingBottom: "1vh",
            textTransform: "uppercase",
        },
    })
);

interface Props {
    title?: string;
    data: MetricTypes.Datum[];
    size?: "md" | "sm";
    align?: "row" | "mix" | "col";
    topN?: number;
}

export const ProductTiles: React.FC<Props> = ({
    title,
    size,
    align = "row",
    data,
    topN = 3,
}) => {
    const classes = useStyles();

    const ProductComponent = align === "col" ? ProductTileCol : ProductTileRow;

    return (
        <MUI.Box>
            {title && (
                <MUI.Typography fontSize={fontSizes.h4} gutterBottom color="textSecondary" className={classes.topTitle}>
                    {title}
                </MUI.Typography>
            )}

            <MUI.Grid container justifyContent="space-evenly" alignItems="center">
                {data
                    ?.filter((_value, i) => i < topN)
                    .map((value, i: number) => (
                        <ProductComponent size={size} key={`${value.name}-${i}`} i={i} value={value} />
                    ))}
            </MUI.Grid>
        </MUI.Box>
    );
};
