import React from "react";
import { NutshellLayout } from "../layouts/Nutshell";
import { TitleLogoBar } from "../layouts/TitleLogoBar";
import { LandingContent } from "./LandingContent";
import { Slideshow } from "../slideshow/slideshow";

interface Props {
    slideshow: Slideshow;
}

export const Landing: React.FC<Props> = ({ slideshow }) => {
    return (
        <NutshellLayout
            slideshow={slideshow}
            header={<TitleLogoBar title="_NUTSHELL" titleShort="_NUTSHELL" subtitle="Have a great day" subtitleShort="Yo" />}
        >
            <LandingContent />
        </NutshellLayout>
    );
};
