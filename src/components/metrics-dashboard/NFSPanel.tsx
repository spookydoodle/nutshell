import React from "react";
import classNames from "classnames";
import { AnimatedComponent, animated } from "@react-spring/web";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: "rgba(0, 0, 0, .6)",
      width: "30%",
      margin: ".5em",
      border: "solid 1px white",
      position: "relative",
      color: "white",
      padding: "1em",
    },
    decor: {
      "&$left": {
        position: "absolute",
        top: "-1px",
        bottom: "-1px",
        right: "auto",
        left: "-26px",
        width: "16px",
        [theme.breakpoints.down("md")]: {
          left: "-16px",
          width: "10px",
        },
        backgroundColor: "rgba(0, 0, 0, .4)",
        border: "solid 1px white",
        opacity: 0.8,
        "&::before": {
          content: "''",
          position: "absolute",
          top: "-1px",
          bottom: "-1px",
          right: "auto",
          left: "-23px",
          width: "12px",
          [theme.breakpoints.down("md")]: {
            left: "-14px",
            width: "8px",
          },
          backgroundColor: "rgba(0, 0, 0, .4)",
          border: "solid 1px white",
          opacity: 0.6,
        },
        "&::after": {
          content: "''",
          position: "absolute",
          top: "-1px",
          bottom: "-1px",
          right: "auto",
          left: "-40px",
          width: "6px",
          [theme.breakpoints.down("md")]: {
            left: "-26px",
            width: "4px",
          },
          backgroundColor: "rgba(0, 0, 0, .4)",
          border: "solid 1px white",
          opacity: 0.4,
        },
      },
      "&$right": {
        position: "absolute",
        top: "-1px",
        bottom: "-1px",
        right: "auto",
        left: "calc(100% + 10px)",
        width: "16px",
        [theme.breakpoints.down("md")]: {
          left: "calc(100% + 6px)",
          width: "10px",
        },
        backgroundColor: "rgba(0, 0, 0, .4)",
        border: "solid 1px white",
        opacity: 0.8,
        "&::before": {
          content: "''",
          position: "absolute",
          top: "-1px",
          bottom: "-1px",
          right: "auto",
          left: "calc(100% + 10px)",
          width: "12px",
          [theme.breakpoints.down("md")]: {
            left: "calc(100% + 6px)",
            width: "8px",
          },
          backgroundColor: "rgba(0, 0, 0, .4)",
          border: "solid 1px white",
          opacity: 0.6,
        },
        "&::after": {
          content: "''",
          position: "absolute",
          top: "-1px",
          bottom: "-1px",
          right: "auto",
          left: "calc(100% + 11px + 22px)",
          width: "6px",
          [theme.breakpoints.down("md")]: {
            left: "calc(100% + 20px)",
            width: "4px",
          },
          backgroundColor: "rgba(0, 0, 0, .4)",
          border: "solid 1px white",
          opacity: 0.4,
        },
      },
    },
    left: {},
    right: {},
  })
);

interface Props {
  skew?: boolean;
  style?: React.ComponentProps<AnimatedComponent<"div">>['style'];
  children?: React.ReactNode;
}

export const NFSPanel = ({ 
  // skew = false, 
  style, 
  children 
}: Props) => {
  const classes = useStyles();

  return (
    <animated.div style={style} className={classes.card}>
      <span className={classNames(classes.decor, classes.left)} />
      <span className={classNames(classes.decor, classes.right)} />

      {children}
    </animated.div>
  );
};
