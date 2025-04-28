import React from "react";
import { MobileHeader } from "../../../components/metrics-dashboard/mobile/MobileHeader";
import { MobileContent } from "../../../components/metrics-dashboard/mobile/MobileContent";
import { Footer } from "../../../components/metrics-dashboard/mobile/Footer";
import * as MetricTypes from "../../../components/metrics-dashboard/metric-types";
import { Slideshow } from "../../../logic/slideshow/slideshow";
import * as Utils from "../coinflow-data-utils";
import { Timebox } from "../coinflow-types";

interface Props {
    slideshow: Slideshow<MetricTypes.Data<Timebox>>;
}

export const CoinflowMobile: React.FC<Props> = ({ slideshow }) => {
    const [timeboxIndex, setTimeboxIndex] = React.useState(0);
    const [chanIndex, setChanIndex] = React.useState(0);
    const title = React.useMemo(() => slideshow.title ?? "", [slideshow]);

    const handleTimeboxChange = React.useCallback(
        (index: number) => setTimeboxIndex(index),
        []
    );

    const handleColumnNameChange = React.useCallback(
        (index: number) => setChanIndex(index),
        []
    );

    const columnNames = React.useMemo(
        () => Utils.getUnique(slideshow.data, 'columnName'),
        [slideshow.data]
    );

    const timeboxes = React.useMemo(
        () => Utils.getUniqueTimeboxes(slideshow.data),
        [slideshow.data]
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
                timeboxIndex={timeboxIndex}
                handleTimeboxChange={handleTimeboxChange}
                chanIndex={chanIndex}
                handleColumnNameChange={handleColumnNameChange}
                columnNames={columnNames.map((el) => el.key)}
                timeboxes={timeboxes}
                title={title}
            />

            <MobileContent
                mobileData={mobileData}
                productSlides={productSlides}
                timeboxIndex={timeboxIndex}
                chanIndex={chanIndex}
                handleColumnNameChange={handleColumnNameChange}
                columnNames={columnNames.map((el) => el.key)}
                timeboxes={timeboxes}
                primaryMeasureName={title}
            />

            <Footer text="Turbocharged by spookydoodle" />
        </>
    );
};
