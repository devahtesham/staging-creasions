"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import VideoOptimizer from '@/components/ui/VideoOptimizer';
import bulletsectionimg01 from "/public/services/web-design/bulletsection-img01.png";
import bulletsectionimg02 from "/public/services/web-design/bulletsection-img02.png";
import bulletsectionimg03 from "/public/services/web-design/bulletsection-img03.png";
import bulletsectionimg04 from "/public/services/digital-marketing/bulletsection-img04.png";


export default function Section2({ servicesCardsData }) {
    useEffect(() => {
    const listItems = document.querySelectorAll(".bulletScroll li");

    const checkActive = () => {
      listItems.forEach((li) => {
        const rect = li.getBoundingClientRect();
        const liCenter = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;

        if (Math.abs(liCenter - screenCenter) < rect.height / 2) {
          if (!li.classList.contains("active")) {
            li.classList.add("active");
          }
        }
      });
    };

    window.addEventListener("scroll", checkActive);
    checkActive();

    return () => {
      window.removeEventListener("scroll", checkActive);
    };
  }, []);

  return (
    <section className="section-06">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text">
                        <h2>{servicesCardsData?.section_heading || "What Web Solution Do You Need?"}</h2>
                        <div dangerouslySetInnerHTML={{ 
                          __html: servicesCardsData?.section_text || 
                          "Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside but we approach them differently and know what factors are winning in each case." 
                        }} />
                    </div>
                    <div className="bulletMainBox">
                        <ul className="bulletScroll">
                            {servicesCardsData?.cards?.length > 0 ? (
                              servicesCardsData.cards.map((card, index) => (
                                <li key={index}>
                                    <div className="text">
                                        <h2 dangerouslySetInnerHTML={{ __html: card.heading || `Service ${index + 1}` }} />
                                        <div dangerouslySetInnerHTML={{ __html: card.content || '' }} />
                                    </div>
                                    <div className="imgBox">
                                        {card.image && card.image.endsWith('.mp4') ? (
                                          <VideoOptimizer
                                              src={card.image}
                                              poster={bulletsectionimg01}
                                          />
                                        ) : (
                                          <Image 
                                            src={card.image || bulletsectionimg01} 
                                            alt={card.heading || "service image"}
                                            width={300}
                                            height={200}
                                            unoptimized={typeof card.image === 'string' && card.image.startsWith('http')}
                                          />
                                        )}
                                    </div>
                                </li>
                              ))
                            ) : (
                              // Fallback to static content
                              <>
                                <li>
                                    <div className="text">
                                        <h2>Search Engine <br/>Optimization (SEO)</h2>
                                        <p>Since 2005, ith web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users.</p>
                                    </div>
                                    <div className="imgBox">
                                        <VideoOptimizer
                                            src="/video/firstVideo.mp4"
                                            poster={bulletsectionimg01}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className="text">
                                        <h2>Search Engine <br/> Marketing (SEM)</h2>
                                        <p>Since 2005, ScienceSoft works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users.</p>
                                    </div>
                                    <div className="imgBox">
                                        <VideoOptimizer
                                            src="/video/secondVideo.mp4"
                                            poster={bulletsectionimg02}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className="text">
                                        <h2>Pay-Per-Click  <br/>(PPC)</h2>
                                        <p>Since 2005, ScienceSoft works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users.</p>
                                    </div>
                                    <div className="imgBox">
                                        <Image src={bulletsectionimg04} alt="image"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="text">
                                        <h2>E-commerce <br/>Marketing</h2>
                                        <p>Since 2005, ith web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users.</p>
                                    </div>
                                    <div className="imgBox">
                                      <VideoOptimizer
                                          src="/video/thirdVideo.mp4"
                                          poster={bulletsectionimg03}
                                      />
                                    </div>
                                </li>
                              </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}