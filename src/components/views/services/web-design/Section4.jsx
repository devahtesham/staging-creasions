import React from 'react';
import { Section5Mocks } from '@/components/mocks/section5mocks';
import Image from 'next/image';

export default function Section4() {
    const tabs = Section5Mocks.map(section => section.title);

    return (
        <>
            <section className="home-sec-04 techno-sec platform-sec two_bg lazy entered applied">
                <div className="container">
                    <div className="row">
                        <div className="col-dm-12">
                            <div className="text">
                                <h3>
                                    Technologies and Platforms
                                    <br />
                                    We use for the Website Design
                                </h3>
                            </div>
                            {/* Tab panes */}
                            <div className="tab-content">
                                {Section5Mocks.map((section, index) => (
                                    <div key={index} className={`tab-pane ${1 === index ? 'active' : ''}`} role="tabpanel">
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
