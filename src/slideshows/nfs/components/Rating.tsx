import React from "react";
import { Box, Rating as MuiRating, Tooltip, Theme } from '@mui/material';
import { withStyles } from "@mui/styles";

const StyledRating = withStyles((theme: Theme) => ({
    iconFilled: {
        color: theme.palette.primary.main,
    },
    iconHover: {
        color: theme.palette.secondary.main,
    },
    iconEmpty: {
        color: theme.palette.primary.main + ' !important',
        opacity: 0.4,
    },
}))(MuiRating);

interface Props {
    url: string;
    rating: number;
}

export const Rating: React.FC<Props> = ({ url, rating }) => {
    return (
        <Box component="fieldset" mb={3} borderColor="transparent" padding="2px 0" marginLeft="-4px">
            <Tooltip title="Metacritic Rating" arrow>
                <a href={url} target="_blank">
                    <StyledRating name="metacritic-rating-10" defaultValue={rating / 10} max={10} precision={0.1} readOnly />
                </a>
            </Tooltip>
        </Box>
    );
};
