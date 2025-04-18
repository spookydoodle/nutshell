import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Hidden, Theme } from '@mui/material';
import { Player } from "../navigation/Player";
import { NavTitles } from "./solar/NavTitles";
import { Content } from "./Content";
import { BarChart } from "../dataviz/HTMLCharts/BarChart";
import { ImgTiles } from "./ImgTiles";
import { Ticker } from "./ticker/Ticker";
import { SmallScreenMessage } from "./SmallScreenMessage";
import { SlidesStateData, SlideData, TickerData } from "../../types/types";
import * as Hooks from '../../hooks';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    content: {
      width: "98vw",
      marginTop: "2vh",
      position: "relative",
    },
    chartContainer: {
      height: "100%",
      overflow: "hidden"
    },
    divider: {
      marginTop: ".5em",
      marginBottom: ".5em",
    },
  })
);

interface Props {
  animationsInitialized: boolean;
  play: boolean;
  setPlay: (play: boolean) => void;
  data: SlidesStateData;
  tickerData?: Map<string, TickerData>;
}

export const SlideshowSolar: React.FC<Props> = ({
  animationsInitialized,
  play,
  setPlay,
  data,
  tickerData
}) => {
  const classes = useStyles();
  const appId = Hooks.useAppId();
  const [duration, setDuration] = useState(15000);

  const dataKeys = data ? [...data.keys()] : [];
  const dataValues = data ? [...data.values()] : [];

  const slides: SlideData = dataValues.flat(1);

  // For the 'legend' in Player components (marks, sequences)
  const labels: Array<string> = slides.map(
    (slide) => slide.headers.titleSecondaryShort
  );
  const sequences = dataKeys;

  const getMaxRows = (_i: number) =>
    Math.max(
      ...[...slides[index].data.values()]
        .map((s) => [...s.main.values()].map((e) => e.data.length))
        .flat(2)
    );

  const totalLen = slides.length;
  const seqLen = totalLen / 2; // TODO: Repair this to get the seqLen of current time box

  // Change index every 'duration' seconds. Index is used to display current slide in Transitions
  const [index, setIndex] = useState(0);
  const [_prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % totalLen);
      }, duration);

      return () => {
        clearInterval(interval);
      };
    }
  }, [play, slides, duration, totalLen]);

  const getComponents = (name: string) =>
    slides.map((slide, ind) => (
      <>
        {[...(slide.data.get(name)?.main.entries() || [])].map(
          ([key, val], i) =>
            val.type === "bar-chart" ? (
              <Grid
                key={`chart-${name}-${key}-${i}`}
                container
                justifyContent="center"
                alignItems="center"
                className={classes.chartContainer}
              >
                <BarChart
                  variant="scroll"
                  // variant="fade"
                  type="abs-delta"
                  rankColor="primary"
                  labelSize="sm"
                  play={play}
                  scrollId={`${appId}-${name.replace(" ", "-").toLowerCase()}`}
                  slideDuration={duration}
                  data={
                    val.data.map((row) => ({
                      category: row.name,
                      value: row.primary || 0,
                      valueFormatted: row.primaryFormatted,
                      delta: row.primaryDelta,
                      deltaFormatted: row.primaryDeltaFormatted,
                      isDeltaGood: row.primaryIsGood,
                      isDeltaBad: row.primaryIsBad,
                    })) || []
                  }
                  maxRows={getMaxRows(index)}
                />
              </Grid>
            ) : val.type === "items" && val.data.length > 0 ? (
              <ImgTiles key={`items-${name}-${ind}-${i}`} data={val.data} />
            ) : undefined
        )}
      </>
    ));

  const [tickerOn, setTicker] = useState(true);

  return (
    <Grid container justifyContent="center">
      <Grid container item className={classes.content}>
        <Hidden smDown>
          <NavTitles
            animationsInitialized={animationsInitialized}
            current={slides[index].headers}
            next={slides[(index + 1) % totalLen].headers}
            play={play}
            index={index}
            setIndex={setIndex}
            seqLen={seqLen}
            onBreadClick={(index: number) =>
              setIndex(
                (prev: number) => index + Math.floor(prev / seqLen) * seqLen // TODO: repair this to take into consideration current sequence name
              )
            }
            sequences={sequences}
            currentSequence={slides[index].headers.sequence}
          />

          {[...slides[index].data.entries()].map(([name, value], i) => (
            // TODO: Responsiveness:
            <Hidden
              key={`${name}-${i}`}
              only={i > 0 ? "xs" : undefined}
              // smDown={i > 1}
            >
              <Content
                animationsInitialized={animationsInitialized}
                name={name}
                tileData={value.tile} // TODO: consider changing to Transitions and passing components
                components={getComponents(name)}
                index={index}
              />
            </Hidden>
          ))}

          {tickerData && tickerOn ? (
            <Hidden lgDown>
              <Ticker
                animationsInitialized={animationsInitialized}
                text="Turbocharged by spookydoodle"
                data={tickerData}
              />
            </Hidden>
          ) : null}

          <Player
            animationsInitialized={animationsInitialized}
            play={play}
            setPlay={setPlay}
            index={index}
            length={totalLen}
            setIndex={(n: number, prev: number) => {
              setIndex(n);
              setPrevIndex(prev);
            }}
            duration={duration}
            setDuration={setDuration}
            labels={labels}
            sequences={sequences}
            tickerOn={tickerOn}
            setTicker={setTicker}
          />
        </Hidden>

        <Hidden mdUp>
          <SmallScreenMessage variant="Solar" animationsInitialized={animationsInitialized} />
        </Hidden>
      </Grid>
    </Grid>
  );
};
