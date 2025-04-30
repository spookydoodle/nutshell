import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Typography, Tooltip } from '@mui/material';
import { animations } from "../../../styles/animations";
import { fontSizes } from "../../../styles/themes";
import { Header } from "../../../types/types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "flex-end",
            columnGap: "5px"
        },
        text: {
            "&$active": {
                opacity: 1,
            },
            "&$inactive": {
                opacity: 0.6,
                cursor: "pointer",
            },
            "&:hover": {
                opacity: 1,
            },
        },
        active: {},
        inactive: {},
        ...animations,
    })
);

interface Props<TSideButtonItem extends string> {
    header: Header;
    items?: TSideButtonItem[];
    activeItem?: TSideButtonItem;
    onClick?: (item: TSideButtonItem, index: number) => void;
}

export function SideButtons<TSideButtonItem extends string = string>({
    header,
    items,
    activeItem,
    onClick,
}: Props<TSideButtonItem>) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {header?.titleSecondaryShort && (
                <Tooltip
                    title={header.titleSecondary || header.titleSecondaryShort}
                    placement="top"
                    arrow
                >
                    <Typography
                        fontSize={fontSizes.h3}
                        color="inherit"
                        component="span"
                        className={classes.text}
                    >
                        {header.titleSecondaryShort}
                    </Typography>
                </Tooltip>
            )}

            {items?.map((item, i) => (
                <Tooltip
                    key={i}
                    title={item === activeItem ? item : `Change to ${item}`}
                    placement="top"
                    arrow
                >
                    <Typography
                        fontSize={fontSizes.h3}
                        color="inherit"
                        component="span"
                        className={classNames(
                            classes.text,
                            item === activeItem
                                ? classes.active
                                : classes.inactive
                        )}
                        onClick={() => onClick?.(item, i)}
                    >
                        {item}
                    </Typography>
                </Tooltip>
            )) ?? null}
        </div>
    );
}
