import React from 'react';
import { Section5Mocks } from '@/components/mocks/section5mocks';
import Image from 'next/image';

export default function Section4({ technologiesData }) {
    // Use API data if available, otherwise fallback to mock data
    const technologiesCards = technologiesData?.cards?.length > 0 ? technologiesData.cards : Section5Mocks;
    const sectionHeading = technologiesData?.section_heading || "Technologies and Platforms We use for the Website Design";

    return (
        <>
            <section className="home-sec-04 techno-sec platform-sec two_bg lazy entered applied">
                <div className="container">
                    <div className="row">
                        <div className="col-dm-12">
                            <div className="text">
                                <h3>{sectionHeading}</h3>
                            </div>
                            {/* Tab panes */}
                            <div className="tab-content">
                                {technologiesCards.map((section, index) => (
                                    <div key={index} className={`tab-pane ${1 === index ? 'active' : ''}`} role="tabpanel">
                                        <div className="main-tabbing-content">
                                            {/* Handle API format (services array) */}
                                            {section.services && (
                                                <div className="main-box">
                                                    <h5>{section.title}</h5>
                                                    <div className="align-boxes">
                                                        {section.services.map((service, serviceIndex) => (
                                                            <div className="box" key={serviceIndex}>
                                                                <div className="img-box">
                                                                    {service.image_url && (
                                                                        <Image
                                                                            src={service.image_url}
                                                                            alt={service.title || "Technology"}
                                                                            width={50}
                                                                            height={50}
                                                                            unoptimized={typeof service.image_url === 'string' && service.image_url.startsWith('http')}
                                                                        />
                                                                    )}
                                                                </div>
                                                                <div className="content-box">
                                                                    <h6>{service.title}</h6>
                                                                    <div dangerouslySetInnerHTML={{ __html: service.text || '' }} />
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
