import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box, Typography } from '@mui/material';
import { fontSizes } from "../../../styles";

const FOOTER_HEIGHT = 20;

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        offset: {
            height: `${FOOTER_HEIGHT}px`,
        },
        footer: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: `${FOOTER_HEIGHT}px`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#000",
        },
        text: {
            color: "rgba(255, 255, 255, .6)",
            padding: 0
        },
    })
);

interface Props {
    text: string;
}

export const Footer: React.FC<Props> = ({ text }) => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.offset} />
            <Box className={classes.footer}>
                <Typography fontSize={fontSizes.h6} className={classes.text}>{text}</Typography>
            </Box>
        </>
    );
};
