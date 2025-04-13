import React from "react";
import { makeStyles, createStyles, withStyles } from '@mui/styles';
import * as MUI from '@mui/material';

const Select = withStyles((_theme: MUI.Theme) => ({
    root: {
        padding: "10px 26px 10px 12px",
        color: "rgba(255, 255, 255, .87) !important",
        height: "32px"
    },
    outlined: {
        borderColor: "rgba(255, 255, 255, .6)",
    },
}))(MUI.Select);

const useStyles = makeStyles((_theme: MUI.Theme) =>
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

interface Props {
    items: Array<string>;
    index: number;
    onChange: (value: number) => void;
    primaryMeasureName: string;
}

export const CategoryDropdown: React.FC<Props> = ({ items, index, onChange, primaryMeasureName }) => {
    const classes = useStyles();

    const handleChange = React.useCallback(
        (event: MUI.SelectChangeEvent<unknown>, _child: React.ReactNode) => {
            const val = Number(event.target.value);
            if (isNaN(val)) {
                return;
            }
            onChange(val);
        },
        [onChange]
    );

    return (
        <MUI.Box className={classes.navtitle}>
            <MUI.Typography className={classes.title}>
                {primaryMeasureName}
            </MUI.Typography>

            <MUI.FormControl variant="outlined" className={classes.formControl}>
                <Select id="select-item" value={index} onChange={handleChange} className={classes.select}>
                    {items.map((item: string, i: number) => (
                        <MUI.MenuItem key={i} value={i}>
                            {item}
                        </MUI.MenuItem>
                    ))}
                </Select>
            </MUI.FormControl>
        </MUI.Box>
    );
};
