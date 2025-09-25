import Image from 'next/image'
import React from 'react'

import client1 from '/public/services/new-virtual-employees/ve-sec08-Slider01.png'
import client2 from '/public/services/new-virtual-employees/ve-sec08-Slider02.png'
import client3 from '/public/services/new-virtual-employees/ve-sec08-Slider03.png'
import client4 from '/public/services/new-virtual-employees/ve-sec08-Slider04.png'
import client5 from '/public/services/new-virtual-employees/ve-sec08-Slider05.png'
import client6 from '/public/services/new-virtual-employees/ve-sec08-Slider06.png'


export default function Section8({ portfolioData }) {
    const sectionSpan = portfolioData?.section_span || "TOP NOTCH CLIENTS";
    const sectionHeading = portfolioData?.section_heading || "Get to know some of the clients our team has helped!";
    const projects = portfolioData?.projects || [];
    
    const defaultClients = [client1, client2, client3, client4, client5, client6];
    
    const clientLogos = projects.length > 0 ? projects.slice(0, 6) : defaultClients.map((client, index) => ({ image_url: client }));

    return (
        <section className="sec-08">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading">
                            <h4>{sectionSpan}</h4>
                            <h2>{sectionHeading}</h2>

                            <div className="client-logos">
                                <div className="row d-flex justify-content-between align-items-center">
                                    {clientLogos.map((logo, index) => (
                                        <div key={index} className="col-lg-2 col-md-6">
                                            <div className='card-blur-bg-3'>
                                                {typeof logo.image_url === 'string' ? (
                                                    <img src={logo.image_url} alt={`client-logo-${index + 1}`} />
                                                ) : (
                                                    <Image src={logo.image_url} alt={`client-logo-${index + 1}`} />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
