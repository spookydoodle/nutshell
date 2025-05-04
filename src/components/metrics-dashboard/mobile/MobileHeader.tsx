import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box } from '@mui/material';
import { ColumnButtons } from "./ColumnButtons";
import { SequenceDropdown } from "./SequenceDropdown";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        navbar: {
            padding: "16px",
            marginTop: "-50px",
            paddingTop: "50px",
            backgroundColor: "#000",
            position: "fixed",
            width: "100%",
            zIndex: 1
        }
    })
);

interface Props<TSequence extends string, TColumn extends string> {
    title: string;
    sequenceItems: TSequence[];
    selectedSequence: TSequence;
    onSequenceChange: (sequence: TSequence) => void;
    columns: TColumn[];
    selectedColumn: TColumn;
    onColumnChange: (column: TColumn) => void;
}

export function MobileHeader<TSequence extends string, TColumn extends string>({
    title,
    sequenceItems,
    selectedSequence,
    onSequenceChange,
    columns,
    selectedColumn,
    onColumnChange
}: Props<TSequence, TColumn>) {
    const classes = useStyles();

    return (
        <Box className={classes.navbar}>
            <SequenceDropdown title={title} items={sequenceItems} selectedSequence={selectedSequence} onChange={onSequenceChange} />
            <ColumnButtons columns={columns} selectedColumn={selectedColumn} onChange={onColumnChange} />
        </Box>
    );
}
