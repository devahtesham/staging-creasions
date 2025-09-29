"use client";

import React, { memo } from "react";
import Slider from "react-slick";
import Image from "next/image";

import SliderImg1 from '/public/services/web-development/sliderimg01.png';
import SliderImg2 from '/public/services/web-development/sliderimg02.png';
import SliderImg3 from '/public/services/web-development/sliderimg03.png';

// Fallback images in case API doesn't provide images
const fallbackSlideData = [
    {  imgSrc: SliderImg1 },
    { imgSrc: SliderImg2 },
    { imgSrc: SliderImg3 },
];

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
            <Image 
              src={imgSrc} 
              alt="image" 
              className="img-fluid" 
              priority 
              width={400}
              height={300}
              unoptimized={typeof imgSrc === 'string' && imgSrc.startsWith('http')}
            />
        </div>
    </div>
));

GraphicDesigningCard.displayName = 'GraphicDesigningCard';

const Section1 = ({ bannerData }) => {
    // Use API images if available, otherwise fallback to static images
    const slideData = bannerData?.images?.length > 0 
        ? bannerData.images.map(imgUrl => ({ imgSrc: imgUrl }))
        : fallbackSlideData;

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

export default Section1;
