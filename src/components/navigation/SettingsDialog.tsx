import React from "react";
import { Img } from "react-image";
import classNames from "classnames";
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
    Checkbox, Theme, useTheme,
    ToggleButtonGroup
} from '@mui/material';
import { SlideDurationInput } from "./SlideDurationInput";
import * as AppState from "../../state";
import * as Hooks from '../../hooks';
import { Slideshow } from "../../logic/slideshow/slideshow";
import * as Types from "../../types";

const modes: Types.Mode[] = ["light", "dark"];

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
    slideshow: Slideshow;
    openSettings: boolean;
    handleSettingsClose: () => void;
}

export const SettingsDialog: React.FC<Props> = ({
    slideshow,
    openSettings,
    handleSettingsClose,
}) => {
    const classes = useStyles();
    const theme = useTheme();
    const imgArr = slideshow.backgroundImageUrls ?? []
    const [mode, setMode] = Hooks.useSubjectState(AppState.mode$);
    const [selectedBackgroundIndex, setSelectedBackgroundIndex] = Hooks.useSubjectState(slideshow.selectedBackgroundIndex$);
    const [showTicker, setShowTicker] = Hooks.useSubjectState(slideshow.showTicker$);
    const [duration, setDuration] = Hooks.useSubjectState(slideshow.duration$);
    const isLgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
    const isOnlyXs = useMediaQuery(theme.breakpoints.only("xs"));

    const onTickerChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setShowTicker(event.target.checked);

    const onBgClick = (i: number) => () => setSelectedBackgroundIndex(i);

    return (
        <Dialog
            fullScreen={isOnlyXs}
            open={openSettings}
            onClose={handleSettingsClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">Settings</DialogTitle>

            <DialogContent>
                {slideshow.backgroundImageUrls && selectedBackgroundIndex != undefined && selectedBackgroundIndex >= 0 ? (
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
                                            className={classNames(classes.img, { [classes.selected]: i === selectedBackgroundIndex })}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </>
                ) : undefined}

                <Box className={classes.itemContainer}>
                    <Typography color="primary" gutterBottom>
                        Mode
                    </Typography>
                    <ToggleButtonGroup>
                        {modes.map((m) => (
                            <Button key={m} size="small" variant={mode === m ? "contained" : "text"} value={m} onClick={() => setMode(m)}>
                                {m}
                            </Button>
                        ))}
                    </ToggleButtonGroup>
                </Box>

                {!isLgDown && slideshow.getTickerData ? (
                    <Box className={classes.itemContainer}>
                        <Typography color="primary" gutterBottom>
                            Ticker options
                        </Typography>
                        <FormControlLabel
                            control={<Checkbox checked={showTicker} onChange={onTickerChange} name="ticker-setting" color="primary" />}
                            label="Show"
                        />
                    </Box>
                ) : null}

                <SlideDurationInput duration={duration} setDuration={setDuration} />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleSettingsClose} color="primary" autoFocus>
                    Done
                </Button>
            </DialogActions>
        </Dialog>
    );
};
