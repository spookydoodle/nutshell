import React from 'react';
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box, Grid, Tooltip, Typography } from '@mui/material';
import { animations } from "../../styles/animations";
import { fontSizes } from "../../styles/themes";
import PublicIcon from "@mui/icons-material/Public";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grid: {
            columnGap: '15px'
        },
        breadCrumb: {
            textTransform: "uppercase",
            color: "rgba(255, 255, 255)",
            opacity: 0.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            marginTop: "-2px",
            marginBottom: "2px",
            "&$active": {
                color: theme.palette.text.secondary,
                fontWeight: "bold",
                opacity: 1,
            },
            "&$activeWhite": {
                color: "rgba(255, 255, 255, .87)",
                fontWeight: "bold",
                opacity: 1,
            },
            "&:hover": {
                color: "rgba(255, 255, 255, .87)",
                fontWeight: "bold",
                opacity: 1,
            },
        },
        active: {},
        activeWhite: {},
        breadCrumbText: {
            fontSize: fontSizes.h7,
            [theme.breakpoints.only("xs")]: {
                fontSize: fontSizes.h8,
            },
            lineHeight: "20px",
            marginTop: "5px",
        },
        breadCrumbIcon: {
            fontSize: fontSizes.h1,
            [theme.breakpoints.down("sm")]: {
                fontSize: fontSizes.h2,
            },
            [theme.breakpoints.only("xs")]: {
                fontSize: fontSizes.h3,
            },
        },
        slideUp: {
            opacity: 0,
            animation: `$no-transform 2s 4s cubic-bezier(0, .5, 0, 1) forwards`,
        },
        ...animations,
    })
);

interface Props {
    animationsInitialized: boolean;
    play?: boolean;
    index?: number;
    name?: string;
    color?: "textSecondary" | "white";
    onBreadClick?: (index: number) => void;
    primaryMeasureName: string;
}

export const BreadCrumbs: React.FC<Props> = ({
    animationsInitialized = true,
    index,
    color = "textSecondary",
    onBreadClick,
    primaryMeasureName
}) => {
    const classes = useStyles();

    const items = React.useMemo(
        () => [
            {
                name: "Geographic",
                icon: <PublicIcon className={classes.breadCrumbIcon} />,
            },
            {
                name: "Business",
                icon: <BusinessCenterIcon className={classes.breadCrumbIcon} />,
            },
            {
                name: "Products",
                icon: <LoyaltyIcon className={classes.breadCrumbIcon} />,
            }
        ],
        [classes]
    );

    const handleClick = React.useCallback(
        (i: number) => () => onBreadClick?.(i),
        [onBreadClick]
    );

    return (
        <Grid
            container
            justifyContent="center"
            className={classNames(classes.grid, classes.slideUp, { [classes.pauseAnim]: animationsInitialized })}
        >
            {items.map((item, i) => (
                <Tooltip
                    key={item.name}
                    title={`Switch to ${primaryMeasureName} by ${item.name}`}
                    placement="top"
                    arrow
                >
                    <Box
                        className={classNames(classes.breadCrumb, {
                            [color === "white" ? classes.activeWhite : classes.active]: index === i,
                        })}
                        onClick={handleClick(i)}
                    >
                        {item.icon}
                        <Typography
                            color="inherit"
                            noWrap
                            className={classes.breadCrumbText}
                        >
                            {item.name}
                        </Typography>
                    </Box>
                </Tooltip>
            ))}
        </Grid>
    );
};
