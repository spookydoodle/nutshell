import React, { useEffect } from "react";
import { Slideshow } from "../../logic/slideshow/slideshow";
import * as Hooks from '../../hooks';
import * as MetricTypes from "./types";
import { DesktopContainer } from "./DesktopContainer";
import { DesktopMetricContent } from "./DesktopMetricContent";

interface Props {
    slideshow: Slideshow;
}

export const Desktop: React.FC<Props> = ({ slideshow }) => {
    const [play] = Hooks.useSubjectState(slideshow.play$);
    const [_index, setIndex] = Hooks.useSubjectState(slideshow.index$);
    const [duration] = Hooks.useSubjectState(slideshow.duration$);

    const slidesData = React.useMemo(() => slideshow.getSlidesData?.(), [slideshow]);
    const dataValues = slidesData ? [...slidesData.values()] : [];
    const slides: MetricTypes.SlideData = dataValues.flat(1);
    const totalLen = slides.length;

    useEffect(() => {
        if (play) {
            const interval = setInterval(() => {
                setIndex((prev) => (prev + 1) % totalLen);
            }, duration);

            return () => {
                clearInterval(interval);
            };
        }
    }, [play, slides, duration, totalLen]);
    
    return (
        <DesktopContainer slideshow={slideshow}>
            {/* TODO: Render from slideshow component */}
            <DesktopMetricContent slideshow={slideshow} />
        </DesktopContainer>
    );
};
