import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Grid, Typography} from '@mui/material';
import { fontSizes } from "../../styles/themes";
import { ImgTile } from "./ImgTile";
import * as Types from "../../types/types";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        topTitle: {
            fontSize: fontSizes.h5,
            fontWeight: "bold",
            paddingLeft: "1em",
            paddingTop: ".5vh",
            paddingBottom: "1vh",
            textTransform: "uppercase",
        },
    })
);

interface Props {
    title?: string;
    data: Array<Types.Value>;
    variant?: "md" | "sm";
    topN?: number;
}

export const ImgTiles: React.FC<Props> = ({ title, variant = "md", data, topN = 3 }) => {
    const classes = useStyles();

    return (
        <>
            {title && (
                <Typography gutterBottom color="textSecondary" className={classes.topTitle}>
                    {title}
                </Typography>
            )}

            <Grid container>
                {data
                    ?.filter((_value, i) => i < topN)
                    .map((value, i: number) => (
                        <ImgTile variant={variant} key={`${value.name}-${i}`} i={i} value={value} />
                    ))}
            </Grid>
        </>
    );
};
