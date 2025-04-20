import React from "react";
import { NutshellLayout } from "../layouts/Nutshell";
import { TitleLogoBar } from "../layouts/TitleLogoBar";
import { LandingContent } from "./LandingContent";

export const Landing: React.FC = () => {
    return (
        <NutshellLayout
            header={<TitleLogoBar title="_NUTSHELL" titleShort="_NUTSHELL" subtitle="Have a great day" subtitleShort="Yo" />}
        >
            <LandingContent />
        </NutshellLayout>
    );
};
