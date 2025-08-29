"use client";
import React from 'react'
import Slider from 'react-slick'

import Image from 'next/image'

import Category1Img from '/public/services/new-virtual-employees/ve-sec04-01.png'
import Category2Img from '/public/services/new-virtual-employees/ve-sec04-02.png'
import Category3Img from '/public/services/new-virtual-employees/ve-sec04-03.png'
import Category4Img from '/public/services/new-virtual-employees/ve-sec04-04.png'
import Category5Img from '/public/services/new-virtual-employees/ve-sec04-05.png'
import Category6Img from '/public/services/new-virtual-employees/ve-sec04-06.png'
import Category7Img from '/public/services/new-virtual-employees/ve-sec04-07.png'

export default function Section5() {
    var challenges = [
        {
            title: "Google Business Profile Optimization",
            image: Category1Img,
        },
        {
            title: "Yelp & Bing Local Listings Management",
            image: Category2Img,
        },
        {
            title: "NAP Consistency and Local SEO Audits",
            image: Category3Img,
        },
        {
            title: "Business Citation Cleanup and Management",
            image: Category4Img,
        },
        {
            title: "Multi-Location Business Listings",
            image: Category5Img,
        },
    ]

    var settings = {
        dots: false,
        arrows: false,
        draggable: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 200,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]

    };

    return (
        <section className="sec-04">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Certified & Experienced in</h2>
                        <div className="main-logo-slider-box">
                            <Slider {...settings} className="logo-slider">
                                {challenges.map((challenge, index) => (
                                    <div key={index} className="box card-blur-bg-2">
                                        <Image loading="lazy" src={challenge.image} alt={challenge.title} />
                                        <h3>{challenge.title}</h3>
                                    </div>
                                ))}
                            </Slider>

                        </div>

                        <p>
                        Let&apos;s optimize your business presence
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
