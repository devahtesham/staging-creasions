"use client";
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { Section7Mocks } from '@/components/mocks/section7mocks';
import Image from 'next/image';

import TestiImg1 from '/public/testi-img-01.png';
import TestiImg2 from '/public/testi-img-02.png';
import { fetchTestimonialsSection } from '@/utils/helper';

export default function Section7() {
    const mainSliderRef = useRef(null);
    const thumbnailSliderRef = useRef(null);


    const [allReviews, setAllReviews] = useState([]);



    // effect for fetching hero section banners
    useEffect(() => {
        fetchTestimonialsSection()
            .then((data) => {
                // console.log('[servicesWeProvide]', data)
                setAllReviews(data.map(item => {
                    return {
                        "slide_id": item.id,
                        "image": item.reviewer_thumbnail,
                        "review": {
                            "client_name": item.reviewer_title,
                            "company": item.reviewer_company_name,
                            "comment": item.review_text
                        },
                        "service": item.reviewer_service_name
                    }
                }))
            })
            .catch(error => {
                console.error('[error]', error)
            })
    }, []);

    // console.log('[Reviews]', allReviews)



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

                        {/* Thumbnail Slider */}
                        <div className="main-testi-nav slider-nav">
                            <Slider
                                {...settings}
                                ref={thumbnailSliderRef}
                            >
                                {allReviews.length > 0 ? allReviews.map((slide, index) => (
                                    <div key={slide.slide_id} className="box" onClick={() => mainSliderRef.current.slickGoTo(index)}>
                                        <Image src={slide.image} alt={slide.review.company} loading='lazy' width={109} height={109} />
                                    </div>
                                )) : <div>Loading...</div>}
                            </Slider>
                        </div>

                        {/* Main Testimonial Slider */}
                        <div className="main-testi-large-box slider-for">
                            <Slider
                                {...settings1}
                                ref={mainSliderRef}
                            >
                                {allReviews.length > 0 ? allReviews.map(slide => (
                                    <div key={slide.slide_id} className="main-testi-box">
                                        <h4>{slide.review.client_name}</h4>
                                        <h5>{slide.review.company}</h5>
                                        <p>{slide.review.comment}</p>
                                        <h6>{slide.service}</h6>
                                    </div>
                                )) : <div>Loading...</div>}
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
