import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Box, Hidden, Theme } from '@mui/material';
import { Background } from "./Background";
import { Player } from "../navigation/Player";
import { Transitions } from "../metrics-dashboard/Transitions";
import { SmallScreenMessage } from "../metrics-dashboard/SmallScreenMessage";
import { NEED_FOR_SPEED, imgPerSlide } from "./data";
import { Progress } from "./Progress";
import { InfoPanels } from "./InfoPanels";
const data = NEED_FOR_SPEED;
const labels: string[] = data && data.games ? data?.games?.map((game) => game.label) : [""];
const totalLen = data?.games?.length || 0;
const sequences = ["Timeline"];

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        content: {
            position: "relative",
        },
        cinema: {
            position: "fixed",
            top: 0,
            height: "100vh",
            width: "100%",
        }
    })
);

export const SlideShow: React.FC = () => {
    const classes = useStyles();
    const [play, setPlay] = React.useState(true);
    const [duration, setDuration] = React.useState(30000);
    const [index, setIndex] = React.useState(0);
    const [prevIndex, setPrevIndex] = React.useState(0);
    const [tickerOn, setTicker] = React.useState(true);

    React.useEffect(() => {
        if (!play) {
            return;
        }
        const interval = setInterval(() => {
            setIndex((prev) => {
                setPrevIndex(prev);
                return (prev + 1) % (totalLen * imgPerSlide);
            });
        }, duration / imgPerSlide);

        return () => {
            clearInterval(interval);
        };
    }, [play, duration]);

    return (
        <Grid container justifyContent="center">
            <Grid container item className={classes.content}>
                <Hidden smDown>
                    <Box className={classes.cinema}>
                        <Transitions
                            variant={
                                (index > prevIndex && index % imgPerSlide !== 0) ||
                                    (index < prevIndex &&
                                        Math.floor(index / imgPerSlide) ===
                                        Math.floor(prevIndex / imgPerSlide))
                                    ? "fade-in"
                                    : index < prevIndex ||
                                        (prevIndex === 0 && index === totalLen * imgPerSlide - 1)
                                        ? "swipe-cube-to-right"
                                        : "swipe-cube-to-left"
                            }
                            components={data.games
                                .map(({ background }) => background.map((src, i) => <Background key={src} src={src} index={i} />))
                                .flat(1)}
                            index={index}
                        />
                    </Box>

                    <Transitions
                        variant={index % imgPerSlide === 0 ? "fade-in-slide-out" : "none"}
                        components={data.games
                            .map((slide, ind) => slide.background.map(() => <InfoPanels slide={slide} ind={ind} index={index} prevIndex={prevIndex}/>))
                            .flat(1)}
                        index={index}
                    />

                    <Player
                        animationsInitialized={true}
                        play={play}
                        setPlay={setPlay}
                        index={Math.floor(index / imgPerSlide)}
                        secondaryIndex={index}
                        length={totalLen}
                        setIndex={(n: number, prev: number) => {
                            setIndex(n * imgPerSlide);
                            setPrevIndex(prev * imgPerSlide);
                        }}
                        setSecondaryIndex={(n: number, prev: number) => {
                            setIndex(n);
                            setPrevIndex(prev);
                        }}
                        duration={duration}
                        setDuration={setDuration}
                        labels={labels}
                        sequences={sequences}
                        categoryPrimary="game"
                        categorySecondary="image"
                        tickerOn={tickerOn}
                        setTicker={setTicker}
                    />

                    <Progress slideIndex={index} onIndexChange={setIndex} onPrevIndexChange={setPrevIndex} />
                </Hidden>

                <Hidden mdUp>
                    <SmallScreenMessage variant="NFS" />
                </Hidden>
            </Grid>
        </Grid>
    );
};
