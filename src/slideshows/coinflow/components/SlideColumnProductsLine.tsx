import React from "react";
import { SlideComponentProps } from "../../../logic/slideshow/slideshow";
import { Bestsellers } from "../../../components/metrics-dashboard/Bestsellers";
import * as Utils from '../coinflow-data-utils';
import * as CoinflowTypes from "../coinflow-types";

interface Props {
    timebox: CoinflowTypes.Timebox;
    column: CoinflowTypes.Column;
    row: CoinflowTypes.Row;
    sequenceLabel: string;
    divider: boolean;
}

export const SlideColumnProductsLine: React.FC<SlideComponentProps<CoinflowTypes.Data> & Props> = ({
    slideshow,
    timebox,
    column,
    row,
    sequenceLabel,
    divider
}) => {
    const data = React.useMemo(
        () => Utils.getProductsData(slideshow.data.products, column, timebox, sequenceLabel, { key: row, text: row }),
        [slideshow.data, column, timebox, sequenceLabel, row]
    );

    return (
        <Bestsellers key={row} title={row} data={data} divider={divider} />
    );
};
