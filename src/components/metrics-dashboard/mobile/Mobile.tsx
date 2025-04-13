import React from "react";
import { MobileHeader } from "./MobileHeader";
import { MobileContent } from "./MobileContent";
import { Footer } from "./Footer";
import * as MetricTypes from "../types";
import * as Utils from "../../../utils";

interface Props {
    data: MetricTypes.Data;
    primaryMeasureName: string;
}

export const Mobile: React.FC<Props> = ({ data, primaryMeasureName }) => {
    const [timeboxIndex, setTimeboxIndex] = React.useState(0);
    const [chanIndex, setChanIndex] = React.useState(0);

    const handleTimeboxChange = React.useCallback(
        (index: number) => setTimeboxIndex(index),
        []
    );

    const handleColumnNameChange = React.useCallback(
        (index: number) => setChanIndex(index),
        []
    );

    const columnNames = React.useMemo(
        () => Utils.Metrics.getUnique(data, 'columnName'),
        [data]
    );

    const timeboxes = React.useMemo(
        () => Utils.Metrics.getUniqueTimeboxes(data),
        [data]
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
                primaryMeasureName={primaryMeasureName}
            />

            <MobileContent
                data={data}
                timeboxIndex={timeboxIndex}
                chanIndex={chanIndex}
                handleColumnNameChange={handleColumnNameChange}
                columnNames={columnNames.map((el) => el.key)}
                timeboxes={timeboxes}
                primaryMeasureName={primaryMeasureName}
            />

            <Footer text="Turbocharged by spookydoodle" />
        </>
    );
};
