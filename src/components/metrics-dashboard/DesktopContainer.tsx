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

interface Props {
    slideshow: Slideshow;
    children?: React.ReactNode;
}

export const DesktopContainer: React.FC<Props> = ({ slideshow, children }) => {
    const classes = useStyles();
    const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
    const isLgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [showTicker] = Hooks.useSubjectState(slideshow.showTicker$);

    const tickerData = React.useMemo(
        () => isLgUp && showTicker ? slideshow.getTickerData?.() : undefined,
        [slideshow, showTicker, isLgUp]
    );
    
    return (
        <Grid container justifyContent="center">
            <Grid container item className={classes.content}>
                {children}
                {tickerData ? <Ticker animationsInitialized={animationsInitialized} title={Slideshow.tickerTitle} data={tickerData} /> : null}
                {isSmUp ? <Player slideshow={slideshow} /> : null}
            </Grid>
        </Grid>
    );
};
