"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const VideoOptimizer = ({ src, poster }) => {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    useEffect(() => {
        // Set up an IntersectionObserver to load video when visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Stop observing after it becomes visible
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, []);

    return (
        <div ref={videoRef} className='video-container' id="video-container" style={{ position: 'relative', width: '100%' }}>
            {isVisible && (
                <video
                    
                    autoPlay
                    muted
                    loop
                    preload="none" 
                    playsInline
                    poster={poster.src}
                    style={{ display: isVideoLoaded ? 'block' : 'none', width: '100%' }}
                    onCanPlayThrough={handleVideoLoad} 
                >
                    <source src={src} type="video/mp4" />
                    <source src={src.replace('.mp4', '.ogg')} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            )}

            {/* Show the thumbnail or placeholder while the video loads */}
            {!isVideoLoaded && (
                <Image
                    src={poster.src}
                    alt="Video thumbnail"
                    width={poster.width || 1920} 
                    height={poster.height || 1080}
                    priority
                    style={{ width: '100%', height: '100%' }}
                />
            )}
        </div>
    );
};

// Prop types for validation
VideoOptimizer.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.shape({
        src: PropTypes.string.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
};

export default VideoOptimizer;
