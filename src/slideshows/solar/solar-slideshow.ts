import { ThemeOptions } from "@mui/material";
import { IMG_SERVER } from "../../img/cmd";
import { getImgArr } from "../../layouts/images";
import * as MetricTypes from "../../components/metrics-dashboard/metric-types";
import { DesktopSolarContent } from "./components/DesktopSolarContent";
import { SmallScreenMessageSolar } from "./components/SmallScreenMessageSolar";
import { PlayerLabel } from "../../components/navigation/Slider";
import { Slideshow } from "../../logic/slideshow/slideshow";
import * as Types from "../../types";
import * as SolarTypes from './solar-types';

export class SolarSlideshow extends Slideshow<MetricTypes.StateDataMap<SolarTypes.Category>> {
    public path = '/solar';
    public name = '_SOLAR_NUTSHELL';
    public shortName = '_SOL_NUT';
    public description = 'Some whatever solar system info overview';
    public devices: Types.Device[] = ['desktop'];
    public caption = 'Data collected manually';
    public imageUrl = `${IMG_SERVER}/landing/solar.jpg`
    public links = ["https://nssdc.gsfc.nasa.gov/planetary/factsheet/"];
    public backgroundImageUrls = getImgArr("SS");

    public getSlideTitle = (): string => "Solar system";
    public getSlideSubtitle = (): string => "Vs. the Earth"; // TODO:  Vs the earth, Planets show
    public getSlidesData = (): MetricTypes.SlidesStateData<SolarTypes.Category> | undefined => {
        return this.data.slides;
    };

    public getSlidesLength = (): number => {
        return this.data.slides.values().reduce<number>((acc, val) => acc + val.length, 0);;
    };

    public getPlayerLabels = (): PlayerLabel[] => {
        return [...this.data.slides.entries()].map(([subSequenceName, slides]) => slides.map((slide): PlayerLabel => ({ label: slide.header.titleSecondaryShort, subSequenceName }))).flat();
    };

    public getPlayerIndex = (slideIndex: number, playerLabelsLength: number): number => {
        return slideIndex % playerLabelsLength;
    };

    public onPlayerIndexChange = (index: number, _playerLabelsLength: number) => {
        this.slideIndex$.next(this.slideIndex$.value + (index - this.slideIndex$.value % length));
    };

    public getTickerData = (): MetricTypes.TickerStateData | undefined => {
        return this.data.ticker;
    };
    
    public customSlideshow = DesktopSolarContent;
    public smallScreenComponent = SmallScreenMessageSolar;

    public getThemeOptions = (mode: Types.Mode): ThemeOptions => ({
        palette: {
            primary: {
                light: "#4361EE",
                main: "#000000",
                dark: "#3A0CA3",
                contrastText: "#F1FAEE",
            },
            secondary: {
                light: "#4895EF",
                main: "#4361EE",
                dark: "#3F37C9",
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
                primary: mode === "dark" ? "rgba(247, 244, 234, .87)" : "#000000",
                secondary: mode === "dark" ? "rgba(255, 255, 255, 0.60)" : "#495057",
                disabled: "rgba(0, 23, 79, 0.38)",
                // hint: "rgba(0, 0, 0, 0.38)",
            },
        },
        typography: {
            fontFamily: ["Goldman-Regular", "Open Sans", "Arial"].join(","),
        },
    });
}