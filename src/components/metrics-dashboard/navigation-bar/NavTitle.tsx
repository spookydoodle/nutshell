import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Typography } from '@mui/material';
import { animations } from "../../../styles/animations";
import { fontSizes } from "../../../styles/themes";
import { Header } from "../metric-types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardHeaderTitle: {
            textTransform: "uppercase",
            fontSize: fontSizes.h2,
            fontWeight: "bold",
            [theme.breakpoints.down("md")]: {
                fontSize: fontSizes.h3,
            },
            [theme.breakpoints.only("xs")]: {
                fontSize: fontSizes.h4,
            },
            marginTop: "1vh",
            marginBottom: "1vh",
            "&$underline": {
                position: "relative",
                color: "rgba(255, 255, 255, .87)",
                "&::after": {
                    content: "''",
                    position: "absolute",
                    width: "2.5em",
                    borderBottom: ".15em solid",
                    borderBottomColor: theme.palette.secondary.main,
                    left: 0,
                    bottom: "-.1em",
                    zIndex: 10,
                },
            },
        },
        underline: {},
        ...animations,
    })
);

interface Props {
    header: Header;
}

export const NavTitle: React.FC<Props> = ({ header }) => {
    const classes = useStyles();

    return (
        <div className={classNames(classes.cardHeaderTitle, classes.underline)}>
            <Typography
                fontSize={fontSizes.h3}
                color="inherit"
                component="span"
                noWrap
            >
                {header.titlePrimary}
            </Typography>
            {header?.titleSecondary && (
                <>
                    <Typography
                        fontSize={fontSizes.h3}
                        color="secondary"
                        component="span"
                        noWrap
                    >
                        {" // "}
                    </Typography>
                    <Typography
                        fontSize={fontSizes.h3}
                        color="inherit"
                        component="span"
                        noWrap
                    >
                        {header.titleSecondary}
                    </Typography>
                </>
            )}
        </div>
    );
}
