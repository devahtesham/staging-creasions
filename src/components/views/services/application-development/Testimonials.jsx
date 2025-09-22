"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import TestiImg1 from '/public/testi-img-01.png';
import TestiImg2 from '/public/testi-img-02.png';
import { TestimonialMocks } from '@/components/mocks/application-development/testimonialMocks';

export default function Testimonials({ pageData }) {
    // Transform API reviews data to component format
    const getTestimonialsData = () => {
        if (pageData?.reviews && pageData.reviews.length > 0) {
            return pageData.reviews.map((review, index) => ({
                slide_id: index + 1,
                review: {
                    company: review.reviewer_company_name,
                    client_name: review.reviewer_title,
                    comment: review.review_text
                },
                service: review.reviewer_service_name
            }));
        }
        return TestimonialMocks;
    };

    const testimonialData = getTestimonialsData();

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
    };

    return (
        <section
            className="home-sec-07"
            style={{ backgroundImage: "url(/testi-sec-bg.webp)" }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text text-center">
                            <h2>What Our Client Says</h2>
                        </div>


                        {/* Main Testimonial Slider */}
                        <div className="main-testi-large-box slider-for">
                            <Slider
                                {...settings1}
                            >
                                {testimonialData.map(slide => (
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
            <div className="two-imges-testi">
                <Image
                    id="zooming-img"
                    className="testi-img-01"
                    src={TestiImg1}
                    alt=""
                />
                <Image
                    className="testi-img-02 rotating-img"
                    src={TestiImg2}
                    alt=""
                />
            </div>
        </section>
    );
}
