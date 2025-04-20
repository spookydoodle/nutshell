import React, { useMemo } from "react";
import { createTheme, Theme } from "@mui/material";
import { NutshellContent } from "./NutshellContent";
import { ThemeWrapper } from "./ThemeWrapper";
import { Slideshow } from "../slideshow/slideshow";
import * as AppState from "../state";
import * as Hooks from '../hooks';


interface Props {
    slideshow?: Slideshow;
    animationsInitialized?: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}

export const NutshellLayout: React.FC<Props> = (props) => {
    const mode = Hooks.useSubject(AppState.mode$);
    const theme = useMemo(
        (): Theme => props.slideshow?.createTheme(mode) ?? Slideshow.createDefaultTheme(mode),
        [props.slideshow, mode]
    );

    return (
        <ThemeWrapper theme={theme}>
            <NutshellContent {...props} />
        </ThemeWrapper>
    );
};
