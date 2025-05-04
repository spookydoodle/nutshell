import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box } from '@mui/material';

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        swiperContainer: {
            width: "100vw",
            minWidth: "100vw",
            position: "relative",
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 140px, rgba(0, 0, 0, .6) 200px)",
            overflowX: "hidden",
            maxWidth: "100vw",
            maxHeight: "calc(100vh - 65px)",
            overflowY: "auto"
        },
        swiper: {
            display: "flex",
            overflowX: "visible",
            width: "100%",
            transition: "transform .1s ease-out"
        },
        swipeItem: {
            padding: "0 16px",
            minWidth: "100vw",
        },
    })
);

interface Props<TColumn extends string> {
    columns: TColumn[];
    selectedColumn: TColumn;
    onColumnChange: (column: TColumn) => void;
    className?: string;
    children: React.ReactNode;
}

export function Swiper<TColumn extends string>({
    columns,
    selectedColumn,
    onColumnChange,
    className,
    children
}: Props<TColumn>) {
    const classes = useStyles();
    const [swipe, setSwipe] = React.useState<{
        identifier: number;
        xStart: number;
        xCurrent: number;
    } | null>(null);

    const selectedColumnIndex = React.useMemo(
        () => columns.findIndex((c) => c === selectedColumn),
        [columns, selectedColumn]
    );

    const handleTouchStart = React.useCallback(
        (event: React.TouchEvent<HTMLDivElement>) => {
            if (event.touches.length !== 1) {
                return;
            }
            const touch = event.touches.item(0);
            setSwipe({ identifier: touch.identifier, xStart: touch.pageX, xCurrent: touch.pageX })
        },
        []
    );
    
    const handleTouchMove = React.useCallback(
        (event: React.TouchEvent<HTMLDivElement>) => {
            setSwipe((prev) => {
                if (!prev) {
                    return null;
                }
                let touch: React.Touch | undefined;
                for (let i = 0; i < event.touches.length; i++) {
                    if (event.touches.item(i).identifier === prev?.identifier ) {
                        touch = event.touches.item(i);
                        break;
                    }
                }
                return touch ? { ...prev, xCurrent: touch.pageX } : prev;
            })
        },
        []
    );

    const swipeX = React.useMemo(
        (): number => {
            if (!swipe) {
                return 0;
            }
            return swipe.xCurrent - swipe.xStart;
        },
        [swipe?.xStart, swipe?.xCurrent]
    );

    const handleTouchEnd = React.useCallback(
        () => {
            if (!swipeX) {
                return;
            }
            const threshold = window.innerWidth / 4;
            const isAboveThreshold = Math.abs(swipeX) >= threshold;
            if (swipeX > 0) {
                if (selectedColumnIndex > 0 && isAboveThreshold) {
                    onColumnChange(columns[selectedColumnIndex - 1]);
                }
            } else {
                if (selectedColumnIndex < columns.length - 1 && isAboveThreshold)  {
                    onColumnChange(columns[selectedColumnIndex + 1]);
                }
            }
            setSwipe(null);
        },
        [swipeX, selectedColumnIndex, columns, onColumnChange]
    );

    return (
        <Box className={classNames(classes.swiperContainer, className)}>
            <Box
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className={classes.swiper}
                style={{ transform: `translateX(calc(${-100 * columns.findIndex((c) => c === selectedColumn)}% + ${swipeX}px))`, }}
            >
                {columns.map((column) => (
                    <Box key={`${column}-box`} id={`${column}-box`} className={classes.swipeItem}>
                        {children}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
