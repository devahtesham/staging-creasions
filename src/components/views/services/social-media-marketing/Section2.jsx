"use client";

import React, { memo } from "react";
import Slider from "react-slick";
import Image from "next/image";

import SliderImg1 from '/public/services/social-media-marketing/sliderimg01.png';
import SliderImg2 from '/public/services/social-media-marketing/sliderimg02.png';
import SliderImg3 from '/public/services/social-media-marketing/sliderimg03.png';
import SliderImg4 from '/public/services/social-media-marketing/sliderimg04.png';


const slideData = [
    {  imgSrc: SliderImg1 },
    { imgSrc: SliderImg2 },
    { imgSrc: SliderImg3 },
    {imgSrc: SliderImg4 },
];

const sliderSettings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0.1,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const GraphicDesigningCard = memo(({imgSrc }) => (
    <div className="col-lg-12">
        <div className="box">
            <Image src={imgSrc} className="img-fluid "  priority />
        </div>
    </div>
));

GraphicDesigningCard.displayName = 'GraphicDesigningCard';

const Section2 = () => (
    <section className="section-02">
        <div className="container-fluid p-0">
            <div className="row slider">
                <Slider {...sliderSettings}>
                    {slideData.map((slide, index) => (
                        <GraphicDesigningCard
                            key={index}
                            imgSrc={slide.imgSrc}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    </section>
);

export default Section2;
