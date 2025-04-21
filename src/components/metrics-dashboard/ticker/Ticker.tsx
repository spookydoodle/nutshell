import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box, Typography } from '@mui/material';
import { fontSizes } from "../../../styles/themes";
import * as Types from "../../../types/types";
import { TickerElement } from "./TickerElement";
import { TickerItem } from "./TickerItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: "100%",
            position: "fixed",
            bottom: "0",
            height: "12.5vh",
            color: "rgba(255, 255, 255, .87)",
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflowX: 'hidden',
            "& p": {
                fontSize: fontSizes.h2,
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
            minWidth: "100vw",
            display: 'block',
            textAlign: "center"
        },
        tickerText: {
            fontSize: fontSizes.h2,
            [theme.breakpoints.down("sm")]: {
                fontSize: fontSizes.h3,
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
    text: string;
    data: Map<string, Types.TickerData>;
}

export const Ticker: React.FC<Props> = ({ animationsInitialized, text, data }) => {
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

    const title = React.useMemo(
        () => <Typography className={classNames(classes.textContainer, classes.title, classes.tickerText)}>{text}</Typography>,
        [classes, text]
    );

    const fullList: React.ReactNode[] = React.useMemo(
        () => [title, ...list],
        [title, list]
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
