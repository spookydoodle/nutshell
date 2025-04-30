import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Grid, useMediaQuery } from '@mui/material';
import { animations } from "../../../styles/animations";
import { NavTitle } from "./NavTitle";
import { BreadcrumbItem, Breadcrumbs } from "./Breadcrumbs";
import { SideButtons } from "./SideButtons";
import { Header } from "../metric-types";

const useStyles = makeStyles(() =>
    createStyles({
        cardHeader: {
            marginTop: "2vh !important",
            paddingLeft: "5px",
            paddingRight: "5px",
            color: "rgba(255, 255, 255, .6)",
            opacity: 0,
            transform: "translateY(2em)",
            animation: `$no-transform 2s 3s cubic-bezier(0, .5, 0, 1) forwards`,
        },
        ...animations,
    })
);

interface Props<TBreadcrumb extends string, TSideButton extends string> {
    header: Header;
    pauseAnimations?: boolean;
    breadcrumbItems?: BreadcrumbItem<TBreadcrumb>[];
    activeBreadcrumbItem?: TBreadcrumb;
    onBreadcrumbItemClick?: (item: TBreadcrumb, index: number) => void;
    sequenceItems?: TSideButton[];
    activeSequenceItem?: TSideButton;
    onSequenceItemClick?: (item: TSideButton, index: number) => void;
}

export function NavigationBar<TBreadcrumb extends string = string, TSideButton extends string = string>({
    breadcrumbItems,
    activeBreadcrumbItem,
    onBreadcrumbItemClick,
    pauseAnimations = true,
    header,
    sequenceItems,
    activeSequenceItem,
    onSequenceItemClick
}: Props<TBreadcrumb, TSideButton>) {
    const classes = useStyles();
    const isLgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
    const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    return (
        <Grid
            item
            container
            justifyContent="space-between"
            xs={12}
            className={classNames(classes.cardHeader, { [classes.pauseAnim]: pauseAnimations })}
        >
            <Grid item xs={12} sm={8} lg={4}>
                <NavTitle header={header} />
            </Grid>

            {isLgUp ? (
                <Grid item xs={4}>
                    <Breadcrumbs<TBreadcrumb>
                        items={breadcrumbItems ?? []}
                        activeItem={activeBreadcrumbItem}
                        pauseAnimations={pauseAnimations}
                        color="white"
                        onClick={onBreadcrumbItemClick}
                    />
                </Grid>
            ) : null}

            {isSmUp ? (
                <Grid item xs={4}>
                    <SideButtons
                        header={header}
                        items={sequenceItems}
                        activeItem={activeSequenceItem}
                        onClick={onSequenceItemClick}
                    />
                </Grid>
            ) : null}
        </Grid>
    );
}
