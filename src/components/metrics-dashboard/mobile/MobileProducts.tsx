import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Theme } from '@mui/material';
import { ProductsSection } from "./ProductsSection";
import { HeaderKPI } from "../HeaderKPI";
import * as MetricTypes from "../metric-types";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        container: {
            marginTop: "40px"
        },
    })
);

interface Props {
    data: MetricTypes.Items;
}

export const MobileProducts: React.FC<Props> = ({ data }) => {
    const classes = useStyles();

    return (
        <>
            {data.map((item, i) => (
                <Box key={i} className={classes.container}>
                    <HeaderKPI name={[...item.main.values()][0].name} item={item} />
                    <ProductsSection item={item.main} />
                </Box>
            ))}
        </>
    );
};
