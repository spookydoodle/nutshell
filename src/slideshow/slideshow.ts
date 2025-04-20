import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from "@mui/material";
import { Mode } from "../types";

export abstract class Slideshow {
    /**
     * Elements height given as percentage of viewport height.
     */
    public static vh = {
        /**
         * Used for title and icons displayed in the primary row
         */
        topBarPrimaryRow: 5,
        topBarVerticalPadding: 1,
    }

    /**
     * Function which extends theme.
     * If not provided, default theme will be used.
     * Breakpoints cannot be overwritten.
     */
    public getThemeOptions?: (mode: Mode) => Omit<ThemeOptions, 'breakpoints'>;

    /**
     * Adds custom theme options from `getThemeOptions` (or default options if custom are not implemented) on top of the common theme options and creates application theme.
     */
    public createTheme = (mode: Mode): Theme => {
        const common = this.getCommonThemeOptions(mode);
        const options = this.getThemeOptions?.(mode) ?? this.getDefaultThemeOptions(mode);
        const themeOptions: ThemeOptions = {
            ...options,
            palette: {
                ...common.palette,
                ...options.palette
            },
            typography: {
                ...common.typography,
                ...options.typography,
            }
        }
        
        return responsiveFontSizes(
            createTheme({
                breakpoints: {
                    ...common.breakpoints,
                },
                ...themeOptions
            })
        );
    };

    /**
     * Common theme options include breakpoints, color palette and typography.
     */
    private getCommonThemeOptions = (mode: Mode): ThemeOptions => ({
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
            mode: mode,
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
        // fontSizes: {
        //   primary: "3.25vh",
        //   secondary: "2.75vh",
        //   tertiary: "2.5vh",
        //   quaternary: "2.25vh",
        //   quinary: "2vh",
        //   senary: "1.75vh",
        //   septonary: "1.5vh",
        //   octonary: "1.25vh",
        // },
    });

    private getDefaultThemeOptions = (mode: Mode): ThemeOptions => ({
        palette: {
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
        },
        typography: {
            fontFamily: ["Open Sans", "Arial"].join(","),
        },
    });
}