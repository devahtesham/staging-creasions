"use client";
import { useEffect, useRef } from 'react';

const CircleShadow = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const circle = circleRef.current;
            if (circle) {
                // Update the position of the circle based on cursor position
                circle.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={circleRef}
            className="circle-shadow"
        />
    );
};

export default CircleShadow;
