import React from "react";
import { CssBaseline, ThemeProvider, Theme } from "@mui/material";
interface Props {
    theme: Theme;
    children?: React.ReactNode;
}

export const ThemeWrapper: React.FC<Props> = ({ theme, children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
