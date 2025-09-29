"use client";
import React, { useRef } from 'react';
import Slider from 'react-slick'; 
import { Section7Mocks } from '@/components/mocks/section7mocks';
import Image from 'next/image';

import TestiImg1 from '/public/testi-img-01.png';
import TestiImg2 from '/public/testi-img-02.png';

export default function Testimonials({ reviewsData }) {
    const mainSliderRef = useRef(null);
    const thumbnailSliderRef = useRef(null);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        speed: 300,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    centerMode: true,
                    centerPadding: "-40.5px",
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 7,
                    centerMode: true,
                    centerPadding: "0.5px",
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5,
                    centerMode: true,
                    centerPadding: "0.5px",
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: "-10.5px",
                }
            },
            
        ],
    };

    const settings1 = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 280,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        waitForAnimate: false,  
        // Sync thumbnail slider with main slider
        afterChange: (current) => {
            thumbnailSliderRef.current.slickGoTo(current);
        },
    };

    // Use API data if available, otherwise fallback to mock data
    const testimonialData = reviewsData?.length > 0 
        ? reviewsData.map((review, index) => ({
            slide_id: review.id || index,
            image: review.reviewer_thumbnail || TestiImg1,
            review: {
                client_name: review.reviewer_title,
                company: review.reviewer_company_name,
                comment: review.review_text
            },
            service: review.reviewer_service_name
        }))
        : Section7Mocks;

    return (
        <section
            className="home-sec-07">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text text-center">
                            <h2>What Our Client Says</h2>
                        </div>

                        {/* Thumbnail Slider */}
                        <div className="main-testi-nav slider-nav">
                            <Slider
                                {...settings}
                                ref={thumbnailSliderRef}
                            >
                                {testimonialData.map((slide, index) => (
                                    <div key={slide.slide_id} className="box" onClick={() => mainSliderRef.current.slickGoTo(index)}>
                                        <Image 
                                            src={slide.image} 
                                            alt={slide.review.company} 
                                            loading='lazy'
                                            width={80}
                                            height={80}
                                            unoptimized={typeof slide.image === 'string' && slide.image.startsWith('http')}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        {/* Main Testimonial Slider */}
                        <div className="main-testi-large-box slider-for">
                            <Slider
                                {...settings1}
                                ref={mainSliderRef}
                            >
                                {testimonialData.map(slide => (
                                    <div key={slide.slide_id} className="main-testi-box">
                                        <h4>{slide.review.client_name}</h4>
                                        <h5>{slide.review.company}</h5>
                                        <p>{slide.review.comment}</p>
                                        <h6>{slide.service}</h6>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="two-imges-testi">
                <Image
                    id="zooming-img"
                    className="testi-img-01"
                    src={TestiImg1}
                    alt="creasions-zooming-img"
                />
                <Image
                    className="testi-img-02 rotating-img"
                    src={TestiImg2}
                    alt="creasion-rotating-img"
                />
            </div>
        </section>
    );
}
