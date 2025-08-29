"use client";
import React from 'react'

import { useState } from "react";

import Image from "next/image";


import CardImg1 from "/public/services/graphic-designing/gd-sec03-card01.png";
import CardImg2 from "/public/services/graphic-designing/gd-sec03-card02.png";
import CardImg3 from "/public/services/graphic-designing/gd-sec03-card03.png";


export default function Section3() {
    const [activeTab, setActiveTab] = useState("tabs-1");

    const services = [
        {
            id: "tabs-1",
            title: "Branding & Identity",
            cards: [
                {
                    id: 1,
                    image: CardImg1,
                    title: "Logo Design",
                    subTitle: "Stand Out with a Custom Logo",
                    description: "A great logo is the cornerstone of any brand. As a top graphic agency in Dallas, we create visually compelling, memorable logos that define your business and resonate with your audience. Whether you're a startup or an established brand, our graphic design services in Dallas ensure a strong visual impact.",
                },
                {
                    id: 2,
                    image: CardImg2,
                    title: "Business Card Design",
                    subTitle: "Make a Lasting First Impression",
                    description: "Your business card is a reflection of your brand. Our graphic agency in Dallas crafts professional, unique business card designs that leave a lasting impression and reinforce your brand’s identity.",
                },
                {
                    id: 3,
                    image: CardImg3,
                    title: "Letterhead & Stationery",
                    subTitle: "Establish Brand Consistency",
                    description: "A consistent brand identity builds credibility. Our graphic creative agency in Dallas designs custom letterheads, envelopes, and other stationery to create a unified, professional image for your company.",
                },
            ]
        },
        {
            id: "tabs-2",
            title: "Marketing & Print Materials",
            cards: [
                {
                    id: 1,
                    image: CardImg1,
                    title: "Brochures & Flyers",
                    subTitle: "Capture Attention with Compelling Designs",
                    description: "Well-designed brochures and flyers are essential marketing tools. Our graphic design agency services in Dallas create visually appealing and informative marketing materials to boost engagement and drive customer action.",
                },
                {
                    id: 2,
                    image: CardImg2,
                    title: "Packaging Design",
                    subTitle: "Elevate Your Product Appeal",
                    description: "Your product's packaging speaks volumes about your brand. As a best creative graphic agency in Dallas, we design innovative packaging solutions that not only protect your product but also enhance its shelf appeal.",
                },
                {
                    id: 3,
                    image: CardImg3,
                    title: "Billboards & Banners",
                    subTitle: "High-Impact Visuals for Maximum Reach",
                    description: "Outdoor advertising requires bold, striking visuals. Our graphic solutions in Dallas include eye-catching billboards and banners that effectively capture attention and strengthen brand awareness.",
                },
            ]
        },
        {
            id: "tabs-3",
            title: "Digital Design Solutions",
            cards: [
                {
                    id: 1,
                    image: CardImg1,
                    title: "Website & UI/UX Design",
                    subTitle: "Sleek, Modern, and Conversion-Driven",
                    description: "A well-designed website is crucial for digital success. Our digital graphic agency in Dallas specializes in designing user-friendly, aesthetically pleasing websites that enhance user experience and drive conversions.",
                },
                {
                    id: 2,
                    image: CardImg2,
                    title: "Social Media Graphics",
                    subTitle: "Engaging Visuals for Online Presence",
                    description: "Stand out on social media with custom graphics tailored to your brand. Our creative graphic agencies in Dallas develop visually appealing content optimized for platforms like Facebook, Instagram, and LinkedIn.",
                },
                {
                    id: 3,
                    image: CardImg3,
                    title: "Presentation & Infographic Design",
                    subTitle: "Communicate Ideas Effectively",
                    description: "Convey complex information through compelling visuals. Our graphic development services in Dallas create high-quality presentations and infographics that simplify data and enhance audience engagement.",
                },
            ]
        },
        {
            id: "tabs-4",
            title: "Custom Graphic Solutions",
            cards: [
                {
                    id: 1,
                    image: CardImg1,
                    title: "B2B Graphic Agency Services",
                    subTitle: "Corporate & Professional Design Needs",
                    description: "Businesses need professional, high-quality design to maintain credibility. Our B2B graphic agency in Dallas delivers corporate branding, business presentations, and marketing materials that align with your professional image.",
                },
                {
                    id: 2,
                    image: CardImg2,
                    title: "Creative Graphic Agencies",
                    subTitle: "Unique, Innovative, and Trend-Driven",
                    description: "For brands seeking a creative graphic agency in Dallas, we bring fresh, unique design solutions tailored to modern trends, ensuring your brand remains relevant and visually appealing.",
                },
                {
                    id: 3,
                    image: CardImg3,
                    title: "Graphic Strategy Services",
                    subTitle: "Data-Backed Visual Branding Strategies",
                    description: "Great design is more than aesthetics—it’s about strategy. Our graphic strategy services in Dallas focus on aligning design with business goals, ensuring each visual element strengthens your brand identity and marketing efforts.",
                },
            ]
        },
    ];

    const handleTabChange = (id) => {
        setActiveTab(id);
    };

    return (
        <section className='sec-03'>
            <div className="bg">
                <div class="blur-circle-1"></div>
                <div class="blur-circle-2"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Comprehensive<br />Graphic Design Services In Dallas</h2>
                        <p>We are a full-service graphic design agency in Dallas, offering a wide range of solutions:</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">

                        <ul className="nav nav-tabs" >
                            {services.map((service) => (
                                <li
                                    key={service.id}
                                    className={`nav-item ${activeTab === service.id ? "active" : ""}`}
                                >
                                    <a
                                        className={`nav-link ${activeTab === service.id ? "active show" : ""}`}
                                        onClick={() => handleTabChange(service.id)}
                                        role="tab"
                                    >
                                        {service.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="tab-content brand-mobile-slider">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className={`tab-pane ${activeTab === service.id ? "active show" : ""}`}
                                    id={service.id}
                                    role="tabpanel"
                                >
                                    <div className="row align-items-center justify-content-stretch cards-row">
                                        <div className="col-lg-3">
                                            <div className="card card-blur-bg-1">
                                                <Image src={service.cards[0].image} alt={service.cards[0].title} className="card-img-top" />
                                                <h5 className="card-title">{service.cards[0].title}</h5>
                                                <p className="card-subtitle">{service.cards[0].subTitle}</p>
                                                <p className="card-text">{service.cards[0].description}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="card card-blur-bg-1">
                                                <Image src={service.cards[1].image} alt={service.cards[1].title} className="card-img-top" />
                                                <h5 className="card-title">{service.cards[1].title}</h5>
                                                <p className="card-subtitle">{service.cards[1].subTitle}</p>
                                                <p className="card-text">{service.cards[1].description}</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="card card-blur-bg-1">
                                                <Image src={service.cards[2].image} alt={service.cards[2].title} className="card-img-top" />
                                                <h5 className="card-title">{service.cards[2].title}</h5>
                                                <p className="card-subtitle">{service.cards[2].subTitle}</p>
                                                <p className="card-text">{service.cards[2].description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
