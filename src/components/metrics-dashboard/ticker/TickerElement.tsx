import React from "react";

interface Props {
    element: React.ReactNode;
    parent: HTMLDivElement;
    index: number;
    onNext: () => void;
    pause?: boolean;
}

export const TickerElement: React.FC<Props> = ({ pause, index, onNext, element, parent }) => {
    const ref = React.createRef<HTMLSpanElement>();
    const [offset, setOffset] = React.useState(0);
    const [nextDone, setNextDone] = React.useState(false);
    const [removed, setRemoved] = React.useState(false);

    const increaseOffset = React.useCallback(
        () => setOffset((prev) => prev + 1),
        []
    );

    const displayNextItem = React.useCallback(
        () => {
            onNext();
            setNextDone(true);
            increaseOffset();
        },
        []
    );

    const removeItemFromDomTree = React.useCallback(
        () => setRemoved(true),
        []
    );

    const resetSequence = React.useCallback(
        () => {
            setRemoved(false);
            setOffset(0);
            setNextDone(false);
        },
        []
    );

    React.useEffect(() => {
        const { current } = ref;

        if (!current || pause) {
            return;
        }

        const interval = setInterval(() => {
            const rect = current.getBoundingClientRect();
            const parentRect = parent.getBoundingClientRect();

            if (!nextDone && rect.right < parentRect.width) {
                displayNextItem()
            } else if (rect.right < 0) {
                removeItemFromDomTree();
            } else {
                increaseOffset();
            }
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, [ref, pause]);

    React.useEffect(() => {
        if (removed && index === 0) {
            resetSequence();
        }
    }, [index]);

    if (removed) {
        return null;
    }

    return (
        <span
            ref={ref}
            style={{
                whiteSpace: 'nowrap',
                position: 'absolute',
                left: `calc(100vw - ${offset}px)`,
                visibility: removed ? 'hidden' : 'visible',
                display: removed ? 'none' : 'inline-block',
                minWidth: '10px'
            }}>
            {element}
        </span>
    );
};
