import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { NfsSlideshow } from "../nfs-slideshow";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        container: {
            zIndex: 10,
            position: "absolute",
            top: "-2vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
        },
        item: {
            width: "1vh",
            height: "1vh",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, .4)",
            margin: "1em",
            fontSize: "8px",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "rgba(255, 255, 255, .87)",
            },
            "&$active": {
                backgroundColor: "rgba(255, 255, 255, .87)",
            },
        },
        active: {}
    })
);

interface Props {
    activeItemIndex: number;
    onClick: (i: number) => void;
}

export const SlideNavigation: React.FC<Props> = ({ activeItemIndex, onClick }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {new Array(NfsSlideshow.imgPerSlide).fill(null).map((_el, i) => (
                <span
                    key={i}
                    className={classNames(classes.item, { [classes.active]: i === activeItemIndex })}
                    onClick={() => onClick(i)}
                />
            ))}
        </div>
    );
};
