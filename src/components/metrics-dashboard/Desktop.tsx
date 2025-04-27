import React from "react";
import { Slideshow } from "../../logic/slideshow/slideshow";
import { DesktopContainer } from "./DesktopContainer";
import * as Hooks from '../../hooks';

interface Props {
    slideshow: Slideshow;
}

export const Desktop: React.FC<Props> = ({ slideshow }) => {
    const [slideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);

    React.useEffect(() => {
        slideshow.start();

        return () => {
            slideshow.stop();
        };
    }, []);
    
    return (
        <DesktopContainer slideshow={slideshow}>
            {slideshow.slideComponent 
                ? <slideshow.slideComponent slideIndex={slideIndex} slideshow={slideshow} /> 
                : slideshow.customSlideshow ? <slideshow.customSlideshow slideshow={slideshow} /> : null}
        </DesktopContainer>
    );
};
