import React from "react";
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
    Checkbox, Theme, useTheme,
    ToggleButtonGroup
} from '@mui/material';
import { SlideDurationInput } from "./SlideDurationInput";
import * as AppState from "../../state";
import * as Hooks from '../../hooks';
import { Slideshow } from "../../logic/slideshow/slideshow";

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
    duration: number;
    setDuration: React.Dispatch<React.SetStateAction<number>>;
    showTicker: boolean;
    setShowTicker: (on: boolean) => void;
}

export const SettingsDialog: React.FC<Props> = ({
    slideshow,
    openSettings,
    handleSettingsClose,
    duration,
    setDuration,
    showTicker,
    setShowTicker,
}) => {
    const classes = useStyles();
    const imgArr = slideshow.backgroundImageUrls ?? []
    const [mode, setMode] = Hooks.useSubjectState(AppState.mode$);
    const [selectedBackgroundIndex, setSelectedBackgroundIndex] = Hooks.useSubjectState(slideshow.selectedBackgroundIndex$);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.only("xs"));

    const onTickerChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setShowTicker(event.target.checked);

    const onBgClick = (i: number) => () => setSelectedBackgroundIndex(i);

    return (
        <Dialog
            fullScreen={fullScreen}
            open={openSettings}
            onClose={handleSettingsClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">Settings</DialogTitle>

            <DialogContent>
                {selectedBackgroundIndex != undefined && selectedBackgroundIndex >= 0 ? (
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
                                            className={`${classes.img} ${i === selectedBackgroundIndex ? classes.selected : undefined
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
                        Mode
                    </Typography>
                    <ToggleButtonGroup>
                        <Button size="small" variant={mode === 'light' ? "contained" : "text"} value="light" onClick={() => setMode('light')}>Light</Button>
                        <Button size="small" variant={mode === 'dark' ? "contained" : "text"} value="dark" onClick={() => setMode('dark')}>Dark</Button>
                    </ToggleButtonGroup>
                </Box>

                <Box className={classes.itemContainer}>
                    <Typography color="primary" gutterBottom>
                        Ticker options
                    </Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={showTicker}
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
