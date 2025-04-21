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
    const [animationsInitialized, setAnimationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);

    React.useEffect(() => {
        // Init is used to pause css animations
        // Delay play until entry animations are finished
        if (!animationsInitialized && slideshow.data) {
            const timeout = setTimeout(() => {
                setAnimationsInitialized(true);
                setPlay(true);
            }, 5000);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [animationsInitialized]);

    const selectedData = slideshow.data?.get('solar-system');
    const tickerData = selectedData?.ticker;
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
                    tickerData={tickerData}
                />
            )}
        </Layout>
    );
};
