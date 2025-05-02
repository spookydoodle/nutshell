import React from "react";
import { MobileHeader } from "../../../components/metrics-dashboard/mobile/MobileHeader";
import { MobileContent } from "../../../components/metrics-dashboard/mobile/MobileContent";
import { Footer } from "../../../components/metrics-dashboard/mobile/Footer";
import { Slideshow } from "../../../logic/slideshow/slideshow";
import * as Utils from "../coinflow-data-utils";
import * as CoinflowTypes from "../coinflow-types";
import { CoinflowSlideshow } from "../coinflow-slideshow";

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

    const mobileData = React.useMemo(
        () => Utils.convertToMapMobile(slideshow.data),
        [slideshow.data]
    );

    const productSlides = React.useMemo(
        () => Utils.getUnique(slideshow.data, 'slideName'),
        [slideshow.data]
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
                mobileData={mobileData}
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
