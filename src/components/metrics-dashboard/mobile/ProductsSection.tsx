import React from "react";
import { ProductsScroll } from "./ProductsScroll";
import * as MetricTypes from "../types";

interface Props {
    item: MetricTypes.MainDataItem;
}

export const ProductsSection: React.FC<Props> = ({ item }) => {

    return (
        <>
            {[...item.keys()].map((key: string, i: number) => (
                <ProductsScroll key={i} title={key} values={item.get(key)?.data || []} />
            ))}
        </>
    );
};
