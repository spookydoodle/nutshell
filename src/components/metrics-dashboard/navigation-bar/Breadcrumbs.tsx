import React from 'react';
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box, Grid, Tooltip, Typography } from '@mui/material';
import { animations } from "../../../styles/animations";
import { fontSizes } from "../../../styles/themes";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grid: {
            columnGap: '15px'
        },
        breadcrumb: {
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
        breadcrumbText: {
            fontSize: fontSizes.h7,
            [theme.breakpoints.only("xs")]: {
                fontSize: fontSizes.h8,
            },
            lineHeight: "20px",
            marginTop: "5px",
        },
        breadcrumbIcon: {
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

export interface BreadcrumbItem<T> {
    name: T;
    icon: React.ComponentType<{ className?: string }>;
}
interface Props<TBreadcrumbItem extends string = string> {
    items: BreadcrumbItem<TBreadcrumbItem>[];
    activeItem?: TBreadcrumbItem;
    pauseAnimations: boolean;
    color?: "textSecondary" | "white";
    onClick?: (item: TBreadcrumbItem, index: number) => void;
}

export function Breadcrumbs <TBreadcrumbItem extends string>({
    items,
    activeItem,
    pauseAnimations = true,
    color = "textSecondary",
    onClick
}: Props<TBreadcrumbItem>) {
    const classes = useStyles();

    return (
        <Grid
            container
            justifyContent="center"
            className={classNames(classes.grid, classes.slideUp, { [classes.pauseAnim]: pauseAnimations })}
        >
            {items.map((item, i) => (
                <Tooltip
                    key={item.name}
                    title={`Switch to ${item.name}`}
                    placement="top"
                    arrow
                >
                    <Box
                        className={classNames(classes.breadcrumb, {
                            [color === "white" ? classes.activeWhite : classes.active]: activeItem === item.name,
                        })}
                        onClick={() => onClick?.(item.name, i)}
                    >
                        <item.icon className={classes.breadcrumbIcon} />
                        <Typography
                            color="inherit"
                            noWrap
                            className={classes.breadcrumbText}
                        >
                            {item.name}
                        </Typography>
                    </Box>
                </Tooltip>
            ))}
        </Grid>
    );
}
