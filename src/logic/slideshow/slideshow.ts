import * as rxjs from 'rxjs';
import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from "@mui/material";
import * as Types from "../../types";
import * as MetricTypes from '../../components/metrics-dashboard/types';
import * as Utils from "../../utils";
import { Img } from '../../layouts/images';

/**
 * Initial options to create a slideshow with
 */
export interface SlideshowInitOptions {
    /**
     * Whether the slideshow should play on start.
     * Slideshow will automatically increment the slide index if both `play` and `animationsInitialized` are `true`.
     * Defaults to `true`.
     */
    autoplay?: boolean;
    /**
     * Whether intro animations have been initialized and the slideshow can begin.
     * Intro animations can include sliding or fading the background and various components in their places.
     * Slideshow will automatically increment the slide index if both `animationsInitialized` and `play` are `true`.
     * Defaults to `false`.
     */
    animationsInitialized?: boolean;
    /**
     * Single slide duration in milliseconds. Used for automatically incrementing the slide index.
     * Defaults to `15000`.
     */
    duration?: number;
    /**
     * Whether the ticker should be displayed.
     * Defaults to `true`.
     */
    showTicker?: boolean;
}

/**
 * Abstract class to be extended by specific slideshow classes.
 * Provides theme related properties and functions as static functions.
 */
export abstract class Slideshow<T = unknown> {
    /**
     * Elements height given as percentage of viewport height.
     */
    public static vh = {
        /**
         * Used for title and icons displayed in the primary row.
         */
        topBarPrimaryRow: 5,
        topBarSecondaryRow: 3,
        topBarVerticalPadding: 1,
    }

    public static title = '_NUTSHELL';
    public static titleShort = '_NTSHLL';
    public static subtitle = 'Have a great day';
    public static subtitleShort = 'Yo';
    public static tickerTitle = 'Turbocharged by spookydoodle';

    public abstract path: string;
    public abstract name: string;
    public shortName?: string;
    public abstract description: string;
    public abstract devices: Types.Device[];
    public caption?: string;
    public links?: string[];
    public abstract imageUrl: string;
    public backgroundImageUrls?: Img[];

    private defaultAnimationsInitialized = true;
    private defaultAutoPlay = true;
    private defaultDuration = 15000;
    private defaultShowTicker = true;

    /**
     * Options provided in the constructor.
     */
    private initOptions?: SlideshowInitOptions;

    /**
     * Data to present on the slides.
     */
    public data: T;

    /**
     * Whether intro animations have been initialized and the slideshow can begin.
     * Intro animations can include sliding or fading the background and various components in their places.
     */
    public animationsInitialized$: rxjs.BehaviorSubject<boolean>;

    /**
     * Single slide duration in milliseconds.
     */
    public duration$: rxjs.BehaviorSubject<number>;

    /**
     * Whether the ticker should be displayed.
     */
    public showTicker$: rxjs.BehaviorSubject<boolean>;

    /**
     * Index of the currently displayed background image from `backgroundImageUrls` array.
     */
    public selectedBackgroundIndex$: rxjs.BehaviorSubject<number>;

    /**
     * Creates a slideshow object with all necessary properties to automatically display slides.
     * Automatically increments the slide `index$` value every `duration$` value given that `play$` and `animationsInitialized$` values are `true`.
     * @param data
     * @param options 
     */
    public constructor(data: T, options?: SlideshowInitOptions) {
        const {
            animationsInitialized = this.defaultAnimationsInitialized,
            duration = this.defaultDuration,
            showTicker = this.defaultShowTicker
        } = options ?? {};
        this.initOptions = options;
        this.data = data;
        this.animationsInitialized$ = new rxjs.BehaviorSubject<boolean>(animationsInitialized);
        this.duration$ = new rxjs.BehaviorSubject<number>(duration);
        this.showTicker$ = new rxjs.BehaviorSubject<boolean>(showTicker);
        this.selectedBackgroundIndex$ = new rxjs.BehaviorSubject<number>(Utils.Numbers.getRandom(this.backgroundImageUrls?.length ?? 0));
    }

    /**
     * Whether the slideshow is playing.
     */
    public play$ = new rxjs.BehaviorSubject<boolean>(false);

    /**
     * Current slide index.
     */
    public index$ = new rxjs.BehaviorSubject<number>(0);

    /**
     * Previous slide index
     */
    public prevIndex$ = new rxjs.BehaviorSubject<number>(0);

    private timeout: NodeJS.Timeout | undefined;

    /**
     * Sets the indexes to 0 and `play$` and `animationsInitialized$` values to those provided in the constructor.
     * @param timeout If provided, will delay setting `play$` (if autoplay initially set) and `animationsInitialized$` values.
     */
    public start = (timeout = 0): void => {
        this.index$.next(0);
        this.prevIndex$.next(0);
        this.timeout = setTimeout(() => {
            this.animationsInitialized$.next(this.initOptions?.animationsInitialized ?? this.defaultAnimationsInitialized);
            this.play$.next(this.initOptions?.autoplay ?? this.defaultAutoPlay);
        }, timeout);
    };

