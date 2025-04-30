import React from "react";
import { animateScroll } from "react-scroll";
import classNames from "classnames";
import { Box } from "@mui/material";
import { BarChartRowAbsDelta } from "./BarChartRowAbsDelta";
import { BarChartRowDeltaAbs } from "./BarChartRowDeltaAbs";
import { BarChartRowAbsDeltaMulti } from "./BarChartRowAbsDeltaMulti";
import { BarChartData, BarChartDataItem } from "../../../logic/datavizTypes";
import { BarProps } from './html-chart-types';
import { useStyles } from "./styles";

const SCROLL_DURATION = 2000;

interface Props {
    /**
     * Unique id for the parent div of the chart, used for scrolling to bottom in case there are more than 10 bars on the chart.
     */
    scrollId: string;
    /**
     * Duration (in ms) of the slide display. Determines after which time the slideshow moves on to the next slide. Required for charts scroll calculation. Defaults to 20 000 ms.
     */
    slideDuration?: number;
    /**
     * Whether or not user activated the automated transitioning between the slides.
     */
    play: boolean;
    /**
     * Data required to render the bar chart.
     */
    data: BarChartData;
    /**
     * Max number of bars on any chart outside of this component, with which this chart should be synchronized. Required for aesthetic scrolling of all visible charts on a single slide.
     */
    maxRows?: number;
    /**
     * Transition type between showing different parts of the bar chart. Applicable to those charts which show more than 10 bars.
     */
    variant: "scroll" | "fade";
    /**
     * Determines which KPI to display on which side. 
     * - `delta-abs` will display the delta to reference value before the bar and the absolute value behind the bar. 
     * - `abs-delta` same as above just the other way around. 
     * - `abs-delta-multi` same as above but will also display the delta as green or red bars in a second chart to the right of the one with absolute values.
     */
    type: "delta-abs" | "abs-delta" | "abs-delta-multi";
    /**
     * Color of chart bars. Refers to theme's color palette.
     */
    rankColor?: "primary" | "secondary";
    /**
     * Size of the label before the chart bar.
     */
    labelSize?: "sm" | "md";
    /**
     * Sort results descending by absolute value.
     */
    applySort?: boolean;
}

export const BarChart: React.FC<Props> = ({
    variant,
    type,
    scrollId,
    slideDuration = 20000,
    play,
    data,
    maxRows,
    rankColor,
    labelSize,
    applySort
}) => {
    const classes = useStyles();
    const filteredData = React.useMemo((): BarChartData => data.filter((row) => !!row.category), [data]);
    const max = React.useMemo((): number => Math.max(...filteredData.map((row) => Number(row.value))), [filteredData]);
    const min = React.useMemo((): number => Math.min(...filteredData.map((row) => Number(row.value))), [filteredData]);

    const scrollID = React.useMemo((): string => `scroll-container-${scrollId}`, [scrollId]);

    const runScroll = React.useCallback(
        () => {
            const shouldAnimate = Math.max(maxRows ?? 0, filteredData.length) > 10;
            if (!play || variant !== 'scroll' || !shouldAnimate) {
                return;
            }
            const timeout = setTimeout(() => {
                animateScroll.scrollToBottom({ containerId: scrollID, duration: SCROLL_DURATION });
            }, slideDuration / 2 - SCROLL_DURATION / 2);

            return () => {
                clearTimeout(timeout);
            };
        },
        [play, variant, maxRows, filteredData.length, scrollID, slideDuration]
    );

    // This variant fades in and out sequentially every 10 results from the data set
    const [index, setIndex] = React.useState(0);
    const [blink, setBlink] = React.useState(false);

    const runFade = React.useCallback(
        () => {
            if (variant !== "fade") {
                return;
            }
            setIndex(0);
            setBlink(false);

            const timeout = setTimeout(() => {
                setIndex((prev) => prev + 1);
            }, slideDuration / Math.ceil(filteredData.length / 10));

            const timeoutBlink = setTimeout(() => {
                setBlink(true);
            }, slideDuration / 2 - 1000);

            return () => {
                clearTimeout(timeout);
                clearTimeout(timeoutBlink);
            };
        },
        [variant, slideDuration, filteredData.length]
    );

    React.useEffect(() => {
        if (variant === "scroll") {
            runScroll();
        } else {
            runFade();
        }
    }, []);

    const fillerBars = React.useMemo(
        (): BarChartDataItem[] => {
            const fillersLength = maxRows ? Math.max(maxRows, 10) - filteredData.length : 10 - (filteredData.length % 10);

            return new Array(fillersLength).fill({ category: "", value: 0, delta: 0, filler: true });
        },
        [maxRows, filteredData.length]
    );

    const barsData = React.useMemo(
        () => {
            let sortedData = [...filteredData];
            if (applySort) {
                sortedData.sort((a, b) => Number(b.value) - Number(a.value))
            }
            sortedData = [...sortedData, ...fillerBars];
            if (variant === 'fade') {
                return sortedData.filter((_item, i) => i >= index * 10 && i < (index + 1) * 10);
            }
            return sortedData;
        },
        [filteredData, fillerBars, applySort, variant, index]
    );

    const BarComponent = React.useMemo(
        (): React.ComponentType<BarProps> => {
            switch (type) {
                case 'abs-delta': return BarChartRowAbsDelta;
                case 'delta-abs': return BarChartRowDeltaAbs;
                case 'abs-delta-multi': return BarChartRowAbsDeltaMulti;
            }
        },
        [type]
    );

    return (
        <Box
            id={scrollID}
            className={classNames(type === "abs-delta" ? classes.container : classes.containerSm, {
                [classes.fadeOutIn]: blink
            })}
        >
            <div className={classes.bars}>
                {barsData.map((row, i) =>
                    <BarComponent
                        key={`chart-bar-${i}-${row.category}`}
                        i={i + index * 10}
                        category={row.category}
                        filler={!!row.filler}
                        value={row.value}
                        valueFormatted={row.valueFormatted}
                        delta={row.delta}
                        deltaFormatted={row.deltaFormatted}
                        isDeltaGood={row.isDeltaGood}
                        isDeltaBad={row.isDeltaBad}
                        max={max}
                        min={min}
                        absPosition="behind-bar"
                        rankColor={rankColor}
                        labelSize={labelSize}
                    />
                )}
            </div>
        </Box>
    );
};
