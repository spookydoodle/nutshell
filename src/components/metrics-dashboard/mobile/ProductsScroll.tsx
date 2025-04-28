import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ProductImageTile } from "./ProductImageTile";
import * as MetricTypes from "../metric-types";
import { fontSizes } from "../../../styles";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        horizontalScroll: {
            display: "flex",
            width: "100%",
            overflowX: "hidden",
            marginBottom: "32px",
            "& > div": {
                display: "flex",
            },
        },
        header: {
            color: "rgba(255, 255, 255, .87)",
            fontWeight: "bold",
        },
    })
);

interface Props {
    title: string;
    values: MetricTypes.Datum[];
}

export const ProductsScroll: React.FC<Props> = ({ title, values }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isOnlyXs = useMediaQuery(theme.breakpoints.only("xs"));

    return values.length > 0 ? (
        <>
            <Typography fontSize={fontSizes.h3} className={classes.header} paragraph>
                {title}
            </Typography>
            <Swiper
                slidesPerView={isOnlyXs ? 2.4 : 4.4}
                spaceBetween={10}
                freeMode={true}
                className={classes.horizontalScroll}
            >
                {values.map((value, i) => (
                    <SwiperSlide key={`slide-${i}`}>
                        <ProductImageTile value={value} i={i} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    ) : (
        <></>
    );
};
