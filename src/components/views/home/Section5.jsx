"use client";
import React, { useState } from 'react';
import { Section5Mocks } from '@/components/mocks/section5mocks';
import Image from 'next/image';


import Thumbnail from '/public/section5-thumbnail.png'
import VideoOptimizer from '@/components/ui/VideoOptimizer';

export default function Section5() {
    const tabs = Section5Mocks.map(section => section.title);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <section className="home-sec-05">
                <div className="container">
                    <div className="row">
                        <div className="col-dm-12">
                            <div className="text">
                                <h3>
                                    Technologies and Platforms
                                    <br />
                                    we use for the services we provide
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
                                {Section5Mocks.map((section, index) => (
                                    <div key={index} className={`tab-pane ${activeTab === index ? 'active' : ''}`} role="tabpanel">
                                        <div className="main-tabbing-content">
                                            {Object.entries(section.categories).map(([category, images]) => (
                                                <div className="main-box" key={category}>
                                                    <h5>{category}</h5>
                                                    <div className="align-boxes">
                                                        {Object.entries(images.images).map(([imageKey, imageSrc]) => (
                                                            <div className="box" key={imageKey}>
                                                                <div className="img-box">
                                                                    <Image
                                                                        src={imageSrc}
                                                                        loading='lazy'
                                                                        alt={images.title[imageKey] || "Image description"} // Default alt text if not provided
                                                                    />
                                                                </div>
                                                                <div className="content-box" id={imageKey}>
                                                                    <h6>{images.title[imageKey]}</h6>
                                                                    <p>{images.content[imageKey]}</p>
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
