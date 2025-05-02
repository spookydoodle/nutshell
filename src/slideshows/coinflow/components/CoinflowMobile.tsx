import React from "react";
import { Slideshow } from "../../../logic/slideshow/slideshow";
import { CoinflowSlideshow } from "../coinflow-slideshow";
import { MobileHeader } from "../../../components/metrics-dashboard/mobile/MobileHeader";
import { MobileContent, MobileContentProps } from "../../../components/metrics-dashboard/mobile/MobileContent";
import { Footer } from "../../../components/metrics-dashboard/mobile/Footer";
import * as MetricTypes from '../../../components/metrics-dashboard/metric-types';
import * as Utils from "../coinflow-data-utils";
import * as CoinflowTypes from "../coinflow-types";

interface Props {
    slideshow: Slideshow<CoinflowTypes.Data>;
}

export const CoinflowMobile: React.FC<Props> = ({ slideshow }) => {
    const [selectedSequence, setSelectedSequence] = React.useState<CoinflowTypes.Timebox>(CoinflowSlideshow.sequenceItems[0]);
    const [selectedColumn, setSelectedColumn] = React.useState<CoinflowTypes.Column>(CoinflowSlideshow.columns[0]);
    const title = React.useMemo(() => slideshow.title ?? "", [slideshow]);

    const handleSequenceChange = React.useCallback(
        (s: CoinflowTypes.Timebox) => setSelectedSequence(s),
        []
    );

    const handleColumnChange = React.useCallback(
        (c: CoinflowTypes.Column) => setSelectedColumn(c),
        []
    );

    const tiles = React.useMemo(
        (): MobileContentProps<CoinflowTypes.Timebox, CoinflowTypes.Column>['tiles'] => {
            return CoinflowSlideshow.columns.map((c) => Utils.getTileData(slideshow.data.tiles, c, selectedSequence));
        },
        [slideshow.data, selectedSequence]
    );

    const charts = React.useMemo(
        (): MobileContentProps<CoinflowTypes.Timebox, CoinflowTypes.Column>['charts'] => {
            return CoinflowSlideshow.columns.map((c) => slideshow.data.charts.map((chart) => ({
                name: chart.category,
                data: Utils.getChartsData(chart.data, c, selectedSequence)
            })));
        },
        [slideshow.data, selectedSequence]
    );

    const sequenceLabels = React.useMemo(
        () => CoinflowSlideshow.getSequenceLabels(slideshow.data),
        [slideshow.data]
    );

    const productSlides = React.useMemo(
        () => sequenceLabels.filter((el) => el.subSequenceName === 'Products').map((el) => el.label),
        [sequenceLabels]
    );

    const products = React.useMemo(
        (): MobileContentProps<CoinflowTypes.Timebox, CoinflowTypes.Column>['products'] => {            
            return CoinflowSlideshow.columns.map((column) => {
                return productSlides.map((slideName) => {
                    const tileData = Utils.filterByDimensionText(slideshow.data.charts.find((chart) => chart.category === 'Sectors')?.data ?? [], slideName);

                    return {
                        tile: Utils.getTileData(tileData, column, selectedSequence),
                        main: new Map(
                            CoinflowSlideshow.productRows.map((row): [string, MetricTypes.MainDataItemItem] => [
                                row,
                                {
                                    type: "items",
                                    name: slideName,
                                    data: Utils.getProductsData(slideshow.data.products, column, selectedSequence, slideName, { key: row, text: row }),
                                },
                            ])
                        )
                    };
                })
            });
        },
        [productSlides, slideshow.data, selectedSequence]
    );

    return (
        <>
            <MobileHeader
                title={title}
                sequenceItems={CoinflowSlideshow.sequenceItems}
                selectedSequence={selectedSequence}
                onSequenceChange={handleSequenceChange}
                columns={CoinflowSlideshow.columns}
                selectedColumn={selectedColumn}
                onColumnChange={handleColumnChange}
            />
            <MobileContent
                tiles={tiles}
                charts={charts}
                products={products}
                productSlides={productSlides}
                primaryMeasureName={title}
                selectedSequence={selectedSequence}
                onColumnChange={handleColumnChange}
                columns={CoinflowSlideshow.columns}
                selectedColumn={selectedColumn}
            />
            <Footer text="Turbocharged by spookydoodle" />
        </>
    );
};
