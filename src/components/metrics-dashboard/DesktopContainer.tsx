import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Grid, useMediaQuery } from '@mui/material';
import { Slideshow } from "../../logic/slideshow/slideshow";
import { Player } from "../navigation/Player";
import { Ticker } from "./ticker/Ticker";
import * as Hooks from '../../hooks';

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        content: {
            width: "98vw",
            marginTop: "2vh",
            position: "relative",
        }
    })
);

interface Props<T = unknown> {
    slideshow: Slideshow<T>;
    data: T;
    children?: React.ReactNode;
}

export const DesktopContainer: React.FC<Props> = ({ slideshow, data, children }) => {
    const classes = useStyles();
    const isLgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [showTicker] = Hooks.useSubjectState(slideshow.showTicker$);

    const tickerData = React.useMemo(
        () => isLgUp && showTicker ? slideshow.getTickerData?.(data) : undefined,
        [slideshow, data, showTicker, isLgUp]
    );
    
    return (
        <Grid container justifyContent="center">
            <Grid container item className={classes.content}>
                {children}
                {tickerData ? <Ticker animationsInitialized={animationsInitialized} title={Slideshow.tickerTitle} data={tickerData} /> : null}
                <Player slideshow={slideshow} data={data} />
            </Grid>
        </Grid>
    );
};
