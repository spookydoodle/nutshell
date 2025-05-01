import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box } from '@mui/material';
import { SlideComponentProps } from "../../../logic/slideshow/slideshow";
import { BarChart } from "../../../components/dataviz/HTMLCharts/BarChart";
import * as Hooks from '../../../hooks';
import * as Utils from '../coinflow-data-utils';
import * as CoinflowTypes from "../coinflow-types";
import { CoinflowSlideshow } from "../coinflow-slideshow";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        chartContainer: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
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

    const chart = slideshow.data.charts.find((el) => el.category === category);
    const data = chart ? Utils.getChartsData(chart.data, column, timebox) : undefined;
    const maxRows = chart 
        ? columnsToRender.reduce<number>((acc, val) => Math.max(acc, chart.data.filter((datum) => datum.columnName.text === val).length), 0)
        : undefined;

    return (
        <Box className={classes.spaceEvenly}>
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
                    // maxRows={getMaxRows(slideIndex)}
                    applySort={true}
                />
            </Box>
        </Box>
    );
};
