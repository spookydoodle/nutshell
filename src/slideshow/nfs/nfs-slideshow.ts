import { ThemeOptions } from "@mui/material";
import { Mode } from "../../types";
import { Slideshow } from "../slideshow";
import { NutshellData } from "../../components/nfs/types";

export class NfsSlideshow extends Slideshow<NutshellData> {
    public name = '_NEED_FOR_NUTSHELL';
    public shortName = '_NFS';

    public getThemeOptions = (mode: Mode): ThemeOptions => ({
        palette: {
            primary: {
                light: "#000000",
                main: "#F72585",
                dark: "#000000",
                contrastText: "rgba(255, 255, 255, .87)",
            },
            secondary: {
                light: "#000000",
                main: "#2D00F7",
                dark: "#000000",
                contrastText: "rgba(255, 255, 255, .60)",
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
                primary: mode === "dark" ? "rgba(255, 255, 255, 0.87)" : "#000000",
                secondary: mode === "dark" ? "rgba(255, 255, 255, 0.60)" : "#000000",
                disabled: "rgba(0, 0, 0, 0.38)",
                // hint: "rgba(0, 0, 0, 0.38)",
            },
        },
        typography: {
            fontFamily: [
                // "Inconsolata",
                "Roboto Mono",
                "Open Sans",
                "Arial",
            ].join(","),
        },
    });
}