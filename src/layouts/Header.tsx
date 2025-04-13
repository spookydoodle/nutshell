import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import * as MUI from '@mui/material';
import { animations } from "../styles/animations";
import { BackNav } from "./BackNav";
import { fontSizes } from "../styles/themes";

const useStyles = makeStyles((theme: MUI.Theme) =>
    createStyles({
        logoBar: {
            marginTop: "2vh",
            height: "5vh",
            position: "relative",
            width: "98vw",
        },
        logo: {
            marginTop: "2vh",
            height: "4.5vh",
            display: "block",
            position: "fixed",
            opacity: 0,
            animation: `$no-transform 2s 1s cubic-bezier(0, .5, 0, 1) forwards`,
        },
        topBar: {
            display: "flex",
            justifyContent: "space-between",
            top: 0,
            width: "100%",
            minHeight: "6.5vh",
            color: "rgba(255, 255, 255, .87)",
            maxWidth: "100vw",
            marginTop: "0vh",
            padding: "0 1.5%",
            textTransform: "uppercase",
        },
        headerTitle: {
            display: "flex",
            paddingRight: "1em",
            alignItems: "center",
        },
        title: {
            fontSize: fontSizes.h1,
            marginTop: "1vh",
            [theme.breakpoints.down("sm")]: {
                marginTop: ".35rem",
                fontSize: "1.2rem",
            },
            [theme.breakpoints.only("xs")]: {
                marginTop: ".35rem",
                fontSize: "1rem",
            },
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
        logoContainer: {
            display: "flex",
            justifyContent: "flex-end",
            // alignItems: "center",
            height: "6.5vh",
            left: "auto",
            right: "1.5%",
            opacity: 0.87,
            // zIndex: -1,
        },
        logoSecondary: {
            opacity: 0,
            animation: `$no-transform 2s 1s cubic-bezier(0, .5, 0, 1) forwards`,
            marginRight: ".5%",
            marginLeft: ".5%",
            marginTop: ".5vh",
            marginBottom: 0,
            height: "4vh",
            display: "block",
        },
        ...animations,
    })
);

interface TitleProps {
    title: string;
    subtitle?: string;
}

export const TitleBar = ({ title }: TitleProps) => {
    const classes = useStyles();

    return (
        <MUI.Grid
            item
            xs={12}
            container
            // justifyContent="center"
            alignItems="flex-start"
            className={classes.topBar}
        >
            <MUI.Typography color="inherit" className={classes.title}>
                {title}
            </MUI.Typography>
        </MUI.Grid>
    );
};

interface TitleLogoProps {
    title: string;
    titleShort?: string;
    titleSuffix?: string;
    subtitle?: string;
    subtitleShort?: string;
    backIcon?: boolean;
}

export const TitleLogoBar: React.FC<TitleLogoProps> = ({
    title,
    titleShort,
    titleSuffix,
    subtitle,
    subtitleShort,
    backIcon = false
}) => {
    const classes = useStyles();

    if (!titleShort) {
        titleShort = title;
    }

    return (
        <MUI.Box className={classes.topBar}>
            <MUI.Box className={classes.headerTitle}>
                {backIcon && <BackNav to="/" tooltipText="Back to main screen" />}
                <MUI.Box>
                    <MUI.Typography fontSize={fontSizes.h2} color="inherit" className={classes.title}>
                        <MUI.Hidden mdDown>{title || ""} </MUI.Hidden>
                        <MUI.Hidden lgUp>{titleShort || ""} </MUI.Hidden>
                        {titleSuffix && (
                            <MUI.Typography
                                color="error"
                                component="span"
                                className={classes.title}
                            >
                                {` (${titleSuffix})`}
                            </MUI.Typography>
                        )}
                    </MUI.Typography>
                    <MUI.Typography fontSize={fontSizes.h2} color="inherit" variant="h6" className={classes.subtitle}>
                        <MUI.Hidden smDown>{subtitle || ""}</MUI.Hidden>
                        <MUI.Hidden mdUp>{subtitleShort || ""}</MUI.Hidden>
                    </MUI.Typography>
                </MUI.Box>
            </MUI.Box>
        </MUI.Box>
    );
};
