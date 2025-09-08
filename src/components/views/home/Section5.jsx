"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


import Thumbnail from '/public/section5-thumbnail.png'
import VideoOptimizer from '@/components/ui/VideoOptimizer';
import { fetchTechnologySectionHome } from '@/utils/helper';

export default function Section5() {
    const [activeTab, setActiveTab] = useState(0);
    const [sectionData, setSectionData] = useState({});
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    useEffect(() => {
        fetchTechnologySectionHome()
            .then((data) => {
                // console.log('[data]', data)
                setSectionData(data[0]);
            })
    }, []);

    console.log('[TECH_SEC_DATA]', sectionData)

    // Get dynamic tabs from API data
    const tabs = sectionData?.technologies_section?.cards?.map(card => card.title) || [];
    const cardsData = sectionData?.technologies_section?.cards || [];

    

    return (
        <>
            <section className="home-sec-05">
                <div className="container">
                    <div className="row">
                        <div className="col-dm-12">
                            <div className="text">
                                <h3>
                                    {
                                        sectionData?.technologies_section?.section_heading?.split(" ").slice(0, 3).join(" ")
                                    }
                                    <br />
                                    {sectionData?.technologies_section?.section_heading?.split(" ").slice(3).join(" ")}
                                   
                                </h3>
                            </div>
                            <ul className="nav nav-tabs" >
                                {tabs.map((tab, index) => (
                                    <li key={index} className={`nav-item ${activeTab === index ? 'active' : ''}`}>
                                        <a
                                            className={`nav-link ${activeTab === index ? 'active' : ''}`}
                                            onClick={() => handleTabClick(index)}
                                        >
                                            {tab}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            {/* Tab panes */}
                            <div className="tab-content">
                                {cardsData.map((card, index) => (
                                    <div key={index} className={`tab-pane ${activeTab === index ? 'active' : ''}`} role="tabpanel">
                                        <div className="main-tabbing-content">
                                            {card.services?.map((service, serviceIndex) => (
                                                <div className="main-box" key={serviceIndex}>
                                                    <h5>{service.heading}</h5>
                                                    <div className="align-boxes">
                                                        {service.items?.map((item, itemIndex) => (
                                                            <div className="box" key={itemIndex}>
                                                                <div className="img-box">
                                                                    <Image
                                                                        src={item.image_url}
                                                                        width={80}
                                                                        height={80}
                                                                        alt={item.title || "Image description"}
                                                                    />
                                                                </div>
                                                                <div className="content-box">
                                                                    <h6>{item.title}</h6>
                                                                    <p>{item.text}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="techno-video">
                {/* <VideoOptimizer
                    src="/video/section5.mp4"
                    poster={Thumbnail}
                /> */}

                <video autoPlay muted loop playsInline>
                    <source src="/video/section5.mp4" type="video/mp4" />
                </video>

            </div>
        </>
    );
}
