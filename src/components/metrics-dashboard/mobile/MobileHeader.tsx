import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box, Typography } from '@mui/material';
import { BackNav } from "../../../layouts/BackNav";
import { ColumnButtons } from "./ColumnButtons";
import { CategoryDropdown } from "./CategoryDropdown";
import { fontSizes } from "../../../styles";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        navbar: {
            padding: "8px 16px",
            backgroundColor: "#000",
            position: "fixed",
            zIndex: 1,
            width: "100%",
        },
        navtitle: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "32px",
        },
        title: {
            color: "rgba(255, 255, 255, .87)",
            display: "flex",
            alignItems: "center",
        },
        spacingBottom: {
            marginBottom: "16px",
        },
    })
);

interface Props {
    timeboxIndex: number;
    handleTimeboxChange: (index: number) => void
    chanIndex: number;
    handleColumnNameChange: (index: number) => void;
    columnNames: string[];
    timeboxes: string[];
    primaryMeasureName: string;
}

export const MobileHeader: React.FC<Props> = ({
    timeboxIndex,
    handleTimeboxChange,
    chanIndex,
    handleColumnNameChange,
    columnNames,
    timeboxes,
    primaryMeasureName
}) => {
    const classes = useStyles();

    return (
        <Box className={classes.navbar}>
            <Box className={classNames(classes.navtitle, classes.spacingBottom)}>
                <Typography fontSize={fontSizes.h3} className={classes.title}>
                    <BackNav to="/" tooltipText="Back to main screen" />
                    _NUTSHELL
                </Typography>
                <Typography fontSize={fontSizes.h3} className={classes.title}>xo</Typography>
            </Box>

            <CategoryDropdown items={timeboxes} index={timeboxIndex} onChange={handleTimeboxChange} primaryMeasureName={primaryMeasureName} />
            <ColumnButtons buttons={columnNames} index={chanIndex} onChange={handleColumnNameChange} />
        </Box>
    );
};
