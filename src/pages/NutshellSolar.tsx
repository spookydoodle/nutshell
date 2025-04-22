import React from "react";
import { Layout } from "../layouts/Layout";
import { NavbarTitle } from "../layouts/NavbarTitle";
import { SlideshowSolar } from "../components/metrics-dashboard/SlideshowSolar";
import { SolarSlideshow } from "../slideshows/solar/solar-slideshow";
import * as Hooks from '../hooks';

interface Props {
    slideshow: SolarSlideshow;
}

export const NutshellSolar: React.FC<Props> = ({ slideshow }) => {
    // Delay the transitions 5 seconds, when all CSS transitions are finished
    const [play, setPlay] = Hooks.useSubjectState(slideshow.play$);

    React.useEffect(() => {
        slideshow.start(5000);

        return () => {
            slideshow.stop();
        };
    }, []);

    const selectedData = slideshow.data;
    const slidesData = selectedData?.slides;

    return (
        <Layout
            slideshow={slideshow}
            header={<NavbarTitle title={slideshow.name} titleShort={slideshow.shortName} backIcon />}
        >
            {slidesData && (
                <SlideshowSolar
                    slideshow={slideshow}
                    play={play}
                    setPlay={setPlay}
                    data={slidesData}
                />
            )}
        </Layout>
    );
};
