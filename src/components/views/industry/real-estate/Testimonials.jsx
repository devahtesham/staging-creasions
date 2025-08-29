"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import TestiImg1 from '/public/testi-img-01.png';
import TestiImg2 from '/public/testi-img-02.png';
import { TestimonialMocks } from '@/components/mocks/real-estate/testimonialMocks';

export default function Testimonials() {

    const settings1 = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 380,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        waitForAnimate: false,
    };

    return (
        <section
            className="home-sec-07"
            >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <div className="case-text-brand">
                            <h5>Meet Our Top Clients</h5>

                            <h2>Explore some of the clients we&apos;ve assisted!</h2>


                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                        {/* Main Testimonial Slider */}
                        <div className="main-testi-large-box slider-for">
                            <Slider
                                {...settings1}
                            >
                                {TestimonialMocks.map(slide => (
                                    <div key={slide.slide_id} className="main-testi-box">
                                        <h4>{slide.review.company}</h4>
                                        <h5>{slide.review.client_name}</h5>
                                        <p>{slide.review.comment}</p>
                                        <h6>{slide.service}</h6>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
