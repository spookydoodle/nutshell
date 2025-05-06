import { NutshellData, Dimension } from "./nfs-types";
import { IMG_SERVER } from "../../img/cmd";

const imgServer = `${IMG_SERVER}/nfs`;

const nfs: Dimension = {
    key: "NFS",
    text: "Need For Speed",
};

const testNumber = "";
const imgNames = ["0_cover", "0_garage", "0_ui", "1", "2", "3"];
export const imgPerSlide = imgNames.length;

type IndexNr =
    | "01"
    | "02"
    | "03"
    | "04"
    | "05"
    | "06"
    | "07"
    | "08"
    | "09"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
    | "27"
    | "28"
    | "29"
    | "30";

const getImgArr = (nn: IndexNr): string[] => {
    return imgNames.map((el) => `${imgServer}/${nn}_${el}.jpg`);
};

/**
 * https://vgsales.fandom.com/wiki/Need_for_Speed
 * https://en.wikipedia.org/wiki/Need_for_Speed
 */
export const NEED_FOR_SPEED: NutshellData = {
    games: [
        {
            game: { key: `${nfs.key}_1`, text: "The Need for Speed" },
            label: "1994",
            franchise: nfs,
            year: "1994",
            developers: ["EA Canada"],
            platforms: ["3DO", "DOS", "PS", "Saturn"],
            logo: "",
            cover:
                "https://upload.wikimedia.org/wikipedia/en/8/85/The_NFS_Video_cover.jpg",
            background: getImgArr("01"),
            video:
                "https://www.youtube.com/watch?v=Dur8Dzgtbv4&t=501s&ab_channel=iGameplay1337",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: testNumber, unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_2`, text: "Need for Speed II" },
            label: "1997",
            franchise: nfs,
            year: "1997",
            developers: ["EA Canada", "EA Seattle"],
            platforms: ["PC", "PS"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/7/7b/NFS_II_%28PC%2C_US%29_cover_art.jpg",
            background: getImgArr("02"),
            video:
                "https://www.youtube.com/watch?v=vHNdRC0ehmQ&t=208s&ab_channel=WorldofLongplays",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: testNumber, unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_3`, text: "Need for Speed III: Hot Pursuit" },
            label: "1998",
            franchise: nfs,
            year: "1998",
            developers: ["EA Canada", "EA Seattle"],
            platforms: ["PC", "PS"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/a/a6/NFS_III_Hot_Pursuit_%28PC%2C_US%29_cover_art.jpg",
            background: getImgArr("03"),
            video:
                "https://www.youtube.com/watch?v=E1AxLJpY-DQ&t=5137s&ab_channel=WorldofLongplays",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: "1700000", unit: " copies" },
        },
        {
            game: { key: `${nfs.key}_4`, text: "Need for Speed: High Stakes" },
            label: "1999",
            franchise: nfs,
            year: "1999",
            developers: ["EA Canada", "EA Seattle"],
            platforms: ["PC", "PS"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/e/e2/NFS_High_Stakes_box.jpg",
            background: getImgArr("04"),
            video:
                "https://www.youtube.com/watch?v=YtLwveuHS2Q&t=8639s&ab_channel=WorldofLongplays",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: "1390000", unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_5`, text: "Need for Speed: Porsche Unleashed" },
            label: "2000",
            franchise: nfs,
            year: "2000",
            developers: ["Eden Studios", "EA Canada", "Pocketeers"],
            platforms: ["PC", "PS", "GBA"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/a/af/Need_for_Speed_-_Porsche_Unleashed_Coverart.png",
            background: getImgArr("05"),
            video:
                "https://www.youtube.com/watch?v=LBSEH9GzUBI&t=276s&ab_channel=PCGamingVideos",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: testNumber, unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_6`, text: "Need for Speed: Hot Pursuit 2" },
            label: "2002",
            franchise: nfs,
            year: "2002",
            developers: ["EA Black Box", "EA Seattle"],
            platforms: ["PC", "PS2", "Xbox", "GC"],
            cover: "https://upload.wikimedia.org/wikipedia/en/9/95/NFSHP2_PC.jpg",
            background: getImgArr("06"),
            video:
                "https://www.youtube.com/watch?v=DqreZGfIpso&ab_channel=xTimelessGaming",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: "1160000", unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_7`, text: "Need for Speed: Underground" },
            label: "2003",
            franchise: nfs,
            year: "2003",
            developers: ["EA Black Box", "Pocketeers"],
            platforms: ["PC", "PS2", "Xbox", "GC", "GBA"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/a/a0/Nfsu-win-cover.jpg",
            background: getImgArr("07"),
            video:
                "https://www.youtube.com/watch?v=DyIUKH2xu4o&ab_channel=WorldofLongplays",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: "15000000", unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_8`, text: "Need for Speed: Underground 2" },
            label: "2004",
            franchise: nfs,
            year: "2004",
            developers: ["EA Black Box", "Pocketeers"],
            platforms: ["PC", "PS2", "Xbox", "GC", "GBA", "PSP", "DS"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/1/10/Nfsu2-win-cover.jpg",
            background: getImgArr("08"),
            video:
                "https://www.youtube.com/watch?v=GZ5irjhlFnU&ab_channel=HDW-HardDifficultyWalkthrough",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: "7000000", unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_9`, text: "Need for Speed: Most Wanted" },
            label: "2005",
            franchise: nfs,
            year: "2005",
            developers: ["EA Canada", "EA Black Box"],
            platforms: ["PC", "PS2", "Xbox", "GC", "GBA", "PSP", "DS", "Xbox 360"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/8/8e/Need_for_Speed_Most_Wanted_Box_Art.jpg",
            background: getImgArr("09"),
            video:
                "https://www.youtube.com/watch?v=DRR464LoKhI&t=1292s&ab_channel=GameRiot",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: "16000000", unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_10`, text: "Need for Speed: Carbon" },
            label: "2006",
            franchise: nfs,
            year: "2006",
            developers: ["EA Canada", "EA Black Box", "Rovio Mobile", "Global VR"],
            platforms: [
                "PC",
                "Xbox 360",
                "PS3",
                "Wii",
                "PS2",
                "Xbox",
                "GC",
                "GBA",
                "PSP",
                "DS",
            ],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/a/a4/Need_for_Speed_Carbon_Game_Cover.jpg",
            background: getImgArr("10"),
            video: "https://www.youtube.com/watch?v=3efxNWpC8xk&ab_channel=DSTRYR",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: "3200000", unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_11`, text: "Need for Speed: ProStreet" },
            label: "2007",
            franchise: nfs,
            year: "2007",
            developers: ["EA Black Box"],
            platforms: ["PC", "PS3", "Xbox 360", "Wii", "PS2", "PSP", "DS"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/1/16/NFS_ProStreet_cover.png",
            background: getImgArr("11"),
            video: "https://www.youtube.com/watch?v=G6izkwz1fR0&ab_channel=DSTRYR",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: "2400000", unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_12`, text: "Need for Speed: Undercover" },
            label: "2008",
            franchise: nfs,
            year: "2008",
            developers: ["EA Black Box", "Exient Entertainment", "Firebrand Games"],
            cars: [],
            platforms: ["PC", "PS3", "Xbox 360", "Wii", "PS2", "PSP", "DS"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/d/d2/Need_for_Speed_Undercover_cover.jpg",
            background: getImgArr("12"),
            video: "https://www.youtube.com/watch?v=tAmCVyQ8MPc&ab_channel=DSTRYR",
            logo: "",
            revenue: { value: "", unit: "USD" },
            qty: { value: "5200000", unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_13`, text: "Need for Speed: Shift" },
            label: "2009",
            franchise: nfs,
            year: "2009",
            developers: ["Slightly Mad Studios", "EA Bright Light"],
            platforms: ["PC", "PS3", "Xbox 360", "PSP", "Mobile"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/0/00/Need_for_Speed_Shift.jpg",
            background: getImgArr("13"),
            video:
                "https://www.youtube.com/watch?v=ubeGRIqC8H4&ab_channel=RacingGameArchive",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: "390000", unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_14`, text: "Need for Speed: Nitro" },
            label: "2009",
            franchise: nfs,
            year: "2009",
            developers: ["Firebrand Games", "EA Montreal"],
            platforms: ["DS", "Wii"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/0/0b/NFS_Nitro_Wii_cover_art.jpg",
            background: getImgArr("14"),
            video:
                "https://www.youtube.com/watch?v=HaFxhDsbzX4&ab_channel=GoldMetalSonic",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: testNumber, unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_15`, text: "Need for Speed: World" },
            label: "2010",
            franchise: nfs,
            year: "2010",
            developers: ["Quicklime Games", "EA Singapore"],
            platforms: ["PC"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/d/d6/Need-for-Speed-World.jpg",
            background: getImgArr("15"),
            video: "https://www.youtube.com/watch?v=N_Mp-6vWt1M&ab_channel=MSGW",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: testNumber, unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_16`, text: "Need for Speed: Hot Pursuit" },
            label: "2010",
            franchise: nfs,
            year: "2010",
            developers: ["Criterion Games"],
            platforms: ["PC", "PS3", "Xbox 360", "Wii", "Mobile"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/8/85/Need_for_Speed_Hot_Pursuit_2010.jpg",
            background: getImgArr("16"),
            video:
                "https://www.youtube.com/watch?v=4MtISZpnfuk&ab_channel=KryZeePlays",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: "5000000", unit: "copies" },
            rating: 86,
        },
        {
            game: { key: `${nfs.key}_17`, text: "Shift 2: Unleashed" },
            label: "2011",
            franchise: nfs,
            year: "2011",
            developers: ["Slightly Mad Studios", "Straight Right"],
            platforms: ["PC", "PS3", "Xbox 360", "iOS"],
            cover: "https://upload.wikimedia.org/wikipedia/en/8/83/Shift2-cover.jpg",
            background: getImgArr("17"),
            video:
                "https://www.youtube.com/watch?v=VVWJSWoPrVE&ab_channel=RacingGameArchive",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: testNumber, unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_18`, text: "Need for Speed: The Run" },
            label: "2011",
            franchise: nfs,
            year: "2011",
            developers: ["EA Black Box", "Firebrand Games"],
            platforms: ["PC", "PS3", "Xbox 360", "Wii", "3DS"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/7/7c/Needforspeedtheruncover.jpg",
            background: getImgArr("18"),
            video: "https://www.youtube.com/watch?v=0VqBlcSs1Lk&ab_channel=GameRiot",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: testNumber, unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_19`, text: "Need for Speed: Most Wanted" },
            label: "2012",
            franchise: nfs,
            year: "2012",
            developers: ["Criterion Games"],
            platforms: ["PC", "PS3", "Xbox 360", "PS Vita", "Wii U", "Mobile"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/b/b0/Nfs-most-wanted-2012-gen-packart.jpg",
            background: getImgArr("19"),
            video:
                "https://www.youtube.com/watch?v=5nOQelXLgPY&t=10s&ab_channel=VideoGamesTV",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: "509000", unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_20`, text: "Need for Speed: Rivals" },
            label: "2013",
            franchise: nfs,
            year: "2013",
            developers: ["Ghost Games"],
            platforms: ["PC", "PS4", "Xbox One", "PS3", "Xbox 360"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/e/e5/Need_for_Speed_Rivals_cover.jpg",
            background: getImgArr("20"),
            video:
                "https://www.youtube.com/watch?v=CHlQeZ2V6i0&ab_channel=WorldofLongplays",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: "4000000", unit: "copies" },
            rating: 80,
        },
        {
            game: { key: `${nfs.key}_21`, text: "Need for Speed: No Limits" },
            label: "2015",
            franchise: nfs,
            year: "2015",
            developers: ["Firemonkeys Studios"],
            platforms: ["Android", "iOS"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/5/59/Need_for_Speed_No_Limits_cover_art.jpeg",
            background: getImgArr("21"),
            video: "https://www.youtube.com/watch?v=KC19SVDzDJ4&ab_channel=TRNSPRTR",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: testNumber, unit: "copies" },
        },
        {
            game: { key: `${nfs.key}_22`, text: "Need for Speed" },
            label: "2015",
            franchise: nfs,
            year: "2015",
            developers: ["Ghost Games"],
            platforms: ["PC", "PS4", "Xbox One"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/a/a9/Need_for_Speed_2015.jpg",
            background: getImgArr("22"),
            video: "https://www.youtube.com/watch?v=B5mfZ0mYy8U&ab_channel=GameRiot",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: testNumber, unit: "copies" },
            rating: 66,
        },
        {
            game: { key: `${nfs.key}_23`, text: "Need for Speed Payback" },
            label: "2017",
            franchise: nfs,
            year: "2017",
            developers: ["Ghost Games"],
            platforms: ["PC", "PS4", "Xbox One"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/6/64/Need_for_Speed_Payback_standard_edition_cover_art.jpg",
            background: getImgArr("23"),
            video: "https://www.youtube.com/watch?v=FVJy5tytTH0&ab_channel=GameRiot",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: testNumber, unit: "copies" },
            rating: 62,
        },
        {
            game: { key: `${nfs.key}_23`, text: "Need for Speed Heat" },
            label: "2019",
            franchise: nfs,
            year: "2019",
            developers: ["Ghost Games"],
            platforms: ["PC", "PS4", "Xbox One"],
            cover:
                "https://upload.wikimedia.org/wikipedia/en/7/7f/Cover_Art_of_Need_for_Speed_Heat.png",
            background: getImgArr("24"),
            video: "https://www.youtube.com/watch?v=l0X3moJYuq8&ab_channel=Reiji",
            logo: "",
            cars: [],
            revenue: { value: "", unit: "USD" },
            qty: { value: testNumber, unit: "copies" },
            rating: 72,
        },
    ],
};
