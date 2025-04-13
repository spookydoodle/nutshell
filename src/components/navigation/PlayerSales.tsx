import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, IconButton, Tooltip, Grid, Hidden, Slide, Theme } from '@mui/material';
import { animations } from "../../styles/animations";
import { Slider } from "./Slider";
import { PlayerButtons } from "./PlayerButtons";
import { PlayerSettingsButton } from "./PlayerSettingsButton";
import { SettingsDialog } from "./SettingsDialog";
import { InfoIcon } from "../../icons/InfoIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      zIndex: 100,
      width: "100%",
      height: "8em",
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(31, 31, 31, 0)",
      color: "rgba(255, 255, 255, .87)",
      background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .4) 20%, rgba(0, 0, 0, .95) 40%, rgba(0, 0, 0, 1) 100%)`,
      // border: "solid 1px rgba(0, 0, 0, .87)",
    },
    settingsButtonsContainer: {
      paddingRight: "2em",
      paddingLeft: "2em",
      [theme.breakpoints.down("sm")]: {
        paddingRight: "1em",
        paddingLeft: "1em",
      },
    },
    icon: {
      color: "rgba(255, 255, 255, .6)",
      "&:hover": {
        color: "rgba(255, 255, 255, .87)",
      },
    },
    button: {
      marginLeft: "1em",
      fontWeight: "bold",
      opacity: 0,
      color: "rgba(255, 255, 255, .87) !important",
      borderColor: "rgba(255, 255, 255, .87) !important",
      "&:hover": {
        color: "rgba(255, 255, 255, 1) !important",
        borderColor: "rgba(255, 255, 255, 1) !important",
      },
      animation: `$no-transform 2s 5s cubic-bezier(0, .5, 0, 1) forwards`,
    },
    ...animations,
  })
);

interface Props {
  init: boolean;
  play: boolean;
  setPlay: (play: boolean) => void;
  index: number;
  length: number;
  setIndex: (index: number, prev: number) => void;
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  labels?: Array<string>;
  seqName: string;
  setOpenDialog: (open: boolean) => void;
  tickerOn: boolean;
  setTicker: (on: boolean) => void;
}

export const PlayerSales: React.FC<Props> = ({
  init,
  play,
  setPlay,
  index,
  length,
  setIndex,
  duration,
  setDuration,
  labels,
  seqName,
  setOpenDialog,
  tickerOn,
  setTicker,
}) => {
  const classes = useStyles();
  const [pin, setPin] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show === true) {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 3000);

      // Clean up hook
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [show]);

  const onMouseMove = () => {
    if (show !== true) {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove, false);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const [hover, setHover] = useState(false);
  const onHover = (_event: React.MouseEvent<HTMLDivElement>) => {
    if (hover === false) {
      setHover(true);
    }
  };

  const onOut = (_event: React.MouseEvent<HTMLDivElement>) => {
    if (hover === true) {
      setHover(false);
    }
  };

  const [openSettings, setOpenSettings] = useState(false);

  const handleSettingsOpen = () => {
    setOpenSettings(true);
  };

  const handleSettingsClose = () => {
    setOpenSettings(false);
  };

  const onInfoIconClick = () => setOpenDialog(true);

  return (
    <>
      <Box onMouseOver={onHover} onMouseOut={onOut}>
        <Slide in={!init ? false : pin || show || hover} direction="up">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.container}
          >
            <Grid
              item
              xs={12}
              md={4}
              lg={3}
              container
              justifyContent="center"
              alignItems="center"
            >
              <PlayerButtons
                play={play}
                setPlay={setPlay}
                index={index}
                setIndex={setIndex}
                length={length}
              />

              <Hidden mdUp only="xs">
                <PlayerSettingsButton
                  pin={pin}
                  setPin={setPin}
                  handleSettingsOpen={handleSettingsOpen}
                />
              </Hidden>
            </Grid>

            <Hidden smDown>
              <Grid item container direction="column" xs={12} md={5} lg={6}>
                <Slider
                  index={index}
                  length={length}
                  setIndex={setIndex}
                  labels={labels || []}
                  sequences={[seqName]}
                />
              </Grid>

              <Grid
                item
                xs={4}
                md={3}
                container
                justifyContent="space-around"
                alignItems="center"
                className={classes.settingsButtonsContainer}
              >
                <PlayerSettingsButton
                  pin={pin}
                  setPin={setPin}
                  handleSettingsOpen={handleSettingsOpen}
                />

                <Tooltip title="Data source information" arrow>
                  <IconButton
                    onClick={onInfoIconClick}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Hidden>
          </Grid>
        </Slide>
      </Box>

      <SettingsDialog
        openSettings={openSettings}
        handleSettingsClose={handleSettingsClose}
        duration={duration}
        setDuration={setDuration}
        tickerOn={tickerOn}
        setTicker={setTicker}
      />
    </>
  );
};
