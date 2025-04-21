import React from "react";
import { NutshellLayout } from "../layouts/Nutshell";
import { TitleLogoBar } from "../layouts/TitleLogoBar";
import { LandingContent, LandingItem } from "./LandingContent";
import * as Types from "../types";

interface Props {
    items: LandingItem[]
}

export const Landing: React.FC<Props> = ({ items }) => {
    return (
        <NutshellLayout
            header={<TitleLogoBar title="_NUTSHELL" titleShort="_NUTSHELL" subtitle="Have a great day" subtitleShort="Yo" />}
        >
            <LandingContent items={items} />
        </NutshellLayout>
    );
};
