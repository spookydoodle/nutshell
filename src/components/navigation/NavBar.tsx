import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { AppBar, Toolbar, Typography, IconButton, Theme } from '@mui/material';
import { Link } from "../Link";
import MenuIcon from "@mui/icons-material/Menu";
import HideOnScroll from "../HideOnScroll";
import { toolbarHeight } from "./styles";

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
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
  color?: "transparent" | "primary" | "secondary";
}

const NavBar = ({ name, handleDrawerOpen, color }: Props) => {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <AppBar
        color={color ? color : "primary"}
        // position="absolute"
        // className={classNames(classes.appBar, {
        //     [classes.appBarShift]: open,
        // })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            // className={classNames(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/'>
            <Typography variant="body1" noWrap>
              {name}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default NavBar;
