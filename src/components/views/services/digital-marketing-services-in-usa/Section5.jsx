"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Section5Mocks } from '@/components/mocks/digital-marketing/section5mocks';

export default function Section5() {
    const tabs = Section5Mocks.map(section => section.title);
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <section className="digital-sec-05">
                <div className="container">
                    <div className="row">
                        <div className="col-dm-12">
                            <div className="text">
                                <h3>
                                    Technologies and Platforms
                                    <br />
                                    we use for Digital Marketing
                                </h3>
                            </div>
                            <ul className="nav nav-tabs" >
                                {tabs.slice().reverse().map((tab, index) => (
                                    <li key={index} className={`nav-item ${activeTab === tabs.length - 1 - index ? 'active' : ''}`}>
                                        <a
                                            className={`nav-link ${activeTab === tabs.length - 1 - index ? 'active' : ''}`}
                                            onClick={() => handleTabClick(tabs.length - 1 - index)}
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
                                                                        alt={images.title[imageKey] || "Image description"} // Default alt text if not provided
                                                                    />
                                                                </div>
                                                                <div className="content-box">
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
        </>
    );
}
