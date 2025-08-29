"use client";
import React, { createContext, useContext, useRef, useEffect } from 'react';
import Lenis from 'lenis';

export * from 'lenis';

const LenisContext = createContext(null);

export const useLenis = () => {
    return useContext(LenisContext);
};

export const LenisSmoothScroll = ({ children }) => {
    const lenis = useRef(null);

    useEffect(() => {
        lenis.current = new Lenis({
            lerp: 0.1,
            duration: 2,
            smooth: true,
        });

        const animate = (time) => {
            lenis.current.raf(time);
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);

        return () => {
            lenis.current.destroy();
        };
    }, []);

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    );
};
