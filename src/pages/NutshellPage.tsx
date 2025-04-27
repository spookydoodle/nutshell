import React from "react";
import { Layout } from "../layouts/Layout";
import { NavbarTitle } from "../layouts/NavbarTitle";
import { NutshellPageContent } from "./NutshellPageContent";
import { Slideshow } from "../logic/slideshow/slideshow";

interface Props {
    slideshow: Slideshow;
}

export const NutshellPage: React.FC<Props> = ({ slideshow }) => {
    return (
        <Layout
            slideshow={slideshow}
            header={<NavbarTitle title={slideshow.name} titleShort={slideshow.shortName} backIcon />}
        >
            <NutshellPageContent slideshow={slideshow} />
        </Layout>
    );
};
