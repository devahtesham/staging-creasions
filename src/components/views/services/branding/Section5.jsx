"use client";
import { useState } from "react";

import Image from "next/image";

import ServiceImg1 from "/public/services/branding/branding-sec-03-1.webp";
import ServiceImg2 from "/public/services/branding/branding-sec-03-2.webp";
import ServiceImg3 from "/public/services/branding/branding-sec-03-3.webp";
import ServiceImg4 from "/public/services/branding/branding-sec-03-4.webp";
import ServiceImg5 from "/public/services/branding/branding-sec-03-5.webp";
import ServiceImg6 from "/public/services/branding/branding-sec-03-6.webp";
import ServiceImg7 from "/public/services/branding/branding-sec-03-7.webp";
import Link from "next/link";


export default function Section5() {
    const [activeTab, setActiveTab] = useState("tabs-1");

    const services = [
        {
            id: "tabs-1",
            title: "Logo Design",
            description:
                "Our team of professional logo designers has all the creative energy you need to capture your brand's essence and translate it into a stunning and minimalist logo design. We offer logo design services that cater to all industries and niches, ensuring that you get a logo that stands out and communicates your brand's uniqueness. So whether you're a startup or a well-established business, trust Creasions to give you the ultimate logo design experience.",
            image: ServiceImg1,
        },
        {
            id: "tabs-2",
            title: "Graphic Design",
            description:
                "At Creasions, a leading agency for graphic design Dallas, we specialize in crafting exceptional visual identities that make brands stand out. Our team of skilled designers combines creativity, strategy, and innovation to produce stunning logos, branding materials, marketing assets, and digital graphics that captivate audiences and drive engagement. Whether you need custom branding solutions or high-impact visuals, Creasions is your go-to graphic design agency in Dallas for cutting-edge design solutions that leave a lasting impression.",
            image: ServiceImg2,
        },
        {
            id: "tabs-3",
            title: "Corporate Designs",
            description:
                "We understand the importance of corporate design in shaping your brand's identity. Our corporate design services encompass crafting cohesive visual elements that reflect your company's values and ethos. From designing professional logos and brand guidelines to developing consistent stationery and marketing materials, we ensure that every touchpoint embodies your brand's essence.",
            image: ServiceImg3,
        },
        {
            id: "tabs-4",
            title: "Stationery Designs",
            description:
                "We believe that every piece of stationery has the potential to make a lasting impression. That's why our stationary design services are crafted with creativity, energy, and a distinct minimalistic edge. From business cards to letterheads, we take pride in our ability to understand our clients' unique visions and translate them into stunning designs that stand out from the crowd.",
            image: ServiceImg4,
        },
        {
            id: "tabs-5",
            title: "Brochure Designs",
            description:
                "Our experienced designers work closely with you to understand your goals and target audience, ensuring that each brochure design is tailored to meet your specific needs. Whether you need a corporate brochure, product catalog, or promotional flyer, we bring creativity and strategic thinking to every project, delivering visually stunning and impactful designs that leave a lasting impression on your audience.",
            image: ServiceImg5,
        },
        {
            id: "tabs-6",
            title: "Packaging Designs",
            description:
                "Our packaging design services are tailored to make your products stand out on the shelves and leave a lasting impression. Whether you're launching a new product or revamping an existing one, our team of designers combines creativity with market insights to create packaging that not only catches the eye but also communicates your brand story effectively.",
            image: ServiceImg6,
        },
        {
            id: "tabs-7",
            title: "Social Media Banner Design",
            description:
                "Our social media banner design services are tailored to elevate your online presence and captivate your audience across various platforms. Whether you need captivating cover photos for Facebook, eye-catching headers for Twitter, or engaging posts for Instagram, our team of designers creates custom banners that align seamlessly with your brand identity and messaging.",
            image: ServiceImg7,
        },
    ];

    const handleTabChange = (id) => {
        setActiveTab(id);
    };

    return (
        <div className="gradian-bg">
            <section className="branding-sec-5 mobile-screen-slider">
                <div className="container">
                    <div className="row p-0 border-0">
                        <div className="col-lg-12">
                            <div className="text text-22 text-center">
                                <h2>
                                    Our Creative <br /> Branding Agency Services.
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
                                                </div>
                                                <div className="button-readmore">
                                                    <Link
                                                        href="#"
                                                        value={service.title}
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                    >
                                                        Get In Touch
                                                    </Link>
                                                </div>
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


