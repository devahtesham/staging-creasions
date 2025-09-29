"use client";

import React, { memo, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import SliderImg1 from "/public/services/digital-marketing/testiSlider01.png";
import SliderImg2 from "/public/services/digital-marketing/testiSlider02.png";
import SliderImg3 from "/public/services/digital-marketing/testiSlider03.png";

// Fallback data in case API doesn't provide info cards
const fallbackSlideData = [
  {
    imgSrc: SliderImg1,
    heading: "Digital Marketing Plan",
    text: "Crea​sions presents a comprehensive Digital Marketing Plan with a strategic focus on enhancing online visibility and engagement within the USA market. Our SEO Services in the USA are designed to optimize website content and structure, ensuring a strong presence in local search results through targeted keywords. With SMM Services in the USA, we leverage popular social media platforms to build brand awareness and interaction, crafting engaging content for the American audience. Our SEM Services in the USA encompass paid search campaigns, emphasizing relevant keywords for the USA market, while our PPC Services in the USA involve strategic ad campaigns on platforms like Google Ads and Bing Ads.",
  },
  {
    imgSrc: SliderImg2,
    heading: "Why Choose Creasions for Digital Marketing Benefits?",
    text: "Choose Creasions as your digital marketing partner for unparalleled benefits that redefine success in the digital landscape. As the best digital marketing company, we offer budget-friendly digital marketing services, providing you with an affordable marketing plan tailored to your specific needs. Our commitment to transparency is reflected in our complimentary website audit, offering valuable insights to kickstart your digital journey. We stand out as a versatile advertising company, employing a dynamic and creative approach to amplify your brand's presence. At Creasions, we function as more than just a digital agency; our working pattern is meticulously aligned with empowering you to build and establish your brand identity in the online realm.",
  },
  {
    imgSrc: SliderImg3,
    heading: "Trade promotion management software",
    text: "Crea​sions introduces cutting-edge Trade Promotion Management (TPM) software, revolutionizing the way businesses strategize, execute, and optimize their promotional activities. Our TPM solution is a comprehensive platform designed to streamline and enhance the entire trade promotion process. With advanced features for planning, budgeting, and analyzing promotional campaigns, our software empowers businesses to make data-driven decisions, maximize ROI, and achieve greater visibility into promotional effectiveness.",
  },
];

const WebsiteDesign = memo(({ imgSrc, heading, text }) => (
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
      <div className="text">
        <h4>{heading}</h4>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  </div>
));

// custom arrow components
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={`${className} slide-arrow prev-arrow`} onClick={onClick}>
      <svg
        width="34"
        height="26"
        viewBox="0 0 34 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.7936 25.2552L0.375 12.8366L12.7936 0.417969L15.6913 3.41913L8.34361 10.7668H33.4913V14.9063H8.34361L15.6913 22.254L12.7936 25.2552Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={`${className} slide-arrow next-arrow`} onClick={onClick}>
      <svg
        width="34"
        height="26"
        viewBox="0 0 34 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.307 25.2552L18.4094 22.254L25.7571 14.9063H0.609375V10.7668H25.7571L18.4094 3.41913L21.307 0.417969L33.7257 12.8366L21.307 25.2552Z"
          fill="white"
        />
      </svg>
    </button>
  );
};


WebsiteDesign.displayName = "WebsiteDesign";

const Section2 = ({ infoCardsData }) => {
  // Use API data if available, otherwise fallback to static data
  const slideData = infoCardsData?.cards?.length > 0 
    ? infoCardsData.cards.map(card => ({
        imgSrc: card.image || fallbackSlideData[0].imgSrc,
        heading: card.heading,
        text: card.content
      }))
    : fallbackSlideData;

  const [current, setCurrent] = useState(1);
  const totalSlides = slideData.length;
  const sectionHeading = infoCardsData?.section_heading || "Your Growth Partner in Strategic Digital Marketing";

  const sliderSettings = {
    infinite: true,
    speed: 1000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    fade: true,
    afterChange: (index) => setCurrent(index + 1),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="section-02">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h4>{sectionHeading}</h4>
            </div>
          </div>
          <div className="col-lg-12 slider">
            <Slider {...sliderSettings}>
              {slideData.map((slide, index) => (
                <WebsiteDesign
                  key={index}
                  imgSrc={slide.imgSrc}
                  heading={slide.heading}
                  text={slide.text}
                />
              ))}
            </Slider>
            <div className="customDotNumbers">
              {current}/{totalSlides}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
