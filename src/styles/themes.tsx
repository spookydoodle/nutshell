/* 
    The purpose of this file is to integrate all themes in one place 
    and use in ThemeProvider at the root of the app layout.
*/
import { Theme, ThemeOptions, createTheme as createMuiTheme, responsiveFontSizes } from "@mui/material";
import { Mode } from "../types/types";

/**
 * Wrapper for the function in order to pass type and app parameter.
 * @param type 
 * @param appId 
 * @returns 
 */
const createTheme = (mode: Mode, appId: string): Theme => {
    // Define common elements used in all themes
    const common: ThemeOptions = {
        // Needed to define thinner breakpoints than the default ones to assure nice layout for tiles
        // See client/src/logic/materialUITypes.tsx for module augmentation.
        // See here for more info on material-ui breakpoints: https://material-ui.com/customization/breakpoints/
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
    };

    // Need For Speed theme
    const themeNFS: ThemeOptions = {
        palette: {
            ...common.palette,
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
            ...common.typography,
            fontFamily: [
                // "Inconsolata",
                "Roboto Mono",
                "Open Sans",
                "Arial",
            ].join(","),
        },
    };

    // Solar System theme
    const themeSS: ThemeOptions = {
        palette: {
            ...common.palette,
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
            ...common.typography,
            fontFamily: ["Goldman-Regular", "Open Sans", "Arial"].join(","),
        },
    };

    const themeSales: ThemeOptions = {
        palette: {
            ...common.palette,
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
            ...common.typography,
            fontFamily: ["Lato", "Arial"].join(","),
        },
    };

    // Default theme
    const themeDefault: ThemeOptions = {
        palette: {
            ...common.palette,
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
            ...common.typography,
            fontFamily: ["Open Sans", "Arial"].join(","),
        },
    };

    // Add responsive font sizes and create theme based on selected app
    // If app other than 'SS' or 'NFS' (for example 'undefined'), set DEFAULT theme
    let themeOptions: ThemeOptions;

    switch (appId) {
        case "dashboard": themeSales
            themeOptions = themeSales;
            break;

        case "solar-system":
            themeOptions = themeSS;
            break;

        case "need-for-nutshell":
            themeOptions = themeNFS;
            break;

        default:
            themeOptions = themeDefault;
    }

    return responsiveFontSizes(
        createMuiTheme({
            breakpoints: {
                ...common.breakpoints,
            },
            ...themeOptions
        })
    );
};

const fontSizes = {
    h1: "30px",
    h2: "24px",
    h3: "20px",
    h4: "18px",
    h5: "16px",
    h6: "12px",
    h7: "10px",
    h8: "8px"
};

export { createTheme, fontSizes };
