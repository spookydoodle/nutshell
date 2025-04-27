import React from "react";
import { Slideshow } from "../../logic/slideshow/slideshow";
import { DesktopContainer } from "./DesktopContainer";

interface Props {
    slideshow: Slideshow;
}

export const Desktop: React.FC<Props> = ({ slideshow }) => {
    React.useEffect(() => {
        slideshow.start();

        return () => {
            slideshow.stop();
        };
    }, []);
    
    return (
        <DesktopContainer slideshow={slideshow}>
            <slideshow.customSlideshow slideshow={slideshow} />
        </DesktopContainer>
    );
};
