import { useMemo } from 'react';
import { makeStyles, createStyles, withStyles } from '@mui/styles';
import { Grid, Slider as SliderComponent, Theme } from '@mui/material';
import { Slideshow } from '../../logic/slideshow/slideshow';

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

export interface PlayerLabel {
    label: string;
    sequenceName?: string;
}

interface Props {
    slideshow: Slideshow
    index: number;
    playerLabels: PlayerLabel[]
}

export const Slider: React.FC<Props> = ({
    slideshow,
    index,
    playerLabels,
}) => {
    const classes = useStyles();
    const marks = playerLabels.map((playerLabel, i) => ({
        value: i + 1,
        label: playerLabel.label,
    }));
    
    const sequences = useMemo(
        (): [string, number][] => playerLabels.reduce<[string, number][]>((acc, val, i) => {
            const sequenceName = val.sequenceName ?? '';
            if (i > 0 && acc[acc.length - 1][0] === sequenceName) {
                acc[acc.length - 1][1] = acc[acc.length - 1][1] + 1;
                return acc;
            }
            return acc.concat([[sequenceName, 1]])
        }, []),
        [playerLabels]
    );

    return (
        <Grid item container direction="column" xs={12} md={5} lg={6}>
            <Grid item container justifyContent="center">
                {sequences.map(([sequenceName, sequenceLength], i) => (
                    <Grid
                        key={sequenceName}
                        item
                        container
                        justifyContent="center"
                        style={{ width: `${sequenceLength / playerLabels.length * 100}%` }}
                        className={classes.border}
                    >
                        {sequenceName}
                    </Grid>
                ))}
            </Grid>

            <PlayerSlider
                color="secondary"
                defaultValue={index}
                value={index + 1}
                min={1}
                max={playerLabels.length}
                step={1}
                marks={marks ? marks : true}
                aria-labelledby="discrete-slider-restrict"
                valueLabelDisplay="auto"
                valueLabelFormat={(value: number) =>
                    playerLabels ? playerLabels[value - 1].label : value
                }
                onChange={(_event: object, value: number | number[]) =>
                    slideshow.onPlayerIndexChange(Number(value) - 1, playerLabels.length)
                }
                className={classes.slider}
            />
        </Grid>
    );
};
