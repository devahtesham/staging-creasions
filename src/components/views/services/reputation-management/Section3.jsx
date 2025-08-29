"use client";
import { useState } from "react";

import Image from "next/image";

import ServiceImg1 from "/public/services/reputation-management/llm-sec03-01.png";
import ServiceImg2 from "/public/services/reputation-management/llm-sec03-02.png";
import ServiceImg3 from "/public/services/branding/branding-sec-03-3.webp";
import ServiceImg4 from "/public/services/branding/branding-sec-03-4.webp";
import ServiceImg5 from "/public/services/branding/branding-sec-03-5.webp";

import Link from "next/link";


export default function Section3() {
    const [activeTab, setActiveTab] = useState("tabs-1");

    const services = [
        {
            id: "tabs-1",
            title: "Online Review Management",
            description:
                "A single negative review can harm your brand. Our reputation management agency in Dallas helps you",
            image: ServiceImg1,
            list: [
                "📌 Monitor & respond to customer reviews on Google, Yelp, Facebook, and industry sites",
                "📌 Generate more 5-star ratings with automated review campaigns",
                "📌 Remove false and defamatory reviews that violate platform guidelines",
            ]
        },
        {
            id: "tabs-2",
            title: "Google Search & SEO Reputation Repair",
            description:
                "Your search results define your brand. We push down negative content and promote positive mentions through:",
            image: ServiceImg2,
            list:[
                "📌 SEO Optimization for positive content",
                "📌 Keyword-targeted content creation (articles, blogs, press releases)",
                "📌 Link building & authority site placements"
            ]
        },
        {
            id: "tabs-3",
            title: "Social Media Reputation Management",
            description:
                "Your social media presence plays a major role in your brand’s reputation. We help you:",
            image: ServiceImg3,
            list:[
                "📌 Remove negative comments and fake accounts",
                "📌 Manage Facebook, Instagram, LinkedIn & Twitter/X mentions",
                "📌 Boost engagement with positive brand storytelling"
            ]
        },
        {
            id: "tabs-4",
            title: "Crisis Management & PR Strategies",
            description:
                "We specialize in damage control to minimize reputation risks in real-time:",
            image: ServiceImg4,
            list:[
                "📌 Identify & respond to negative press & social media attacks",
                "📌 Implement brand recovery strategies",
                "📌 Suppress false accusations, defamatory blogs, and bad PR"
            ]
        },
        {
            id: "tabs-5",
            title: "Corporate Reputation & Personal Branding",
            description:
                "Whether you're a business owner, CEO, influencer, or professional, we offer:",
            image: ServiceImg5,
            list:[
                "📌 Personal branding ORM for executives & public figures",
                "📌 Corporate reputation solutions to boost brand authority",
                "📌 Brand storytelling & trust-building campaigns"
            ]
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
                                    Our Reputation<br/> Management Services in Dallas
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


