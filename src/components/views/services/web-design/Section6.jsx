"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import bulletsectionimg01 from "/public/services/web-design/bulletsection-img01.png";
import bulletsectionimg02 from "/public/services/web-design/bulletsection-img02.png";
import bulletsectionimg03 from "/public/services/web-design/bulletsection-img03.png";


export default function Section6({ servicesCardsData }) {
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
                        <h2>{servicesCardsData?.section_heading || "Why Web Design is Important"}</h2>
                        <div dangerouslySetInnerHTML={{ 
                          __html: servicesCardsData?.section_text || 
                          "Web design plays a pivotal role in shaping the online identity of a business and elevates the significance of its digital landscape. In the competitive online space, our website design services not only attract visitors but also retains their attention, fostering a positive impression and trust." 
                        }} />
                    </div>
                    <div className="bulletMainBox">
                        <ul className="bulletScroll">
                            {servicesCardsData?.tabs?.length > 0 ? (
                              servicesCardsData.tabs.map((tab, index) => (
                                <li key={index}>
                                    <div className="text">
                                        <h2 dangerouslySetInnerHTML={{ __html: tab.title || `Service ${index + 1}` }} />
                                        <div dangerouslySetInnerHTML={{ __html: tab.description || '' }} />
                                    </div>
                                    <div className="imgBox">
                                        <Image 
                                          src={tab.image || bulletsectionimg01} 
                                          alt={tab.title || "service image"}
                                          width={300}
                                          height={200}
                                          unoptimized={typeof tab.image === 'string' && tab.image.startsWith('http')}
                                        />
                                    </div>
                                </li>
                              ))
                            ) : (
                              // Fallback to static content
                              <>
                                <li>
                                    <div className="text">
                                        <h2>Demonstrates <br/>Professionalism</h2>
                                        <p>Investing in web design is a clear demonstration of professionalism for several reasons. A professionally designed website conveys a polished and well-thought-out image, reflecting the commitment of a business or individual to their online presence</p>
                                    </div>
                                    <div className="imgBox">
                                        <Image src={bulletsectionimg01} alt="image"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="text">
                                        <h2>Mobile<br/> Responsiveness</h2>
                                        <p>Creasions excels in delivering web designs that prioritize mobile responsiveness, ensuring an optimal user experience across all devices. As a leading provider of web design services, we recognize the significance of catering to the growing trend of mobile browsing.</p>
                                    </div>
                                    <div className="imgBox">
                                        <Image src={bulletsectionimg02} alt="image"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="text">
                                        <h2>Boosts Sales & Enhances <br/>Customer Experience</h2>
                                        <p>The visual appeal of a website, including high-quality images, appealing graphics, and a cohesive color scheme, can significantly impact a visitor&apos;s perception of a brand and its products or services. A professional and attractive website builds credibility in potential customers.</p>
                                    </div>
                                    <div className="imgBox">
                                        <Image src={bulletsectionimg03} alt="image"/>
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