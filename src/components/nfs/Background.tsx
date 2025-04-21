import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { SuspenseImg } from "../SuspenseImg";
import nothing from "../../img/misc/nothing.jpg";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        container: {
            position: "relative",
            top: 0,
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&::before": {
                content: "''",
                position: "absolute",
                top: 0,
                left: "-20%",
                right: "-20%",
                bottom: "auto",
                height: "12.5vh",
                backgroundColor: "black",
            },
            "&::after": {
                content: "''",
                position: "absolute",
                bottom: 0,
                left: "-20%",
                right: "-20%",
                top: "auto",
                height: "12.5vh",
                backgroundColor: "black",
            },
        },
        imgBg: {
            zIndex: -2,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "calc(100vh - 10em)",
            margin: "5em auto",
            objectFit: "cover",
            filter: "blur(20px)",
            overflow: "hidden",
        },
        img: {
            zIndex: -1,
            position: "absolute",
            height: "75vh",
            widht: "100%",
            boxShadow: "10px 10px 10em rgba(0, 0, 0, .6)",
        }
    })
);

interface Props {
    src: string;
    index: number;
}

export const Background: React.FC<Props> = ({ src, index }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <SuspenseImg
                alt={`alt-img-bg-${index}`}
                img={{ img: src, className: classes.imgBg }}
                fallback={{ img: nothing, className: classes.imgBg }}
            />

            <SuspenseImg
                alt={`alt-img-${index}`}
                img={{ img: src, className: classes.img }}
                fallback={{ img: nothing, className: classes.img }}
            />
        </div>
    );
};
