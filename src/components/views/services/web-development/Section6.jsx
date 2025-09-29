import React from 'react';
import { Section5Mocks } from '@/components/mocks/section5mocks';
import Image from 'next/image';
import webdevelopnmentimg from '/public/services/web-development/webdevelopnmentimg.png';

export default function Section6({ technologiesData }) {
    // Use API data if available, otherwise fallback to mock data
    const technologiesCards = technologiesData?.cards?.length > 0 ? technologiesData.cards : Section5Mocks;
    const sectionHeading = technologiesData?.section_heading || "Technologies and Platforms we use for the Website Development";

    return (
        <>
            <section className="home-sec-06 techno-sec platform-sec two_bg lazy entered applied">
            <div className="container">
                    <div className="row">
                        <div className="col-dm-12">
                            <div className="text">
                                <h2>{sectionHeading}</h2>
                            </div>
                            {/* Tab panes */}
                            <div className="tab-content">
                                {technologiesCards.map((section, index) => (
                                    <div key={index} className={`tab-pane ${0 === index ? 'active' : ''}`} role="tabpanel">
                                        <div className="main-tabbing-content">
                                            {(section.services || section.categories) && (
                                                <div className="main-box">
                                                    <h5>{section.title}</h5>
                                                    <div className="align-boxes">
                                        {/* Handle API format (services array) */}
                                        {section.services && section.services.map((service, serviceIndex) => (
                                            <div className="box" key={serviceIndex}>
                                                <div className="img-box">
                                                    <Image
                                                        src={service.image_url}
                                                        alt={service.title || "Technology"}
                                                        width={50}
                                                        height={50}
                                                        unoptimized={typeof service.image_url === 'string' && service.image_url.startsWith('http')}
                                                    />
                                                </div>
                                                <div className="content-box">
                                                    <h6>{service.title}</h6>
                                                    <div dangerouslySetInnerHTML={{ __html: service.text || '' }} />
                                                </div>
                                            </div>
                                        ))}
                                                        
                                                        {/* Handle fallback format (categories object) */}
                                                        {section.categories && Object.entries(section.categories).map(([category, images]) => (
                                                            <div key={category} className="category-group">
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
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                    <Image src={webdevelopnmentimg} alt='background image' className='bgHover'/>
            </section>
        </>
    );
}
