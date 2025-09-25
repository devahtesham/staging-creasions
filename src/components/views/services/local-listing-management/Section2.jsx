import Image from 'next/image'
import React from 'react'

import SecIcon1 from '/public/services/local-listing-management/llm-sec02-i01.png';
import SecIcon2 from '/public/services/local-listing-management/llm-sec02-i02.png';
import SecIcon3 from '/public/services/local-listing-management/llm-sec02-i03.png';
import SecIcon4 from '/public/services/local-listing-management/llm-sec02-i04.png';
import SecIcon5 from '/public/services/local-listing-management/llm-sec02-i05.png';


export default function Section2({ achievementsData }) {
    const sectionHeading = achievementsData?.section_heading || "Why Your Business Needs Local Listing Management in Dallas";
    const sectionText = achievementsData?.section_text?.replace(/<[^>]*>/g, '') || "Your business listings are more than just online directories; they are essential for SEO, customer trust, and brand visibility. Our Local Listing Management Company in Dallas helps you:";
    const features = achievementsData?.features || [];
    
    const defaultFeatures = [
        { title: "Improve Online Rankings", text: "Get found in Google Local 3-Pack and search results", icon_url: SecIcon1 },
        { title: "Ensure Consistency Across Listings", text: "Prevent errors and duplicate listings", icon_url: SecIcon2 },
        { title: "Enhance Customer Experience", text: "Provide up-to-date and accurate information.", icon_url: SecIcon3 },
        { title: "Increase Website Traffic", text: "More visibility means more potential customers", icon_url: SecIcon4 },
        { title: "Leverage Google My Business (GMB)", text: "Optimize for Google Maps and local search", icon_url: SecIcon5 }
    ];
    
    const displayFeatures = features.length > 0 ? features : defaultFeatures;
    const defaultIcons = [SecIcon1, SecIcon2, SecIcon3, SecIcon4, SecIcon5];

    return (
        <section className="sec-02">
            <div className="container">
                <div className="row">
                    <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br />') }} />
                    <p>{sectionText}</p>
                </div>
            </div>
            <div className="card-container">
                <div className="card-row">
                    {displayFeatures.map((feature, index) => (
                        <div key={index} className="card card-blur-bg-1">
                            {feature.icon_url && typeof feature.icon_url === 'string' ? (
                                <img src={feature.icon_url} className="img-fluid" alt={feature.title} />
                            ) : (
                                <Image src={defaultIcons[index] || SecIcon1} className="img-fluid" alt={feature.title} />
                            )}
                            <h3>{feature.title}</h3>
                            <p>{feature.text?.replace(/<[^>]*>/g, '') || ''}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
