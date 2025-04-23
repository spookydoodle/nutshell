import { ThemeOptions } from "@mui/material";
import * as Types from "../../types";
import * as MetricTypes from "../../components/metrics-dashboard/types";
import { Slideshow } from "../../logic/slideshow/slideshow";
import { IMG_SERVER } from "../../img/cmd";
import { getImgArr } from "../../layouts/images";

export class CoinflowSlideshow extends Slideshow<MetricTypes.StateDataMap> {
    public path = '/coinflow';
    public name = '_COINFLOW_DASHBOARD';
    public shortName = '_COINFLOW';
    public description = 'High level conflow results of a steam punk company';
    public devices: Types.Device[] = ['mobile', 'desktop'];
    public caption = 'Data collected manually';
    public imageUrl = `${IMG_SERVER}/landing/gadgets.jpg`;
    public backgroundImageUrls = getImgArr("BG");

    // TODO: Add YTD/QTD/MTD
    public getSlideTitle = (): string => "Coinflow";
    // TODO by realms, sectors, products
    public getSlideSubtitle = (): string => "By TODO";

    public getSlidesData = (): MetricTypes.SlidesStateData | undefined => {
        return this.data.slides;
    };

    public getTickerData = (): MetricTypes.TickerStateData | undefined => {
        return this.data.ticker;
    };

    public getThemeOptions = (mode: Types.Mode): ThemeOptions => ({
        palette: {
            primary: {
                light: "#C9184A",
                main: "#590D22",
                dark: "#590D22",
                contrastText: "#F1FAEE",
            },
            secondary: {
                light: "#0077B6",
                main: "#0077B6",
                dark: "#023E8A",
                contrastText: "#F1FAEE",
            },
            common: {
                black: "#000",
                white: "#fff",
            },
            background: {
                paper: mode === "dark" ? "#272727" : "#F8F8F8",
                default: mode === "dark" ? "#000000" : "#F4F4F4",
            },
            text: {
                primary: mode === "dark" ? "#FAF8F3" : "#000",
                secondary: mode === "dark" ? "rgba(255, 255, 255, 0.60)" : "#023E8A",
                disabled: "rgba(0, 23, 79, 0.38)",
                // hint: "rgba(0, 0, 0, 0.38)",
            },
        },
        typography: {
            fontFamily: ["Lato", "Arial"].join(","),
        },
    });
}