import { AnimatedComponent, SpringRef, useSpring, config, useSpringRef, useChain, animated } from "@react-spring/web";
import { Typography, Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import classNames from "classnames";
import * as MetricTypes from "../../../components/metrics-dashboard/metric-types";
import * as SolarTypes from '../solar-types';
import { SmallScreenComponentProps } from "../../../logic/slideshow/slideshow";
import { TVIcon } from "../../../icons/TVIcon";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "80vh",
            "& > div": {
                width: "65%",
                padding: "1.5em 1em",
            },
        },
        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: ".5em",
        },
        icon: {
            marginRight: ".5em",
            color: theme.palette.primary.main,
        },
        title: {
            fontWeight: "bold",
        },
        text: {
            textTransform: "uppercase",
            fontSize: "2vh",
            [theme.breakpoints.down("md")]: {
                fontSize: "1.6vh",
            },
        },
        solarCard: {
            "& > div": {
                padding: "1em",
                margin: ".2em",
                backgroundColor:
                    theme.palette.mode === "dark"
                        ? "rgba(0, 0, 0, .6)"
                        : "rgba(255, 255, 255, .87)",
                border:
                    theme.palette.mode === "dark"
                        ? `1px solid ${theme.palette.secondary.main}`
                        : undefined,
            },
            "& > div:nth-child(1)": {
                borderRadius: "2px 2px 0 0",
            },
            "& > div:nth-child(2)": {
                borderRadius: "0 0 2px 2px",
            },
        },
    })
);


type Style = React.ComponentProps<AnimatedComponent<"div">>['style'];

const useSolarAnimation = (newRef: SpringRef): Style => {
    const [spring] = useSpring(() => ({
        from: {
            transform: "translateY(2rem)",
            opacity: 0,
        },
        to: {
            transform: "translateY(0rem)",
            opacity: 1,
        },
        config: config.slow,
        ref: newRef,
    }));

    return spring;
};

export const SmallScreenMessageSolar: React.FC<SmallScreenComponentProps<SolarTypes.SolarData>> = ({ slideshow }) => {
    const classes = useStyles();

    const solarRef1 = useSpringRef();
    const solarRef2 = useSpringRef();
    const solarStyle1 = useSolarAnimation(solarRef1);
    const solarStyle2 = useSolarAnimation(solarRef2);
    useChain([solarRef1, solarRef2], [0.5, 1.4]);

    const texts = [
        "Looks like your screen is too small. This app is designed for large screens.",
        "Recommended display: your jumbotron, TV, desktop, laptop (alternatively, horizontal view).",
    ];

    return (
        <div className={classes.container}>
            <div className={classes.solarCard}>
                <animated.div style={solarStyle1} className={classes.header}>
                    <Typography className={classNames(classes.text, classes.title)}>
                        Ooops...
                    </Typography>
                    <TVIcon fontSize="small" className={classes.icon} />
                </animated.div>

                <animated.div style={solarStyle2}>
                    {texts.map((tx) => (
                        <Typography key={tx} color="inherit" className={classes.text} gutterBottom>
                            {tx}
                        </Typography>
                    ))}
                </animated.div>
            </div>
        </div>
    );
};
