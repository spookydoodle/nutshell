import React, { useState, useEffect } from "react";
import { NutshellLayout } from "../layouts/Nutshell";
import { TitleLogoBar } from "../layouts/TitleLogoBar";
import { SlideshowSolar } from "../components/metrics-dashboard/SlideshowSolar";
import { SolarSlideshow } from "../slideshow/solar/solar-slideshow";
import * as Hooks from '../hooks';

interface Props {
    slideshow: SolarSlideshow;
}

export const NutshellSolar: React.FC<Props> = ({ slideshow }) => {
	const appId = Hooks.useAppId();

	// Delay the transitions 5 seconds, when all CSS transitions are finished
	const [play, setPlay] = useState(false);
	const [animationsInitialized, setAnimationsInitialized] = useState(false);

	useEffect(() => {
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

	const selectedData = slideshow.data?.get(appId);
	const tickerData = selectedData?.ticker;
	const slidesData = selectedData?.slides;

	return (
		<NutshellLayout
            slideshow={slideshow}
			header={<TitleLogoBar title='_SOLAR_NUTSHELL' titleShort='_SOL_NUT' backIcon={true} />}
		>
			{slidesData && (
				<SlideshowSolar
					animationsInitialized={animationsInitialized}
					play={play}
					setPlay={setPlay}
					data={slidesData}
					tickerData={tickerData}
				/>
			)}
		</NutshellLayout>
	);
};
