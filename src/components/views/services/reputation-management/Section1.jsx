import Image from 'next/image'
import React from 'react'

import Circle from '/public/services/reputation-management/fade_effect_slow.gif';
import GradientBg from '/public/services/reputation-management/llm-banner-bg.png';


export default function Section1({ standOutData }) {
    const sectionSpan = standOutData?.section_span || "Protect, Enhance, and Manage Your Brand's Online Presence";
    const sectionText = standOutData?.section_text || "In today's digital world, your online reputation is everything. Whether you're a business or an individual, negative reviews, misleading information, or damaging content can impact your credibility. As a leading reputation management company in Dallas, we specialize in removing harmful content, boosting positive brand mentions, and creating a solid digital presence that helps you regain trust and authority.";
    const imageUrl = standOutData?.image_url;

    // Parse HTML content to extract text and list items
    const parseContent = (htmlContent) => {
        if (!htmlContent) return { text: sectionText, listItems: [
            "Suppress Negative Search Results",
            "Improve Online Reviews & Ratings", 
            "Enhance Brand Image & Credibility",
            "Manage Social Media Reputation",
            "Monitor & Respond to Customer Feedback"
        ] };
        
        // Helper function to decode HTML entities
        const decodeHtmlEntities = (str) => {
            return str
                .replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'")
                .replace(/&nbsp;/g, ' ');
        };
        
        const textMatch = htmlContent.match(/<p[^>]*>([^<]*)<\/p>/);
        const text = textMatch ? decodeHtmlEntities(textMatch[1]) : decodeHtmlEntities(htmlContent.replace(/<[^>]*>/g, ''));
        
        const listMatches = htmlContent.match(/<li[^>]*>([^<]*)<\/li>/g) || [];
        const listItems = listMatches.map(item => decodeHtmlEntities(item.replace(/<[^>]*>/g, '')));
        
        return { text, listItems };
    };

    const { text, listItems } = parseContent(sectionText);

    return (
        <section className="sec-01">
            <Image src={GradientBg} className="sec-01-bg" alt="circle-1" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <h4>{sectionSpan}</h4>
                        <p>{text}</p>
                        {listItems.length > 0 && (
                            <ul>
                                {listItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="col-lg-4">
                        <div className="img-box">
                            {imageUrl ? (
                                <img src={imageUrl} alt="reputation management" />
                            ) : (
                                <Image src={Circle} alt="" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
