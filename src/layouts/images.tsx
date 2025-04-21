import { IMG_SERVER, IMG_SERVER_MIN } from "../img/cmd";

export interface Img {
    /**
     * Full HD size.
     */
    jpg: string;
    /**
     * Minimized to smaller format used for stretching and blur effect while full HD format is fetching.
     */
    min: string;
}

export const BG_IMG_MAX = 6;
const imgServer = `${IMG_SERVER}/bg`;
const imgServerMin = `${IMG_SERVER_MIN}/bg`;

export const getImgArr = (tx: string): Img[] =>
    new Array(BG_IMG_MAX).fill(null).map((_el, i) => ({
        jpg: `${imgServer}/${tx}_${i + 1}.jpg`,
        min: `${imgServerMin}/${tx}_${i + 1}.jpg`,
    }));
