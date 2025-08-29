"use client";

import React, { memo } from "react";
import Slider from "react-slick";
import Image from "next/image";

import SliderImg1 from '/public/services/graphic-designing/gd-sec04-01.png';
import SliderImg2 from '/public/services/graphic-designing/gd-sec04-02.png';
import SliderImg3 from '/public/services/graphic-designing/gd-sec04-03.png';
import SliderImg4 from '/public/services/graphic-designing/gd-sec04-04.png';
import SliderImg5 from '/public/services/graphic-designing/gd-sec04-05.png';
import SliderImg6 from '/public/services/graphic-designing/gd-sec04-06.png';


const slideData = [
    { title: "Corporate & Business", imgSrc: SliderImg1 },
    { title: "Construction", imgSrc: SliderImg2 },
    { title: "Tech & SaaS", imgSrc: SliderImg3 },
    { title: "eCommerce", imgSrc: SliderImg4 },
    { title: "Art & Entertainment", imgSrc: SliderImg5 },
    { title: "Local Businesses", imgSrc: SliderImg6 },
];

const sliderSettings = {
    infinite: true,
    speed: 500,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
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

const GraphicDesigningCard = memo(({ title, imgSrc }) => (
    <div className="col-lg-12">
        <div className="box">
            <Image src={imgSrc} className="img-fluid" alt={title} priority />
            <div className="text">
                <h4>{title}</h4>
            </div>
        </div>
    </div>
));

GraphicDesigningCard.displayName = 'GraphicDesigningCard';

const Section4 = () => (
    <section className="sec-04">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header">
                        <h4>INDUSTRIES WE SERVE</h4>
                        <p>From startups to established enterprises, our graphic creative agency in Dallas caters to various industries</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid p-0">
            <div className="row slider">
                <Slider {...sliderSettings}>
                    {slideData.map((slide, index) => (
                        <GraphicDesigningCard
                            key={index}
                            title={slide.title}
                            imgSrc={slide.imgSrc}
                            description={slide.description}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    </section>
);

export default Section4;
