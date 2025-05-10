export type Category = 'Metrics' | 'Planets';

export type Property =
    'Mass'
    | 'Diameter'
    | 'Density'
    | 'Gravity'
    | 'Escape Velocity'
    | 'Rotation Period'
    | 'Length of Day'
    | 'Distance from Sun'
    | 'Perihelion'
    | 'Aphelion'
    | 'Orbital Period'
    | 'Orbital Inclination'
    | 'Orbital Velocity'
    | 'Orbital Eccentricity'
    | 'Obliquity to Orbit'
    | 'Mean Temperature'
    | 'Number of Moons'
    | 'Surface Pressure';

export type Planet =
    'Mercury'
    | 'Venus'
    | 'Earth'
    | 'Mars'
    | 'Jupiter'
    | 'Saturn'
    | 'Uranus'
    | 'Neptune'
    | 'Pluto';

export type MetricsData = {
    [key in Property]: PropertyValue;
}

export interface PropertyValue {
    data: { [key in (Planet | 'Moon')]: number };
    definition: string;
    unit: string;
    decimals: number;
};

export type PlanetsData = {
    [key in Planet]: {
        fact: string;
        posts: {
            name: string;
            img: string;
            description: string;
            link: string;
        }[]
    };
};

export interface SolarData {
    metrics: MetricsData;
    planets: PlanetsData;
}

export interface NewsHeadline {
    id: number;
    /**
     * Planet name (lowercase)
     */
    category: string;
    country: string;
    lang: string;
    headline: string;
    provider: string;
    url: string;
    img: string;
    age: string;
    /**
     * ISO UTC string
     */
    timestamp: string;
}