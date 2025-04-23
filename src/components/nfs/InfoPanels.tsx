import React from "react";
import { Rating } from './Rating';
import { TitlePanels } from "../metrics-dashboard/TitlePanels";
import * as Utils from "../../utils";
import * as Types from "./types";

const unknownTx = [
    "Who knows...",
    "One will never know...",
    "Wish I knew...",
    "Probably more than you think...",
    "Depends if you count pirated versions...",
    "They told me to delete it...",
    "Voices in my head tell me it's a lot...",
];

interface Props {
    slide: Types.GameDataItem;
    ind: number;
    applyStyle?: boolean;
}

export const InfoPanels: React.FC<Props> = ({ slide, ind, applyStyle }) => {
    const salesAmount = React.useMemo(
        () => {
            const r = Math.floor(Math.random());

            if (Number(slide.qty.value) > 0) {
                return `${Utils.Formats.formatNumber(slide.qty.value, { scaling: 1000000, decimals: 1 })} M ${slide.qty.unit}`
            }

            return unknownTx[r * unknownTx.length];
        },
        [slide.qty.value, slide.qty.unit]
    );

    return (
        <TitlePanels
            primary={{ name: `#${ind + 1}`, body: slide.game.text }}
            primaryContent={<Rating rating={slide.rating} />}
            secondary={{ name: "Year", body: slide.year }}
            tertiary={{ name: "Sales", body: salesAmount }}
            quaternary={{ name: "Developers", body: slide.developers.join(", ") }}
            applyStyle={applyStyle}
        />
    );
};
