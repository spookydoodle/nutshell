import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import * as AppState from "../state";
import * as Hooks from '../hooks';
import { Slideshow } from "../slideshow/slideshow";

interface Props {
    slideshow: Slideshow;
    children?: React.ReactNode;
}

export const ThemeWrapper: React.FC<Props> = ({ slideshow, children }) => {
    const mode = Hooks.useSubject(AppState.mode$);
    const theme = slideshow.createTheme(mode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
