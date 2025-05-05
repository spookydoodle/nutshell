import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Theme } from '@mui/material';
import { Slideshow } from "../../../logic/slideshow/slideshow";
import { BarChartDataItem } from "../../../components/dataviz/dataviz-types";
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
    column: SolarTypes.Property;
    property: SolarTypes.PropertyValue;
    maxRows: number;
}

export const MetricsColumnChart: React.FC<Props> = ({ slideshow, data, column, property, maxRows }) => {
    const classes = useStyles();
    const appId = Hooks.useAppId();
    const [play] = Hooks.useSubjectState(slideshow.play$);
    const [duration] = Hooks.useSubjectState(slideshow.duration$);

    const chartData = React.useMemo(
        (): BarChartDataItem[] => Object.entries(property.data)
            .map(([planet, value]): BarChartDataItem => {
                const delta = SolarUtils.getMetricDelta(value, column, data.metrics);

                return {
                    category: planet,
                    value,
                    valueFormatted: Utils.Formats.formatNumber(value, { scaling: 1, decimals: 1 }),
                    delta,
                    deltaFormatted: `${Utils.Formats.formatNumber(delta, { scaling: 1, decimals: 1 })}${SolarUtils.suffix}`,
                    isDeltaGood: delta > 1,
                    isDeltaBad: delta < 1,
                };
            }),
        [property, column, data.metrics]
    );

    return (
        <Box className={classes.chartContainer}>
            <BarChart
                variant="scroll"
                type="abs-delta"
                rankColor="primary"
                labelSize="md"
                play={play}
                scrollId={`${appId}-${column.replace(" ", "-").toLowerCase()}`}
                slideDuration={duration}
                data={chartData}
                maxRows={maxRows}
                applySort={true}
            />
        </Box>
    );
};
