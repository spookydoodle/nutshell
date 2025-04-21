import React from "react";
import { LoadProgress } from "../navigation/LoadProgress";
import { NEED_FOR_SPEED } from "../../slideshows/nfs/nfs-data";
const data = NEED_FOR_SPEED;
const imagesToPreload = data.games.map(({ background }) => background).flat(1);

interface Props {
    children?: React.ReactNode;
}

/**
 * Delays rendering of the slide show until all images are loaded by the browser to assure the right experience.
 * Shows loading progress to user.
 */
export const ImagePreloadWrapper: React.FC<Props> = ({ children }) => {
    const [imagesLoaded, setImagesLoaded] = React.useState(false);
    const [mountProgressIndex, setMountProgressIndex] = React.useState(0);

    React.useEffect(() => {
        const abortController = new AbortController();

        const promises = imagesToPreload.map((url) => {
            return fetch(url, { signal: abortController.signal })
                .then(() => setMountProgressIndex((prev) => prev + 1));
        });

        Promise.all(promises)
            .then(() => setImagesLoaded(true))
            .catch(console.error);

        return () => {
            abortController.abort();
        };
    }, []);

    return imagesLoaded ? children : <LoadProgress index={mountProgressIndex} length={imagesToPreload.length} />;
};
