"use client";
import React, { useState } from "react";
import Image from "next/image";
import section5img from "/public/services/search-engine-marketing/section05bg.png";
import section5accordianimg from "/public/services/search-engine-marketing/section5accordianimg.png";

export default function Section5() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const AccordianItems = [
    {
      heading: "Keyword Research - Precision Targeting for Maximum Clicks",
      answer:
        "Keyword research is the foundation of any successful PPC campaign. Our PPC experts in Dallas conduct comprehensive keyword analysis, focusing on:",
      image: section5accordianimg,
      list: [
        "High-intent, conversion-ready keywords",
        "Cost-effective bidding strategies",
        "Negative keyword filtering to reduce wasted ad spend",
        "Competitor analysis for optimized targeting",
      ],
    },
    {
      heading: " Landing Page Optimization – Turn Clicks into Conversions",
      answer:"Your landing page plays a crucial role in PPC success. Our team optimizes landing pages to:",
      image: section5accordianimg,
      list: [
        "Improve user experience (UX) & page speed",
        "Align ad messaging with conversion goals",
        "A/B test layouts, headlines, and CTAs for higher engagement",
        "Reduce bounce rates & increase lead generation",
      ],
    },
    {
      heading: "PPC Management - Data-Driven Campaign Optimization",
      answer:"We offer end-to-end PPC management services in Dallas, including:",
      image: section5accordianimg,
      list: [
        "Custom ad strategy development",
        "Budget allocation & bid management",
        "Performance monitoring & ad refinements",
        "Weekly & monthly reporting with real-time insights",
      ],
    },
    {
      heading: "Paid Advertising - Drive More Sales with High-Performing Ads",
      answer:"Our Dallas PPC company specializes in cost-effective paid advertising solutions across multiple platforms:",
      image: section5accordianimg,
      list: [
        "Google Ads & Bing Ads",
        "Display advertising & retargeting campaigns",
        "eCommerce PPC (Google Shopping, Amazon Ads, etc.)",
      ],
    },
    {
      heading: "A/B Split Testing - Optimize Ads for Higher Conversions",
      answer:"We continuously test and refine ad campaigns with A/B split testing, ensuring:",
      image: section5accordianimg,
      list: [
        "Improved ad click-through rates (CTR)",
        "Lower cost-per-click (CPC) & cost-per-acquisition (CPA)",
        "Optimized headlines, descriptions & CTAs",
      ],
    },
    {
      heading: "Conversion Rate Optimization (CRO) - Maximize Your ROI",
      answer:"Beyond traffic, we focus on conversions by:",
      image: section5accordianimg,
      list: [
        "Enhancing ad relevancy & targeting",
        "Refining landing page elements",
        "Adjusting audience segmentation & bidding strategies",
      ],
    },
    {
      heading: "Social Media Advertising - Expand Your Reach with Paid Social Campaigns",
      answer:"We manage high-converting social media PPC ads for:",
      image: section5accordianimg,
      list: [
        "Facebook & Instagram Ads",
        "LinkedIn Ads for B2B marketing",
        "Twitter Ads for brand engagement",
      ],
    },
    {
      heading: "Google & Bing Ads Management - Dominate Search Results",
      image: section5accordianimg,
      list: [
        "Expert campaign setup & optimization",
        "Location-based targeting for local businesses",
        "Bid adjustments for maximum ad performance",
      ],
    },
    {
      heading: "Nextdoor Advertising - Connect with Local Audiences",
      answer:"Leverage Nextdoor ads to increase hyper-local engagement and brand awareness. We create:",
      image: section5accordianimg,
      list: [
        "Geo-targeted PPC campaigns",
        "Community-based digital ads",
        "Neighborhood-specific promotions",
      ],
    },
  ];

  return (
    <section
      className="section-05"
      style={{ backgroundImage: `url(${section5img.src})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
              <h2>
                Dallas PPC Services,
                <br /> Maximize ROI with Targeted Advertising
              </h2>
              <h6>
                Drive Instant Traffic & Increase Conversions with Creasions PPC Expertise
              </h6>
              <p>
                At Creasions, we implement strategic Pay-Per-Click (PPC)
                campaigns in Dallas that deliver measurable results. Our
                data-driven PPC services focus on high-intent keyword
                targeting, compelling ad copy, and continuous optimization to
                maximize conversions and lower ad costs. Whether you&apos;re looking
                for Google Ads management, social media advertising, or local
                PPC strategies, our Dallas PPC agency ensures your business
                reaches the right audience at the right time.
              </p>
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
                                    <Image
                                      src={item.image}
                                      alt="FAQ Related Visual"
                                      width={600}
                                      height={300}
                                      className="img-fluid"
                                    />
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
