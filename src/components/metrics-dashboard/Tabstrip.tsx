import React, { useState } from "react";
import classNames from "classnames";
import { makeStyles, createStyles, withStyles } from '@mui/styles';
import { Button, Box, Tabs as MuiTabs, Tab as MuiTab, Theme, useTheme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, .87)",
      padding: "1rem 1rem 0 1rem",
    },
    borderRadiusAll: {
      borderRadius: "4px",
    },
    borderRadiusBottom: {
      borderRadius: "0 0 4px 4px",
    },
    borderRadiusTop: {
      borderRadius: "4px 4px 0 0",
    },
    tabstrip: {
      marginTop: theme.spacing(2),
    },
    tabHeaders: {
      display: "flex",
      borderRadius: "4px 4px 0 0",
      backgroundColor: "rgba(255, 255, 255, .6)",
    },
    tabHeader: {
      width: "33.33%",
      textAlign: "center",
      padding: ".5rem 1rem",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, .67)",
      },
    },
    selected: {
      backgroundColor: "rgba(255, 255, 255, .67)",
      borderRadius: "4px 4px 0 0",
    },
    // Expanda button section
    expandContainer: {
      maxHeight: "19rem",
      overflow: "hidden",
      transition: "all .8s ease-in",
    },
    expanded: {
      maxHeight: "1000rem",
      transition: "all .8s ease-out",
    },
    bottomNav: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: ".4rem",
    },
    button: {
      opacity: 0.8,
      fontSize: ".7rem",
      padding: "4px",
    },
  })
);

const Tabs = withStyles(() => ({
  root: {
    height: "2.2rem",
    minHeight: 0,
  },
  indicator: {
    backgroundColor: "rgba(255, 255, 255, .67)",
    borderRadius: "4px 4px 0 0",
    height: "100%",
    zIndex: -1,
    border: "none",
  },
}))(MuiTabs);

const Tab = withStyles(() => ({
  root: {
    padding: "0",
    height: "2.2rem",
    minHeight: 0,
  },
}))(MuiTab);

// Tab panels
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

// Tabstrip component
interface Props {
  items: Array<{ name: string; component: React.ReactNode }>;
  expandable?: boolean;
}

export const Tabstrip = ({ items, expandable = false }: Props) => {
  const classes = useStyles();
  const theme = useTheme();

  const headers = items.map((el) => el.name);
  const components = items.map((el) => el.component);

  // tabs - inner
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: number) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index: number) => {
  //   setValue(index);
  // };

  // Handle expand
  const [expanded, setExpanded] = useState(false);
  const handleExpanded = () => setExpanded((prev) => !prev);

  return (
    <Box className={classes.tabstrip}>
      {/* Header - navigation */}
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        variant="fullWidth"
        aria-label="tabstrip header"
        className={classes.tabHeaders}
      >
        {headers.map((header, index) => (
          <Tab
            key={`header-${index}`}
            label={header.toUpperCase()}
            id={`full-width-tab-${index}`}
          />
        ))}
      </Tabs>

      {/* Content */}
      <Box className={classNames(classes.card, classes.borderRadiusBottom)}>
        <Box
          className={classNames({
            [classes.expandContainer]: expandable,
            [classes.expanded]: expandable && expanded,
          })}
        >
          {/* TODO: Create from scratch */}
          {/* <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          > */}
            {components.map((component, i) => (
              <TabPanel
                key={`tab-panel-${i}`}
                value={value}
                index={i}
                dir={theme.direction}
              >
                {component}
              </TabPanel>
            ))}
          {/* </SwipeableViews> */}
        </Box>
        {/* 
                Show more / less button - by default score list is limited to fixed height. 
                Clicking on this button removes the fixed height and expands the full list 
                (and the other way around)
            */}
        <Box className={classes.bottomNav}>
          <Button
            // variant="outlined"
            // color="primary"
            size="small"
            onClick={handleExpanded}
            className={classes.button}
          >
            {`Show ${expanded ? "less" : "more"}`}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
