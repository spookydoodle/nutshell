import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box } from '@mui/material';
import { MobileTile as Tile } from "./MobileTile";
import { ScoreList } from "../../dataviz/ScoreList";
import { NestedScoreList } from "../../dataviz/NestedScoreList";
import { MobileProducts } from "./MobileProducts";
import { Tabstrip } from "../Tabstrip";
import { Swiper } from "./Swiper";
import * as MetricTypes from "../metric-types";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
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
    onColumnChange,
    selectedSequence
}: MobileContentProps<TSequence, TColumn>) {
    const classes = useStyles();
    const selectedColumnIndex = React.useMemo(() => columns.findIndex((c) => c === selectedColumn), [columns, selectedColumn]);

    return (
        <Swiper
            columns={columns}
            selectedColumn={selectedColumn}
            onColumnChange={onColumnChange}
            columnComponent={(column) => (
                <Box>
                    <Box className={classNames(classes.card, classes.borderRadiusAll)}>
                        <Tile name={`${column} ${primaryMeasureName} ${selectedSequence}`} data={tiles[selectedColumnIndex]} />
                    </Box>

                    <Tabstrip
                        expandable={true}
                        items={charts[selectedColumnIndex].map((chart) => ({
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
                                    }))
                                    }
                                />
                            )
                        })) ?? []}
                    />

                    <MobileProducts data={products[selectedColumnIndex]} />
                </Box>
            )}
        >
            <Box className={classes.spacing} />
        </Swiper>
    );
}
