import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Box, IconButton, Tooltip, Theme } from '@mui/material';
import SettingsIcon from "@mui/icons-material/Settings";
import { PinIconOutlined, PinIconFilled } from "../../icons/PinIcon";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            color: "rgba(255, 255, 255, .6)",
            "&:hover": {
                color: "rgba(255, 255, 255, .87)",
            },
        },
        pinIcon: {
            transform: "rotate(45deg)",
            "&$active": {
                color: theme.palette.secondary.main,
            },
        },
        active: {},
    })
);

interface Props {
    pin: boolean;
    setPin: React.Dispatch<React.SetStateAction<boolean>>;
    handleSettingsOpen: () => void;
}

export const PlayerSettingsButton: React.FC<Props> = ({
    pin,
    setPin,
    handleSettingsOpen,
}) => {
    const classes = useStyles();
    const PinIcon = pin ? PinIconOutlined : PinIconFilled;

    return (
        <Box>
            <Tooltip title={!pin ? "Pin to window" : "Unpin from window"} arrow>
                <IconButton
                    color="inherit"
                    onClick={() => setPin((prev: boolean) => !prev)}
                    className={classes.icon}
                >
                    <PinIcon className={`${classes.pinIcon} ${pin ? classes.active : undefined}`} />
                </IconButton>
            </Tooltip>

            <Tooltip title="Settings" arrow>
                <IconButton color="inherit" onClick={handleSettingsOpen} className={classes.icon}>
                    <SettingsIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
};
