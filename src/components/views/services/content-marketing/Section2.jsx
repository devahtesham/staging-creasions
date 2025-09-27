"use client";

import React, { memo } from "react";
import Slider from "react-slick";
import Image from "next/image";

import SliderImg1 from '/public/services/content-marketing/sliderimg01.png';
import SliderImg2 from '/public/services/content-marketing/sliderimg02.png';
import SliderImg3 from '/public/services/content-marketing/sliderimg03.png';

const getSlideData = (achievementsData) => {
    if (achievementsData?.image && Array.isArray(achievementsData.image)) {
        return achievementsData.image.map(feature => ({
            imgSrc: feature ? feature : SliderImg1
        }));
    }
    
    return [
        { imgSrc: SliderImg1 },
        { imgSrc: SliderImg2 },
        { imgSrc: SliderImg3 },
    ];
};

const sliderSettings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 500,
    slidesToShow: 3,
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
            {typeof imgSrc === 'string' ? (
                <img src={imgSrc} className="img-fluid" alt="Content Marketing" />
            ) : (
                <Image src={imgSrc} className="img-fluid" priority alt="Content Marketing" />
            )}
        </div>
    </div>
));

GraphicDesigningCard.displayName = 'GraphicDesigningCard';

const Section2 = ({ standOutData }) => {
    const slideData = getSlideData(standOutData);

    return (
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
};

export default Section2;
