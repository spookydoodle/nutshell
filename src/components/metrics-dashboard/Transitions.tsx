import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { useTransition, config, AnimatedComponent, animated } from "@react-spring/web";


const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        content: {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
        },
    })
);

interface Props {
    variant?: "none" | "fade-in" | "slide-in" | "fade-in-slide-out" | "swipe-cube-to-left" | "swipe-cube-to-right";
    component: JSX.Element;
    style?: React.ComponentProps<AnimatedComponent<"div">>['style'];
    className?: string;
}

export const Transitions: React.FC<Props> = ({
    variant = "fade-in",
    component,
    style,
    className,
}: Props) => {
    const classes = useStyles();

    const transitionsDef = {
        none: {
            from: { opacity: 1 },
            to: { opacity: 1 },
        },
        "fade-in": {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: config.gentle,
        },
        "slide-in": {
            from: {
                transform: "translateX(20rem)",
                width: "calc(100vw - 20rem)",
                opacity: 0,
            },
            enter: { transform: "translateX(0rem)", opacity: 1 },
            leave: { transform: "translateX(-20rem)", opacity: 0 },
            config: config.stiff,
        },
        "fade-in-slide-out": {
            from: { opacity: 0, transform: "translateX(0em)" },
            enter: { opacity: 1, transform: "translateX(0em)" },
            leave: { opacity: 0, transform: "translateX(-100vw)" },
            config: config.stiff,
        },
        "swipe-cube-to-left": {
            from: {
                position: "fixed",
                transform:
                    "translate(100%) perspective(100vw) translateZ(-25vw) rotateY(90deg)",
                transformOrigin: "left",
                transformStyle: "preserve-3d",
                opacity: 0,
            },
            enter: {
                transform:
                    "translate(0%) perspective(100vw) translateZ(0vw) rotateY(0deg)",
                transformOrigin: "center",
                transformStyle: "preserve-3d",
                opacity: 1,
            },
            leave: {
                transform:
                    "translate(-100%) perspective(100vw) translateZ(-25vw) rotateY(-90deg)",
                transformOrigin: "right",
                transformStyle: "preserve-3d",
                opacity: 0,
            },
            config: config.slow,
        },
        "swipe-cube-to-right": {
            from: {
                transform:
                    "translate(-100%) perspective(100vw) translateZ(-25vw) rotateY(-90deg)",
                transformOrigin: "right",
                transformStyle: "preserve-3d",
                opacity: 0,
            },
            enter: {
                transform:
                    "translate(0%) perspective(100vw) translateZ(0vw) rotateY(0deg)",
                transformOrigin: "center",
                transformStyle: "preserve-3d",
                opacity: 1,
            },
            leave: {
                position: "fixed",
                transform:
                    "translate(100%) perspective(100vw) translateZ(-25vw) rotateY(90deg)",
                transformOrigin: "left",
                transformStyle: "preserve-3d",
                opacity: 0,
            },
            config: config.slow,
        },
    };

    const transition = transitionsDef[variant];

    const transitions = useTransition(component, transition);

    return (
        <>
            {transitions((transitionStyle, item) => (
                <animated.div
                    style={{ ...transitionStyle, ...style }}
                    className={classNames(classes.content, className)}
                >
                    {item}
                </animated.div>
            ))}
        </>
    );
};
