import React from 'react';

export const scrollToRef = (ref: React.RefObject<HTMLElement>) => window.scrollTo(0, ref.current?.offsetTop ?? 0);
export const scrollToTop = () => window.scrollTo(0, 0);
