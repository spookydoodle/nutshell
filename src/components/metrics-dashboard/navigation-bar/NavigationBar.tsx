import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Grid, useMediaQuery } from '@mui/material';
import { animations } from "../../../styles/animations";
import { NavTitle } from "./NavTitle";
import { BreadcrumbItem, Breadcrumbs } from "./Breadcrumbs";
import { SideButtons } from "./SideButtons";
import { Header } from "../../../types/types";

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

interface Props<TCategory extends string> {
    breadcrumbItems: BreadcrumbItem<TCategory>[];
    activeBreadcrumbItem: TCategory;
    onBreadcrumbClick: (item: TCategory) => void;
    pauseAnimations?: boolean;
    header: Header;
    next: Header;
    onSequenceClick?: (index: number) => void;
    sequences?: string[];
    currentSequence: string;
}

export function NavigationBar<TCategory extends string>({
    breadcrumbItems,
    activeBreadcrumbItem,
    onBreadcrumbClick,
    pauseAnimations = true,
    header,
    onSequenceClick,
    sequences,
    currentSequence
}: Props<TCategory>) {
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
                    <Breadcrumbs<TCategory>
                        items={breadcrumbItems}
                        activeItem={activeBreadcrumbItem}
                        pauseAnimations={pauseAnimations}
                        color="white"
                        onClick={onBreadcrumbClick}
                    />
                </Grid>
            ) : null}

            {isSmUp ? (
                <Grid item xs={4}>
                    <SideButtons header={header} sequences={sequences} onSequenceClick={onSequenceClick} currentSequence={currentSequence} />
                </Grid>
            ) : null}
        </Grid>
    );
}
