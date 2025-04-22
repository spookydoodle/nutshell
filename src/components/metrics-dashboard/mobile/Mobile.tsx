import React from "react";
import { MobileHeader } from "./MobileHeader";
import { MobileContent } from "./MobileContent";
import { Footer } from "./Footer";
import { Slideshow } from "../../../logic/slideshow/slideshow";
import * as Utils from "../../../utils";
import { Data } from "../types";

interface Props {
    slideshow: Slideshow;
}

// TODO: Generalize types
export const Mobile: React.FC<Props> = ({  slideshow }) => {
    const [timeboxIndex, setTimeboxIndex] = React.useState(0);
    const [chanIndex, setChanIndex] = React.useState(0);
    const title = React.useMemo(() => slideshow.getSlideTitle?.() ?? "", [slideshow]);

    const handleTimeboxChange = React.useCallback(
        (index: number) => setTimeboxIndex(index),
        []
    );

    const handleColumnNameChange = React.useCallback(
        (index: number) => setChanIndex(index),
        []
    );

    const columnNames = React.useMemo(
        () => Utils.Metrics.getUnique(slideshow.data as Data, 'columnName'),
        [slideshow.data]
    );

    const timeboxes = React.useMemo(
        () => Utils.Metrics.getUniqueTimeboxes(slideshow.data as Data),
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
                data={slideshow.data as Data}
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
