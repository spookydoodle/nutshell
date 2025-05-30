import React from "react";
// import { makeStyles, createStyles } from '@mui/styles';
import {
    SvgIcon, SvgIconProps,
    // Theme 
} from '@mui/material';

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({

//     })
// );

export const PinIconOutlined = (props: SvgIconProps) => {
    // const classes = useStyles();

    return (
        <SvgIcon {...props}>
            <path d="M11 17h2v5l-2 2v-7zm3.571-12c0-2.903 2.36-3.089 2.429-5h-10c.068 1.911 2.429 2.097 2.429 5 0 3.771-3.429 3.291-3.429 10h12c0-6.709-3.429-6.229-3.429-10z" />
        </SvgIcon>
    );
};

export const PinIconFilled = (props: SvgIconProps) => {
    // const classes = useStyles();

    return (
        <SvgIcon {...props}>
            <path d="M11 17h2v5l-2 2v-7zm7-2h-12c0-3.128.091-4.744 1.874-7.276.551-.783.915-1.3.915-2.373 0-2.372-1.789-1.695-1.789-5.351h10c0 3.616-1.789 3.005-1.789 5.35 0 1.073.364 1.59.915 2.374 1.785 2.535 1.874 4.154 1.874 7.276zm-9.968-2h7.936c-.298-4.376-2.756-4.142-2.756-7.649-.001-1.605.521-2.351 1.271-3.351h-4.966c.75 1 1.272 1.745 1.272 3.35 0 3.487-2.46 3.29-2.757 7.65z" />
        </SvgIcon>
    );
};
