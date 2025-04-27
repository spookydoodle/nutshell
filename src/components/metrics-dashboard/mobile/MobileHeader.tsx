import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box } from '@mui/material';
import { ColumnButtons } from "./ColumnButtons";
import { CategoryDropdown } from "./CategoryDropdown";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        navbar: {
            padding: "8px 16px",
            marginTop: "-50px",
            paddingTop: "50px",
            backgroundColor: "#000",
            position: "fixed",
            width: "100%",
            zIndex: 1
        }
    })
);

interface Props {
    timeboxIndex: number;
    handleTimeboxChange: (index: number) => void
    chanIndex: number;
    handleColumnNameChange: (index: number) => void;
    columnNames: string[];
    timeboxes: string[];
    title: string;
}

export const MobileHeader: React.FC<Props> = ({
    timeboxIndex,
    handleTimeboxChange,
    chanIndex,
    handleColumnNameChange,
    columnNames,
    timeboxes,
    title
}) => {
    const classes = useStyles();

    return (
        <Box className={classes.navbar}>
                <CategoryDropdown items={timeboxes} index={timeboxIndex} onChange={handleTimeboxChange} title={title} />
                <ColumnButtons buttons={columnNames} index={chanIndex} onChange={handleColumnNameChange} />
        </Box>
    );
};
