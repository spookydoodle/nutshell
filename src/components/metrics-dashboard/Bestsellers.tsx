import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import * as MUI from '@mui/material';
import { ProductTiles } from "./ProductTiles";
import * as MetricTypes from "./types";

const useStyles = makeStyles((_theme: MUI.Theme) =>
    createStyles({
        container: {
            height: "100%",
            position: "relative",
        }
    })
);

interface Props {
    title: string;
    data: MetricTypes.Datum[];
    divider?: boolean;
}

export const Bestsellers: React.FC<Props> = ({ title, data, divider }) => {
    const classes = useStyles();

    return (
        <>
            <ProductTiles title={title} data={data} size="sm" align="row" />
            {divider && <MUI.Divider variant="middle" />}
        </>
    );
};
