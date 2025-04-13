import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography, Divider, Theme } from '@mui/material';
import { BarChartData, DataRow } from "../../logic/datavizTypes";
import { fontSizes } from "../../styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: "100%",
            position: "relative",
            overflow: "hidden"
        },
        row: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "8px 0",
        },
        head: {
            maxWidth: "60%",
        },
        rowCol: {
            display: "flex",
            flexDirection: "column",
        },
        main: {
            fontWeight: "bold",
        },
        deltaPos: {
            fontWeight: "bold",
            color: theme.palette.success.main,
            textAlign: "right",
        },
        deltaNeg: {
            fontWeight: "bold",
            color: theme.palette.error.main,
            textAlign: "right",
        },
        opacity: {
            opacity: 0.6,
        },
    })
);

interface Props {
    data: BarChartData;
    unit?: string;
    rankColor?: "primary" | "secondary";
}

export const ScoreList = ({ data }: Props) => {
    const classes = useStyles();

    const filteredData = React.useMemo(
        () => data
            .filter((row: DataRow) => row?.category && row.category !== "")
            .sort((a, b) => Number(b.value) - Number(a.value)),
        [data]
    );

    return (
        <Box className={classes.container}>
            <Box>
                {filteredData.map((row, i) => (
                    <React.Fragment key={i}>
                        <Box className={classes.row}>
                            <Box className={classNames(classes.rowCol, classes.head)}>
                                <Typography noWrap>
                                    {row.category}
                                </Typography>
                                <Typography noWrap fontSize={fontSizes.h6} className={classes.opacity}>
                                    {row.subcategory}
                                </Typography>
                            </Box>

                            <Box className={classes.rowCol}>
                                <Typography className={classes.main}>
                                    {row.valueFormatted}
                                </Typography>
                                <Typography className={row.isDeltaGood ? classes.deltaPos : classes.deltaNeg}>
                                    {row.deltaFormatted}
                                </Typography>
                            </Box>
                        </Box>

                        <Divider />
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    );
};
