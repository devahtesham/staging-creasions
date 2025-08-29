"use client";
import { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderImg1 from '/public/industry/beauty-salons/bs-hero-01.webp';
import SliderImg2 from '/public/industry/beauty-salons/bs-hero-02.webp';
import SliderImg3 from '/public/industry/beauty-salons/bs-hero-03.webp';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');

    const backgroundImages = [SliderImg1, SliderImg2, SliderImg3];

    const heroSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
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
        <section className="bs-hero-banner">
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
                                    <h2>Professional Salon &amp; Spa<br /><span>Web Design Solutions</span> </h2>
                                    <p>We create custom websites tailored to salons and spas. Attract new clients, showcase your<br/> services, and boost bookings. Want to learn more? Speak with one of our experts<br/> for a
                                        personalized quote. Call +1 469-854-3814 or email us today!</p>
                                </div>
                            </div>
                        </div>


                        {/* Second Slide */}
                        <div className="col-md-12">
                            <div className="real-estate-banner">
                                <div className="text case-text">
                                    <h2>Salon Web Design</h2>
                                    <p>Custom Websites for Hair Salons, We specialize in creating modern, mobile-friendly<br/> websites that reflect your unique style and showcase your services.</p>                                
                                    </div>
                            </div>
                        </div>

                        {/* Third Slide */}
                        <div className="col-md-12">
                            <div className="real-estate-banner">
                                <div className="text case-text">
                                    <h2>Complete Website<br /><span>Design &amp; Optimization</span> </h2>
                                    <p>Perfect for salon and spa owners looking to get more clients online—quickly and effectively.<br/> Custom-designed website tailored specifically for salons, spas, and beauty professionals.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}
