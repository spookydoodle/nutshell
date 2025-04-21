
import { CoinflowSlideshow } from "./coinflow/coinflow-slideshow";
import { SolarSlideshow } from "./solar/solar-slideshow";
import { NfsSlideshow } from "./nfs/nfs-slideshow";
import nutshellData from "./coinflow/coinflow-data";
import { createStateData } from "./solar/solar-data";
import { NEED_FOR_SPEED } from "./nfs/nfs-data";
import { Slideshow } from "../logic/slideshow/slideshow";
import { slideshows$ } from "../state";
import { NutshellDashboard, NutshellSolar, NutshellNFS } from "../pages";
import React from "react";

type ComponentType = React.ComponentType<{ slideshow: Slideshow }>;

export interface SlideshowPage {
    slideshow: Slideshow;
    // TODO: Remove when components generalized
    component: ComponentType;
}

/**
 * Instantiates all available slideshows and sets the value of app state's `slideshows$`.
 */
export const instantiateSlideshows = (): void => {
    const coinflowSlideshow = new CoinflowSlideshow(nutshellData, { play: false });
    const solarSlideshow = new SolarSlideshow(createStateData(), { play: false });
    const nfsSlideshow = new NfsSlideshow(NEED_FOR_SPEED, {
        play: true,
        animationsInitialized: true,
        duration: 30000,
        showTicker: false,
    });

    slideshows$.next([
        // TODO: Remove type casting when components are generalized and can receive non specific Slideshow prop type
        { slideshow: coinflowSlideshow, component: NutshellDashboard as ComponentType },
        { slideshow: solarSlideshow, component: NutshellSolar as ComponentType },
        { slideshow: nfsSlideshow, component: NutshellNFS as ComponentType }
    ]);
};
