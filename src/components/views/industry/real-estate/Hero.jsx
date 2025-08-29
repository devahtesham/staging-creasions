"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderImg1 from '/public/industry/real-estate/re-hero-01.webp';
import SliderImg2 from '/public/industry/real-estate/re-hero-02.webp';
import SliderImg3 from '/public/industry/real-estate/re-hero-03.webp';

import CheckBullet from '/public/industry/real-estate/re-hero-checkbullet.webp';

export default function Hero() {
    // State to track the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');  // New state for fade effect

    // Array of images to use for the background
    const backgroundImages = [SliderImg1, SliderImg2, SliderImg3];

    // Slider settings
    const heroSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => {
            setCurrentSlide(current); // Update current slide
            setFadeClass(''); // Reset fade class
            setTimeout(() => {
                setFadeClass('fade-in');
            }, 2);
        },
    };

    return (
        <section className="re-hero-banner">
            <div className={`banner-img ${fadeClass}`}>
                <Image
                    src={backgroundImages[currentSlide]}
                    alt="Hero Banner Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="container">
                <div className="row hero-slider">
                    <Slider {...heroSlider}>
                        {/* First Slide */}
                        <div className="col-md-12">
                            <div className="real-estate-banner mt-5">
                                <div className="text case-text">
                                    <h2>Expert Real Estate <br /><strong>Web Design Services</strong></h2>
                                    <p>Create Stunning, High-Converting Websites That Drive Leads</p>
                                </div>
                            </div>
                        </div>

                        {/* Second Slide */}
                        <div className="col-md-12">
                            <div className="real-estate-banner mt-5">
                                <div className="text case-text">
                                    <h2>Professional Real Estate <br /><strong>Web Development</strong></h2>
                                    <p>Custom Solutions for Your Real Estate Business Success</p>
                                </div>
                            </div>
                        </div>

                        {/* Third Slide */}
                        <div className="col-md-12">
                            <div className="real-estate-banner">
                                <div className="col-md-6">
                                    <div className="text case-text">
                                        <h2>Trusted Real Estate <br /><strong>Website Development Company</strong></h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text">
                                        <p>At Creasions, we combine cutting-edge digital innovation and expert insights to deliver the best real estate website solutions. Whether you&apos;re a realtor, property agent, or real estate company, we provide all-in-one web development services that help you dominate your market.</p>
                                        <p>With our advanced knowledge of the latest technologies, we deliver comprehensive real estate web development services, from responsive design and development to seamless MLS and IDX integrations.</p>
                                        <ul className="case-list">
                                            <li><img src={CheckBullet.src} alt='right'/><p>Our real estate web design, development, SEO, and digital marketing solutions are tailored to the needs of startups and white-label businesses alike.</p></li>
                                            <li><img src={CheckBullet.src} alt='right'/><p>We proudly serve real estate professionals across the USA, UK, Canada, and Australia, delivering global expertise with a local touch</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}
