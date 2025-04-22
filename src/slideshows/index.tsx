
import { CoinflowSlideshow } from "./coinflow/coinflow-slideshow";
import { SolarSlideshow } from "./solar/solar-slideshow";
import { NfsSlideshow } from "./nfs/nfs-slideshow";
import nutshellData from "./coinflow/coinflow-data";
import { createStateData } from "./solar/solar-data";
import { NEED_FOR_SPEED } from "./nfs/nfs-data";
import { Slideshow } from "../logic/slideshow/slideshow";
import { NutshellPage, NutshellSolar, NutshellNFS } from "../pages";
import { slideshows$ } from "../state";

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
    const coinflowSlideshow = new CoinflowSlideshow(nutshellData);
    const solarSlideshow = new SolarSlideshow(createStateData());
    const nfsSlideshow = new NfsSlideshow(NEED_FOR_SPEED, {
        animationsInitialized: true,
        duration: 30000,
        showTicker: false,
    });

    slideshows$.next([
        // TODO: Remove type casting when components are generalized and can receive non specific Slideshow prop type
        { slideshow: coinflowSlideshow, component: NutshellPage as ComponentType },
        { slideshow: solarSlideshow, component: NutshellSolar as ComponentType },
        { slideshow: nfsSlideshow, component: NutshellNFS as ComponentType }
    ]);
};
