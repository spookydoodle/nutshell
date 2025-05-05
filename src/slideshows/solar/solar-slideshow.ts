import { Breakpoints, ThemeOptions } from "@mui/material";
import { IMG_SERVER } from "../../img/cmd";
import { getImgArr } from "../../layouts/images";
import * as MetricTypes from "../../components/metrics-dashboard/metric-types";
import { SolarSlide } from "./components/SolarSlide";
import { SmallScreenMessageSolar } from "./components/SmallScreenMessageSolar";
import { PlayerLabel } from "../../components/navigation/Slider";
import { Slideshow, SlideshowBreakpoint } from "../../logic/slideshow/slideshow";
import * as Types from "../../types";
import * as SolarTypes from './solar-types';
import solarData from "./solar-data.json";
import { getTickerData } from "./solar-data-utils";

export class SolarSlideshow extends Slideshow<SolarTypes.SolarData> {
    public path = '/solar';
    public name = '_SOLAR_NUTSHELL';
    public shortName = '_SOL_NUT';
    public description = 'Some whatever solar system info overview';
    public devices: Types.Device[] = ['desktop'];
    public caption = 'Data collected manually';
    public imageUrl = `${IMG_SERVER}/landing/solar.jpg`
    public links = ["https://nssdc.gsfc.nasa.gov/planetary/factsheet/"];
    public backgroundImageUrls = getImgArr("SS");
    public title = 'Solar system';
    public static title = 'Solar system';

    public static sequenceItems: SolarTypes.Category[] = ['Metrics', 'Planets'];
    public static metricColumns: SolarTypes.Property[] = [
        'Mass',
        'Diameter',
        'Density',
        'Gravity',
        'Escape Velocity',
        'Rotation Period',
        'Length of Day',
        'Distance from Sun',
        'Perihelion',
        'Aphelion',
        'Orbital Period',
        'Orbital Velocity',
        'Orbital Inclination',
        'Orbital Eccentricity',
        'Obliquity to Orbit',
        'Mean Temperature',
        'Surface Pressure',
        'Number of Moons',
    ];

