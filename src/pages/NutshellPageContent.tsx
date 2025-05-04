import React from "react";
import { Theme, useMediaQuery } from '@mui/material';
import { Desktop } from "../components/metrics-dashboard/Desktop";
import { Slideshow } from "../logic/slideshow/slideshow";

interface Props {
    slideshow: Slideshow;
}

export const NutshellPageContent: React.FC<Props> = ({ slideshow }) => {
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down(slideshow.smallScreenComponentBreakpoint));

    if (isSmallScreen) {
        return <slideshow.smallScreenComponent slideshow={slideshow} />;
    }

    return <Desktop slideshow={slideshow} />;
};
