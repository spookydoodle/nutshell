import React from "react";
import { NutshellContent } from "./NutshellContent";
import { ThemeWrapper } from "./ThemeWrapper";

interface Props {
    animationsInitialized?: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}

export const NutshellLayout: React.FC<Props> = (props) => {

    return (
        <ThemeWrapper>
            <NutshellContent {...props} />
        </ThemeWrapper>
    );
};
