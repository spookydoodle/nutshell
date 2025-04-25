
import { CoinflowSlideshow } from "./coinflow/coinflow-slideshow";
import { SolarSlideshow } from "./solar/solar-slideshow";
import { NfsSlideshow } from "./nfs/nfs-slideshow";
import nutshellData from "./coinflow/coinflow-data";
import { createStateData } from "./solar/solar-data";
import { NEED_FOR_SPEED } from "./nfs/nfs-data";
import { slideshows$ } from "../state";
import { Slideshow } from "../logic/slideshow/slideshow";
import { convertToMap } from "../utils/metrics";

const metricData =  convertToMap(nutshellData)
const solarData = createStateData();
/**
 * Instantiates all available slideshows and sets the value of app state's `slideshows$`.
 */
export const instantiateSlideshows = (): void => {
    const coinflowSlideshow = new CoinflowSlideshow(metricData, {
        enableMobile: true,
        startDelay: 5000
    });
    const solarSlideshow = new SolarSlideshow(solarData, {
        startDelay: 5000
    });
    const nfsSlideshow = new NfsSlideshow(NEED_FOR_SPEED, {
        animationsInitialized: true,
        duration: 30000,
        showTicker: false
    });

    slideshows$.next([
        coinflowSlideshow,
        solarSlideshow,
        nfsSlideshow
    ] as Slideshow[]);
};
