export type Mode = "light" | "dark" | undefined;

export type Device = 'desktop' | 'mobile';

export interface ImgSrc {
    src: string;
    fallback?: string;
}
