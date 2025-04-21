import { IMG_SERVER, IMG_SERVER_MIN } from "../img/cmd";

export interface Img {
    jpg: string;
    min: string;
}

export const BG_IMG_MAX = 6;
const imgServer = `${IMG_SERVER}/bg`;
const imgServerMin = `${IMG_SERVER_MIN}/bg`;

const getImgArr = (tx: string): Img[] =>
    new Array(BG_IMG_MAX).fill(null).map((_el, i) => ({
        jpg: `${imgServer}/${tx}_${i + 1}.jpg`,
        min: `${imgServerMin}/${tx}_${i + 1}.jpg`,
    }));

export const images: { [key in string]: Img[]; } = {
    "dashboard": getImgArr("BG"),
    "solar-system": getImgArr("SS"),
};
