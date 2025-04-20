import React from "react";
import { NutshellContent } from "./NutshellContent";
import { ThemeWrapper } from "./ThemeWrapper";
import { Slideshow } from "../slideshow/slideshow";

interface Props {
    slideshow: Slideshow;
    animationsInitialized?: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}

export const NutshellLayout: React.FC<Props> = (props) => {

    return (
        <ThemeWrapper slideshow={props.slideshow}>
            <NutshellContent {...props} />
        </ThemeWrapper>
    );
};
