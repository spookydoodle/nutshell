import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Theme, useMediaQuery } from '@mui/material';
import { SolarSlideshow } from "../solar-slideshow";
import { Slideshow } from "../../../logic/slideshow/slideshow";
import { BarChartDataItem } from "../../../components/dataviz/dataviz-types";
import { Column } from "../../../components/metrics-dashboard/Column";
import { BarChart } from "../../../components/dataviz/HTMLCharts/BarChart";
import * as Hooks from '../../../hooks';
import * as SolarTypes from "../solar-types"
import * as SolarUtils from "../solar-data-utils";
import * as Utils from "../../../utils";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        chartContainer: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
        }
    })
);

interface Props {
    slideshow: Slideshow<SolarTypes.SolarData>;
    data: SolarTypes.SolarData;
}

export const MetricsSlide: React.FC<Props> = ({ slideshow, data }) => {
    const classes = useStyles();
    const appId = Hooks.useAppId();
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [slideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const [play] = Hooks.useSubjectState(slideshow.play$);
    const [duration] = Hooks.useSubjectState(slideshow.duration$);
    const isLgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

    const columnsToRender = React.useMemo(
        () => SolarSlideshow.getMetricsColumnsToRender(slideIndex, { isLgUp }),
        [slideIndex, isLgUp]
    );
    
    const maxRows = React.useMemo(
        () => columnsToRender.reduce<number>(
            (acc, val) => Math.max(acc, Object.keys(data.metrics[val].data).length),
            0,
        ),
        [data.metrics, columnsToRender]
    );

    return (
        columnsToRender.map((column) => {
            const property = data.metrics[column];
            const values = Object.values(data.metrics[column].data);

            return (
                <Column
                    key={column}
                    animationsInitialized={animationsInitialized}
                    name={column}
                    tileData={{
                        name: column,
                        tooltip: property.definition,
                        primary: SolarUtils.getSum(values),
                        primaryFormatted: `${SolarUtils.getRange(values)} ${property.unit}`,
                        primaryDelta: SolarUtils.getAvg(values),
                        primaryDeltaFormatted: `Avg: ${Utils.Formats.formatNumber(SolarUtils.getAvg(values), { scaling: 1, decimals: 2 })} ${property.unit}`,
                    }}
                    component={<Box className={classes.chartContainer}>
                        <BarChart
                            variant="scroll"
                            type="abs-delta"
                            rankColor="primary"
                            labelSize="md"
                            play={play}
                            scrollId={`${appId}-${column.replace(" ", "-").toLowerCase()}`}
                            slideDuration={duration}
                            data={Object.entries(property.data)
                                .map(
                                    ([planet, value]): BarChartDataItem => {
                                        const delta = SolarUtils.getMetricDelta(value, column as SolarTypes.Property, data.metrics);

                                        return {
                                            category: planet,
                                            value: value,
                                            valueFormatted: Utils.Formats.formatNumber(
                                                value,
                                                {
                                                    scaling: 1,
                                                    decimals: 1
                                                }
                                            ),
                                            delta: delta,
                                            deltaFormatted: `${Utils.Formats.formatNumber(delta, { scaling: 1, decimals: 1 })}${SolarUtils.suffix}`,
                                            isDeltaGood: delta > 1,
                                            isDeltaBad: delta < 1,
                                        };
                                    }
                                )}
                            maxRows={maxRows}
                            applySort={true}
                        />
                    </Box>}
                />
            );
        })
    );
};
