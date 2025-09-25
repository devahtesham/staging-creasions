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
import Card10 from '/public/services/graphic-designing/gd-sec06-card10.png'

export default function Section6({ portfolioData }) {
    const sectionSpan = portfolioData?.section_span || "Why Choose";
    const sectionHeading = portfolioData?.section_heading || "Why Choose Creasions for Local Listing Management in Dallas?";
    const projects = portfolioData?.projects || [];
    
    const defaultCards = [
        { image: Card1, title: "", description: "" },
        { image: Card2, title: "100% Manual Optimization", description: "100% Manual Optimization - No Automation" },
        { image: Card3, title: "", description: "" },
        { image: Card4, title: "Monthly Reporting & Tracking", description: "Comprehensive Monthly Reporting & Tracking." },
        { image: Card5, title: "", description: "" },
        { image: Card6, title: "Dallas Local Listing Experts", description: "Experienced Local Listing Management Company Dallas" },
        { image: Card7, title: "", description: "" },
        { image: Card8, title: "Manager", description: "Dedicated Account Manager" },
        { image: Card9, title: "", description: "" },
        { image: Card10, title: "No Contracts, Just Results!", description: "No Long-Term Contracts - Proven Results!" }
    ];
    
    const displayProjects = projects.length > 0 ? projects : defaultCards;
    const defaultImages = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9, Card10];
    
    // Split projects into two catalogs (first 5 and remaining)
    const firstCatalog = displayProjects.slice(0, 5);
    const secondCatalog = displayProjects.slice(5, 10);

    return (
        <section className='sec-06'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h4>{sectionSpan}</h4>
                        <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br />') }} />
                        <div className="catelog-container">
                            <div className="catelog">
                                {firstCatalog.map((project, index) => (
                                    <div key={index} className="card-agency">
                                        <div className="card-img">
                                            {project.image_url && typeof project.image_url === 'string' ? (
                                                <img src={project.image_url} alt={project.title || `card${index + 1}`} />
                                            ) : (
                                                <Image src={defaultImages[index] || Card1} alt={project.title || `card${index + 1}`} />
                                            )}
                                        </div>
                                        {project.title && (
                                            <div className="card-content">
                                                <h4 dangerouslySetInnerHTML={{ __html: project.title.replace(/\n/g, '<br />') }} />
                                                <p>{project.description?.replace(/<[^>]*>/g, '') || ''}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="catelog">
                                {secondCatalog.map((project, index) => (
                                    <div key={index + 5} className="card-agency">
                                        <div className="card-img">
                                            {project.image_url && typeof project.image_url === 'string' ? (
                                                <img src={project.image_url} alt={project.title || `card${index + 6}`} />
                                            ) : (
                                                <Image src={defaultImages[index + 5] || Card6} alt={project.title || `card${index + 6}`} />
                                            )}
                                        </div>
                                        {project.title && (
                                            <div className="card-content">
                                                <h4 dangerouslySetInnerHTML={{ __html: project.title.replace(/\n/g, '<br />') }} />
                                                <p>{project.description?.replace(/<[^>]*>/g, '') || ''}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
