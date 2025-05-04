import React from "react";
import { SlideComponentProps } from "../../../logic/slideshow/slideshow";
import * as CoinflowTypes from "../coinflow-types";
import { CoinflowSlideshow } from "../coinflow-slideshow";
import { SlideColumnProductsLine } from "./SlideColumnProductsLine";

interface Props {
    timebox: CoinflowTypes.Timebox;
    column: CoinflowTypes.Column;
    sequenceLabel: string;
}

export const SlideColumnProducts: React.FC<SlideComponentProps<CoinflowTypes.Data> & Props> = ({
    slideshow,
    data,
    slideIndex,
    timebox,
    column,
    sequenceLabel
}) => {
    return (
        <>
            {CoinflowSlideshow.productRows.map((row, i) => (
                <SlideColumnProductsLine
                    key={row}
                    slideshow={slideshow}
                    data={data}
                    slideIndex={slideIndex}
                    sequenceLabel={sequenceLabel}
                    timebox={timebox}
                    column={column}
                    row={row}
                    divider={i < CoinflowSlideshow.productRows.length - 1}
                />
            ))}
        </>
    );
};
