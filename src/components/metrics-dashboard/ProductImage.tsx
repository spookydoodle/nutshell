import React, { Suspense } from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Skeleton } from '@mui/material';
import { ImageComponent, ImgErrorBoundary } from "../SuspenseImg";
import * as MetricTypes from "./types";
import { IMG_SERVER } from "../../img/cmd";
const imgServer = `${IMG_SERVER}/misc`;
const notFoundImg = `${imgServer}/not-found.png`;

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        skeleton: {
            borderRadius: "10px",
            overflow: "hidden",
        },
        img: {
            display: "block",
            objectFit: "contain",
            marginLeft: "auto",
            marginRight: "auto",
            filter: "drop-shadow(1px 1px 3px rgba(0,0,0, .3))",
            "&$md": {
                maxWidth: "200px",
                maxHeight: "200px",
                width: "20vh",
                height: "20vh",
            },
            "&$sm": {
                maxWidth: "125px",
                maxHeight: "125px",
                width: "12.5vh",
                height: "12.5vh",
            },
            "&$fullSize": {
                width: "100%",
                height: "100%",
            },
        },
        md: {},
        sm: {},
        fullSize: {},
    })
);

interface Props {
    size?: "sm" | "md" | "full-size";
    i: number;
    value: MetricTypes.Datum;
}

export const ProductImage: React.FC<Props> = ({ size = "md", i, value }) => {
    const classes = useStyles();

    const fallback = (
        <div
            className={classNames(
                classes.skeleton,
                classes.img,
                size === "full-size"
                    ? classes.fullSize
                    : size === "sm"
                        ? classes.sm
                        : classes.md
            )}
        >
            <Skeleton variant="rectangular" animation="wave" width={125} height={125} />
        </div>
    );

    return (
        <ImgErrorBoundary
            alt="no image found"
            img={{
                img: notFoundImg,
            }}
            fallback={{
                img: notFoundImg,
            }}
        >
            <Suspense fallback={fallback}>
                {value?.img && (
                    <ImageComponent
                        alt={`${value.name}-${i}`}
                        img={value.img.src}
                        className={classNames(
                            classes.img,
                            size === "full-size"
                                ? classes.fullSize
                                : size === "sm"
                                    ? classes.sm
                                    : classes.md
                        )}
                    />
                )}
            </Suspense>
        </ImgErrorBoundary>
    );
};
