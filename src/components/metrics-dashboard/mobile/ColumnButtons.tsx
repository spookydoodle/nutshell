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

interface Props {
    buttons: Array<string>;
    index: number;
    onChange: (index: number) => void;
}

export const ColumnButtons: React.FC<Props> = ({ buttons, index, onChange }) => {
    const classes = useStyles();

    const handleChange = React.useCallback(
        (i: number) => () => onChange(i),
        [onChange]
    );

    return (
        <Box className={classes.selector}>
            {buttons.map((columnName: string, i: number) => (
                <Button
                    key={columnName}
                    variant="contained"
                    size="medium"
                    onClick={handleChange(i)}
                    color={i === index ? "secondary" : "inherit"}
                    disableFocusRipple
                    className={i === index ? classes.active : classes.inactive}
                >
                    {columnName}
                </Button>
            ))}
        </Box>
    );
};
