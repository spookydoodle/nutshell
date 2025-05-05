import axios from "axios";
import { ThemeOptions } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { getImgArr } from "../../layouts/images";
import { Slideshow } from "../../logic/slideshow/slideshow";
import { IMG_SERVER } from "../../img/cmd";
import { BreadcrumbItem } from "../../components/metrics-dashboard/navigation-bar/Breadcrumbs";
import { CoinflowMobile } from "./components/CoinflowMobile";
import { CoinflowSlide } from "./components/CoinflowSlide";
import { PlayerLabel } from "../../components/navigation/Slider";
import * as MetricTypes from "../../components/metrics-dashboard/metric-types";
import * as Types from "../../types";
import * as CoinflowTypes from "./coinflow-types";
import * as CoinflowUtils from "./coinflow-data-utils";
import coinflowData from "./coinflow-data.json";

export class CoinflowSlideshow extends Slideshow<CoinflowTypes.Data> {
    public path = '/coinflow';
    public name = '_COINFLOW_DASHBOARD';
    public shortName = '_COINFLOW';
    public description = 'High level conflow results of a steam punk company';
    public devices: Types.Device[] = ['mobile', 'desktop'];
    public caption = 'Data collected manually';
    public imageUrl = `${IMG_SERVER}/landing/gadgets.jpg`;
    public backgroundImageUrls = getImgArr("BG");
    public title = 'Coinflow';

    public static breadcrumbItems: BreadcrumbItem<CoinflowTypes.Category>[] = [
        { name: "Realms", icon: PublicIcon },
        { name: "Sectors", icon: BusinessCenterIcon },
        { name: "Products", icon: LoyaltyIcon },
    ]

    public static sequenceItems: CoinflowTypes.Timebox[] = ['YTD', 'QTD', 'MTD'];
    public static columns: CoinflowTypes.Column[] = ['PneumaPost Catalogue', 'The Cogwheel Bazaar', 'The AetherNet Emporium'];
    public static productRows: CoinflowTypes.Row[] = ['Main line', 'Secondary line'];

    public static getColumnsToRender = ({ isMdUp, isLgUp }: { isMdUp: boolean; isLgUp: boolean }): CoinflowTypes.Column[] => {
        const result: CoinflowTypes.Column[] = [this.columns[0]];
        if (isLgUp) {
            result.push(this.columns[1])
        }
        if (isMdUp) {
            result.push(this.columns[2]);
        }
        return result;
    }

    public static getSequenceLabels = (data: CoinflowTypes.Data): PlayerLabel[] => {
        const realmsChart = data.charts.find((chart) => chart.category === 'Realms');
        const sectorsChart = data.charts.find((chart) => chart.category === 'Sectors');
        if (!realmsChart || !sectorsChart) {
            throw new Error('Chart data missing');
        }
        const chartSlidesLabels: PlayerLabel[] = [realmsChart, sectorsChart].map((el) => ({ label: el.category, subSequenceName: 'Charts' }));
        const productSlidesLabels: PlayerLabel[] = [
            ...data.products.reduce<Set<string>>((acc, val) => acc.add(val.slideName.text), new Set<string>())
        ].map((el) => ({ label: el, subSequenceName: 'Products' }));
        
        return chartSlidesLabels.concat(productSlidesLabels);
    };

    public static getTotalSlidesLength = (sequenceLabels: PlayerLabel[]) => {
        return this.sequenceItems.length * sequenceLabels.length;
    };

    public static getSlideStats = (data: CoinflowTypes.Data, slideIndex: number) => {
        const sequenceLabels = this.getSequenceLabels(data);
        const totalSlidesLength = this.getTotalSlidesLength(sequenceLabels);
        const sequenceIndex = Math.floor(slideIndex / sequenceLabels.length);
        const sequence = this.sequenceItems[sequenceIndex];
        const indexWithinSequence = slideIndex % sequenceLabels.length;
        const activeBreadcrumbIndex = Math.min(indexWithinSequence, this.breadcrumbItems.length - 1);
        const isChartSlide = indexWithinSequence < sequenceLabels.filter((l) => l.subSequenceName === 'Charts').length;
        const category = isChartSlide ? data.charts[indexWithinSequence].category : 'Products';

        return {
            sequenceLabels,
            sequenceIndex,
            sequence,
            indexWithinSequence,
            totalSlidesLength,
            activeBreadcrumbIndex,
            category,
            titlePrimary: `${sequence} ${data.primaryMeasureName}`,
            titlePrimaryShort: `${sequence} ${data.primaryMeasureName}`,
            titleSecondary: isChartSlide ? `By ${category}` : sequenceLabels[indexWithinSequence].label,
            titleSecondaryShort: category
        }
    };

    public fetchData = async (_abortSignal: AbortSignal): Promise<CoinflowTypes.Data> => {
        return JSON.parse(JSON.stringify(coinflowData).replaceAll('{IMG_SERVER}', IMG_SERVER)) as CoinflowTypes.Data;
    };

    public getSlidesLength = (data: CoinflowTypes.Data) => {
        const sequenceLabels = CoinflowSlideshow.getSequenceLabels(data)
        return CoinflowSlideshow.getTotalSlidesLength(sequenceLabels);
    };

    public getTickerData = (data: CoinflowTypes.Data): MetricTypes.TickerStateData | undefined => {
        return new Map(
            CoinflowSlideshow.sequenceItems.map((timebox): [string, MetricTypes.TickerData] => [
                timebox,
                new Map(
                    [...new Set(data.ticker.map((row) => row.tickerItemParent.text))]
                    .map((tickerItemParent: string): [string, MetricTypes.Datum[]] => [
                        tickerItemParent,
                        CoinflowUtils.getTickerItemsData(
                            data.ticker,
                            CoinflowSlideshow.columns,
                            timebox,
                        ),
                    ])
                ),
            ])
        );
    };

    public getPlayerLabels = (data: CoinflowTypes.Data): PlayerLabel[] => {
        return CoinflowSlideshow.getSequenceLabels(data);
    };

    public getPlayerIndex = (slideIndex: number, playerLabelsLength: number) => {
        return slideIndex % playerLabelsLength;
    }

    public onPlayerIndexChange = (index: number, playerLabelsLength: number) => {
        this.slideIndex$.next(this.slideIndex$.value + (index - this.slideIndex$.value % playerLabelsLength))
    };

    public slideComponent = CoinflowSlide;
    public smallScreenComponent = CoinflowMobile;

    public getThemeOptions = (mode: Types.Mode): ThemeOptions => ({
        palette: {
            primary: {
                light: "#C9184A",
                main: "#590D22",
                dark: "#590D22",
                contrastText: "#F1FAEE",
            },
            secondary: {
                light: "#0077B6",
                main: "#0077B6",
                dark: "#023E8A",
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
                primary: mode === "dark" ? "#FAF8F3" : "#000",
                secondary: mode === "dark" ? "rgba(255, 255, 255, 0.60)" : "#023E8A",
                disabled: "rgba(0, 23, 79, 0.38)",
                // hint: "rgba(0, 0, 0, 0.38)",
            },
        },
        typography: {
            fontFamily: ["Lato", "Arial"].join(","),
        },
    });
}