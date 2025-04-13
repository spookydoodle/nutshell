import React from "react";
import { useLocation } from "react-router-dom";
import { Img } from "react-image";
import { makeStyles, createStyles } from '@mui/styles';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    useMediaQuery,
    ImageList,
    ImageListItem,
    Box,
    Typography,
    FormControlLabel,
    Checkbox, Theme, useTheme
} from '@mui/material';
import { SlideDurationInput } from "./SlideDurationInput";
import { images } from "../../layouts/images";
import * as AppState from "../../state";
import * as Hooks from '../../hooks';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        img: {
            cursor: "pointer",
            padding: "2px",
            borderRadius: "2px",
            "&:hover": {
                backgroundColor: theme.palette.secondary.main,
            },
            "&$selected": {
                backgroundColor: theme.palette.secondary.main,
            },
        },
        selected: {},
        root: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            overflow: "hidden",
            backgroundColor: theme.palette.background.paper,
            width: "150px",
            height: "100px",
        },
        itemContainer: {
            marginBottom: "2em",
        },
        gridList: {
            width: 150,
            height: 60,
        },
    })
);
interface Props {
    openSettings: boolean;
    handleSettingsClose: () => void;
    duration: number;
    setDuration: React.Dispatch<React.SetStateAction<number>>;
    tickerOn: boolean;
    setTicker: (on: boolean) => void;
}

export const SettingsDialog: React.FC<Props> = ({
    openSettings,
    handleSettingsClose,
    duration,
    setDuration,
    tickerOn,
    setTicker,
}) => {
    const classes = useStyles();
    const location = useLocation();
    const imgArr = images[location.pathname.substring(1)] ?? [];
    const backgroundIndex = Hooks.useSubject(AppState.backgroundIndex$);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.only("xs"));

    const onTickerChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setTicker(event.target.checked);

    const onBgClick = (i: number) => () => AppState.backgroundIndex$.next(i);

    return (
        <Dialog
            fullScreen={fullScreen}
            open={openSettings}
            onClose={handleSettingsClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">Settings</DialogTitle>

            <DialogContent>
                {backgroundIndex != undefined && backgroundIndex >= 0 ? (
                    <>
                        <Typography color="primary" gutterBottom
                        >Change background
                        </Typography>

                        <div className={classes.root}>
                            <ImageList rowHeight={25} className={classes.gridList} cols={3}>
                                {imgArr.map((img, i) => (
                                    <ImageListItem key={i} cols={1}>
                                        <Img
                                            onClick={onBgClick(i)}
                                            src={img.min}
                                            alt={img.min}
                                            className={`${classes.img} ${i === backgroundIndex ? classes.selected : undefined
                                                }`}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </>
                ) : undefined}

                <Box className={classes.itemContainer}>
                    <Typography color="primary" gutterBottom>
                        Ticker options
                    </Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={tickerOn}
                                onChange={onTickerChange}
                                name="ticker-setting"
                                color="primary"
                            />
                        }
                        label="Show (on large screen)"
                    />
                </Box>

                <SlideDurationInput
                    duration={duration}
                    setDuration={setDuration}
                    fullWidth={true}
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleSettingsClose} color="primary" autoFocus>
                    Done
                </Button>
            </DialogActions>
        </Dialog>
    );
};
