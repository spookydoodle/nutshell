import React from "react";
import { useRouteError } from "react-router-dom";
import { NutshellLayout } from "../layouts/Nutshell";
import { Typography } from "@mui/material";
import { Slideshow } from "../slideshow/slideshow";

interface Props {
    slideshow: Slideshow; // TODO: Should not be needed here
}

export const ErrorBoundary: React.FC<Props> = ({ slideshow }) => {
    const error = useRouteError();

    return (
        <NutshellLayout slideshow={slideshow}>
            <Typography color='white'>{(error as Error)?.message}</Typography>
        </NutshellLayout>
    );
}
