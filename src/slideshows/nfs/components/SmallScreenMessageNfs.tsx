import { AnimatedComponent, SpringRef, useSpring, config, useSpringRef, useChain } from "@react-spring/web";
import classNames from "classnames";
import { Typography, Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { NutshellData } from "../nfs-types";
import { SmallScreenComponentProps } from "../../../logic/slideshow/slideshow";
import { NFSPanel } from "../../../components/metrics-dashboard/NFSPanel";
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
        }
    })
);

type Style = React.ComponentProps<AnimatedComponent<"div">>['style'];

const useAnimation = (newRef: SpringRef): Style => {
    const [spring] = useSpring(() => ({
        from: {
            transform: "translateX(30rem) skew(-15deg)",
            opacity: 0,
        },
        to: {
            transform: "translateX(0rem) skew(-15deg)",
            opacity: 1,
        },
        config: config.gentle,
        ref: newRef,
    }));

    return spring;
};

export const SmallScreenMessageNfs: React.FC<SmallScreenComponentProps<NutshellData>> = ({ slideshow }) => {
    const classes = useStyles();

    const ref = useSpringRef();
    const style = useAnimation(ref);
    useChain([ref], [0]);

    const texts = [
        "Looks like your screen is too small. This app is designed for large screens.",
        "Recommended display: your jumbotron, TV, desktop, laptop (alternatively, horizontal view).",
    ];

    return (
        <div className={classes.container}>
            <NFSPanel style={style}>
                <div className={classes.header}>
                    <Typography className={classNames(classes.text, classes.title)}>
                        Ooops...
                    </Typography>
                    <TVIcon fontSize="small" className={classes.icon} />
                </div>
                <>
                    {texts.map((tx) => (
                        <Typography key={tx} color="inherit" className={classes.text} gutterBottom>
                            {tx}
                        </Typography>
                    ))}
                </>
            </NFSPanel>
        </div>
    );
};
