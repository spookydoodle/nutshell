import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography, Tooltip, Theme } from '@mui/material';
import { fontSizes } from "../../styles/themes";
import { Value } from "../../types/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: "center",
      borderRadius: "2px 2px 0 0",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    title: {
      fontWeight: "bold",
      fontSize: fontSizes.h2,
      [theme.breakpoints.down("sm")]: {
        fontSize: fontSizes.h3,
      },
    },
    value: {
      fontWeight: "bold",
      fontSize: fontSizes.h1,
      [theme.breakpoints.down("sm")]: {
        fontSize: fontSizes.h2,
      },
    },
    delta: {
      fontWeight: "bold",
      fontSize: fontSizes.h3,
      [theme.breakpoints.down("sm")]: {
        fontSize: fontSizes.h4,
      },
    },
    deltaPos: {
      color: theme.palette.success.main,
    },
    deltaNeg: {
      color: theme.palette.error.main,
    },
  })
);

interface Props {
  name: string;
  data?: Value;
}

export const Tile = ({ name, data }: Props) => {
  const classes = useStyles();

  return (
    <Tooltip title={data?.tooltip ? data.tooltip : name} arrow>
      <Box className={classes.container}>
        <Typography noWrap className={classes.title}>
          {name?.toUpperCase()}
        </Typography>

        <Typography noWrap className={classes.value}>
          {data?.primary
            ? data?.primaryFormatted
              ? data.primaryFormatted
              : data.primary
            : ""}
        </Typography>

        <Typography
          noWrap
          className={`${classes.delta} 
            ${
              data?.primaryIsBad
                ? classes.deltaNeg
                : data?.primaryIsGood
                ? classes.deltaPos
                : undefined
            }`}
        >
          {data?.primaryDeltaFormatted
            ? data.primaryDeltaFormatted
            : data?.primaryDelta || ""}
        </Typography>
      </Box>
    </Tooltip>
  );
};
