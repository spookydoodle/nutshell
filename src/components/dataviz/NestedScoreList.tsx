import React from 'react';
import classNames from "classnames";
import { makeStyles, createStyles, withStyles } from '@mui/styles';
import * as MUI from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ScoreList } from "./ScoreList";
import { BarChartData, DataRow } from "../../logic/datavizTypes";

const Accordion = withStyles(() => ({
    root: {
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
    },
}))(MUI.Accordion);

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
}))(MUI.AccordionSummary);

const AccordionDetails = withStyles(() => ({
    root: {
        margin: "10px 5px",
        padding: 0,
    },
}))(MUI.AccordionDetails);

const useStyles = makeStyles((theme: MUI.Theme) =>
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

export const NestedScoreList = ({ data }: Props) => {
    const classes = useStyles();

    const filteredData = React.useMemo(
        () => data
            .filter((row: DataRow) => row?.category && row.category !== "")
            .sort((a, b) => Number(b.value) - Number(a.value)),
        [data]
    );

    return (
        <MUI.Box className={classes.container}>
            {data &&
                filteredData.map((row, i) => (
                    // See performance section in https://material-ui.com/components/accordion/#accordion
                    <Accordion key={i} slotProps={{ transition: { unmountOnExit: true } }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <MUI.Box className={classes.row}>
                                {/* Header */}
                                <MUI.Box className={classNames(classes.rowCol, classes.head)}>
                                    <MUI.Typography noWrap>
                                        {row.category}
                                    </MUI.Typography>
                                    <MUI.Typography noWrap className={classes.opacity} fontSize={14}>
                                        {row.subcategory}
                                    </MUI.Typography>
                                </MUI.Box>

                                {/* KPI */}
                                <MUI.Box className={classes.rowCol}>
                                    <MUI.Typography className={classNames(classes.main)}>
                                        {row.valueFormatted}
                                    </MUI.Typography>
                                    <MUI.Typography className={row.isDeltaGood ? classes.deltaPos : classes.deltaNeg}                    >
                                        {row.deltaFormatted}
                                    </MUI.Typography>
                                </MUI.Box>
                            </MUI.Box>
                        </AccordionSummary>
                        {((row?.subitems?.length ?? 0) > 0) && (
                            <AccordionDetails>
                                <ScoreList data={row.subitems ?? []} />
                            </AccordionDetails>
                        )}
                    </Accordion>
                ))}
        </MUI.Box>
    );
};
