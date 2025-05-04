import React from "react";
import { SlideComponentProps } from "../../../logic/slideshow/slideshow";
import { Column } from "../../../components/metrics-dashboard/Column";
import * as Hooks from '../../../hooks';
import * as Utils from '../coinflow-data-utils';
import * as CoinflowTypes from "../coinflow-types";
import { SlideColumnContent, SlideColumnContentProps } from "./SlideColumnContent";

export const SlideColumn: React.FC<SlideComponentProps<CoinflowTypes.Data> & SlideColumnContentProps> = (props) => {
    const [animationsInitialized] = Hooks.useSubjectState(props.slideshow.animationsInitialized$);

    const tile = React.useMemo(
        () => Utils.getTileData(props.data.tiles, props.column, props.timebox),
        [props.data, props.column, props.timebox]
    );

    return (
        <Column
            animationsInitialized={animationsInitialized}
            name={props.column}
            tileData={tile}
            component={<SlideColumnContent {...props} />}
        />
    );
};
