import Image from 'next/image'
import React from 'react'

import SecIcon1 from '/public/services/new-virtual-employees/ve-sec03-i01.webp';
import SecIcon2 from '/public/services/new-virtual-employees/ve-sec03-i02.webp';

export default function Section3({ expertiesData }) {
    const sectionSpan = expertiesData?.section_span || "OUR EXPERIENCES";
    const sectionHeading = expertiesData?.section_heading || "VES is the Future of Recruitment & Sales Outsourcing";
    const sectionText = expertiesData?.section_text?.replace(/<[^>]*>/g, '') || "Our specialized solutions deliver speed, scalability, & industry-leading technology to provide you with the competitive edge you need to find top talent and leads";
    const expertiesCards = expertiesData?.experties_cards || [];

    return (
        <section className="sec-03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <h4>{sectionSpan}</h4>
                        <h2>{sectionHeading}</h2>
                        <p>{sectionText}</p>
                    </div>

                    <div className="col-lg-7">
                        <div className="card-row">
                            {expertiesCards.length > 0 ? expertiesCards.map((card, index) => (
                                <div key={index} className="card card-blur-bg-1">
                                    {card.icon_url ? (
                                        <img src={card.icon_url} className="img-fluid" alt={card.title} />
                                    ) : (
                                        <Image src={index === 0 ? SecIcon1 : SecIcon2} className="img-fluid" alt={card.title} />
                                    )}
                                    <h3>{card.title}</h3>
                                    <p>{card.description?.replace(/<[^>]*>/g, '') || ''}</p>
                                </div>
                            )) : (
                                <>
                                    <div className="card card-blur-bg-1">
                                        <Image src={SecIcon1} className="img-fluid" alt="Icon 1" />
                                        <h3>Full-Cycle Recruitment</h3>
                                        <p>We help your company recruit the perfect candidates by sourcing, screening, scheduling and recruiting the best-fit talent.</p>
                                    </div>
                                    <div className="card card-blur-bg-1">
                                        <Image src={SecIcon2} className="img-fluid" alt="Icon 2" />
                                        <h3>IT Staff Augmentation</h3>
                                        <p>We help you recruit, hire, and manage the best IT talent that meets all of your project needs and help you deliver on time.</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