    public static planetColumns: SolarTypes.Planet[] = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune',
        'Pluto'
    ];

    public static getMetricsColumnsToRender = (slideIndex: number, { isLgUp }: SlideshowBreakpoint): SolarTypes.Property[] => {
        const columnsPerSlide = SolarSlideshow.getColumnsPerSlide({ isLgUp });

        return SolarSlideshow.metricColumns.slice(slideIndex * columnsPerSlide, slideIndex * columnsPerSlide + columnsPerSlide);
    }

    public static getPlanetsColumnsToRender = (slideIndex: number, { isLgUp }: SlideshowBreakpoint): SolarTypes.Planet[] => {
        const columnsPerSlide = SolarSlideshow.getColumnsPerSlide({ isLgUp });
        const { metricsSlidesCount } = SolarSlideshow.getSubSequenceSlidesLength({ isLgUp });
        const planetsIndex = slideIndex - metricsSlidesCount;

        return SolarSlideshow.planetColumns.slice(planetsIndex * columnsPerSlide, planetsIndex * columnsPerSlide + columnsPerSlide);
    }

    public static getColumnsToRender = (slideIndex: number, { isLgUp }: SlideshowBreakpoint): string[] => {
        const columnsPerSlide = SolarSlideshow.getColumnsPerSlide({ isLgUp });
        const { metricsSlidesCount } = SolarSlideshow.getSubSequenceSlidesLength({ isLgUp });
        if (slideIndex < metricsSlidesCount) {
            return SolarSlideshow.metricColumns.slice(slideIndex * columnsPerSlide, slideIndex * columnsPerSlide + columnsPerSlide);
        }
        const planetsIndex = slideIndex - metricsSlidesCount;

        return SolarSlideshow.planetColumns.slice(planetsIndex * columnsPerSlide, planetsIndex * columnsPerSlide + columnsPerSlide);
    }

    public static getColumnsPerSlide = ({ isLgUp }: SlideshowBreakpoint): number => isLgUp ? 3 : 2;

    public static getSlideStats = (slideIndex: number, { isLgUp }: SlideshowBreakpoint) => {
        const columnsPerSlide = SolarSlideshow.getColumnsPerSlide({ isLgUp });
        const { metricsSlidesCount, planetsSlidesCount } = SolarSlideshow.getSubSequenceSlidesLength({ isLgUp });
        const activeSequence =  slideIndex < metricsSlidesCount ? 'Metrics' : 'Planets';
        const metricsSlidesLabels = new Array(Math.ceil(SolarSlideshow.metricColumns.length / columnsPerSlide))
            .fill(null)
            .map((_el, i) =>  `M${i * columnsPerSlide + 1}-${(i * columnsPerSlide) + columnsPerSlide}`);

        const planetsSlidesLabels = new Array(Math.ceil(SolarSlideshow.planetColumns.length / columnsPerSlide))
            .fill(null)
            .map((_el, i) => `P${i * columnsPerSlide + 1}-${(i * columnsPerSlide) + columnsPerSlide}`);
        const sequenceLabels = metricsSlidesLabels.concat(planetsSlidesLabels);

        return {
            columnsPerSlide,
            sequenceLabels,
            metricsSlidesCount,
            planetsSlidesCount,
            category: activeSequence,
            activeSequence,
            activeSequenceIndex: SolarSlideshow.sequenceItems.findIndex((s) => s === activeSequence),
            titlePrimary: this.title,
            titlePrimaryShort: this.title,
            titleSecondary: activeSequence === 'Metrics' ? 'Vs. the Earth' : 'Planets show',
            titleSecondaryShort: sequenceLabels[slideIndex]
        }
    };

    public fetchData = async (_abortSignal: AbortSignal): Promise<SolarTypes.SolarData> => {
        return solarData as SolarTypes.SolarData;
    };

    public getSlidesData = (data: MetricTypes.StateDataMap<SolarTypes.Category>): MetricTypes.SlidesStateData<SolarTypes.Category> | undefined => {
        return data.slides;
    };

    public static getSubSequenceSlidesLength = ({ isLgUp }: SlideshowBreakpoint) => {
        const columnsPerSlide = SolarSlideshow.getColumnsPerSlide({ isLgUp });
        const metricsSlidesCount = Math.ceil(SolarSlideshow.metricColumns.length / columnsPerSlide);
        const planetsSlidesCount = Math.ceil(SolarSlideshow.planetColumns.length / columnsPerSlide);
        
        return { metricsSlidesCount, planetsSlidesCount };
    };

    public getSlidesLength = (_data: SolarTypes.SolarData, { isLgUp }: SlideshowBreakpoint): number => {
        const { metricsSlidesCount, planetsSlidesCount } = SolarSlideshow.getSubSequenceSlidesLength({ isLgUp });

        return metricsSlidesCount + planetsSlidesCount;
    };

    public getPlayerLabels = (_data: SolarTypes.SolarData, { isLgUp }: { isLgUp: boolean }): PlayerLabel[] => {
        const columnsPerSlide = SolarSlideshow.getColumnsPerSlide({ isLgUp });

        const metricsSlides: PlayerLabel[] = new Array(Math.ceil(SolarSlideshow.metricColumns.length / columnsPerSlide))
            .fill(null)
            .map((_el, i): PlayerLabel => ({
                label: `M${i * columnsPerSlide + 1}-${(i * columnsPerSlide) + columnsPerSlide}`,
                subSequenceName: 'Metrics'
            }));

        const planetsSlides: PlayerLabel[] = new Array(Math.ceil(SolarSlideshow.planetColumns.length / columnsPerSlide))
            .fill(null)
            .map((_el, i): PlayerLabel => ({
                label: `M${i * columnsPerSlide + 1}-${(i * columnsPerSlide) + columnsPerSlide}`,
                subSequenceName: 'Planets'
            }));

        return metricsSlides.concat(planetsSlides);
    };

    public getPlayerIndex = (slideIndex: number, playerLabelsLength: number): number => {
        return slideIndex % playerLabelsLength;
    };

    public onPlayerIndexChange = (index: number, _playerLabelsLength: number) => {
        this.slideIndex$.next(index);
    };

    public getTickerData = (data: SolarTypes.SolarData): MetricTypes.TickerStateData | undefined => {
        return getTickerData(data.metrics);
    };
    
    public slideComponent = SolarSlide;
    public smallScreenComponent = SmallScreenMessageSolar;

    public getThemeOptions = (mode: Types.Mode): ThemeOptions => ({
        palette: {
            primary: {
                light: "#4361EE",
                main: "#000000",
                dark: "#3A0CA3",
                contrastText: "#F1FAEE",
            },
            secondary: {
                light: "#4895EF",
                main: "#4361EE",
                dark: "#3F37C9",
                contrastText: "#F1FAEE",
            },
            common: {
                black: "#000",
                white: "#fff",
            },
            background: {
                paper: mode === "dark" ? "#272727" : "#F8F8F8",
                default: mode === "dark" ? "#000000" : "#F4F4F4",
            },
            text: {
                primary: mode === "dark" ? "rgba(247, 244, 234, .87)" : "#000000",
                secondary: mode === "dark" ? "rgba(255, 255, 255, 0.60)" : "#495057",
                disabled: "rgba(0, 23, 79, 0.38)",
                // hint: "rgba(0, 0, 0, 0.38)",
            },
        },
        typography: {
            fontFamily: ["Goldman-Regular", "Open Sans", "Arial"].join(","),
        },
    });
}