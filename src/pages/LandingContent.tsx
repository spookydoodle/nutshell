import React from "react";
import { Box, Typography, Theme, Tooltip } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { animations } from "../styles/animations";
import { Link } from "../components/Link";
import { SuspenseImg } from "../components/SuspenseImg";
import { Slideshow } from "../logic/slideshow/slideshow";
import * as Hooks from "../hooks";
import * as Types from "../types";
import * as AppState from "../state";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        outerContainer: {
            minHeight: `calc(100vh - ${2 * (Slideshow.vh.topBarPrimaryRow + Slideshow.vh.topBarSecondaryRow + (2 * Slideshow.vh.topBarVerticalPadding))}vh - 40px)`,
            boxSizing: "border-box",
            display: "grid",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "20px",
        },
        container: {
            overflowX: "hidden",
            overflowY: "scroll",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "",
            flexWrap: "wrap",
            flexBasis: 0,
            columnGap: "40px",
            rowGap: "40px",
            padding: "0 20px",
            [theme.breakpoints.up("md")]: {
                padding: "0 40px",
            },
            [theme.breakpoints.up("lg")]: {
                padding: "0 60px",
            },
            "&::-webkit-scrollbar": {
                width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(255, 255, 255, .13)",
                borderRadius: "4px",
            }
        },
        item: {
            position: "relative",
            rowGap: "10px",
            display: "grid",
            textAlign: "center",
            color: "white",
            flex: "1 1 0",
            minWidth: "300px",
            maxWidth: "500px",
        },
        imgContainer: {
            overflow: "hidden",
            height: "40vh",
            [theme.breakpoints.down("sm")]: {
                height: "200px",
            },
            marginBottom: "10px",
        },
        img: {
            backgroundColor: "#000",
            objectFit: "cover",
            height: "100%",
            width: "100%",
            color: "white",
            borderRadius: "5px",
            transition: "transform .6s ease-in",
            "&:hover": {
                transform: "scale(1.2)",
                transition: "transform .6s ease-out",
            },
        },
        iconsContainer: {
            position: "absolute",
            right: 0,
            top: "4px",
            display: "flex",
            columnGap: "5px"
        },
        blur: {
            filter: "blur(25px)",
            overflow: "hidden",
        },
        blurOff: {
            filter: "blur(25px)",
            animation: `$no-filter .15s linear forwards`,
        },
        footer: {
            textAlign: "center",
            height: "100%",
            width: "100%",
        },
        ...animations,
    })
);

const deviceIcons: { [key in Types.Device]: typeof PhoneAndroidIcon } = {
    mobile: PhoneAndroidIcon,
    desktop: ComputerIcon,
};


export const LandingContent: React.FC = () => {
    const classes = useStyles();
    const [slideshows] = Hooks.useSubjectState(AppState.slideshows$)

    return (
        <Box className={classes.outerContainer}>
            <Box className={classes.container}>
                {slideshows.map(({ slideshow }) => (
                    <Box key={slideshow.path} className={classes.item}>
                        <Link to={slideshow.path}>
                            <div className={classes.imgContainer}>
                                <SuspenseImg
                                    alt={slideshow.name}
                                    img={{
                                        img: slideshow.imageUrl,
                                        className: `${classes.img} ${classes.blurOff}`,
                                    }}
                                    fallback={{
                                        img: slideshow.imageUrl,
                                        className: `${classes.img} ${classes.blur}`,
                                    }}
                                />
                            </div>
                            <Typography variant="h6" position="relative">
                                {slideshow.name}
                                <div className={classes.iconsContainer}>
                                    {slideshow.devices.map((device) => {
                                        const Icon = deviceIcons[device];
                                        return (
                                            <Tooltip key={device} arrow title={`Available on ${device}`} placement="top">
                                                <Icon fontSize="small" key={device} />
                                            </Tooltip>
                                        );
                                    })}
                                </div>
                            </Typography>
                            <Typography variant="body1">{slideshow.description}</Typography>
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
