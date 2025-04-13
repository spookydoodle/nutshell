import React from "react";
import { useRouteError } from "react-router-dom";
import { NutshellLayout } from "../layouts/Nutshell";
import { Typography } from "@mui/material";

interface Props {
    children?: React.ReactNode;
}

export const ErrorBoundary: React.FC<Props> = () => {
    const error = useRouteError();

    return (
        <NutshellLayout>
            <Typography color='white'>{(error as Error)?.message}</Typography>
        </NutshellLayout>
    );
}
