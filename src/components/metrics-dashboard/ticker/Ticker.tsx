import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box, Typography } from '@mui/material';
import { TickerElement } from "./TickerElement";
import { TickerItem } from "./TickerItem";
import { TickerStateData } from "../metric-types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: "100%",
            position: "fixed",
            bottom: "0",
            height: "12.5vh",
            paddingBottom: "1vh",
            color: "rgba(255, 255, 255, .87)",
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflowX: 'hidden',
            "& p": {
                fontSize: "4vh !important",
            },
            "&::before": {
                content: "''",
                position: "absolute",
                top: "4vh",
                right: 0,
                bottom: 0,
                left: 0,
                background: `linear-gradient(to right, rgba(0, 0, 0, 1) 1.5%, rgba(0, 0, 0, 0) 2.5%, rgba(0, 0, 0, 0) 97.5%, rgba(0, 0, 0, 1) 98.5%)`,
                zIndex: 1,
            },
        },
        title: {
            paddingRight: "200px",
            display: 'block'
        },
        tickerText: {
            fontSize: "4vh !important",
            [theme.breakpoints.down("sm")]: {
                fontSize: "3.5vh !important",
            },
        },
        textContainer: {
            marginTop: "4vh",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            display: "inline-block",
        }
    })
);

interface Props {
    animationsInitialized: boolean;
    title: string;
    data: TickerStateData;
}

export const Ticker: React.FC<Props> = ({ animationsInitialized, title, data }) => {
    const classes = useStyles();
    const [containerRef, setContainerRef] = React.useState<HTMLDivElement | null>(null);
    const [index, setIndex] = React.useState(0);

    const list = React.useMemo(
        () => [...data.entries()].map(([primaryCategory, nestedDataSet]) => {
            return [...nestedDataSet.entries()]?.map(([secondaryCategory, dataSet], secondaryIndex) => {
                return dataSet.map((value, itemIndex) => (
                    <TickerItem categoryIndex={secondaryIndex} itemIndex={itemIndex} primaryCategory={primaryCategory} secondaryCategory={secondaryCategory} value={value} />
                ));
            });
        }).flat(2),
        [data]
    );

    const fullList: React.ReactNode[] = React.useMemo(
        () => [
            <Typography className={classNames(classes.textContainer, classes.title, classes.tickerText)}>{title}</Typography>,
            ...list
        ],
        [classes, title, list]
    );

    const handleChange = React.useCallback(
        (i: number) => () => setIndex((i + 1) % (fullList.length)),
        [fullList.length]
    );

    return (
        <Box ref={setContainerRef} className={classes.container}>
            {containerRef && animationsInitialized ? (
                fullList.map((el, i) => i <= index ? (
                    <TickerElement
                        key={i}
                        element={el}
                        parent={containerRef}
                        index={index}
                        onNext={handleChange(i)}
                    />
                ) : null)
            ) : null}
        </Box>
    );
};
