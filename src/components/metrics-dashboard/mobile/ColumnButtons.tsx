import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box, Button } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        selector: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            columnGap: '10px'
        },
        inactive: {
            boxShadow: "none",
            backgroundColor: "grey",
            "&:active": {
                backgroundColor: "grey",
            },
            "&:focus": {
                backgroundColor: "grey",
            },
            "&:visited": {
                backgroundColor: "grey",
            },
            "&:hover": {
                backgroundColor: "grey",
            },
        },
        active: {
            backgroundColor: theme.palette.secondary.main,
        },
    })
);

interface Props<TColumn extends string> {
    columns: TColumn[];
    selectedColumn: TColumn;
    onChange: (column: TColumn) => void;
}

export function ColumnButtons<TColumn extends string>({
    columns,
    selectedColumn,
    onChange
}: Props<TColumn>) {
    const classes = useStyles();

    return (
        <Box className={classes.selector}>
            {columns.map((column) => (
                <Button
                    key={column}
                    variant="contained"
                    size="medium"
                    onClick={() => onChange(column)}
                    color={column === selectedColumn ? "secondary" : "inherit"}
                    disableFocusRipple
                    className={column === selectedColumn ? classes.active : classes.inactive}
                >
                    {column}
                </Button>
            ))}
        </Box>
    );
}
