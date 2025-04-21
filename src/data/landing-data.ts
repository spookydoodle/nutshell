
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { IMG_SERVER } from "../img/cmd";
import * as Types from '../types';

const imgServer = `${IMG_SERVER}/landing`;
const nfsImg = `${imgServer}/nfs.jpg`;
const solarImg = `${imgServer}/solar.jpg`;
const gadgetsImg = `${imgServer}/gadgets.jpg`;

interface Item {
    name: string;
    devices: Types.Device[];
    icons?: string[];
    description: string;
    caption?: string | string[];
    links?: string[];
    image: string;
}

export const landingPageItems: { [key in string]: Item } = {
    "dashboard": {
        name: "SALES DASHBOARD",
        devices: ["mobile", "desktop"],
        description: "High level sales results of steam punk products.",
        caption: "Data collected manually",
        image: gadgetsImg,
    },
    "solar-system": {
        name: "SOLAR",
        devices: ["desktop"],
        description: "A dashboard with some whatever solar system info.",
        links: ["https://nssdc.gsfc.nasa.gov/planetary/factsheet/"],
        image: solarImg,
    },
    "need-for-nutshell": {
        name: "NEED FOR SPEED",
        devices: ["desktop"],
        description: "Evolution of the Need for Speed games.",
        links: [
            "https://vgsales.fandom.com/wiki/Need_for_Speed",
            "https://en.wikipedia.org/wiki/Need_for_Speed"
        ],
        image: nfsImg,
    },
};

export const deviceIcons: { [key in Types.Device]: typeof PhoneAndroidIcon } = {
    mobile: PhoneAndroidIcon,
    desktop: ComputerIcon,
};
