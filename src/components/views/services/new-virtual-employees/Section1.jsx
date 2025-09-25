import Image from 'next/image'
import React from 'react'

import Circle from '/public/services/new-virtual-employees/ve-sec01-circle.png';

export default function Section1({ standOutData }) {
    const sectionTitle = standOutData?.section_span || "Build a Stronger Company with Better Teams";
    const sectionContent = standOutData?.section_text?.replace(/<[^>]*>/g, '') || "At Creasions Digital – Virtual Employee Services, we believe that a successful company is built by its team, and effective recruitment is the foundation of great teams. That's why we offer talent acquisition services to find motivated & exceptional individuals who are dedicated to advancing their careers while delivering essential value to your company.";
    const sectionImage = standOutData?.image;

    return (
        <section className="sec-01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h4>{sectionTitle}</h4>
                        <p>{sectionContent}</p>
                    </div>

                    <div className="col-lg-4">
                        {sectionImage ? (
                            <img src={sectionImage} className="circle-1" alt="section-image" />
                        ) : (
                            <Image src={Circle} className="circle-1" alt="circle-1" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
