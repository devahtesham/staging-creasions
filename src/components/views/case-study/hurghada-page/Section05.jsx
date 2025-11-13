// "use client";
// import React, { memo } from "react";
import Image from 'next/image'
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import imagegallery01 from '/public/hurghada-image/image-gallery-01.png'
import imagegallery02 from '/public/hurghada-image/image-gallery-02.png'
import imagegallery03 from '/public/hurghada-image/image-gallery-03.png'
import imagegallery04 from '/public/hurghada-image/image-gallery-04.png'
import imagegallery05 from '/public/hurghada-image/image-gallery-05.png'
// import testimonialBg from '/public/hurghada-image/testimonialBg.png'
// import qouteimg from '/public/hurghada-image/qouteimg.png'

// const slideData = [
//     { 
//      testitext: "The new Hurghada.com captures everything we wanted — beauty, ease of use, and modern features. It truly represents the spirit of Hurghada and serves tourists better than ever before." 
//     },
//     { 
//      testitext: "The new Hurghada.com captures everything we wanted — beauty, ease of use, and modern features. It truly represents the spirit of Hurghada and serves tourists better than ever before." 
//     },
//     { 
//      testitext: "The new Hurghada.com captures everything we wanted — beauty, ease of use, and modern features. It truly represents the spirit of Hurghada and serves tourists better than ever before." 
//     },
// ];

// const sliderSettings = {
//     infinite: true,
//     speed: 3000,
//     arrows: false,
//     dots: false,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// };

// const TestiSLiderSingle = memo(({testitext }) => (
//     <div className="TestiSLiderSingle">
//         <p><Image src={qouteimg} alt="image"/>{testitext}<Image src={qouteimg} alt="image"/></p>
//     </div>
// ));

// TestiSLiderSingle.displayName = 'TestiSLiderSingle';

const Section05 = () => (

    <section className="section05">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="GalleryImageBox">
                        <Image src={imagegallery01} alt="image" />
                        <Image src={imagegallery02} alt="image" />
                        <Image src={imagegallery03} alt="image" />
                        <Image src={imagegallery04} alt="image" />
                        <Image src={imagegallery05} alt="image" />
                    </div>
                </div>
            </div>
            {/* <div className="testiMonialSlider" style={{backgroundImage:`url(${testimonialBg.src})`}}>
                    <h2>Client Testimonial</h2>
                    <div className="testimonialSLiderMain">
                        <Slider
                            {...sliderSettings}
                        >
                                {slideData.map((slide, index) => (
                                <TestiSLiderSingle
                                    key={index}
                                    testitext={slide.testitext}
                                />
                            ))}
                        </Slider>
                </div>
            </div> */}
        </div>
    </section>
  )

export default Section05;
