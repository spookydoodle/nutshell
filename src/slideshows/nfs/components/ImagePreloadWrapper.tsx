import React from "react";
import { LoadingComponentProps } from "../../../logic/slideshow/slideshow";
import { LoadProgress } from "../../../components/navigation/LoadProgress";

/**
 * Delays rendering of the slide show until all images are loaded by the browser to assure the right experience.
 * Shows loading progress to user.
 */
export const ImagePreloadWrapper: React.FC<LoadingComponentProps> = ({ progress }) => {
    return <LoadProgress progress={progress} />;
};
