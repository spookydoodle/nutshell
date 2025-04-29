import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, Box, useMediaQuery } from '@mui/material';
import PublicIcon from "@mui/icons-material/Public";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { SlideComponentProps } from "../../../logic/slideshow/slideshow";
import { NavTitles } from "../../../components/metrics-dashboard/NavTitles";
import { Content } from "../../../components/metrics-dashboard/Content";
import { BarChart } from "../../../components/dataviz/HTMLCharts/BarChart";
import { Bestsellers } from "../../../components/metrics-dashboard/Bestsellers";
import * as Hooks from '../../../hooks';
import * as MetricTypes from "../../../components/metrics-dashboard/metric-types";
import { convertToMap } from "../coinflow-data-utils";
import * as CoinflowTypes from "../coinflow-types";

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        chartContainer: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
        },
        divider: {
            marginTop: ".5em",
            marginBottom: ".5em",
        },
        spaceEvenly: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }
    })
);

export const CoinflowSlide: React.FC<SlideComponentProps<CoinflowTypes.Data>> = ({ slideshow }) => {
    const classes = useStyles();
    const isLgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
    const hiddenMdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const appId = Hooks.useAppId();
    const [animationsInitialized] = Hooks.useSubjectState(slideshow.animationsInitialized$);
    const [play] = Hooks.useSubjectState(slideshow.play$);
    const [slideIndex, setSlideIndex] = Hooks.useSubjectState(slideshow.slideIndex$);
    const [duration] = Hooks.useSubjectState(slideshow.duration$);
    const slidesData = React.useMemo(() => convertToMap(slideshow.data).slides, [slideshow]);

    const dataKeys = slidesData ? [...slidesData.keys()] : [];
    const dataValues = slidesData ? [...slidesData.values()] : [];

    const slides: MetricTypes.SlideData = dataValues.flat(1);

    const totalLen = slides.length;
    const seqLen = totalLen / dataKeys.length; // TODO: Repair this to get the seqLen of current time box
    const sequences = dataKeys;

    const breadcrumbItems = React.useMemo(
        (): { name: string; icon: React.ComponentType; }[] => [
            {
                name: "Realms",
                icon: PublicIcon,
            },
            {
                name: "Sectors",
                icon: BusinessCenterIcon,
            },
            {
                name: "Products",
                icon: LoyaltyIcon,
            }
        ],
        []
    );

    const getMaxRows = (_i: number) =>
        Math.max(
            ...[...slides[slideIndex].data.values()]
                .map((s) => [...s.main.values()].map((e) => e.data.length))
                .flat(2)
        );

    const getComponents = (name: string) =>
        slides.map((slide, ind) => {
            const entries = [...(slide.data.get(name)?.main.entries() || [])];
            return <Box className={classes.spaceEvenly}>
                {entries
                    .map(([key, val], i) => {
                        return val.type === "bar-chart" ? (
                            <Box key={`chart-${name}-${key}-${i}`} className={classes.chartContainer}>
                                <BarChart
                                    variant="scroll"
                                    type="abs-delta"
                                    rankColor="primary"
                                    labelSize="md"
                                    play={play}
                                    scrollId={`${appId}-${name.replace(" ", "-").toLowerCase()}`}
                                    slideDuration={duration}
                                    data={
                                        val.data.map((row) => ({
                                            category: row.name,
                                            value: row.primary,
                                            valueFormatted: row.primaryFormatted,
                                            delta: row.primaryDelta,
                                            deltaFormatted: row.primaryDeltaFormatted,
                                            isDeltaGood: row.primaryIsGood,
                                            isDeltaBad: row.primaryIsBad,
                                        })) || []
                                    }
                                    maxRows={getMaxRows(slideIndex)}
                                    applySort={true}
                                />
                            </Box>
                        ) : val.type === "items" && val.data.length > 0 ? (
                            <Bestsellers key={`items-${name}-${ind}-${i}`} title={key} data={val.data} divider={i < entries.length - 1} />
                        ) : null;
                    })}
            </Box>;
        });

    const onSequenceClick = (seqInd: number) => {
        setSlideIndex((prev) => ((prev % seqLen) + seqLen * seqInd));
    };

    const onBreadClick = (index: number) => {
        setSlideIndex(
            (prev) => index + Math.floor(prev / seqLen) * seqLen // TODO: repair this to take into consideration current sequence name
        );
    };
    
    return (
        <>
            <NavTitles
                breadcrumbItems={breadcrumbItems}
                animationsInitialized={animationsInitialized}
                current={slides[slideIndex].headers}
                next={slides[(slideIndex + 1) % totalLen].headers}
                onSequenceClick={onSequenceClick}
                index={slideIndex}
                seqLen={seqLen}
                onBreadClick={onBreadClick}
                sequences={sequences}
                currentSequence={slides[slideIndex].headers.sequence}
            />
            {[...slides[slideIndex].data.entries()].map(([name, value], i) => {
                if (!(isLgDown && i === 1) && !(hiddenMdDown && i > 0)) {
                    const components = getComponents(name);
                    return (
                        <Content
                            key={`${name}-${i}`}
                            animationsInitialized={animationsInitialized}
                            name={name}
                            tileData={value.tile}
                            component={components[Math.min(slideIndex, components.length - 1)]}
                        />
                    )
                }
                return null;
            })}
        </>
    );
};
