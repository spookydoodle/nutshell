import React from "react";
import { makeStyles, createStyles, withStyles } from '@mui/styles';
import { Select as MUISelect, SelectChangeEvent, Theme, Box, Typography, FormControl, MenuItem } from '@mui/material';

const Select = withStyles((_theme: Theme) => ({
    root: {
        padding: "10px 26px 10px 12px",
        color: "rgba(255, 255, 255, .87) !important",
        height: "32px"
    },
    outlined: {
        borderColor: "rgba(255, 255, 255, .6)",
    },
}))(MUISelect);

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        navtitle: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "32px",
            marginBottom: "16px",
        },
        title: {
            color: "rgba(255, 255, 255, .87)",
            fontSize: "1.2rem",
        },
        formControl: {
            minWidth: 80,
            "& svg": {
                color: "rgba(255, 255, 255, .87)",
            }
        },
        select: {
            color: 'red'
        }
    })
);

interface Props<TSequence extends string> {
    title?: string;
    items: TSequence[];
    selectedSequence: TSequence;
    onChange: (value: TSequence) => void;
}

export function SequenceDropdown<TSequence extends string>({
    title,
    items,
    selectedSequence,
    onChange
}: Props<TSequence>) {
    const classes = useStyles();

    return (
        <Box className={classes.navtitle}>
            <Typography className={classes.title}>
                {title ?? ""}
            </Typography>

            <FormControl variant="outlined" className={classes.formControl}>
                <Select id="select-item" value={selectedSequence} onChange={(e) => onChange(e.target.value as TSequence)} className={classes.select}>
                    {items.map((item: string) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
