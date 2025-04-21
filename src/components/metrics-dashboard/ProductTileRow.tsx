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
        skeleton: {
            borderRadius: "10px",
            overflow: "hidden",
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
        separator: {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "50%",
            width: ".2em",
            height: ".2em",
            marginBottom: ".3vh",
            display: "inline-block",
            opacity: 0.2,
        },
        bottomMargin: {
            marginBottom: theme.spacing(2),
        },
    })
);

interface Props {
    size?: "sm" | "md";
    i: number;
    value: MetricTypes.Datum;
}

export const ProductTileRow: React.FC<Props> = ({ size = "md", i, value }) => {
    const classes = useStyles();
    const tooltip = `${value?.attributePrimary?.key} = ${value?.attributePrimary?.text} - ${value?.attributeSecondary?.text}`;

    return (
        <Tooltip title={tooltip} arrow placement="top">
            <Grid item xs={4} container className={classes.container}>
                <Grid item xs={12} className={classes.bottomMargin}>
                    {value?.img && <ProductImage value={value} i={i} size={size} />}
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        noWrap
                        gutterBottom
                        className={classNames(classes.subtitle, classes.bold, classes.center)}
                    >
                        #{i + 1} {value.attributePrimary?.text}
                    </Typography>

                    <Typography
                        noWrap
                        gutterBottom
                        className={classNames(classes.KPIPrimary, classes.center)}
                    >
                        {value?.primaryFormatted ? value.primaryFormatted : value.primary}{" "}
                        <Typography
                            component="span"
                            gutterBottom
                            noWrap
                            className={classNames(classes.KPISecondary, classes.center)}
                        >
                            <Typography component="span" className={classes.separator} />{" "}
                            {value?.secondaryFormatted
                                ? value.secondaryFormatted
                                : value.secondary}
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>
        </Tooltip>
    );
};
