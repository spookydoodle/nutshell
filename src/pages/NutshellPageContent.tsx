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

    React.useEffect(() => {
        if (isOnlyXs) {
            return;
        }
        slideshow.start();

        return () => {
            slideshow.stop();
        };
    }, [isOnlyXs]);

    if (isOnlyXs) {
        return slideshow.enableMobile ? <Mobile slideshow={slideshow} /> : null; // TODO: Add small screen message
    }

    if (slideshow.customSlideshow) {
        return <slideshow.customSlideshow slideshow={slideshow} />
    }
    return <Desktop slideshow={slideshow} />;
};
