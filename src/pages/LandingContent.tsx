import React from "react";
import { Grid, Typography, Theme, Tooltip } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { animations } from "../styles/animations";
import { Link } from "../components/Link";
import { SuspenseImg } from "../components/SuspenseImg";
import * as Hooks from "../hooks";
import * as Types from "../types";
import * as AppState from "../state";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            overflowX: "hidden",
            textAlign: "center",
            overflowY: "scroll",
            padding: "0 60px",
            minHeight: "calc(100vh - 120px)",
            [theme.breakpoints.down("sm")]: {
                height: "auto",
                padding: "0 20px",
            },
            [theme.breakpoints.down("lg")]: {
                paddingTop: "40px"
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
            color: "white",
        },
        padding: {
            padding: "0 5px",
        },
        imgContainer: {
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "40vh",
            [theme.breakpoints.down("sm")]: {
                height: "200px",
            },
            marginBottom: "10px",
            margin: "0 auto",
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
        <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="space-evenly"
            className={classes.container}
        >
            {slideshows.map(({ slideshow }) => (
                <Grid
                    key={slideshow.path}
                    item
                    xs={12}
                    lg={4}
                    className={classes.item}
                >
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
                </Grid>
            ))}
        </Grid>
    );
};