    /**
     * Resets observables needed to start the slideshow.
     */
    public stop = (): void => {
        clearTimeout(this.timeout);
        this.play$.next(false);
        this.animationsInitialized$.next(false);
        this.index$.next(0);
        this.prevIndex$.next(0);
    };

    /**
     * Returns data needed to render slides.
     */
    public getSlidesData?: () => MetricTypes.SlidesStateData | undefined;

    /**
     * Returns data needed to render bottom ticker.
     */
    public getTickerData?: () => MetricTypes.TickerStateData | undefined;

    /**
     * Function which extends theme.
     * If not provided, default theme will be used.
     * Breakpoints cannot be overwritten.
     */
    public getThemeOptions?: (mode: Types.Mode) => Omit<ThemeOptions, 'breakpoints'>;

    /**
     * Adds custom theme options from `getThemeOptions` (or default options if custom are not implemented) on top of the default theme options and creates application theme.
     */
    public createTheme = (mode: Types.Mode): Theme => {
        const defaultOptions = Slideshow.getDefaultThemeOptions(mode);
        const options: ThemeOptions = this.getThemeOptions?.(mode) ?? { palette: {}, typography: {} };
        const themeOptions: ThemeOptions = {
            ...defaultOptions,
            ...options,
            palette: {
                ...defaultOptions.palette,
                ...options.palette
            },
            typography: {
                ...defaultOptions.typography,
                ...options.typography,
            }
        }

        return Slideshow.createResponsiveTheme(themeOptions);
    };

    /**
     * Creates default theme for slideshows with slideshow breakpoints, color palette and typography.
     */
    public static createDefaultTheme = (mode: Types.Mode): Theme => {
        return Slideshow.createResponsiveTheme(Slideshow.getDefaultThemeOptions(mode));
    };

    /**
     * Wrapper function for theme with responsive font sizes.
     */
    private static createResponsiveTheme = (themeOptions: ThemeOptions) => {
        return responsiveFontSizes(createTheme(themeOptions));
    };

    /**
     * Provides default theme options with breakpoints, color palette and typography.
     */
    private static getDefaultThemeOptions = (mode: Types.Mode): ThemeOptions => ({
        // Needed to define thinner breakpoints than the default ones to assure nice layout for tiles
        // See client/src/logic/materialUITypes.tsx for module augmentation.
        // See here for more info on material-ui breakpoints: https://material-ui.com/customization/breakpoints/
        // TODO: Rewrite to new type
        breakpoints: {
            values: {
                xs: 0,
                sm: 480,
                md: 736,
                lg: 980,
                xl: 1280,
                // xxl: 1690,
            },
        },
        palette: {
            mode,
            primary: {
                light: "#000000",
                main: "#000000",
                dark: "#000000",
                contrastText: "rgba(255, 255, 255, .87)",
            },
            secondary: {
                light: "#3C096C",
                main: "#240046",
                dark: "#10002B",
                contrastText: "rgba(255, 255, 255, .60)",
            },
            common: {
                black: "#000",
                white: "#fff",
            },
            background: {
                paper: mode === "dark" ? "#3C096C" : "#ffffff",
                default: mode === "dark" ? "#10002B" : "#fafafa",
            },
            text: {
                primary: mode === "dark" ? "rgba(255, 255, 255, 0.87)" : "#000000",
                secondary: mode === "dark" ? "rgba(255, 255, 255, 0.60)" : "#7195A8",
                disabled: "rgba(0, 0, 0, 0.38)",
                // hint: "rgba(0, 0, 0, 0.38)",
            },
            error: {
                light: mode === "dark" ? "#FF758F" : "#C71F37",
                main: mode === "dark" ? "#FF4D6D" : "#B21E35",
                dark: mode === "dark" ? "#C9184A" : "#6E1423",
                contrastText: "rgba(255, 255, 255, .87)",
            },
            info: {
                light: "#97ACD1",
                main: "#6A7CA9",
                dark: "#374872",
                contrastText: "rgba(255, 255, 255, .87)",
            },
            success: {
                light: mode === "dark" ? "#99D98C" : "#9FD5C7",
                main: mode === "dark" ? "#76C893" : "#25A18E",
                dark: mode === "dark" ? "#52B69A" : "#004E64",
                contrastText: "#rgba(0, 0, 0, 0.87)",
            },
        },
        typography: {
            fontFamily: ["Open Sans", "Arial"].join(","),
            fontSize: 13,
            h1: {
                "@media (max-width:960px)": {
                    fontSize: "3.25rem",
                },
                "@media (max-width:600px)": {
                    fontSize: "2.25rem",
                }
            },
            h2: {
                "@media (max-width:960px)": {
                    fontSize: "2.75rem",
                },
                "@media (max-width:600px)": {
                    fontSize: "1.75rem",
                },
            },
        },
    });
}
