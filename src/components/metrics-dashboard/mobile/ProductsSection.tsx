import { makeStyles, createStyles } from '@mui/styles';
import { Box, Theme } from '@mui/material';
import { ProductsScroll } from "./ProductsScroll";
import * as MetricTypes from "../metric-types";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        container: {
            display: "grid",
            rowGap: "32px"
        },
    })
);

interface Props {
    item: MetricTypes.MainDataItem;
}

export const ProductsSection: React.FC<Props> = ({ item }) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            {[...item.keys()].map((key: string, i: number) => (
                <ProductsScroll key={key} title={key} values={item.get(key)?.data || []} />
            ))}
        </Box>
    );
};
