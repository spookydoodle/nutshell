import React, { useState, useEffect } from "react";
import { NutshellLayout } from "../layouts/Nutshell";
import { TitleLogoBar } from "../layouts/Header";
import { SlideshowSolar } from "../components/metrics-dashboard/SlideshowSolar";
import { createStateData } from "../data/solar-data";
import * as Hooks from '../hooks';
const data = createStateData();

export const NutshellSolar: React.FC = () => {
	const appId = Hooks.useAppId();

	// Delay the transitions 5 seconds, when all CSS transitions are finished
	const [play, setPlay] = useState(false);
	const [animationsInitialized, setAnimationsInitialized] = useState(false);

	useEffect(() => {
		// Init is used to pause css animations
		// Delay play until entry animations are finished
		if (!animationsInitialized && data) {
			const timeout = setTimeout(() => {
				setAnimationsInitialized(true);
                setPlay(true);
			}, 5000);

			return () => {
				clearTimeout(timeout);
			};
		}
	}, [animationsInitialized]);

	const selectedData = data?.get(appId);
	const tickerData = selectedData?.ticker;
	const slidesData = selectedData?.slides;

	return (
		<NutshellLayout
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
