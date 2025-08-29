"use client";
import { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderImg1 from '/public/industry/cleaning-company/cc-hero-01.webp';
import SliderImg2 from '/public/industry/cleaning-company/cc-hero-02.webp';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');  

    const backgroundImages = [SliderImg1, SliderImg2];

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
            setCurrentSlide(current);
            setFadeClass('');
            setTimeout(() => {
                setFadeClass('fade-in');
            }, 2);
        },
    };

    return (
        <section className="cc-hero-banner">
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
                            <div className="real-estate-banner">
                                <div className="text case-text">
                                    <h2>Cleaning Company Web<br/><span>Design by Creasions</span></h2>
                                    <p>Attract More Customers with Powerful, Tailored Online Solutions</p>
                                </div>
                            </div>
                        </div>


                        {/* Second Slide */}
                        <div className="col-md-12">
                            <div className="real-estate-banner">
                                <div className="text case-text">
                                    <h2>Custom Cleaning Service<br/><span>Design &amp; Development</span></h2>
                                    <p>We craft beautifully designed, strategic websites that showcase your cleaning service, speak to your ideal audience, and elevate your brand.</p>                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}
