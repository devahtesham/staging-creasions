"use client";
import React from 'react';
import Slider from 'react-slick';


import Ratings from '/public/services/virtual-employees/ve-testimonial-ratings.png'


const clients = [
    {
        name: 'John M.',
        testimonial:
            "Creasions helped us optimize our Google Business Profile and listings. Our calls and foot traffic doubled in just two months!",
        position: 'Dallas Auto Experts',
        imgSrc: Ratings.src
    },
    {
        name: 'Sarah L.',
        testimonial:
            "We had incorrect business listings everywhere! Creasions fixed everything and got us ranking higher on Google.",
        position: 'Texas Roofing Solutions',
        imgSrc: Ratings.src
    },
    {
        name: 'Mike T.',
        testimonial:
            "Best listing management company in Dallas! Our business info is now accurate across Google, Yelp, Facebook, and more.",
        position: 'Metro Movers',
        imgSrc: Ratings.src
    },
    {
        name: 'Lisa R.',
        testimonial:
            "We struggled with duplicate listings and bad NAP data. Creasions cleaned up everything and boosted our local SEO.",
        position: 'Green Leaf HVAC',
        imgSrc: Ratings.src
    },
    {
        name: 'Ashley B.',
        testimonial:
            "They made our business voice-search-ready! We’re now appearing on Alexa and Google Assistant searches.",
        position: 'Dallas Pet Grooming',
        imgSrc: Ratings.src
    },
    {
        name: 'David N.',
        testimonial:
            "From setup to optimization, Creasions handled everything. Our Dallas location now dominates local search results!",
        position: 'Luxe Interiors',
        imgSrc: Ratings.src
    },
];

const Testimonials = () => {
    const settings1 = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
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
        <section className="sec-7">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="text let text-center">
                            <h2>Meet Our Top Clients</h2>
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
                                    <p>{client.testimonial}</p>
                                    <h6>{client.position}</h6>
                                    <img
                                        src={client.imgSrc}
                                        alt={`${client.name} testimonial`}
                                        className="img-fluid"
                                    />
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
