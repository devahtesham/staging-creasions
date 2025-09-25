import Image from 'next/image'
import React from 'react'

import SecIcon1 from '/public/services/local-listing-management/llm-sec02-i01.png';
import SecIcon2 from '/public/services/local-listing-management/llm-sec02-i02.png';
import SecIcon3 from '/public/services/local-listing-management/llm-sec02-i03.png';
import SecIcon4 from '/public/services/local-listing-management/llm-sec02-i04.png';
import SecIcon5 from '/public/services/local-listing-management/llm-sec02-i05.png';


export default function Section2({ achievementsData }) {
    const sectionHeading = achievementsData?.section_heading || "Why Choose Our Reputation Management Services in Dallas?";
    const sectionText = achievementsData?.section_text?.replace(/<[^>]*>/g, '') || "Your business listings are more than just online directories; they are essential for SEO, customer trust, and brand visibility. Our Local Listing Management Company in Dallas helps you:";
    const features = achievementsData?.features || [];
    
    const defaultFeatures = [
        { title: "Proven ORM Strategies", text: "We use AI-powered tools, SEO, and content marketing to suppress negative search results and highlight positive brand mentions.", icon_url: SecIcon1 },
        { title: "Expert Crisis Management", text: "Our team monitors your brand 24/7 and reacts quickly to potential reputation risks.", icon_url: SecIcon2 },
        { title: "Comprehensive ORM Solutions", text: "From Google search reputation cleanup to social media damage control, we cover all aspects of reputation management.", icon_url: SecIcon3 },
        { title: "Customized Approach", text: "We analyze your brand's online presence and tailor ORM strategies that fit your business needs.", icon_url: SecIcon4 },
        { title: "Fast & Guaranteed Results", text: "We guarantee a 75% reduction in negative content visibility within 90 days or your money back!", icon_url: SecIcon5 }
    ];
    
    const displayFeatures = features.length > 0 ? features : defaultFeatures;
    const defaultIcons = [SecIcon1, SecIcon2, SecIcon3, SecIcon4, SecIcon5];

    return (
        <section className="sec-02">
            <div className="container">
                <div className="row text-center">
                    <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
                    <p>{sectionText}</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-container">
                            <div className="card-row">
                                {displayFeatures.map((feature, index) => (
                                    <div key={index} className="card card-blur-bg-1">
                                        {feature.icon_url ? (
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
                    </div>
                </div>
            </div>
        </section>
    )
}
