import React from 'react';
import Image from 'next/image'
import socialmediamarketing1 from '/public/services/internet-marketing-agency/social-media-marketing-01.png'
import socialmediamarketing2 from '/public/services/internet-marketing-agency/social-media-marketing-02.png'
import socialmediamarketing3 from '/public/services/internet-marketing-agency/social-media-marketing-03.png'
import socialmediamarketing4 from '/public/services/internet-marketing-agency/social-media-marketing-04.png'
import socialmediamarketing5 from '/public/services/internet-marketing-agency/social-media-marketing-05.png'
import emailmarketing1 from '/public/services/internet-marketing-agency/email-marketing-01.png'
import emailmarketing2 from '/public/services/internet-marketing-agency/email-marketing-02.png'
import emailmarketing3 from '/public/services/internet-marketing-agency/email-marketing-03.png'
import emailmarketing4 from '/public/services/internet-marketing-agency/email-marketing-04.png'
import payperclick1 from '/public/services/internet-marketing-agency/pay-per-click-01.png'
import payperclick2 from '/public/services/internet-marketing-agency/pay-per-click-02.png'
import payperclick3 from '/public/services/internet-marketing-agency/pay-per-click-03.jpeg'
import payperclick4 from '/public/services/internet-marketing-agency/pay-per-click-04.png'

// Fallback technology data
const fallbackTechnologies = [
    {
        heading: "Social Media Marketing",
        info_cards: [
            { heading: "Facebook", text: "Our Facebook specialist employs strategic expertise to optimize engagement, analyze analytics, and implement targeted campaigns, ensuring our clients effectively connect with their audience on the Facebook platform.", image: socialmediamarketing1 },
            { heading: "Instagram", text: "Our Instagram specialist adeptly utilizes the platform's visual storytelling features, analytics, and engagement strategies to create a compelling brand presence, ensuring our clients connect authentically with their audience on Instagram.", image: socialmediamarketing2 },
            { heading: "Linkedin", text: "Our LinkedIn experts strategically optimize profiles, curate engaging content, and implement targeted networking strategies, ensuring our clients establish a strong professional presence and effectively connect with their target audience on the platform.", image: socialmediamarketing3 },
            { heading: "Twitter", text: "Our Twitter experts grip dynamic features to curate engaging content, implement strategic hashtag strategies, and foster meaningful interactions, ensuring our clients effectively amplify their brand presence and connect with their audience.", image: socialmediamarketing4 },
            { heading: "Pinterest", text: "Our Pinterest experts work on aesthetics to create engaging content, implement effective pinning strategies, and optimize boards, ensuring our clients enhance their brand visibility and connect with their audience creatively.", image: socialmediamarketing5 }
        ]
    },
    {
        heading: "Email marketing",
        info_cards: [
            { heading: "Mailchimp", text: "Our Mailchimp experts navigate varied features to design visually appealing campaigns, segment audiences strategically, and analyze performance metrics, ensuring our clients achieve impactful and targeted email marketing.", image: emailmarketing1 },
            { heading: "ActiveCampaign", text: "Our ActiveCampaign experts work on robust automation and segmentation capabilities to orchestrate personalized customer journeys, ensuring our clients achieve efficient and targeted marketing campaigns that drive engagement and conversion.", image: emailmarketing2 },
            { heading: "Brevo", text: "Our team of Brevo experts excels in providing comprehensive services, encompassing marketing automation, email campaigns, transactional emails, and SMS messaging functionalities within a unified suite.", image: emailmarketing3 },
            { heading: "HubSpot", text: "Our HubSpot experts specialize in providing the full spectrum of HubSpot's tools and features, ensuring our clients receive expert guidance in optimizing their marketing, sales, and customer service strategies.", image: emailmarketing4 }
        ]
    },
    {
        heading: "Pay per Click",
        info_cards: [
            { heading: "Google Ads", text: "Our Google Ads specialists expertly navigate the Pay Per Click landscape, utilizing strategic insights and optimization techniques to maximize the effectiveness of our clients advertising campaigns.", image: payperclick1 },
            { heading: "Google Keyword Planner", text: "Our Google Keyword Planner specialists strategically analyze insights to curate targeted keyword lists, ensuring optimal performance and visibility for our clients online content.", image: payperclick2 },
            { heading: "Google Ads Editor", text: "Our Google Ads Editor specialists proficiently utilize advanced features to streamline campaign management, ensuring efficient optimization and strategic implementation for our clients advertising initiatives.", image: payperclick3 },
            { heading: "Google Analytics", text: "Our Google Analytics specialists put to use the power of data analytics to provide invaluable insights, enabling our clients to make informed decisions and optimize their online strategies for enhanced performance.", image: payperclick4 }
        ]
    }
];

export default function Section6({ technologiesData }) {
    // Use API data if available, otherwise fallback to static data
    const technologies = technologiesData?.technologies?.length > 0 ? technologiesData.technologies : fallbackTechnologies;
    const sectionHeading = technologiesData?.section_heading || "Technologies and Platforms we use for the Branding Services";

    return (
        <section className="section6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h2>{sectionHeading}</h2>
                            <div className="gridBoxes">
                                {technologies.map((tech, index) => (
                                    <div key={index} className="img-box">
                                        <h6>{tech.heading}</h6>
                                        <div className="cardBoxes">
                                            {tech.info_cards.map((card, cardIndex) => (
                                                <div key={cardIndex} className="box">                    
                                                    <Image 
                                                        alt={card.heading || 'technology'} 
                                                        src={card.image}
                                                        width={80}
                                                        height={80}
                                                        unoptimized={typeof card.image === 'string' && card.image.startsWith('http')}
                                                    />
                                                    <div className="content-box">
                                                        <h6>{card.heading}</h6>
                                                        <div dangerouslySetInnerHTML={{ __html: card.text || '' }} />
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
            </div>
        </section>
    );
}
