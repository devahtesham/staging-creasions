"use client";
import React from 'react'

import { useState } from "react";

import Image from "next/image";


import CardImg1 from "/public/services/graphic-designing/gd-sec03-card01.png";
import CardImg2 from "/public/services/graphic-designing/gd-sec03-card02.png";
import CardImg3 from "/public/services/graphic-designing/gd-sec03-card03.png";


export default function Section3({ servicesData }) {
    const [activeTab, setActiveTab] = useState("tabs-1");

    // Transform API data to component format or use fallback
    const transformedServices = servicesData?.services ? servicesData.services.map((service, index) => ({
        id: `tabs-${index + 1}`,
        title: service.title,
        cards: service.sub_services.map((subService, subIndex) => ({
            id: subIndex + 1,
            image: subService.icon_url ? subService.icon_url : "",
            title: subService.title,
            subTitle: subService.section_span,
            description: subService.content?.replace(/<[^>]*>/g, '') || '',
        }))
    })) : []

    const services = transformedServices;

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
                        <h2>{servicesData?.section_heading || "Comprehensive Graphic Design Services In Dallas"}</h2>
                        <p>{servicesData?.content?.replace(/<[^>]*>/g, '') || "We are a full-service graphic design agency in Dallas, offering a wide range of solutions:"}</p>
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
                                                {typeof service.cards[0].image === 'string' ? (
                                                    <img src={service.cards[0].image} alt={service.cards[0].title} className="card-img-top" />
                                                ) : (
                                                    <Image src={service.cards[0].image} alt={service.cards[0].title} className="card-img-top" />
                                                )}
                                                <h5 className="card-title">{service.cards[0].title}</h5>
                                                <p className="card-subtitle">{service.cards[0].subTitle}</p>
                                                <p className="card-text">{service.cards[0].description}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="card card-blur-bg-1">
                                                {typeof service.cards[1].image === 'string' ? (
                                                    <img src={service.cards[1].image} alt={service.cards[1].title} className="card-img-top" />
                                                ) : (
                                                    <Image src={service.cards[1].image} alt={service.cards[1].title} className="card-img-top" />
                                                )}
                                                <h5 className="card-title">{service.cards[1].title}</h5>
                                                <p className="card-subtitle">{service.cards[1].subTitle}</p>
                                                <p className="card-text">{service.cards[1].description}</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="card card-blur-bg-1">
                                                {typeof service.cards[2].image === 'string' ? (
                                                    <img src={service.cards[2].image} alt={service.cards[2].title} className="card-img-top" />
                                                ) : (
                                                    <Image src={service.cards[2].image} alt={service.cards[2].title} className="card-img-top" />
                                                )}
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
