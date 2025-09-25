"use client";
import React from 'react';
import Slider from 'react-slick'; 
import { TestimonialMocks } from '@/components/mocks/internet-marketing-agency/testimonialMocks';
import Image from 'next/image';

import TestiImg1 from '/public/testi-img-01.png';
import TestiImg2 from '/public/testi-img-02.png';
import testimonialbg from '/public/services/email-marketing/testimonial-bg.png'

export default function Testimonials({ reviewsData }) {
    // Transform reviews data to component format
    const transformReviewsData = (reviews) => {
        if (!reviews || reviews.length === 0) {
            // Fallback to TestimonialMocks if no reviews data
            return TestimonialMocks;
        }
        
        return reviews.map((review, index) => ({
            slide_id: review.id || index,
            review: {
                company: review.reviewer_company_name,
                client_name: review.reviewer_title,
                comment: review.review_text
            },
            service: review.reviewer_service_name
        }));
    };

    const testimonials = transformReviewsData(reviewsData);

    const settings1 = {
        dots: true,
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
            style={{ backgroundImage: `url(${testimonialbg.src})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text text-center">
                            <h6>Meet Our Top Clients</h6>
                            <h2>Explore some of the clients we&apos;ve assisted!</h2>
                        </div>


                        {/* Main Testimonial Slider */}
                        <div className="main-testi-large-box slider-for">
                            <Slider
                                {...settings1}
                            >
                                {testimonials.map(slide => (
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
