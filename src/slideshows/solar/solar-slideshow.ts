import { ThemeOptions } from "@mui/material";
import { Slideshow } from "../../logic/slideshow/slideshow";
import * as Types from "../../types";
import { IMG_SERVER } from "../../img/cmd";
import { getImgArr } from "../../layouts/images";

export class SolarSlideshow extends Slideshow<Types.StateDataMap> {
    public path = '/solar';
    public name = '_SOLAR_NUTSHELL';
    public shortName = '_SOL_NUT';
    public description = 'Some whatever solar system info overview';
    public devices: Types.Device[] = ['desktop'];
    public caption = 'Data collected manually';
    public imageUrl = `${IMG_SERVER}/landing/solar.jpg`
    public links = ["https://nssdc.gsfc.nasa.gov/planetary/factsheet/"];
    public backgroundImageUrls = getImgArr("SS");

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