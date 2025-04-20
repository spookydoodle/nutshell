import { ThemeOptions } from "@mui/material";
import { Mode } from "../types";
import { Slideshow } from "./slideshow";

export class SalesSlideshow extends Slideshow {
    public getThemeOptions = (mode: Mode): ThemeOptions => ({
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