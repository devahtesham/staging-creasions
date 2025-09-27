"use client";
import React, { useState } from "react";
import Image from "next/image";
import section5img from "/public/services/search-engine-marketing/section05bg.png";
import section5accordianimg from "/public/services/search-engine-marketing/section5accordianimg.png";

export default function Section5({ expertiesData }) {
  const sectionHeading = expertiesData?.section_heading || "Dallas PPC Services, Maximize ROI with Targeted Advertising";
  const sectionSpan = expertiesData?.section_span || "Drive Instant Traffic & Increase Conversions with Creasions PPC Expertise";
  const sectionContent = expertiesData?.content?.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&') || "At Creasions, we implement strategic Pay-Per-Click (PPC) campaigns in Dallas that deliver measurable results. Our data-driven PPC services focus on high-intent keyword targeting, compelling ad copy, and continuous optimization to maximize conversions and lower ad costs. Whether you're looking for Google Ads management, social media advertising, or local PPC strategies, our Dallas PPC agency ensures your business reaches the right audience at the right time.";
  const accordionCards = expertiesData?.sections_cards || [];

  // Helper function to decode HTML entities and parse content
  const decodeHtmlEntities = (str) => {
    return str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
  };

  const parseContent = (htmlContent) => {
    if (!htmlContent) return { text: '', listItems: [] };
    
    // Extract text content before list items
    const textMatch = htmlContent.match(/<p[^>]*>([^<]*)<\/p>/);
    const text = textMatch ? decodeHtmlEntities(textMatch[1]) : '';
    
    // Extract list items
    const listMatches = htmlContent.match(/<li[^>]*>([^<]*)<\/li>/g) || [];
    const listItems = listMatches.map(item => 
      decodeHtmlEntities(item.replace(/<[^>]*>/g, '').trim())
    );
    
    return { text, listItems };
  };
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const transformAccordionItems = (cards) => {
    if (cards && Array.isArray(cards) && cards.length > 0) {
      return cards.map(card => {
        const { text, listItems } = parseContent(card.content);
        return {
          heading: card.title,
          answer: text,
          image: card.icon_url && typeof card.icon_url === 'string' ? card.icon_url : section5accordianimg,
          list: listItems
        };
      });
    }
    
    return [
      {
        heading: "Keyword Research - Precision Targeting for Maximum Clicks",
        answer: "Keyword research is the foundation of any successful PPC campaign. Our PPC experts in Dallas conduct comprehensive keyword analysis, focusing on:",
        image: section5accordianimg,
        list: [
          "High-intent, conversion-ready keywords",
          "Cost-effective bidding strategies",
          "Negative keyword filtering to reduce wasted ad spend",
          "Competitor analysis for optimized targeting",
        ],
      },
      {
        heading: "Landing Page Optimization – Turn Clicks into Conversions",
        answer: "Your landing page plays a crucial role in PPC success. Our team optimizes landing pages to:",
        image: section5accordianimg,
        list: [
          "Improve user experience (UX) & page speed",
          "Align ad messaging with conversion goals",
          "A/B test layouts, headlines, and CTAs for higher engagement",
          "Reduce bounce rates & increase lead generation",
        ],
      }
    ];
  };

  const AccordianItems = transformAccordionItems(accordionCards);

  return (
    <section
      className="section-05"
      style={{ backgroundImage: `url(${section5img.src})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
              <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
              <h6>{sectionSpan}</h6>
              <p>{sectionContent}</p>
            </div>

            <section className="custom-faq-section">
              <div className="mainFaqBox">
                {AccordianItems.map((item, index) => (
                  <div key={index} className="FaqBox">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={`toogleBtn toogleBtn-wrapper ${openIndex === index ? "toogleBtn-hidden" : ""}`}
                    >
                      <span>{item.heading}</span>
                    </button>

                    {openIndex === index && (
                      <div className={`dataBox ${openIndex === index ? "open" : ""}`}>
                        <div className="row align-items-center">
                          <div className="col-lg-5">
                            <div className="text">
                              <h2>{item.heading}</h2>
                              <p>{item.answer}</p>

                              {item.list && (
                                <ul className="Datalist">
                                  {item.list.map((li, i) => (
                                    <li key={i}>{li}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="imgBox">
                                {item.image && (
                                  <div className="faq-image">
                                    {typeof item.image === 'string' ? (
                                      <img
                                        src={item.image}
                                        alt="FAQ Related Visual"
                                        width={600}
                                        height={300}
                                        className="img-fluid"
                                      />
                                    ) : (
                                      <Image
                                        src={item.image}
                                        alt="FAQ Related Visual"
                                        width={600}
                                        height={300}
                                        className="img-fluid"
                                      />
                                    )}
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
