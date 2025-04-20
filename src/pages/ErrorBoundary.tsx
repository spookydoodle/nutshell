import React from "react";
import { useRouteError } from "react-router-dom";
import { NutshellLayout } from "../layouts/Nutshell";
import { Typography } from "@mui/material";

export const ErrorBoundary: React.FC = () => {
    const error = useRouteError();

    return (
        <NutshellLayout>
            <Typography color='white'>{(error as Error)?.message}</Typography>
        </NutshellLayout>
    );
}
