import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box } from '@mui/material';
import { SlideComponentProps } from "../../../logic/slideshow/slideshow";
import { Bestsellers } from "../../../components/metrics-dashboard/Bestsellers";
import * as Utils from '../coinflow-data-utils';
import * as CoinflowTypes from "../coinflow-types";
import { CoinflowSlideshow } from "../coinflow-slideshow";
import { SlideColumnProductsLine } from "./SlideColumnProductsLine";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        spaceEvenly: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }
    })
);

interface Props {
    timebox: CoinflowTypes.Timebox;
    column: CoinflowTypes.Column;
    sequenceLabel: string;
}

export const SlideColumnProducts: React.FC<SlideComponentProps<CoinflowTypes.Data> & Props> = ({
    slideshow,
    slideIndex,
    timebox,
    column,
    sequenceLabel
}) => {
    const classes = useStyles();

    return (
        <Box className={classes.spaceEvenly}>
            {CoinflowSlideshow.productRows.map((row, i) => (
                <SlideColumnProductsLine
                    key={row}
                    slideshow={slideshow}
                    slideIndex={slideIndex}
                    sequenceLabel={sequenceLabel}
                    timebox={timebox}
                    column={column}
                    row={row}
                    divider={i < CoinflowSlideshow.productRows.length - 1}
                />
            ))}
        </Box>
    );
};
