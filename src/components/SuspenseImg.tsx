import React from "react";
import { Img, useImage } from "react-image";

interface Props {
    errorComponent?: React.ReactNode;
    onError?: (err: Error, errorInfo: React.ErrorInfo) => void;
    children?: React.ReactNode;
}

interface State {
    hasError: boolean;
}

/**
 * Error boundary for broken images.
 * Displays a no-image-found image.
 */
export class ImgErrorBoundary extends React.Component<Props, State> {
    public state: State;

    public constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    public static getDerivedStateFromError = () => {
        return { hasError: true };
    };

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.props.onError?.(error, errorInfo);
    }

    public render() {
        return this.state.hasError
            ? this.props?.errorComponent || <div></div>
            : this.props.children;
    }
}

interface ImageComponentProps {
    alt: string;
    img: string;
    className?: string;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
    alt,
    img,
    className,
}) => {
    const { src } = useImage({ srcList: img });

    return <img src={src} alt={alt} className={className} />;
};

interface ImgType {
    img: string;
    className?: string;
    style?: React.CSSProperties;
}

interface Props {
    alt: string;
    img: ImgType;
    fallback: ImgType;
}

export const SuspenseImg: React.FC<Props> = ({ alt, img, fallback }) => (
    <ImgErrorBoundary alt="no image found" img={fallback} fallback={fallback}>
        <React.Suspense fallback={<Img alt={alt} src={fallback.img} className={fallback.className} />}>
            <ImageComponent alt={alt} img={img.img} className={img.className} />
        </React.Suspense>
    </ImgErrorBoundary>
);
