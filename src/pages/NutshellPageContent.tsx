import React, { useState } from "react";
import { Theme, useMediaQuery } from '@mui/material';
import { Desktop } from "../components/metrics-dashboard/Desktop";
import { Slideshow } from "../logic/slideshow/slideshow";
import * as Hooks from '../hooks';
import { ErrorAlert } from "../components/ErrorAlert";
import { LinearBuffer } from "../components/Loading";

interface Props<T = unknown> {
    slideshow: Slideshow<T>;
}

export const NutshellPageContent: React.FC<Props> = ({ slideshow }) => {
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down(slideshow.smallScreenComponentBreakpoint));
    const [data, setData] = Hooks.useSubjectState(slideshow.data$);
    const [isLoading, setIsLoading] = Hooks.useSubjectState(slideshow.isLoading$);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [error, setError] = Hooks.useSubjectState(slideshow.error$);
    
    React.useEffect(() => {
        const abortController = new AbortController();
        setError(null);
        setIsLoading(true);

        slideshow.fetchData(abortController.signal, setLoadingProgress)
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
        return slideshow.loadingComponent ? <slideshow.loadingComponent progress={loadingProgress} /> : <LinearBuffer />;
    }

    if (error) {
        return slideshow.errorComponent ? <slideshow.errorComponent error={error} /> : <ErrorAlert error={error} />;
    }

    if (!data) {
        return slideshow.noDataComponent ? <slideshow.noDataComponent /> : null;
    }

    if (isSmallScreen && slideshow.smallScreenComponent) {
        return <slideshow.smallScreenComponent slideshow={slideshow} data={data} />;
    }

    return <Desktop slideshow={slideshow} data={data} />;
};
