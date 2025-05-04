import React from "react";
import { Slideshow } from "../../logic/slideshow/slideshow";
import { DesktopContainer } from "./DesktopContainer";
import * as Hooks from '../../hooks';

interface Props<T = unknown> {
    slideshow: Slideshow<T>;
    data: T;
}

export const Desktop: React.FC<Props> = ({ slideshow, data }) => {
    const [slideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);

    React.useEffect(() => {
        slideshow.start(data);

        return () => {
            slideshow.stop();
        };
    }, []);

    return (
        <DesktopContainer slideshow={slideshow} data={data}>
            {slideshow.slideComponent
                ? <slideshow.slideComponent slideshow={slideshow} data={data} slideIndex={slideIndex} />
                : slideshow.customSlideshow ? <slideshow.customSlideshow slideshow={slideshow} data={data} /> : null}
        </DesktopContainer>
    );
};
