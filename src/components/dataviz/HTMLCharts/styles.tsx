import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { animations, fontSizes } from "../../../styles";

export const rowHeight = 20;
export const rowGap = 2;
export const maxBars = 12;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paddingLeft: {
            paddingLeft: "20px",
        },
        container: {
            width: "100%",
            maxHeight: `${(rowHeight + rowGap) * maxBars - rowGap / 2}px`,
            padding: "0 20px",
            overflowY: "scroll",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
                width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0, 0, 0, .13)",
                borderRadius: "4px",
            },
        },
        containerSm: {
            maxHeight: `${(rowHeight + rowGap) * maxBars - rowGap / 2}px`,
            width: "100%",
            padding: "0 10px",
            overflowY: "scroll",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
                width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0, 0, 0, .13)",
                borderRadius: "4px",
            },
        },
        bars: {
            display: 'grid',
            rowGap: `${rowGap}px`
        },
        fadeOutIn: {
            animation: `$fade-out-in 2s ease-in-out`,
        },
        fadeOut: {
            animation: `$fade-out 1s ease-in-out`,
        },
        fadeIn: {
            animation: `$fade-in 1s ease-in-out`,
        },
        row: {
            height: `${rowHeight}px`,
            display: 'block'
        },
        hide: {
            opacity: 0
        },
        labels: {
            "&$textMd": {
                fontSize: fontSizes.h5,
                textTransform: "uppercase",
                [theme.breakpoints.down("sm")]: {
                    fontSize: fontSizes.h6,
                },
            },
            "&$textSm": {
                fontSize: fontSizes.h6,
                [theme.breakpoints.down("sm")]: {
                    fontSize: fontSizes.h7,
                },
                textTransform: "uppercase",
            },
            "&$label": {
                fontWeight: "bold",
                width: "100%",
                padding: "0 5px",
                textAlign: "right"
            },
            "&$delta": {
                fontWeight: "bold"
            },
            "&$deltaMax": {
                fontSize: `calc(${fontSizes.h6} - 2px)`,
                [theme.breakpoints.down("sm")]: {
                    fontSize: `calc(${fontSizes.h7} - 2px)`,
                },
            },
            "&$rank": {
                paddingRight: "5px",
                fontWeight: "bold",
            },
        },
        textMd: {},
        textSm: {},
        label: {},
        delta: {},
        deltaMax: {},
        rank: {},
        barContainer: {
            display: "flex",
            "&$borderRight": {
                borderRight: `solid 1px ${theme.palette.primary.main}`,
            },
            "&$borderLeft": {
                borderLeft: `solid 1px ${theme.palette.primary.main}`,
            },
        },
        borderRight: {},
        borderLeft: {},
        bar: {
            height: `${rowHeight}px`,
            borderRadius: "1px",
            "&$marginLeft": {
                marginLeft: "5px",
            },
            "&$marginRight": {
                marginRight: "5px",
            },
            "&$neutralPrimary": {
                background: `linear-gradient(to right, ${theme.palette.primary.dark} 15%, ${theme.palette.primary.light})`,
            },
            "&$neutralSecondary": {
                backgroundColor: theme.palette.primary.main,
            },
            "&$pos": {
                backgroundColor: theme.palette.success.main,
            },
            "&$neg": {
                backgroundColor: theme.palette.error.main,
            },
            "&$posExceed": {
                background:
                    "linear-gradient(90deg, rgba(23,153,90,1) 80%, rgba(23,153,90,0) 100%)",
            },
            "&$negExceed": {
                background:
                    "linear-gradient(90deg, rgba(204,12,47,0) 0%, rgba(204,12,47,1) 20%);",
            },
            "&$left": {
                marginRight: "auto !important",
            },
            "&$right": {
                marginLeft: "auto !important",
            },
        },
        left: {},
        right: {},
        marginLeft: {},
        marginRight: {},
        pos: {},
        neg: {},
        posExceed: {},
        negExceed: {},
        neutralPrimary: {},
        neutralSecondary: {},
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
        unit: {
            display: "flex",
            justifyContent: "flex-end",
            padding: "0 5px",
            fontWeight: 400,
        },
        padding: {
            paddingLeft: "5px",
            paddingRight: "5px",
        },
        ...animations,
    })
);
