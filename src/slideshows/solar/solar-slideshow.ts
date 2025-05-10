import { ThemeOptions } from "@mui/material";
import { IMG_SERVER } from "../../img/cmd";
import { getImgArr } from "../../layouts/images";
import { SolarSlide } from "./components/SolarSlide";
import { SmallScreenMessageSolar } from "./components/SmallScreenMessageSolar";
import { PlayerLabel } from "../../components/navigation/Slider";
import { Slideshow, SlideshowBreakpoint } from "../../logic/slideshow/slideshow";
import * as MetricTypes from "../../components/metrics-dashboard/metric-types";
import * as Types from "../../types";
import * as SolarTypes from './solar-types';
import * as SolarUtils from "./solar-data-utils";
import solarData from "./solar-data.json";
import axios from "axios";

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
        const columnsPerSlide = this.getColumnsPerSlide({ isLgUp });

        return this.metricColumns.slice(slideIndex * columnsPerSlide, slideIndex * columnsPerSlide + columnsPerSlide);
    }

    public static getPlanetsColumnsToRender = (slideIndex: number, { isLgUp }: SlideshowBreakpoint): SolarTypes.Planet[] => {
        const columnsPerSlide = this.getColumnsPerSlide({ isLgUp });
        const { metricsSlidesCount } = this.getSubSequenceSlidesLength({ isLgUp });
        const planetsIndex = slideIndex - metricsSlidesCount;

        return this.planetColumns.slice(planetsIndex * columnsPerSlide, planetsIndex * columnsPerSlide + columnsPerSlide);
    }

    public static getColumnsToRender = (slideIndex: number, { isLgUp }: SlideshowBreakpoint): string[] => {
        const columnsPerSlide = this.getColumnsPerSlide({ isLgUp });
        const { metricsSlidesCount } = this.getSubSequenceSlidesLength({ isLgUp });
        if (slideIndex < metricsSlidesCount) {
            return this.metricColumns.slice(slideIndex * columnsPerSlide, slideIndex * columnsPerSlide + columnsPerSlide);
        }
        const planetsIndex = slideIndex - metricsSlidesCount;

        return this.planetColumns.slice(planetsIndex * columnsPerSlide, planetsIndex * columnsPerSlide + columnsPerSlide);
    }

    public static getColumnsPerSlide = ({ isLgUp }: SlideshowBreakpoint): number => isLgUp ? 3 : 2;

    public static getSlideStats = (slideIndex: number, { isLgUp }: SlideshowBreakpoint) => {
        const columnsPerSlide = this.getColumnsPerSlide({ isLgUp });
        const { metricsSlidesCount, metricsSlidesLabels, planetsSlidesCount, planetsSlidesLabels } = this.getSubSequenceSlides({ isLgUp });
        const activeSequence = slideIndex < metricsSlidesCount ? 'Metrics' : 'Planets';
        const sequenceLabels = metricsSlidesLabels.concat(planetsSlidesLabels);

        return {
            columnsPerSlide,
            sequenceLabels,
            metricsSlidesCount,
            planetsSlidesCount,
            category: activeSequence,
            activeSequence,
            activeSequenceIndex: this.sequenceItems.findIndex((s) => s === activeSequence),
            titlePrimary: this.title,
            titlePrimaryShort: this.title,
            titleSecondary: activeSequence === 'Metrics' ? 'Vs. the Earth' : 'Planets show',
            titleSecondaryShort: sequenceLabels[slideIndex]
        }
    };

    public fetchData = async (_abortSignal: AbortSignal): Promise<SolarTypes.SolarData> => {
        return solarData as SolarTypes.SolarData;
    };

    public static getSubSequenceSlidesLength = ({ isLgUp }: SlideshowBreakpoint) => {
        const columnsPerSlide = this.getColumnsPerSlide({ isLgUp });
        const metricsSlidesCount = Math.ceil(this.metricColumns.length / columnsPerSlide);
        const planetsSlidesCount = Math.ceil(this.planetColumns.length / columnsPerSlide);

        return { metricsSlidesCount, planetsSlidesCount };
    };

    public static getSubSequenceSlides = ({ isLgUp }: SlideshowBreakpoint) => {
        const columnsPerSlide = this.getColumnsPerSlide({ isLgUp });
        const { metricsSlidesCount, planetsSlidesCount } = this.getSubSequenceSlidesLength({ isLgUp });
        const metricsSlidesLabels = new Array(metricsSlidesCount)
            .fill(null)
            .map((_el, i) => `M${i * columnsPerSlide + 1}-${(i * columnsPerSlide) + columnsPerSlide}`);
        const planetsSlidesLabels = new Array(planetsSlidesCount)
            .fill(null)
            .map((_el, i) => `P${i * columnsPerSlide + 1}-${(i * columnsPerSlide) + columnsPerSlide}`);

        return { metricsSlidesCount, metricsSlidesLabels, planetsSlidesCount, planetsSlidesLabels };
    };

    public getSlidesLength = (_data: SolarTypes.SolarData, { isLgUp }: SlideshowBreakpoint): number => {
        const { metricsSlidesCount, planetsSlidesCount } = SolarSlideshow.getSubSequenceSlidesLength({ isLgUp });

        return metricsSlidesCount + planetsSlidesCount;
    };

    public getPlayerLabels = (_data: SolarTypes.SolarData, { isLgUp }: { isLgUp: boolean }): PlayerLabel[] => {
        const { metricsSlidesLabels, planetsSlidesLabels } = SolarSlideshow.getSubSequenceSlides({ isLgUp });
        const metricsSlides: PlayerLabel[] = metricsSlidesLabels.map((label): PlayerLabel => ({ label, subSequenceName: 'Metrics' }));
        const planetsSlides: PlayerLabel[] = planetsSlidesLabels.map((label): PlayerLabel => ({ label, subSequenceName: 'Planets' }));

        return metricsSlides.concat(planetsSlides);
    };

    public getPlayerIndex = (slideIndex: number, playerLabelsLength: number): number => {
        return slideIndex % playerLabelsLength;
    };

    public onPlayerIndexChange = (index: number, _playerLabelsLength: number) => {
        this.slideIndex$.next(index);
    };

    public getTickerData = async (data: SolarTypes.SolarData, abortSignal: AbortSignal): Promise<MetricTypes.TickerStateData | undefined> => {
        const baseUrl = process.env.NODE_ENV === 'development' ? '/felidae' : 'https://felidae.spookydoodle.com';
        const planets = Object.keys(data.planets) as SolarTypes.Planet[];
        const result = await Promise.allSettled(
            planets.map((planet) => axios.get<SolarTypes.NewsHeadline[]>(`${baseUrl}/news/${planet.toLowerCase()}?sortBy=id desc&lang=en&items=10`, { signal: abortSignal }))
        );
        const resultsData = result.reduce<Map<SolarTypes.Planet, SolarTypes.NewsHeadline[]>>((acc, result, i) => {
            if (result.status !== 'fulfilled') {
                return acc;
            }
            return acc.set(planets[i], result.value.data);
        }, new Map());
        
        if (!resultsData || resultsData.size === 0) {
            return;
        }
        
        return SolarUtils.getNewsHeadlinesTickerData(resultsData);
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