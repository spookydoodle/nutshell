import React from "react";
import { Alert } from "@mui/material";

interface Props {
    error: Error;
}

export const ErrorAlert: React.FC<Props> = ({ error }) => {
    return (
        <Alert severity="error">{error.message}</Alert>
    );
};
