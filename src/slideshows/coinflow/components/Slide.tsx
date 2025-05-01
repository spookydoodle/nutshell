import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box, useMediaQuery } from '@mui/material';
import { SlideComponentProps } from "../../../logic/slideshow/slideshow";
import { Content } from "../../../components/metrics-dashboard/Content";
import { BarChart } from "../../../components/dataviz/HTMLCharts/BarChart";
import { Bestsellers } from "../../../components/metrics-dashboard/Bestsellers";
import { convertToMap } from "../coinflow-data-utils";
import { CoinflowSlideshow } from "../coinflow-slideshow";
import * as Hooks from '../../../hooks';
import * as MetricTypes from "../../../components/metrics-dashboard/metric-types";
import * as CoinflowTypes from "../coinflow-types";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        chartContainer: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
        },
        divider: {
            marginTop: ".5em",
            marginBottom: ".5em",
        },
        spaceEvenly: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }
    })
);

interface Props {
    sequenceIndex: number;
}

export const Slide: React.FC<SlideComponentProps<CoinflowTypes.Data> & Props> = ({ slideshow, slideIndex, sequenceIndex }) => {
    const classes = useStyles();
    const isLgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
    const hiddenMdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const appId = Hooks.useAppId();
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [play] = Hooks.useSubjectState(slideshow.play$);
    const [duration] = Hooks.useSubjectState(slideshow.duration$);

    const slidesData = React.useMemo(() => convertToMap(slideshow.data).slides, [slideshow]);
    const dataValues = slidesData ? [...slidesData.values()] : [];
    const slides: MetricTypes.SlideData<CoinflowTypes.Category> = dataValues.flat(1);

    const getMaxRows = (_i: number) =>
        Math.max(
            ...[...slides[slideIndex].data.values()]
                .map((s) => [...s.main.values()].map((e) => e.data.length))
                .flat(2)
        );

    const getComponents = (name: string) =>
        slides.map((slide, ind) => {
            const entries = [...(slide.data.get(name)?.main.entries() || [])];
            return <Box className={classes.spaceEvenly}>
                {entries
                    .map(([key, val], i) => {
                        return val.type === "bar-chart" ? (
                            <Box key={`chart-${name}-${key}-${i}`} className={classes.chartContainer}>
                                <BarChart
                                    variant="scroll"
                                    type="abs-delta"
                                    rankColor="primary"
                                    labelSize="md"
                                    play={play}
                                    scrollId={`${appId}-${name.replace(" ", "-").toLowerCase()}`}
                                    slideDuration={duration}
                                    data={
                                        val.data.map((row) => ({
                                            category: row.name,
                                            value: row.primary,
                                            valueFormatted: row.primaryFormatted,
                                            delta: row.primaryDelta,
                                            deltaFormatted: row.primaryDeltaFormatted,
                                            isDeltaGood: row.primaryIsGood,
                                            isDeltaBad: row.primaryIsBad,
                                        })) || []
                                    }
                                    maxRows={getMaxRows(slideIndex)}
                                    applySort={true}
                                />
                            </Box>
                        ) : val.type === "items" && val.data.length > 0 ? (
                            <Bestsellers key={`items-${name}-${ind}-${i}`} title={key} data={val.data} divider={i < entries.length - 1} />
                        ) : null;
                    })}
            </Box>;
        });
    
    return [...slides[slideIndex].data.entries()].map(([name, value], i) => {
        if (!(isLgDown && i === 1) && !(hiddenMdDown && i > 0)) {
            const components = getComponents(name);
            return (
                <Content
                    key={`${name}-${i}`}
                    animationsInitialized={animationsInitialized}
                    name={name}
                    tileData={value.tile}
                    component={components[Math.min(slideIndex, components.length - 1)]}
                />
            )
        }
        return null;
    });
};
