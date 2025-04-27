import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { imgPerSlide } from "../../slideshows/nfs/nfs-data";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        progress: {
            zIndex: 10,
            position: "absolute",
            top: "-2vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
        },
        progressItem: {
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
    slideIndex: number;
    onIndexChange: React.Dispatch<React.SetStateAction<number>>;
    onPrevIndexChange: React.Dispatch<React.SetStateAction<number>>;
}

export const Progress: React.FC<Props> = ({ slideIndex, onIndexChange, onPrevIndexChange }) => {
    const classes = useStyles();

    return (
        <div className={classes.progress}>
            {new Array(imgPerSlide).fill(null).map((_el, i) => (
                <span
                    key={i}
                    className={classNames(classes.progressItem, {
                        [classes.active]: i === slideIndex % imgPerSlide,
                    })}
                    onClick={() => {
                        if (i !== slideIndex % imgPerSlide) {
                            onIndexChange((prev: number) => {
                                onPrevIndexChange(prev);
                                return prev - (prev % imgPerSlide) + i;
                            });
                        }
                    }}
                />
            ))}
        </div>
    );
};
