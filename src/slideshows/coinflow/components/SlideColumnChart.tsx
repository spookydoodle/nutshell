import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box } from '@mui/material';
import { SlideComponentProps } from "../../../logic/slideshow/slideshow";
import { BarChart } from "../../../components/dataviz/HTMLCharts/BarChart";
import * as Hooks from '../../../hooks';
import * as Utils from '../coinflow-data-utils';
import * as CoinflowTypes from "../coinflow-types";

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
    category: CoinflowTypes.Category;
    timebox: CoinflowTypes.Timebox;
    column: CoinflowTypes.Column;
    columnsToRender: CoinflowTypes.Column[];
}

export const SlideColumnChart: React.FC<SlideComponentProps<CoinflowTypes.Data> & Props> = ({
    slideshow,
    category,
    timebox,
    column,
    columnsToRender
}) => {
    const classes = useStyles();
    const appId = Hooks.useAppId();
    const [play] = Hooks.useSubjectState(slideshow.play$);
    const [duration] = Hooks.useSubjectState(slideshow.duration$);

    const chart = React.useMemo(
        () => slideshow.data.charts.find((el) => el.category === category),
        [slideshow.data, category]
    );

    const data = React.useMemo(
        () => chart ? Utils.getChartsData(chart.data, column, timebox) : undefined,
        [chart, column, timebox]
    );

    const maxRows = React.useMemo(
        () => chart
            ? columnsToRender.reduce<number>((acc, val) => Math.max(acc, chart.data.filter((datum) => datum.columnName.text === val).length), 0)
            : undefined,
        [chart, columnsToRender]
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
                data={data?.map((row) => ({
                    category: row.name,
                    value: row.primary,
                    valueFormatted: row.primaryFormatted,
                    delta: row.primaryDelta,
                    deltaFormatted: row.primaryDeltaFormatted,
                    isDeltaGood: row.primaryIsGood,
                    isDeltaBad: row.primaryIsBad,
                })) ?? []}
                maxRows={maxRows}
                applySort={true}
            />
        </Box>
    );
};
