import React from "react";
import { Slideshow } from "../../../logic/slideshow/slideshow";
import { Column } from "../../../components/metrics-dashboard/Column";
import { MetricsColumnChart } from "./MetricsColumnChart";
import * as MetricTypes from "../../../components/metrics-dashboard/metric-types";
import * as Hooks from '../../../hooks';
import * as SolarTypes from "../solar-types"
import * as SolarUtils from "../solar-data-utils";
import * as Utils from "../../../utils";

interface Props {
    slideshow: Slideshow<SolarTypes.SolarData>;
    data: SolarTypes.SolarData;
    column: SolarTypes.Property;
    property: SolarTypes.PropertyValue;
    maxRows: number;
}

export const MetricsColumn: React.FC<Props> = ({ slideshow, data, column, property, maxRows }) => {
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);

    const tileData = React.useMemo(
        (): MetricTypes.Datum => {
            const values = Object.values(property.data);
            const deltaFormatted = Utils.Formats.formatNumber(SolarUtils.getAvg(values), { scaling: 1, decimals: 2 });

            return {
                name: column,
                tooltip: property.definition,
                primary: SolarUtils.getSum(values),
                primaryFormatted: `${SolarUtils.getRange(values)} ${property.unit}`,
                primaryDelta: SolarUtils.getAvg(values),
                primaryDeltaFormatted: `Avg: ${deltaFormatted} ${property.unit}`,
            };
        },
        [property, column]
    );

    return (
        <Column
            animationsInitialized={animationsInitialized}
            name={column}
            tileData={tileData}
            component={<MetricsColumnChart slideshow={slideshow} data={data} column={column} property={property} maxRows={maxRows} />}
        />
    );
};
