import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Card1 from '/public/services/graphic-designing/gd-sec06-card01.png'
import Card2 from '/public/services/graphic-designing/gd-sec06-card02.png'
import Card3 from '/public/services/graphic-designing/gd-sec06-card03.png'
import Card4 from '/public/services/graphic-designing/gd-sec06-card04.png'
import Card5 from '/public/services/graphic-designing/gd-sec06-card05.png'
import Card6 from '/public/services/graphic-designing/gd-sec06-card06.png'
import Card7 from '/public/services/graphic-designing/gd-sec06-card07.png'
import Card8 from '/public/services/graphic-designing/gd-sec06-card08.png'
import Card9 from '/public/services/graphic-designing/gd-sec06-card09.png'

export default function Section6({ portfolioData }) {
    const sectionHeading = portfolioData?.section_heading || "We protect your brand";
    const sectionSpan = portfolioData?.section_span || "Work With Certified Reputation Management Experts";
    const sectionText = portfolioData?.section_text?.replace(/<[^>]*>/g, '') || "We utilize industry-leading ORM tools & platforms to protect your brand";
    const sectionsCards = portfolioData?.sections_cards || [];
    
    const defaultCards = [
        { icon_url: Card1, icon_title: "", icon_description: "" },
        { icon_url: Card2, icon_title: "Facebook and Instagram", icon_description: "Social media monitoring and engagement" },
        { icon_url: Card3, icon_title: "", icon_description: "" },
        { icon_url: Card4, icon_title: "PR Newswire and Medium", icon_description: "Press release distribution for brand storytelling" },
        { icon_url: Card5, icon_title: "", icon_description: "" },
        { icon_url: Card6, icon_title: "Google My Business & Yelp", icon_description: "Review and listing management" },
        { icon_url: Card7, icon_title: "", icon_description: "" },
        { icon_url: Card8, icon_title: "SEMrush & Ahrefs", icon_description: "Advanced SEO for reputation recovery" },
        { icon_url: Card9, icon_title: "", icon_description: "" },
        { icon_url: Card8, icon_title: "Trustpilot and Glassdoor", icon_description: "Employee and customer review management" }
    ];
    
    const displayCards = sectionsCards.length > 0 ? sectionsCards : defaultCards;
    const defaultImages = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9];

    return (
        <section className='sec-06'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h4>{sectionHeading}</h4>
                        <h2>{sectionSpan}</h2>
                        <p>{sectionText}</p>
                        <div className="catelog-container">
                            <div className="catelog">
                                {displayCards.slice(0, 5).map((card, index) => (
                                    <div key={index} className="card-agency">
                                        <div className="card-img">
                                            {card.icon_url ? (
                                                <img src={card.icon_url} alt={card.icon_title || `card${index + 1}`} />
                                            ) : (
                                                <Image src={defaultImages[index] || Card1} alt={card.icon_title || `card${index + 1}`} />
                                            )}
                                        </div>
                                        {card.icon_title && card.icon_description && (
                                            <div className="card-content">
                                                <h4 dangerouslySetInnerHTML={{ __html: card.icon_title.replace(/\sand\s/g, '<br/> and ') }} />
                                                <p>{card.icon_description?.replace(/<[^>]*>/g, '') || ''}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="catelog">
                                {displayCards.slice(5, 10).map((card, index) => {
                                    const actualIndex = index + 5;
                                    return (
                                        <div key={actualIndex} className="card-agency">
                                            <div className="card-img">
                                                {card.icon_url ? (
                                                    <img src={card.icon_url} alt={card.icon_title || `card${actualIndex + 1}`} />
                                                ) : (
                                                    <Image src={defaultImages[actualIndex] || Card6} alt={card.icon_title || `card${actualIndex + 1}`} />
                                                )}
                                            </div>
                                            {card.icon_title && card.icon_description && (
                                                <div className="card-content">
                                                    <h4 dangerouslySetInnerHTML={{ __html: card.icon_title.replace(/\sand\s/g, '<br/> and ').replace(/\s&\s/g, '<br/> & ') }} />
                                                    <p>{card.icon_description?.replace(/<[^>]*>/g, '') || ''}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}
