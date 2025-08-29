"use client";

import React from 'react';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import Image from 'next/image';


import SecImg1 from '/public/services/virtual-employees/ve-sec09-Slider01.png'
import SecImg2 from '/public/services/virtual-employees/ve-sec09-Slider02.png'
import SecImg3 from '/public/services/virtual-employees/ve-sec09-Slider03.png'
import SecImg4 from '/public/services/virtual-employees/ve-sec09-Slider04.png'
import SecImg5 from '/public/services/virtual-employees/ve-sec09-Slider05.png'



const Section9 = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <section className="virtual-sec-8">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="text let text-center">
                                <h2>Top Notch Clients</h2>
                                <p>Get to know some of the clients our team has helped!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="clients-slide">
                                <Slider {...settings}>
                                    <Image
                                        src={SecImg1}
                                        alt="Client 1"
                                        className="img-fluid"

                                    />
                                    <Image
                                        src={SecImg2}
                                        alt="Client 2"
                                        className="img-fluid"

                                    />
                                    <Image
                                        src={SecImg3}
                                        alt="Client 3"
                                        className="img-fluid"

                                    />
                                    <Image
                                        src={SecImg4}
                                        alt="Client 4"
                                        className="img-fluid"

                                    />

                                    <Image
                                        src={SecImg5}
                                        alt="Client 5"
                                        className="img-fluid"
                                    />
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="virtual-video">
                <video
                    src="/video/ve-sec09-bg.webm"
                    muted
                    autoPlay
                    loop
                />
            </div>

            <section className="virtual-sec-10 gradian-bg">
                <div className="container">
                    <div className="row align-items-cente">
                        <div className="col-lg-12">
                            <div id="counter ">
                                <div className="row justify-content-center">
                                    <div className="text box-1 col-lg-4 col-md-6">
                                        <h2 className="count">
                                            <CountUp start={0} end={15} duration={5} />+ Years
                                        </h2>
                                        <p className="text">Market Experience</p>
                                    </div>
                                    <div className="text box-2 col-lg-3 col-md-6">
                                        <h2 className="count" data-number={4600}>
                                            <CountUp start={0} end={4600} duration={4} />+
                                        </h2>
                                        <p className="text">Projects DONE</p>
                                    </div>
                                    <div className="text box-3 col-lg-2 col-md-6">
                                        <h2 className="count" data-number={10}>
                                            <CountUp start={0} end={10} duration={2} />+
                                        </h2>
                                        <p className="text">Locations</p>
                                    </div>
                                    <div className="text box-4 col-lg-3 col-md-6">
                                        <h2 className="count" data-number={1840}>
                                            <CountUp start={0} end={1840} duration={3} />+
                                        </h2>
                                        <p className="text">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Section9;
