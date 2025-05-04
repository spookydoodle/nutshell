import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box } from '@mui/material';
import { SlideComponentProps } from "../../../logic/slideshow/slideshow";
import { PlayerLabel } from "../../../components/navigation/Slider";
import { SlideColumnProducts } from "./SlideColumnProducts";
import { SlideColumnChart } from "./SlideColumnChart";
import * as CoinflowTypes from "../coinflow-types";

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

export interface SlideColumnContentProps {
    data: CoinflowTypes.Data;
    category: CoinflowTypes.Category;
    timebox: CoinflowTypes.Timebox;
    column: CoinflowTypes.Column;
    columnsToRender: CoinflowTypes.Column[];
    sequenceLabels: PlayerLabel[];
    indexWithinSequence: number;
}

export const SlideColumnContent: React.FC<SlideComponentProps<CoinflowTypes.Data> & SlideColumnContentProps> = ({
    slideshow,
    data,
    slideIndex,
    category,
    column,
    timebox,
    columnsToRender,
    indexWithinSequence,
    sequenceLabels
}) => {
    const classes = useStyles();

    return (
        <Box className={classes.spaceEvenly}>
            {category === 'Realms' || category === 'Sectors' ? (
                <SlideColumnChart
                    slideshow={slideshow}
                    data={data}
                    slideIndex={slideIndex}
                    category={category}
                    column={column}
                    columnsToRender={columnsToRender}
                    timebox={timebox}
                />
            ) : (
                <SlideColumnProducts
                    slideshow={slideshow}
                    data={data}
                    slideIndex={slideIndex}
                    column={column}
                    timebox={timebox}
                    sequenceLabel={sequenceLabels[indexWithinSequence].label}
                />
            )}
        </Box>
    );
};
