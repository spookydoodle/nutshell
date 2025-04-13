import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Typography, Tooltip, Theme } from '@mui/material';
import { ProductImage } from "./ProductImage";
import * as MetricTypes from "./types";
import { fontSizes } from "../../styles/themes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(0, 2),
    },
    img: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "1em",
      objectFit: "contain",
      filter: "drop-shadow(1px 1px 3px rgba(0,0,0, .3))",
      "&$md": {
        maxWidth: "200px",
        maxHeight: "200px",
        width: "20vh",
        height: "20vh",
      },
      "&$sm": {
        maxWidth: "125px",
        maxHeight: "125px",
        width: "12.5vh",
        height: "12.5vh",
      },
    },
    md: {},
    sm: {},
    subtitle: {
      fontSize: fontSizes.h6,
    },
    center: {
      textAlign: "center",
    },
    bold: {
      fontWeight: "bold",
    },
    KPIPrimary: {
      fontSize: fontSizes.h6,
    },
    KPISecondary: {
      fontSize: fontSizes.h6,
      opacity: 0.6,
    },
  })
);

interface Props {
    size?: "sm" | "md";
  i: number;
  value: MetricTypes.Datum;
}

const ProductTileCol: React.FC<Props> = ({ size = "md", i, value }) => {
  const classes = useStyles();
  const tooltip = `${value?.attributePrimary?.key} = ${value?.attributePrimary?.text} - ${value?.attributeSecondary?.text}`;

  return (
    <Grid item container xs={12} className={classes.container}>
      <Grid item xs={3}>
        {value?.img && (
          <Tooltip title={tooltip} arrow>
            <ProductImage value={value} i={i} size={size} />
          </Tooltip>
        )}
      </Grid>

      <Grid item xs={3}>
        <Tooltip title={tooltip} arrow>
          <Typography className={classNames(classes.subtitle, classes.bold)}>
            <Typography
              component="span"
              color="textSecondary"
              className={classNames(classes.subtitle, classes.bold)}
            >
              #{i + 1}
            </Typography>{" "}
            {value.attributePrimary?.text}
          </Typography>
        </Tooltip>

        <Typography className={classes.KPIPrimary}>
          {value?.primaryFormatted ? value.primaryFormatted : value.primary}
        </Typography>

        <Typography className={classes.KPISecondary}>
          {value?.secondaryFormatted
            ? value.secondaryFormatted
            : value.secondary}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductTileCol;
