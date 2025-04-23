import React from "react";
import { Slideshow } from "../../logic/slideshow/slideshow";
import { DesktopContainer } from "./DesktopContainer";
import { DesktopMetricContent } from "./DesktopMetricContent";

interface Props {
    slideshow: Slideshow;
}

export const Desktop: React.FC<Props> = ({ slideshow }) => {    
    return (
        <DesktopContainer slideshow={slideshow}>
            {/* TODO: Render from slideshow component */}
            <DesktopMetricContent slideshow={slideshow} />
        </DesktopContainer>
    );
};
