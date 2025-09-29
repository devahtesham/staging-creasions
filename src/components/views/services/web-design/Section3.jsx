"use client";
import React, { memo } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import sectionbg from '/public/services/web-design/web-desgn-section-03-bg.png'
import sectionoverlay from '/public/services/web-design/web-desgn-section-03-overlay.png'
import SliderImg1 from '/public/services/web-design/slider01.png';
import SliderImg2 from '/public/services/web-design/slider02.png';
import SliderImg3 from '/public/services/web-design/slider03.png';
import SliderImg4 from '/public/services/web-design/slider04.png';
import SliderImg5 from '/public/services/web-design/slider05.png';

const slideData = [
    {  imgSrc: SliderImg1,
        heading: "User Interface(UI) Design",
        text:"As a premier provider of User Interface (UI) Design services, Creasions specializes in creating visually appealing and easy-to-use digital applications. Our team of highly-skilled professionals possesses intimate knowledge of the latest design trends and best practices, enabling them to craft bespoke UI solutions. Our User Interface (UI) Designers are committed to delivering UI experiences that inspire, engage, and delight users."
     },
    { imgSrc: SliderImg2,
        heading: "User Experience (UX) Design",
        text:"In today's digital landscape, User Experience (UX) Design has become an integral part of creating successful products and services for businesses. We are proud to provide top-of-the-line User Experience (UX) Design services that ensure your customers will enjoy a smooth and enjoyable journey through your product. Our expert User Experience (UX) Designers specialize in developing interfaces that are intuitive, engaging, & easy to navigate."
     },
    { imgSrc: SliderImg3,
        heading: "Responsive Design",
        text:"With our responsive web design services, we make sure that your website looks great on any device, whether it's a smartphone, tablet, or a desktop computer. Our responsive web designs are a testament to our creativity, energy, and minimalistic approach, leading to better engagement and a higher conversion rate."
     },
    { imgSrc: SliderImg4,
        heading: "UI Animation",
        text:"Our team of talented UI animation designers are experts in creating creative and energetic animations that are not only visually stunning but also help in conveying messages and guiding users through a website or mobile app. From conceptualization to execution, our UI animation services are aimed at revolutionizing your online presence by injecting an extra dose of creativity and animation to your design."
     },
    { imgSrc: SliderImg5,
        heading: "Ecommerce Website Design",
        text:"With a dedicated focus on Ecommerce solutions, Creasions understands the unique requirements of businesses seeking to thrive in the digital marketplace. With cutting-edge Ecommerce web design services, we understand the intricate nuances of the online retail landscape, ensuring that each Ecommerce site is optimized for a seamless shopping experience."
     },
];

const sliderSettings = {
    infinite: false,
    speed: 1500,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const WebsiteDesignService = memo(({imgSrc, text, heading }) => (
    <div className="col-lg-12">
        <div className="box">
            <Image src={imgSrc} alt="image" className="img-fluid "  priority />
            <h5>{heading}</h5>
            <p>{text}</p>
        </div>
    </div>
));

WebsiteDesignService.displayName = 'WebsiteDesignService';

export default function Section3() {
    return (
        <section className="web-sec-3" style={{backgroundImage:`url(${sectionbg.src})`}}>
            <Image src={sectionoverlay} alt='image' className='bootomImage'/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h2>Web design Services</h2>
                            <p>Creasions emerges as a distinguished provider of exceptional web design services, featuring a team of highly skilled and creative website designers. Renowned for its commitment to delivering excellence, Creasions crafts visually appealing and functionally robust websites that seamlessly blend aesthetics with user experience.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-12 slider">
                    <Slider {...sliderSettings}>
                        {slideData.map((slide, index) => (
                            <WebsiteDesignService
                                key={index}
                                imgSrc={slide.imgSrc}
                                heading={slide.heading}
                                text={slide.text}
                            />
                        ))}
                    </Slider>
                </div>
                </div>
            </div>
        </section>
    )
}
