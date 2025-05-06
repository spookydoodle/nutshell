import React from "react";
import { Box, Rating as MuiRating, Tooltip, Theme } from '@mui/material';
import { withStyles } from "@mui/styles";

const StyledRating = withStyles((theme: Theme) => ({
    iconFilled: {
        color: theme.palette.primary.main,
    },
    iconHover: {
        color: theme.palette.primary.main,
    },
    iconEmpty: {
        color: theme.palette.primary.main,
        opacity: 0.4,
    },
}))(MuiRating);

interface Props {
    rating?: number;
}

export const Rating: React.FC<Props> = ({ rating }) => {
    if (rating === undefined) {
        return null;
    }
    return (
        <Box style={{ marginTop: ".4vh" }} component="fieldset" mb={3} borderColor="transparent"    >
            <Tooltip title="Metacritic Rating" arrow>
                <StyledRating name="metacritic-rating-10" defaultValue={rating / 10} max={10} precision={0.1} readOnly />
            </Tooltip>
        </Box>
    );
};
