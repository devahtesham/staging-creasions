"use client";
import React from 'react';
import Slider from 'react-slick';


import Ratings from '/public/services/virtual-employees/ve-testimonial-ratings.png'


const clients = [
    {
        name: 'Nathan Reynolds',
        testimonial:
            "Creasions truly stands out as a top graphic design agency in Dallas! They designed our tech company’s branding and UI/UX graphics, making our website more engaging and professional.",
        position: 'Synergy Tech',
        imgSrc: Ratings.src
    },
    {
        name: 'David Johnson',
        testimonial:
            "We needed a creative graphic agency in Dallas to design retail T-shirts. Creasions delivered eye-catching graphics that boosted our sales!",
        position: 'RPP Outdoors',
        imgSrc: Ratings.src
    },
    {
        name: 'Brandon Scott',
        testimonial:
            "The best graphic agencies in Dallas understand branding—and Creasions nailed it! Our bank logo and brand identity now look premium and trustworthy",
        position: 'COBRA Funds',
        imgSrc: Ratings.src
    },
    {
        name: 'Jacob Lewis',
        testimonial:
            "From brochure design to digital branding, Creasions transformed our agricultural business into a recognizable brand. Their graphic strategy services in Dallas are worth every penny!",
        position: 'Growing Green Agriculture',
        imgSrc: Ratings.src
    },
    {
        name: 'Sarah Thompson',
        testimonial:
            "Creasions’ graphic agency services in Dallas helped us design stunning packaging for our food products. Their attention to detail and creative approach were impressive!",
        position: 'Global Cranberries',
        imgSrc: Ratings.src
    },
    {
        name: 'Michael Rodriguez',
        testimonial:
            "We hired Creasions for our financial consulting logo design. Their team provided multiple design options and refined them based on our feedback. A truly best creative graphic agency in Dallas!",
        position: 'Fundebt Latam',
        imgSrc: Ratings.src
    },
    {
        name: 'Emily Carter',
        testimonial:
            "As a construction firm, we needed business graphic services in Dallas for our brochures and marketing materials. Creasions delivered professional designs that elevated our brand presence.",
        position: ' Design & Build Solutions',
        imgSrc: Ratings.src
    },
];

const Testimonials = () => {
    const settings1 = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: false,
        centerMode: true,
        speed: 1500,
        autoplaySpeed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="sec-05">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="text let text-center header">
                            <h4>Meet Our Top Clients</h4>
                            <p>Explore some of the clients we&apos;ve assisted!</p>
                        </div>
                    </div>
                </div>

                <Slider {...settings1} className="virtual-slide">
                    {clients.map((client, index) => (
                        <div key={index} className="col-lg-4">
                            <div className="testim-box">
                                <div className="text">
                                    <h4>{client.name}</h4>
                                    <h6>{client.position}</h6>
                                    <p>{client.testimonial}</p>
                                    {/* <img
                                        src={client.imgSrc}
                                        alt={`${client.name} testimonial`}
                                        className="img-fluid"
                                    /> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
