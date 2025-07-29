import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography, Tooltip, Theme } from '@mui/material';
import { Datum } from "./metric-types";

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
            fontSize: "2.5vh !important",
            [theme.breakpoints.down("sm")]: {
                fontSize: "2.25vh !important",
            },
        },
        value: {
            fontWeight: "bold",
            fontSize: "2.5vh !important",
            [theme.breakpoints.down("sm")]: {
                fontSize: "2.5vh !important",
            },
        },
        delta: {
            fontWeight: "bold",
            fontSize: "2.25vh !important",
            [theme.breakpoints.down("sm")]: {
                fontSize: "2vh !important",
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
    data?: Datum;
}

export const Tile: React.FC<Props> = ({ name, data }) => {
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
            ${data?.primaryIsBad
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
