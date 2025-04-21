import { makeStyles, createStyles } from '@mui/styles';
import { Typography, Theme } from '@mui/material';

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        container: {
            color: "rgba(255, 255, 255, .87)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            transform: "skew(-15deg)",
        },
        progressOuter: {
            width: "10em",
            height: "1.2em",
            border: "1px solid white",
            position: "relative",
        },
        progress: {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: "auto",
            height: "100%",
            backgroundColor: "white",
        },
    })
);

interface Props {
    index: number;
    length: number;
}

export const LoadProgress: React.FC<Props> = ({ index, length }) => {
    const classes = useStyles();
    const progress = index / length;

    return (
        <div className={classes.container}>
            <Typography color="primary" variant="h6" gutterBottom>
                Loading {Math.round(progress * 100)}%
            </Typography>
            <div className={classes.progressOuter}>
                <div
                    style={{ width: `${progress * 10}em` }}
                    className={classes.progress}
                />
            </div>
        </div>
    );
};
