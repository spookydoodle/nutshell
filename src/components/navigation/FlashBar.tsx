import React from "react";
// import { Img } from "react-image";
// import { useLocation } from "react-router-dom";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, AppBar, Toolbar, Theme } from '@mui/material';
import HideOnScroll from "../HideOnScroll";
import { drawerWidth, toolbarHeight } from "./styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      minHeight: `${toolbarHeight}px !important`,
    },
  })
);

interface Props {
  name: string;
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

const NutshellBar = ({
  // name,
  open,
  // handleDrawerOpen,
  // handleDrawerClose,
}: Props) => {
  const classes = useStyles();
  // const location = useLocation();
  // const path = location.pathname;

  return (
    <HideOnScroll>
      <AppBar
        color="transparent"
        // position="absolute"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          {/* <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={classNames(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton> */}
          {/* <Link to={home}>
                        <Typography variant="body1" noWrap>
                            {name}
                        </Typography>
                    </Link> */}
          <Grid container>
            {/* <Grid container item xs={6} justifyContent="center" alignItems="center"> */}
            {/* <Img src={logo} height="30px" /> */}
            {/* </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default NutshellBar;
