"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Section5Mocks } from '@/components/mocks/digital-marketing/section5mocks';

export default function Section5({ technologiesData }) {
    // Use API data if available, otherwise fallback to mock data
    const technologiesCards = technologiesData?.service_tab?.length > 0 ? technologiesData.service_tab : Section5Mocks;
    const sectionHeading = technologiesData?.section_heading || "Technologies and Platforms we use for the Digital Marketing";
    
    const [activeTab, setActiveTab] = useState(0);

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
                                <h3>{sectionHeading}</h3>
                            </div>
                            {/* Tab panes */}
                            <div className="tab-content">
                                {technologiesCards.map((section, index) => (
                                    <div key={index} className={`tab-pane ${activeTab === index ? 'active' : ''}`} role="tabpanel">
                                        <div className="main-tabbing-content">
                                            {/* Handle API format (features array) */}
                                            {section.features && (
                                                <div className="main-box">
                                                    <h5>{section.section_heading}</h5>
                                                    <div className="align-boxes">
                                                        {section.features.map((feature, featureIndex) => (
                                                            <div className="box" key={featureIndex}>
                                                                <div className="img-box">
                                                                    {feature.image && (
                                                                        <Image
                                                                            src={feature.image}
                                                                            alt={feature.title || "Technology"}
                                                                            width={50}
                                                                            height={50}
                                                                            unoptimized={typeof feature.image === 'string' && feature.image.startsWith('http')}
                                                                        />
                                                                    )}
                                                                </div>
                                                                <div className="content-box">
                                                                    <h6>{feature.title}</h6>
                                                                    <div dangerouslySetInnerHTML={{ __html: feature.text || '' }} />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {/* Handle fallback format (categories object) */}
                                            {section.categories && Object.entries(section.categories).map(([category, images]) => (
                                                <div className="main-box" key={category}>
                                                    <h5>{category}</h5>
                                                    <div className="align-boxes">
                                                        {Object.entries(images.images).map(([imageKey, imageSrc]) => (
                                                            <div className="box" key={imageKey}>
                                                                <div className="img-box">
                                                                    <Image 
                                                                        src={imageSrc} 
                                                                        alt={images.title[imageKey] || "Technology"}
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
