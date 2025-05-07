import { ThemeOptions } from "@mui/material";
import * as Types from "../../types";
import { Slideshow } from "../../logic/slideshow/slideshow";
import { IMG_SERVER } from "../../img/cmd";
import { SmallScreenMessageNfs } from "./components/SmallScreenMessageNfs";
import { ImagePreloadWrapper } from "./components/ImagePreloadWrapper";
import { NfsSlide } from "./components/NfsSlide";
import * as MetricTypes from "../../components/metrics-dashboard/metric-types";
import * as NfsTypes from "./nfs-types";
import nfsData from "./nfs-data.json";

export class NfsSlideshow extends Slideshow<NfsTypes.Game[]> {
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

    public static imgNames = ["0_cover", "0_garage", "0_ui", "1", "2", "3"];
    public static imgPerSlide = this.imgNames.length;
    
    /**
     * https://vgsales.fandom.com/wiki/Need_for_Speed
     * https://en.wikipedia.org/wiki/Need_for_Speed
     */
    public fetchData = async (abortSignal: AbortSignal, onLoadProgress: (value: number) => void): Promise<NfsTypes.Game[]> => {
        const imagesToPreload: string[] = [];
        const data = nfsData as ((Omit<NfsTypes.Game, 'background' | 'franchise'> & { background: string; franchise: string; })[]);
        const effectiveData: NfsTypes.Game[] = data.map(({ background, franchise, ...game }) => {
            const backgroundImages = NfsSlideshow.imgNames.map((el) => `${IMG_SERVER}/nfs/${background}_${el}.jpg`);
            imagesToPreload.push(...backgroundImages);

            return {
                ...game,
                franchise: { key: "NFS", text: "Need For Speed" },
                background: backgroundImages
            };
        });
        
        let progress = 0;
        await Promise.all(imagesToPreload.map((url) => {
            return fetch(url, { signal: abortSignal }).then(() => {
                const result = ++progress / imagesToPreload.length;
                onLoadProgress(result);
            });
        }));
        return effectiveData;
    };

    public getAutoIncrementInterval = (duration: number): number => {
        return duration / NfsSlideshow.imgPerSlide;
    };

    public getSlidesLength = (data: NfsTypes.Game[]): number => {
        return data.length * NfsSlideshow.imgPerSlide
    };

    public rotatePlayerLabels = true;
    
    public getPlayerLabels = (data: NfsTypes.Game[]): { label: string; sequenceName?: string; }[] => {
        return data.map((game) => ({ label: game.year, sequenceName: 'Timeline' }))
    };

    public getPlayerIndex = (slideIndex: number, _playerLabelsLength: number): number => {
        return Math.floor(slideIndex / NfsSlideshow.imgPerSlide);
    };

    public onPlayerIndexChange = (index: number, _playerLabelsLength: number) => {
        this.slideIndex$.next(index * NfsSlideshow.imgPerSlide)
    };

    public getPlayerSecondaryIndex = (slideIndex: number, _playerLabelsLength: number): number => {
        return slideIndex;
    };

    public onPlayerSecondaryPreviousButtonClick = (playerLabelsLength: number) => {
        this.slideIndex$.next(this.slideIndex$.value > 0 ? this.slideIndex$.value - 1 : playerLabelsLength * NfsSlideshow.imgPerSlide - 1)
    };

    public onPlayerSecondaryNextButtonClick = (playerLabelsLength: number) => {
        this.slideIndex$.next(this.slideIndex$.value < playerLabelsLength * NfsSlideshow.imgPerSlide - 1 ? this.slideIndex$.value + 1 : 0)
    };

    public loadingComponent = ImagePreloadWrapper;
    public slideComponent = NfsSlide;
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