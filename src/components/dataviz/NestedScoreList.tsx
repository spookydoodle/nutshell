import React from 'react';
import classNames from "classnames";
import { makeStyles, createStyles, withStyles } from '@mui/styles';
import { Accordion as MUIAccordion, AccordionSummary as MUIAccordionSummary, AccordionDetails as MUIAccordionDetails, Theme, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ScoreList } from "./ScoreList";
import { BarChartData, DataRow } from "../../logic/datavizTypes";

const Accordion = withStyles(() => ({
    root: {
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
    },
}))(MUIAccordion);

const AccordionSummary = withStyles(() => ({
    root: {
        padding: 0,
        margin: 0,
    },
    content: {
        paddingRight: '10px'
    },
    expanded: {
        margin: 0,
    },
}))(MUIAccordionSummary);

const AccordionDetails = withStyles(() => ({
    root: {
        margin: "10px 5px",
        padding: 0,
    },
}))(MUIAccordionDetails);

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
            width: "100%"
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

export const NestedScoreList: React.FC<Props> = ({ data }) => {
    const classes = useStyles();

    const filteredData = React.useMemo(
        () => data
            .filter((row: DataRow) => row?.category && row.category !== "")
            .sort((a, b) => Number(b.value) - Number(a.value)),
        [data]
    );

    return (
        <Box className={classes.container}>
            {data &&
                filteredData.map((row, i) => (
                    // See performance section in https://material-ui.com/components/accordion/#accordion
                    <Accordion key={i} slotProps={{ transition: { unmountOnExit: true } }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Box className={classes.row}>
                                {/* Header */}
                                <Box className={classNames(classes.rowCol, classes.head)}>
                                    <Typography noWrap>
                                        {row.category}
                                    </Typography>
                                    <Typography noWrap className={classes.opacity} fontSize={14}>
                                        {row.subcategory}
                                    </Typography>
                                </Box>

                                {/* KPI */}
                                <Box className={classes.rowCol}>
                                    <Typography className={classNames(classes.main)}>
                                        {row.valueFormatted}
                                    </Typography>
                                    <Typography className={row.isDeltaGood ? classes.deltaPos : classes.deltaNeg}                    >
                                        {row.deltaFormatted}
                                    </Typography>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        {((row?.subitems?.length ?? 0) > 0) && (
                            <AccordionDetails>
                                <ScoreList data={row.subitems ?? []} />
                            </AccordionDetails>
                        )}
                    </Accordion>
                ))}
        </Box>
    );
};
