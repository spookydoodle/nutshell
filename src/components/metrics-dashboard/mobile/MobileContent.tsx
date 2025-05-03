import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box } from '@mui/material';
import { MobileTile as Tile } from "./MobileTile";
import { ScoreList } from "../../dataviz/ScoreList";
import { NestedScoreList } from "../../dataviz/NestedScoreList";
import { MobileProducts } from "./MobileProducts";
import { Tabstrip } from "../Tabstrip";
import * as MetricTypes from "../metric-types";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        swiperContainer: {
            width: "100vw",
            minWidth: "100vw",
            position: "relative",
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 140px, rgba(0, 0, 0, .6) 200px)",
            overflowX: "hidden",
            maxWidth: "100vw",
            maxHeight: "calc(100vh - 65px)",
            overflowY: "auto"
        },
        spacing: {
            margin: 0,
            width: "100%",
            height: "160px",
        },
        card: {
            width: "100%",
            position: "relative",
            backgroundColor: "rgba(255, 255, 255, .87)",
        },
        borderRadiusAll: {
            borderRadius: "4px",
        },
        swiper: {
            display: "flex",
            overflowX: "visible",
            width: "100%",
            transition: "transform .2s ease-out",
        },
        swipeItem: {
            padding: "0 16px",
            minWidth: "100vw",
        },
    })
);

export interface MobileContentProps<TSequence extends string, TColumn extends string> {
    tiles: (MetricTypes.Datum | undefined)[];
    charts: { name: string; data: MetricTypes.Datum[]; }[][];
    products: MetricTypes.Item[][];
    productSlides: string[];
    primaryMeasureName: string;
    columns: TColumn[];
    selectedColumn: TColumn;
    onColumnChange: (column: TColumn) => void;
    selectedSequence: TSequence;
}

export function MobileContent<TSequence extends string, TColumn extends string>({
    tiles,
    charts,
    products,
    productSlides,
    primaryMeasureName,
    columns,
    selectedColumn,
    onColumnChange, // TODO: Keep and repair swipe
    selectedSequence
}: MobileContentProps<TSequence, TColumn>) {
    const classes = useStyles();
    const [swipeX, setSwipeX] = React.useState(0);

    return (
        <Box className={classes.swiperContainer}>
            <Box className={classes.spacing} />

            <Box
                // onT
                className={classes.swiper}
                style={{ transform: `translateX(${-100 * columns.findIndex((c) => c === selectedColumn)}%)`, }}
            >
                {columns.map((column, i) => (
                    <Box key={`${column}-box`} id={`${column}-box`} className={classes.swipeItem}>
                        <Box className={classNames(classes.card, classes.borderRadiusAll)}>
                            <Tile name={`${column} ${primaryMeasureName} ${selectedSequence}`} data={tiles[i]} />
                        </Box>

                        <Tabstrip
                            expandable={true}
                            items={charts[i].map((chart) => ({
                                name: chart.name,
                                component: chart.data.some((datum) => (datum.subitems?.length ?? 0) > 0) ? (
                                    <NestedScoreList
                                        data={chart.data.map((datum) => ({
                                            category: datum.name,
                                            subcategory: datum.attributePrimary?.key,
                                            value: datum.primary,
                                            valueFormatted: `${datum.primaryFormatted}`,
                                            delta: datum.primaryDelta,
                                            deltaFormatted: datum.primaryDeltaFormatted,
                                            isDeltaGood: datum.primaryIsGood,
                                            isDeltaBad: datum.primaryIsBad,
                                            subitems: (datum.subitems ?? []).map((tickerItem) => ({
                                                category: tickerItem.name,
                                                subcategory: tickerItem.key,
                                                value: tickerItem.primary,
                                                valueFormatted: `${tickerItem.primaryFormatted}`,
                                                delta: tickerItem.primaryDelta,
                                                deltaFormatted: tickerItem.primaryDeltaFormatted,
                                                isDeltaGood: tickerItem.primaryIsGood,
                                                isDeltaBad: tickerItem.primaryIsBad,
                                            })),
                                        }))
                                        }
                                    />
                                ) : (
                                    <ScoreList
                                        data={chart.data.map((datum) => ({
                                            category: datum.name,
                                            subcategory: productSlides.find((slideName) => slideName === datum.attributePrimary?.key) ?? '',
                                            value: datum.primary,
                                            valueFormatted: `${datum.primaryFormatted}`,
                                            delta: datum.primaryDelta,
                                            deltaFormatted: datum.primaryDeltaFormatted,
                                            isDeltaGood: datum.primaryIsGood,
                                            isDeltaBad: datum.primaryIsBad,
                                        })) || []
                                        }
                                    />
                                )
                            })) ?? []}
                        />

                        <MobileProducts data={products[i]} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
