import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import * as MUI from '@mui/material';
import { animations } from "../../styles/animations";
import { Tile } from "./Tile";
import { Transitions } from "./Transitions";
import * as Types from "../../types/types";

const useStyles = makeStyles((theme: MUI.Theme) =>
    createStyles({
        card: {
            zIndex: 10,
            width: "98%",
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
            opacity: 0,
            transform: "translateY(20px)",
            backgroundColor:
                theme.palette.mode === "dark"
                    ? "rgba(0, 0, 0, .6)"
                    : "rgba(255, 255, 255, .87)",
            border: theme.palette.mode === "dark"
                ? `1px solid ${theme.palette.secondary.main}`
                : undefined,
            "&$tiles": {
                height: "15vh",
                borderRadius: "4px 4px 0 0",
                animation: `$no-transform 2s 2s cubic-bezier(0, .5, 0, 1) forwards`,
            },
            "&$charts": {
                height: "55vh",
                marginTop: ".5vh",
                borderRadius: "0 0 2px 2px",
                animation: `$no-transform 2s 3s cubic-bezier(0, .5, 0, 1) forwards`,
            },
        },
        tiles: {},
        charts: {},
        ...animations,
    })
);

interface Props {
    animationsInitialized?: boolean;
    name: string;
    tileData?: Types.Value;
    components: JSX.Element[];
    index: number;
}

export const Content: React.FC<Props> = ({
    animationsInitialized = true,
    name,
    tileData,
    components,
    index
}) => {
    const classes = useStyles();

    return (
        <MUI.Grid container item sm={12} md={6} lg={4}>
            <MUI.Box className={classNames(classes.card, classes.tiles, { [classes.pauseAnim]: animationsInitialized })}>
                <Tile name={name} data={tileData} />
            </MUI.Box>

            <MUI.Box className={classNames(classes.card, classes.charts, { [classes.pauseAnim]: animationsInitialized })}>
                <Transitions components={components} index={index} />
            </MUI.Box>
        </MUI.Grid>
    );
};
