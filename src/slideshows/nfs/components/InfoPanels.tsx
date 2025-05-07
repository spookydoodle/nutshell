import React from "react";
import { Rating } from './Rating';
import { TitlePanels } from "../../../components/metrics-dashboard/TitlePanels";
import * as Utils from "../../../utils";
import * as Types from "../../../slideshows/nfs/nfs-types";

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
    game: Types.Game;
    index: number;
    applyStyle?: boolean;
}

export const InfoPanels: React.FC<Props> = ({ game, index, applyStyle }) => {
    const salesAmount = React.useMemo(
        () => {
            const r = Math.floor(Math.random());

            if (Number(game.qty.value) > 0) {
                return `${Utils.Formats.formatNumber(game.qty.value, { scaling: 1000000, decimals: 1 })} M ${game.qty.unit}`
            }

            return unknownTx[r * unknownTx.length];
        },
        [game.qty.value, game.qty.unit]
    );

    return (
        <TitlePanels
            primary={{ name: `#${index + 1}`, body: game.game.text }}
            primaryContent={<Rating rating={game.metacritic.critic} />}
            secondary={{ name: "Year", body: game.year }}
            tertiary={{ name: "Sales", body: salesAmount }}
            quaternary={{ name: "Developers", body: game.developers.join(", ") }}
            applyStyle={applyStyle}
        />
    );
};
