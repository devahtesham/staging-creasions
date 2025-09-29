"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'

import Image1 from '/public/services/branding/branding-01.webp'
import Image2 from '/public/services/branding/branding-02.webp'
import faqcustombg from '/public/services/branding/faqcustombg.png'

import Marquee from '/public/services/branding/marquee.png'

export default function Section3({ whyChooseData }) {
      const [openIndex, setOpenIndex] = useState(1);
    
      const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
      // Fallback accordion items if API data is not available
      const fallbackAccordianItems = [
        {
            no:"01",
          heading: " Leveraging Digital Marketing Expertise",
          answer:"Leveraging digital marketing for any business requires a broad set of talent, tools, and strength in numbers. Let our team take care of the heavy lifting while we work with you to identify which services will benefit you the most and how we can maximize your reach with each marketing channel. Leveraging digital marketing for any business requires a broad set of talent, tools, and strength in numbers. Let our team take care .",
          image: Image1,
          percentage: "+98%",
          link:"#"
        },
        {
            no:"02",
          heading: "Why choose Creasions for Branding Services",
          answer:"Leveraging digital marketing for any business requires a broad set of talent, tools, and strength in numbers. Let our team take care of the heavy lifting while we work with you to identify which services will benefit you the most and how we can maximize your reach with each marketing channel. Leveraging digital marketing for any business requires a broad set of talent, tools, and strength in numbers. Let our team take care .",
          image: Image2,
          percentage: "+98%",
          link:"#"
        }
      ];

      // Use API data if available, otherwise fallback to static data
      const AccordianItems = whyChooseData?.features?.length > 0 
        ? whyChooseData.features.map((feature, index) => ({
            no: String(index + 1).padStart(2, '0'),
            heading: feature.title,
            answer: feature.text,
            image: feature.image || feature.background_image_url || (index === 0 ? Image1 : Image2),
            percentage: feature.achievement_heading || "+98%",
            link: feature.button_link || "#",
            buttonText: feature.buttton_text || "Get Started"
          }))
        : fallbackAccordianItems;
    return (
        <div className='sec-03'>
            <div className="marquee">
                {[...Array(4)].map((_, index) => (
                    <div className="track" key={index}>
                        <noscript>
                            <img decoding="async" src={Marquee} alt="marquee image" />
                        </noscript>
                        <Image
                            loading="lazy"
                            decoding="async"
                            src={Marquee}
                            alt="marquee image"
                            data-ll-status="loaded"
                        />
                    </div>
                ))}
            </div>
            <section className='branding-sec-03'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mainFaqBox">
                            {AccordianItems.map((item, index) => (
                                <div key={index} className="FaqBox">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className={`toogleBtn toogleBtn-wrapper ${openIndex === index ? "toogleBtn-hidden" : ""}`}
                                >
                                    <span>{item.no}</span>
                                    <span>{item.heading}</span>
                                    <span><svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.2812 47.877L48.1652 47.877L48.1652 29.993" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M23.1211 22.834L47.914 47.6269" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </span>
                                </button>
            
                                {openIndex === index && (
                                    <div className={`dataBox ${openIndex === index ? "open" : ""}`}>
                                    <div className="row" style={{backgroundImage: `url(${faqcustombg.src})`}}>
                                        <div className="upprtext">
                                            <span>{item.no}</span>
                                            <span>{item.heading}</span>
                                            <span><svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.2812 47.877L48.1652 47.877L48.1652 29.993" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M23.1211 22.834L47.914 47.6269" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            </span>
                                        </div>
                                        <div className="customFaqBox">
                                        <div className="imgBox">
                                            {item.image && (
                                                <div className="faq-image">
                                                <Image
                                                    src={item.image}
                                                    alt="FAQ Related Visual"
                                                    className="img-fluid"
                                                    width={400}
                                                    height={300}
                                                    unoptimized={typeof item.image === 'string' && item.image.startsWith('http')}
                                                />
                                                </div>
                                            )}
                                        </div>
                                        <div className="text">
                                            <div className="two-box">
                                                <span className="counter">{item.percentage}</span>
                                                <span>Successful Projects</span>
                                            </div>
                                            <div className="two-box secondBox">
                                            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                            <Link className="t-btn t-btn-arrow" href={item.link}>
                                            {item.buttonText || "Get Started"} 
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                />
                                                <path
                                                d="M3.5 12H20.33"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                />
                                            </svg>
                                            </Link>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                )}
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
