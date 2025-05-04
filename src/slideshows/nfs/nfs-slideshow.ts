import { ThemeOptions } from "@mui/material";
import * as Types from "../../types";
import { NutshellData } from "./nfs-types";
import { Slideshow } from "../../logic/slideshow/slideshow";
import { IMG_SERVER } from "../../img/cmd";
import { NutshellNFS } from "../../pages";
import { NEED_FOR_SPEED, imgPerSlide } from "./nfs-data";
import { SmallScreenMessageNfs } from "./components/SmallScreenMessageNfs";

export class NfsSlideshow extends Slideshow<NutshellData> {
    public path = '/need-for-nutshell';
    public name = '_NEED_FOR_NUTSHELL';
    public shortName = '_NFS';
    public description = 'Evolution of the Need for Speed games franchise';
    public devices: Types.Device[] = ['desktop'];
    public caption = 'Data collected manually';
    public imageUrl = `${IMG_SERVER}/landing/nfs.jpg`;
    public links = [
        "https://vgsales.fandom.com/wiki/Need_for_Speed",
        "https://en.wikipedia.org/wiki/Need_for_Speed"
    ];
    
    public fetchData = async (_abortSignal: AbortSignal): Promise<NutshellData> => {
        return NEED_FOR_SPEED;
    };

    public getAutoIncrementInterval = (duration: number): number => {
        return duration / imgPerSlide;
    };

    public getSlidesLength = (data: NutshellData): number => {
        return data.games.length * imgPerSlide
    };

    public getPlayerLabels = (data: NutshellData): { label: string; sequenceName?: string; }[] => {
        return data.games.map((game) => ({ label: game.year, sequenceName: 'Timeline' }))
    };

    public getPlayerIndex = (slideIndex: number, _playerLabelsLength: number): number => {
        return Math.floor(slideIndex / imgPerSlide);
    };

    public onPlayerIndexChange = (index: number, _playerLabelsLength: number) => {
        this.slideIndex$.next(index * imgPerSlide)
    };

    public getPlayerSecondaryIndex = (slideIndex: number, _playerLabelsLength: number): number => {
        return slideIndex;
    };

    public onPlayerSecondaryPreviousButtonClick = (playerLabelsLength: number) => {
        this.slideIndex$.next(this.slideIndex$.value > 0 ? this.slideIndex$.value - 1 : playerLabelsLength * imgPerSlide - 1)
    };

    public onPlayerSecondaryNextButtonClick = (playerLabelsLength: number) => {
        this.slideIndex$.next(this.slideIndex$.value < playerLabelsLength * imgPerSlide - 1 ? this.slideIndex$.value + 1 : 0)
    };

    public customSlideshow = NutshellNFS;
    public smallScreenComponent = SmallScreenMessageNfs;

    public getThemeOptions = (mode: Types.Mode): ThemeOptions => ({
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