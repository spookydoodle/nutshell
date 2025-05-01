import React from "react";
import { SlideComponentProps } from "../../../logic/slideshow/slideshow";
import { CoinflowSlideshow } from "../coinflow-slideshow";
import { NavigationBar } from "../../../components/metrics-dashboard/navigation-bar/NavigationBar";
import * as CoinflowTypes from "../coinflow-types";
import * as Hooks from '../../../hooks';
import { Slide } from "./Slide";

export const CoinflowSlide: React.FC<SlideComponentProps<CoinflowTypes.Data>> = ({ slideshow }) => {
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [slideIndex, setSlideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const {
        sequenceLabels,
        sequenceIndex,
        sequence,
        indexWithinSequence,
        totalSlidesLength,
        activeBreadcrumbIndex,
        category,
        titlePrimary,
        titlePrimaryShort,
        titleSecondary,
        titleSecondaryShort
    } = React.useMemo(
        () => CoinflowSlideshow.getSlideStats(slideshow.data, slideIndex),
        [slideshow.data, slideIndex]
    );

    const handleBreadcrumbItemClick = React.useCallback(
        (_name: CoinflowTypes.Category, index: number) => {
            setSlideIndex(index + sequenceIndex * sequenceLabels.length);
        },
        [sequenceLabels, sequenceIndex]
    );

    const handleSequenceItemClick = React.useCallback(
        (_name: CoinflowTypes.Timebox, index: number) => {
            setSlideIndex(indexWithinSequence + sequenceLabels.length * index);
        },
        [indexWithinSequence, sequenceLabels]
    );

    return (
        <>
            <NavigationBar<CoinflowTypes.Category, CoinflowTypes.Timebox>
                header={{
                    category,
                    sequence,
                    titlePrimary,
                    titlePrimaryShort,
                    titleSecondary,
                    titleSecondaryShort,
                }}
                pauseAnimations={animationsInitialized}
                breadcrumbItems={CoinflowSlideshow.breadcrumbItems}
                activeBreadcrumbIndex={activeBreadcrumbIndex}
                onBreadcrumbItemClick={handleBreadcrumbItemClick}
                sequenceItems={CoinflowSlideshow.sequenceItems}
                activeSequenceIndex={Math.floor(slideIndex / (totalSlidesLength / CoinflowSlideshow.sequenceItems.length))}
                onSequenceItemClick={handleSequenceItemClick}
            />
            <Slide slideshow={slideshow} slideIndex={slideIndex} sequenceIndex={sequenceIndex} />
        </>
    );
};
