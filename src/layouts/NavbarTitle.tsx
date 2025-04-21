import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Hidden, Theme, Typography } from '@mui/material';
import { animations } from "../styles/animations";
import { BackNav } from "./BackNav";
import { fontSizes } from "../styles/themes";
import { Slideshow } from "../logic/slideshow/slideshow";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        topBar: {
            display: "flex",
            justifyContent: "space-between",
            top: 0,
            boxSizing: "border-box",
            width: "100vw",
            color: "rgba(255, 255, 255, .87)",
            marginTop: 0,
            padding: `${Slideshow.vh.topBarVerticalPadding}vh 10px`,
            textTransform: "uppercase",
        },
        headerTitle: {
            display: "flex",
            alignItems: "center",
        },
        subtitle: {
            fontSize: fontSizes.h5,
            [theme.breakpoints.down("sm")]: {
                fontSize: ".8rem",
            },
            [theme.breakpoints.only("xs")]: {
                fontSize: ".6rem",
            },
        },
        ...animations,
    })
);

interface Props {
    title: string;
    titleShort?: string;
    titleSuffix?: string;
    subtitle?: string;
    subtitleShort?: string;
    backIcon?: boolean;
}

export const NavbarTitle: React.FC<Props> = ({
    title,
    titleShort,
    titleSuffix,
    subtitle,
    subtitleShort,
    backIcon = false
}) => {
    const classes = useStyles();

    return (
        <Box className={classes.topBar}>
            <Box className={classes.headerTitle}>
                {backIcon && <BackNav to="/" tooltipText="Back to main screen" />}
                <Box>
                    <Typography fontSize={fontSizes.h2} color="inherit">
                        <Hidden lgDown>{title ?? ""} </Hidden>
                        <Hidden lgUp>{titleShort ?? title ?? ""} </Hidden>
                        {titleSuffix && (
                            <Typography
                                color="error"
                                component="span"
                            >
                                {` (${titleSuffix})`}
                            </Typography>
                        )}
                    </Typography>
                    <Typography fontSize={fontSizes.h5} color="inherit" className={classes.subtitle}>
                        <Hidden mdDown>{subtitle ?? ""}</Hidden>
                        <Hidden mdUp>{subtitleShort ?? ""}</Hidden>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
