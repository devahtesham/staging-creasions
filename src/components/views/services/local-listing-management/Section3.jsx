"use client";
import { useState } from "react";

import Image from "next/image";

import ServiceImg1 from "/public/services/local-listing-management/llm-sec03-01.png";
import ServiceImg2 from "/public/services/local-listing-management/llm-sec03-02.png";
import ServiceImg3 from "/public/services/branding/branding-sec-03-3.webp";
import ServiceImg4 from "/public/services/branding/branding-sec-03-4.webp";
import ServiceImg5 from "/public/services/branding/branding-sec-03-5.webp";

import Link from "next/link";


export default function Section3() {
    const [activeTab, setActiveTab] = useState("tabs-1");

    const services = [
        {
            id: "tabs-1",
            title: "Google Business Profile Optimization",
            description:
                "Our listing service in Dallas ensures your Google Business Profile (formerly Google My Business) is accurate, optimized, and engaging.",
            image: ServiceImg1,
            list: [
                "📌 Business Name, Address, Phone Number (NAP) Optimization",
                "📌 Category & Service Area Optimization",
                "📌 Google Posts, Photos & Q&A Updates",
                "📌 Google Reviews Management",
            ]
        },
        {
            id: "tabs-2",
            title: "Business Listings on Top Directories",
            description:
                "We claim, verify, and optimize your business across:",
            image: ServiceImg2,
            list:[
                "📌 Google My Business,",
                "📌 Yelp",
                "📌 Facebook Business",
                "📌 Bing Places",
                "📌 Apple Maps",
                "📌 Better Business Bureau (BBB)",
                "📌 Yellow Pages, Foursquare & More"
            ]
        },
        {
            id: "tabs-3",
            title: "Local Citation Audit & Cleanup",
            description:
                "Incorrect or duplicate listings hurt SEO and customer trust. Our local listing management agency in Dallas conducts NAP audits, removes duplicates, and fixes inconsistencies.",
            image: ServiceImg3,
        },
        {
            id: "tabs-4",
            title: "Online Review Management",
            description:
                "Boost your brand reputation with our automated review generation and response services.",
            image: ServiceImg4,
            list:[
                "📌 Monitor & Respond to Customer Reviews",
                "📌 Get More 5-Star Ratings",
                "📌 Improve Reputation & Trust"
            ]
        },
        {
            id: "tabs-5",
            title: "Voice Search & Mapping Services",
            description:
                "We ensure your business is listed on voice search platforms (Google Assistant, Alexa, Siri) and GPS mapping services (Google Maps, Apple Maps, Waze).",
            image: ServiceImg5,
        },
    ];

    const handleTabChange = (id) => {
        setActiveTab(id);
    };

    return (
        <div className="gradian-bg">
            <section className="sec-03 mobile-screen-slider">
                <div className="container">
                    <div className="row p-0 border-0">
                        <div className="col-lg-12">
                            <div className="text text-22 text-center">
                                <h2>
                                    Our Local Listing <br /> Management Services in Dallas
                                </h2>
                            </div>
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
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="text">
                                                    <h4>{service.title}</h4>
                                                    <p>{service.description}</p>
                                                    {service.list && (
                                                        <ul>
                                                            {service.list.map((item, index) => (
                                                                <li key={index}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                                {/* <div className="button-readmore">
                                                    <Link
                                                        href="#"
                                                        value={service.title}
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                    >
                                                        Get In Touch
                                                    </Link>
                                                </div> */}
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="img-box">
                                                    <Image
                                                        width={915}
                                                        height={687}
                                                        src={service.image}
                                                        className="img-fluid wp-post-image"
                                                        alt={service.title}
                                                        decoding="async"
                                                        loading="lazy"
                                                        fetchPriority="high"
                                                    />
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
        </div>
    );
};


