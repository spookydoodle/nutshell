import React from "react";
import classNames from "classnames";
import { animations } from "../styles/animations";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Theme } from '@mui/material';
import { SuspenseImg } from "../components/SuspenseImg";
import { Img, images } from "./images";
import * as AppState from "../state";
import * as Hooks from '../hooks';

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        bg: {
            minHeight: "100vh",
            minWidth: "100vw",
            backgroundColor: "#000",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -100,
        },
        screen: {
            position: "fixed",
            height: "100vh",
            width: "100%",
            zIndex: -50,
            backgroundColor: "#000",
            transformStyle: "preserve-3d",
            overflow: "hidden",
            transform: "translateY(-4rem)",
            animation: `$no-transform 2s .5s cubic-bezier(0, .5, 0, 1) forwards`,
            border: "none",
            "&::after": {
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, .75), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, .98) 90.5%, rgba(0, 0, 0, 1))",
            },
        },
        bgImg: {
            backgroundColor: "#000",
            objectFit: "cover",
            height: "100vh",
            width: "100%",
            color: "white",
        },
        blur: {
            filter: "blur(25px)",
            overflow: "hidden",
        },
        blurOff: {
            filter: "blur(25px)",
            animation: `$no-filter .15s linear forwards`
        },
        noFilter: {
            filter: 'none'
        },
        ...animations,
    })
);

interface Props {
    animationsInitialized?: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}

export const NutshellContent: React.FC<Props> = ({
    animationsInitialized,
    header,
    footer,
    children,
}) => {
    const classes = useStyles();
    const appId = Hooks.useAppId();
    const [backgroundIndex] = Hooks.useSubjectState(AppState.backgroundIndex$);

    const img = React.useMemo(
        (): Img | undefined => {
            const imgArr = images[appId ?? ''] ?? [];
            return imgArr?.[backgroundIndex % imgArr.length]
        },
        [backgroundIndex]
    );

    return (
        <Box className={classes.bg}>
            {img && backgroundIndex != undefined && backgroundIndex >= 0 ? (
                <Box className={classNames(classes.screen, { [classes.pauseAnim]: animationsInitialized })}>
                    <SuspenseImg
                        alt={`background-${appId}`}
                        img={{
                            img: img?.jpg || "",
                            className: classNames(classes.bgImg, classes.blurOff, { [classes.pauseAnim]: animationsInitialized, [classes.noFilter]: animationsInitialized })
                        }}
                        fallback={{
                            img: img?.min || "",
                            className: classNames(classes.bgImg, classes.blur, { [classes.pauseAnim]: animationsInitialized }),
                        }}
                    />
                </Box>
            ) : undefined}

            {header}
            {children}
            {footer}
        </Box>
    );
};
