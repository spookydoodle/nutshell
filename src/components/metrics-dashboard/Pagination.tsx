import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Typography, Theme } from '@mui/material';
import { fontSizes } from "../../styles/themes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "absolute",
      bottom: 0,
    },
    pagination: {
      fontSize: fontSizes.h5,
    },
    next: {
      fontSize: fontSizes.h5,
      padding: "0 1em",
      position: "relative",
      textTransform: "uppercase",
      "&::after": {
        content: "''",
        position: "absolute",
        width: "2.5em",
        borderBottom: `.1em solid ${theme.palette.secondary.main}`,
        left: ".9em",
        bottom: "2px",
        zIndex: 10,
      },
    },
  })
);

interface Props {
  currentInd?: number;
  maxInd?: number;
  next?: string;
}

const Pagination = ({ currentInd, maxInd, next }: Props) => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" className={classes.container}>
      <Grid item xs={5}></Grid>
      <Grid item container justifyContent="center" xs={2}>
        <Typography className={classes.pagination}>
          {currentInd && maxInd ? `${currentInd} / ${maxInd}` : ""}
        </Typography>
      </Grid>
      <Grid item container justifyContent="flex-end" xs={5}>
        <Grid item>
          <Typography className={classes.next} noWrap>
            {next ? `Next: ${next}` : ""}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pagination;
