"use client";

import React, { memo } from "react";
import Slider from "react-slick";
import Image from "next/image";

import SliderImg1 from '/public/services/digital-marketing/dm-sec01-01.png';
import SliderImg2 from '/public/services/digital-marketing/dm-sec01-02.png';
import SliderImg3 from '/public/services/digital-marketing/dm-sec01-03.png';
import SliderImg4 from '/public/services/digital-marketing/dm-sec01-04.webp';
import SliderImg5 from '/public/services/digital-marketing/dm-sec01-05.webp';
import SliderImg6 from '/public/services/digital-marketing/dm-sec01-06.png';
import SliderImg7 from '/public/services/digital-marketing/dm-sec01-07.png';
import SliderImg8 from '/public/services/digital-marketing/dm-sec01-08.png';

const slideData = [
  { title: "Law", imgSrc: SliderImg1, description: "Establish your law firm as a trusted authority with Creasions’ strategic digital marketing. Our polished websites and targeted strategies strengthen your online presence and attract clients." },
  { title: "Real estate", imgSrc: SliderImg2, description: "Showcase your properties with Creasions’ dynamic digital marketing. We create stunning websites and effective campaigns to attract buyers, sellers, and investors." },
  { title: "Fashion", imgSrc: SliderImg3, description: "Make a statement in the fashion world with Creasions’ creative digital marketing. Our visually striking websites and innovative campaigns elevate your brand and engage your audience." },
  { title: "Automobile", imgSrc: SliderImg4, description: "Drive success in the automotive industry with Creasions’ tailored digital marketing. We create dynamic websites and effective campaigns to attract car enthusiasts and boost sales." },
  { title: "Other", imgSrc: SliderImg5, description: "Whatever your industry, Creasions offers personalized digital marketing solutions. Let us bring your vision to life and achieve meaningful results for your business." },
  { title: "Health", imgSrc: SliderImg6, description: "Boost your healthcare brand’s online presence with Creasions’ tailored digital marketing. We create captivating websites and targeted campaigns to connect with patients and showcase your expertise." },
  { title: "Ecommerce", imgSrc: SliderImg7, description: "Scale your online store with Creasions’ personalized digital marketing. From optimized product pages to effective ads, we help drive more sales and grow your business." },
  { title: "Food", imgSrc: SliderImg8, description: "Entice your audience with Creasions engaging digital marketing solutions. We craft mouthwatering websites and compelling campaigns for restaurants, delivery services, and culinary brands." }
];

const sliderSettings = {
  infinite: true,
  speed: 500,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      },
    },
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

const DigitalMarketingCard = memo(({ title, imgSrc, description }) => (
  <div className="col-lg-12">
    <div className="box">
      <Image src={imgSrc} className="img-fluid" alt={title} priority/>
      <div className="text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  </div>
));

DigitalMarketingCard.displayName = 'DigitalMarketingCard';

const Section1 = () => (
  <section className="digital-sec-1">
    <div className="container-fluid p-0">
      <div className="row digital-marketing">
        <Slider {...sliderSettings}>
          {slideData.map((slide, index) => (
            <DigitalMarketingCard
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

export default Section1;
