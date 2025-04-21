import React from "react";
import { Layout } from "../layouts/Layout";
import { NavbarTitle } from "../layouts/NavbarTitle";
import { LandingContent } from "./LandingContent";
import { Slideshow } from "../logic/slideshow/slideshow";

export const Landing: React.FC = () => {
    return (
        <Layout
            header={<NavbarTitle title={Slideshow.title} titleShort={Slideshow.titleShort} subtitle={Slideshow.subtitle} subtitleShort={Slideshow.subtitleShort} />}
        >
            <LandingContent />
        </Layout>
    );
};
