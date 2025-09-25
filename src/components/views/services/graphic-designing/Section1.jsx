import Image from 'next/image'
import React from 'react'

import Circle from '/public/services/graphic-designing/gd-sec01-circle.png';
import CircleOutline from '/public/services/graphic-designing/gd-sec01-circle-outline.png';

export default function Section1({ standOutData }) {
    // Fallback to default values if standOutData is not available
    const sectionTitle = standOutData?.section_span || "Your Trusted Graphic Design Agency in Dallas";
    const sectionContent = standOutData?.content?.replace(/<[^>]*>/g, '') || "Creasions is a leading graphic agency in Dallas, specializing in innovative design solutions tailored to your business. Whether you need branding, digital assets, or marketing materials, we offer premium graphic services in Dallas that enhance your brand identity.";

    return (
        <section className="sec-01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h4>{sectionTitle}</h4>
                        <p>{sectionContent}</p>
                    </div>

                    <div className="col-lg-4">
                        {/* <Image src={Circle} className="circle-1" alt="circle-1" /> */}

                        <div className="animation-component">
                            <Image src={Circle} alt="" className="main-image" />
                            <Image src={CircleOutline} alt="" className="outline-image-01" />
                            <Image src={CircleOutline} alt="" className="outline-image-02" />
                            <Image src={CircleOutline} alt="" className="outline-image-03" />
                            <Image src={CircleOutline} alt="" className="outline-image-04" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
