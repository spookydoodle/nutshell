
import { CoinflowSlideshow } from "./coinflow/coinflow-slideshow";
import { SolarSlideshow } from "./solar/solar-slideshow";
import { NfsSlideshow } from "./nfs/nfs-slideshow";
import { slideshows$ } from "../state";
import { Slideshow } from "../logic/slideshow/slideshow";

/**
 * Instantiates all available slideshows and sets the value of app state's `slideshows$`.
 */
export const instantiateSlideshows = (): void => {
    const coinflowSlideshow = new CoinflowSlideshow({ startDelay: 5000, animationsInitialized: false });
    const solarSlideshow = new SolarSlideshow({ startDelay: 5000, animationsInitialized: false });
    const nfsSlideshow = new NfsSlideshow({
        animationsInitialized: true,
        duration: 30000,
        showTicker: false,
        smallScreenComponentBreakpoint: 'md'
    });

    slideshows$.next([coinflowSlideshow, solarSlideshow, nfsSlideshow] as Slideshow[]);
};
