"use client";
import { useState } from "react";

import Image from "next/image";

import ServiceImg1 from "/public/services/local-listing-management/llm-sec03-01.png";
import ServiceImg2 from "/public/services/local-listing-management/llm-sec03-02.png";
import ServiceImg3 from "/public/services/branding/branding-sec-03-3.webp";
import ServiceImg4 from "/public/services/branding/branding-sec-03-4.webp";
import ServiceImg5 from "/public/services/branding/branding-sec-03-5.webp";



export default function Section3({ servicesData }) {
    // Helper function to decode HTML entities
    const decodeHtmlEntities = (str) => {
        return str
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&nbsp;/g, ' ');
    };

    const sectionHeading = servicesData?.section_heading || "Our Local Listing Management Services in Dallas";
    const apiServices = servicesData?.services || [];
    
    // Transform API services to component format
    const transformedServices = (apiServices && Array.isArray(apiServices) && apiServices.length > 0) ? apiServices.map((service, index) => {
        // Parse HTML content to extract text and list items
        const parseContent = (htmlContent) => {
            if (!htmlContent) return { text: '', listItems: [] };
            
            const textMatch = htmlContent.match(/<p[^>]*>([^<]*)<\/p>/);
            const text = textMatch ? decodeHtmlEntities(textMatch[1]) : decodeHtmlEntities(htmlContent.replace(/<[^>]*>/g, '').split('📌')[0]);
            
            const listMatches = htmlContent.match(/📌[^📌]*/g) || [];
            const listItems = listMatches.map(item => decodeHtmlEntities(item.replace(/<[^>]*>/g, '').trim()));
            
            return { text, listItems };
        };
        
        const { text, listItems } = parseContent(service.description);
        const defaultImages = [ServiceImg1, ServiceImg2, ServiceImg3, ServiceImg4, ServiceImg5];
        
        return {
            id: `tabs-${index + 1}`,
            title: service.title,
            description: text,
            image: service.icon_url && typeof service.icon_url === 'string' ? service.icon_url : defaultImages[index],
            list: listItems.length > 0 ? listItems : null
        };
    }) : [
        {
            id: "tabs-1",
            title: "Google Business Profile Optimization",
            description: "Our listing service in Dallas ensures your Google Business Profile (formerly Google My Business) is accurate, optimized, and engaging.",
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
            description: "We claim, verify, and optimize your business across:",
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
            description: "Incorrect or duplicate listings hurt SEO and customer trust. Our local listing management agency in Dallas conducts NAP audits, removes duplicates, and fixes inconsistencies.",
            image: ServiceImg3,
        },
        {
            id: "tabs-4",
            title: "Online Review Management",
            description: "Boost your brand reputation with our automated review generation and response transformedServices.",
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
            description: "We ensure your business is listed on voice search platforms (Google Assistant, Alexa, Siri) and GPS mapping transformedServices (Google Maps, Apple Maps, Waze).",
            image: ServiceImg5,
        },
    ];
    
    const [activeTab, setActiveTab] = useState(transformedServices[0]?.id || "tabs-1");

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
                                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br />') }} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <ul className="nav nav-tabs" >
                                {transformedServices.map((service) => (
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
                                {transformedServices.map((service) => (
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
                                                    {typeof service.image === 'string' ? (
                                                        <img
                                                            width={915}
                                                            height={687}
                                                            src={service.image}
                                                            className="img-fluid wp-post-image"
                                                            alt={service.title}
                                                            loading="lazy"
                                                        />
                                                    ) : (
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
                                                    )}
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


