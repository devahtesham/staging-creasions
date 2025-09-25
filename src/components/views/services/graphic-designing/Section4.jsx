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


const getSlideData = (industriesData) => {
    if (industriesData?.industries && Array.isArray(industriesData.industries)) {
        return industriesData.industries.map((industry, index) => ({
            title: industry?.title || '',
            imgSrc: industry?.image_url || ''
        }));
    }
    return [];
};

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
            {typeof imgSrc === 'string' ? (
                <img src={imgSrc} className="img-fluid" alt={title} />
            ) : (
                <Image src={imgSrc} className="img-fluid" alt={title} priority />
            )}
            <div className="text">
                <h4>{title}</h4>
            </div>
        </div>
    </div>
));

GraphicDesigningCard.displayName = 'GraphicDesigningCard';

const Section4 = ({ industriesData }) => {
    const slideData = getSlideData(industriesData);
    
    // Don't render if no data
    if (!slideData || slideData.length === 0) {
        return null;
    }
    
    return (
        <section className="sec-04">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header">
                        <h4>{industriesData?.section_heading || "INDUSTRIES WE SERVE"}</h4>
                        <p>{industriesData?.content?.replace(/<[^>]*>/g, '') || "From startups to established enterprises, our graphic creative agency in Dallas caters to various industries"}</p>
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
}

export default Section4;
