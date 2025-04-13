import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Tooltip, Theme } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "../components/Link";
import { fontSizes } from "../styles/themes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      height: "4vh",
      width: "4vh",
      marginRight: "1vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "solid 1.4px rgba(255, 255, 255, .87)",
      borderRadius: "50px",
      [theme.breakpoints.down("sm")]: {
        marginRight: ".4rem",
        height: "1.2rem",
        width: "1.2rem",
        borderWidth: "1px",
      },
    },
    sizeVh: {
      marginTop: "1.5vh",
      [theme.breakpoints.down("sm")]: {
        marginTop: ".45rem",
      },
    },
    icon: {
      fontSize: fontSizes.h2,
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
  })
);

interface Props {
  to: string;
  tooltipText: string;
}

export const BackNavVh = ({ to, tooltipText }: Props) => {
  const classes = useStyles();

  return (
    <Link to={to}>
      <Tooltip title={tooltipText} arrow>
        <Box className={classNames(classes.iconButton, classes.sizeVh)}>
          <ArrowBackIcon className={classes.icon} />
        </Box>
      </Tooltip>
    </Link>
  );
};

export const BackNav = ({ to, tooltipText }: Props) => {
  const classes = useStyles();

  return (
    <Link to={to}>
      <Tooltip title={tooltipText} arrow>
        <Box className={classes.iconButton}>
          <ArrowBackIcon className={classes.icon} />
        </Box>
      </Tooltip>
    </Link>
  );
};
