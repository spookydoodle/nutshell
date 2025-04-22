import React from "react";
import { Theme, useMediaQuery } from '@mui/material';
import { Desktop } from "../components/metrics-dashboard/Desktop";
import { Mobile } from "../components/metrics-dashboard/mobile/Mobile";
import { Slideshow } from "../logic/slideshow/slideshow";

interface Props {
    slideshow: Slideshow;
}

export const NutshellPageContent: React.FC<Props> = ({ slideshow }) => {
    const isOnlyXs = useMediaQuery((theme: Theme) => theme.breakpoints.only('xs'));

    return !isOnlyXs
        ? <Desktop slideshow={slideshow} />
        : slideshow.enableMobile
            ? <Mobile slideshow={slideshow} />
            // TODO: Add small screen message
            : null;
};
