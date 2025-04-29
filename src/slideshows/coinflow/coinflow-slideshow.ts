import { ThemeOptions } from "@mui/material";
import * as Types from "../../types";
import * as MetricTypes from "../../components/metrics-dashboard/metric-types";
import { Slideshow } from "../../logic/slideshow/slideshow";
import { IMG_SERVER } from "../../img/cmd";
import { getImgArr } from "../../layouts/images";
import { CoinflowMobile } from "./components/CoinflowMobile";
import { CoinflowSlide } from "./components/CoinflowSlide";
import { convertToMap } from "./coinflow-data-utils";
import * as CoinflowTypes from "./coinflow-types";

export class CoinflowSlideshow extends Slideshow<CoinflowTypes.Data> {
    public path = '/coinflow';
    public name = '_COINFLOW_DASHBOARD';
    public shortName = '_COINFLOW';
    public description = 'High level conflow results of a steam punk company';
    public devices: Types.Device[] = ['mobile', 'desktop'];
    public caption = 'Data collected manually';
    public imageUrl = `${IMG_SERVER}/landing/gadgets.jpg`;
    public backgroundImageUrls = getImgArr("BG");
    public title = 'Coinflow';

    // TODO: Add YTD/QTD/MTD
    public getSlideTitle = (slideIndex: number): string => "Coinflow";
    // TODO by realms, sectors, products
    public getSlideSubtitle = (slideIndex: number): string => "By TODO";

    private mappedData = convertToMap(this.data);

    public getSlidesLength = () => {
        return this.mappedData.slides.values().reduce<number>((acc, val) => acc + val.length, 0);
    };

    public getTickerData = (): MetricTypes.TickerStateData | undefined => {
        return this.mappedData.ticker;
    };

    public getPlayerLabels = (): Types.PlayerLabel[] => {
        return [...this.mappedData.slides.values()][0].map((slide) => ({ 
            label: slide.headers.titleSecondaryShort,
            sequenceName: slide.headers.category === 'Products' ? 'Products' : 'Charts'
        }));
    };

    public getPlayerIndex = (slideIndex: number, playerLabelsLength: number) => {
        return slideIndex % playerLabelsLength;
    }

    public onPlayerIndexChange = (index: number, playerLabelsLength: number) => {
        this.slideIndex$.next(this.slideIndex$.value + (index - this.slideIndex$.value % playerLabelsLength))
    };

    public slideComponent = CoinflowSlide;
    public smallScreenComponent = CoinflowMobile;

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