import React from "react";
import { Theme, useMediaQuery } from '@mui/material';
import { Desktop } from "../components/metrics-dashboard/Desktop";
import { Slideshow } from "../logic/slideshow/slideshow";
import * as Hooks from '../hooks';

interface Props<T = unknown> {
    slideshow: Slideshow<T>;
}

export const NutshellPageContent: React.FC<Props> = ({ slideshow }) => {
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down(slideshow.smallScreenComponentBreakpoint));
    const [data, setData] = Hooks.useSubjectState(slideshow.data$);
    const [isLoading, setIsLoading] = Hooks.useSubjectState(slideshow.isLoading$);
    const [error, setError] = Hooks.useSubjectState(slideshow.error$);

    React.useEffect(() => {
        const abortController = new AbortController();
        setError(null);
        setIsLoading(true);

        slideshow.fetchData(abortController.signal)
            .then((d) => {
                setData(d);
                setIsLoading(false)
            })
            .catch((err) => {
                if (!abortController.signal.aborted) {
                    setError(new Error((err as Error).message ?? 'Could not fetch data.'))
                }
            });

        return () => {
            setIsLoading(false);
            abortController.abort();
        };
    }, []);

    if (isLoading) {
        // TODO: Add default loading component
        return slideshow.loadingComponent ? <slideshow.loadingComponent /> : null;
    }

    if (error) {
        // TODO: Add default error component
        return slideshow.errorComponent ? <slideshow.errorComponent error={error} /> : null;
    }

    if (!data) {
        // TODO: Add default no data component
        return slideshow.noDataComponent ? <slideshow.noDataComponent /> : null;
    }

    if (isSmallScreen && slideshow.smallScreenComponent) {
        return <slideshow.smallScreenComponent slideshow={slideshow} data={data} />;
    }

    return <Desktop slideshow={slideshow} data={data} />;
};
