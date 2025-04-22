import { makeStyles, createStyles, withStyles } from '@mui/styles';
import { Grid, Slider as SliderComponent, Theme } from '@mui/material';

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        slider: {
            color: "rgba(255, 255, 255, .87)",
        },
        border: {
            borderLeft: `solid .5px rgba(255, 255, 255, .4)`,
            borderRight: "solid .5px rgba(255, 255, 255, .4)",
        },
    })
);

const PlayerSlider = withStyles((theme: Theme) => ({
    markLabel: {
        fontSize: "12px",
        color: "rgba(255, 255, 255, .87) !important",
        transform: "translateX(-80%) rotate(-45deg)",
        textAlign: "right",
        textTransform: "uppercase",
        [theme.breakpoints.down("md")]: {
            fontSize: "8px",
        },
    },
    markLabelActive: {
        color: "rgba(255, 255, 255, .4) !important",
    },
}))(SliderComponent);

interface Props {
    index: number;
    onIndexChange: (index: number) => void;
    length: number;
    labels: Array<string>;
    sequences: Array<string>;
}

export const Slider: React.FC<Props> = ({
    index,
    length,
    onIndexChange,
    labels,
    sequences,
}) => {
    const classes = useStyles();
    const marks = labels?.map((label, i) => ({
        value: i + 1,
        label: label,
    }));

    return (
        <Grid item container direction="column" xs={12} md={5} lg={6}>
            <Grid item container justifyContent="center">
                {sequences.map((el, i) => (
                    <Grid
                        key={i}
                        item
                        container
                        justifyContent="center"
                        xs={i === 0 ? 8 : 4} // TODO: Calculate from data
                        className={classes.border}
                    >
                        {el}
                    </Grid>
                ))}
            </Grid>

            <PlayerSlider
                color="secondary"
                defaultValue={index}
                value={index + 1}
                min={1}
                max={length}
                step={1}
                marks={marks ? marks : true}
                aria-labelledby="discrete-slider-restrict"
                valueLabelDisplay="auto"
                valueLabelFormat={(value: number) =>
                    labels ? labels[value - 1] : value
                }
                onChange={(_event: object, value: number | number[]) =>
                    onIndexChange(Number(value) - 1)
                }
                className={classes.slider}
            />
        </Grid>
    );
};
