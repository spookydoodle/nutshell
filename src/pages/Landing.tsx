import React from "react";
import { Layout } from "../layouts/Layout";
import { NavbarTitle } from "../layouts/NavbarTitle";
import { LandingContent } from "./LandingContent";

export const Landing: React.FC = () => {
    return (
        <Layout
            header={<NavbarTitle title="_NUTSHELL" titleShort="_NUTSHELL" subtitle="Have a great day" subtitleShort="Yo" />}
        >
            <LandingContent />
        </Layout>
    );
};
