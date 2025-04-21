import React from "react";
import classNames from "classnames";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        noDecoration: {
            textDecoration: "none",
        },
        colorPrimary: {
            color: theme.palette.text.primary,
        },
        colorSecondary: {
            color: theme.palette.text.secondary,
        },
        pointer: {
            cursor: 'pointer'
        }
    })
);

interface LinkProps {
    to: string;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const styles: React.CSSProperties = {
    textDecoration: "none",
    color: "inherit",
    zIndex: 1,
};

export const Link: React.FC<LinkProps> = ({ children, ...props }) => (
    <RouterLink style={styles} {...props} >
        {children}
    </RouterLink>
);

interface HashLinkProps {
    to: string;
    className?: string;
    children?: React.ReactNode;
}

export const HashLink: React.FC<HashLinkProps> = ({ to, children, className }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleClick = React.useCallback(
        () => navigate(`#${to}`),
        [to, navigate]
    );

    return (
        <div onClick={handleClick} className={classNames(classes.pointer, className)}>
            {children}
        </div>
    );
};

interface NewTabLinkProps {
    placeholder?: string;
    link: string;
    className?: string;
    color?: "primary" | "secondary";
    children?: React.ReactNode;
}

export const NewTabLink: React.FC<NewTabLinkProps> = ({
    link,
    color = "primary",
    className,
    placeholder,
    children,
}) => {
    const classes = useStyles();

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title={placeholder}
            className={classNames(
                classes.noDecoration,
                color === "secondary" ? classes.colorSecondary : classes.colorPrimary,
                className
            )}
        >
            {children}
        </a>
    );
};
