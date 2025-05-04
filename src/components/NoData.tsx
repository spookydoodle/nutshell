import React from "react";
import { Alert } from "@mui/material";

export const NoData: React.FC = () => {
    return (
        <Alert severity="info">No data to display</Alert>
    );
};
