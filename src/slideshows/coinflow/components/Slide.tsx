import React from "react";
import { Theme, useMediaQuery } from '@mui/material';
import { SlideComponentProps } from "../../../logic/slideshow/slideshow";
import { SlideColumn } from "./SlideColumn";
import { CoinflowSlideshow } from "../coinflow-slideshow";
import * as CoinflowTypes from "../coinflow-types";
import { SlideColumnContentProps } from "./SlideColumnContent";

export const Slide: React.FC<SlideComponentProps<CoinflowTypes.Data> & Omit<SlideColumnContentProps, 'column' | 'columnsToRender'>> = (props) => {
    const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const isLgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

    const columnsToRender = React.useMemo(
        () => CoinflowSlideshow.getColumnsToRender({ isMdUp, isLgUp }),
        [isMdUp, isLgUp]
    );

    return columnsToRender.map((column) => (
        <SlideColumn key={column} columnsToRender={columnsToRender} column={column} {...props} />
    ));
};
