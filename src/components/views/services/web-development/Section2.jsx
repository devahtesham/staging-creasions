"use client";

import React, { memo } from "react";
import Slider from "react-slick";
import Image from "next/image";

import SliderImgA from '/public/services/web-development/soltionsliderimg01.png';
import SliderImgA1 from '/public/services/web-development/soltionsliderimg011.png';
import SliderImgb from '/public/services/web-development/soltionsliderimg02.png';
import SliderImgb1 from '/public/services/web-development/soltionsliderimg022.png';
import SliderImgc from '/public/services/web-development/soltionsliderimg03.png';
import SliderImgc1 from '/public/services/web-development/soltionsliderimg033.png';
import SliderImgd from '/public/services/web-development/soltionsliderimg02.png';
import SliderImgd1 from '/public/services/web-development/soltionsliderimg022.png';

// Fallback data in case API doesn't provide service tabs
const fallbackSlideData = [
  { 
    imgSrc: SliderImgA, 
    icon: SliderImgA1, 
    title: "Ecommerce Development", 
    desc: "We understand the importance of a strong online presence for businesses. That's why we offer expert website development in Dallas, creating high-performing E-Commerce websites tailored to your business needs."
  },
  { 
    imgSrc: SliderImgb, 
    icon: SliderImgb1, 
    title: "Content Management Systems", 
    desc: "We offer custom CMS web development in Dallas to help businesses manage and optimize their website content efficiently."
  },
  { 
    imgSrc: SliderImgc, 
    icon: SliderImgc1, 
    title: "Wordpress Website Development", 
    desc: "At our agency, we specialize in WordPress web development Dallas, delivering responsive and high-performing websites tailored to your brand."
  },
  { 
    imgSrc: SliderImgd, 
    icon: SliderImgd1, 
    title: "Front-End Website", 
    desc: "We are committed to providing our clients with exceptional front-end website development Dallas services that represent their brand in the best possible light."
  },
  { 
    imgSrc: SliderImgc, 
    icon: SliderImgc1, 
    title: "Back-End Website", 
    desc: "We pride ourselves on providing expert back-end web development Dallas solutions to our esteemed clients."
  },
];

const sliderSettings2 = {
  infinite: true,
  speed: 3000,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: "linear",
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

const ServiceCard2 = memo(({ imgSrc, icon, title, desc }) => (
    <div className="box">
      <div className="imageBox">
        <Image 
          src={imgSrc} 
          alt="service image" 
          priority 
          width={300}
          height={200}
          unoptimized={typeof imgSrc === 'string' && imgSrc.startsWith('http')}
        />
        <div className="twobox">
          <Image 
            src={icon} 
            alt="service icon" 
            priority 
            width={50}
            height={50}
            unoptimized={typeof icon === 'string' && icon.startsWith('http')}
          />
          <h3>{title}</h3>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
));

ServiceCard2.displayName = 'ServiceCard2';

const Section2 = ({ serviceTabsData }) => {
    // Use API data if available, otherwise fallback to static data
    const slideData = serviceTabsData?.tabs?.length > 0 
        ? serviceTabsData.tabs.map(tab => ({
            imgSrc: tab.image || SliderImgA,
            icon: tab.icon || SliderImgA1,
            title: tab.heading,
            desc: tab.text
        }))
        : fallbackSlideData;

    const sectionHeading = serviceTabsData?.section_heading || "What Web Solution Do You Need?";

    return (
        <section className="web-sec-servicesslider-two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h2>{sectionHeading}</h2>
                        </div>
                        <Slider {...sliderSettings2}>
                            {slideData.map((slide, index) => (
                                <ServiceCard2
                                    key={index}
                                    imgSrc={slide.imgSrc}
                                    icon={slide.icon}
                                    title={slide.title}
                                    desc={slide.desc}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
