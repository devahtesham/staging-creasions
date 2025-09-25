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
    // Transform API data to component format or use fallback
    const projects = (portfolioData?.projects && Array.isArray(portfolioData.projects)) ? portfolioData.projects : [];
    const sectionSpan = portfolioData?.section_span || "See Our Work";
    const sectionHeading = portfolioData?.section_heading || "Top Graphic Agencies in Dallas";

    return (
        <section className='sec-06'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h4>{sectionSpan}</h4>
                        <h2>{sectionHeading}</h2>
                        <div className="catelog-container">
                            <div className="catelog">
                                {projects.slice(0, 5).map((project, index) => (
                                    <div key={index} className="card-agency">
                                        <div className="card-img">
                                            {project.image_url ? (
                                                <img src={project.image_url} alt={project.title || `card${index + 1}`} />
                                            ) : (
                                                <Image src={[Card1, Card2, Card3, Card4, Card5][index] || Card1} alt={project.title || `card${index + 1}`} />
                                            )}
                                        </div>
                                        {project.title && project.content && (
                                            <div className="card-content">
                                                <h4>{project.title}</h4>
                                                <p>{project.content?.replace(/<[^>]*>/g, '') || ''}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="catelog">
                                {projects.slice(5, 10).map((project, index) => {
                                    const actualIndex = index + 5;
                                    const isLastProject = actualIndex === projects.length - 1 && project.link;
                                    
                                    if (isLastProject) {
                                        return (
                                            <div key={actualIndex} className="card-agency">
                                                <Link href={project.link}>
                                                    <div className="card-overlay-text">
                                                        {project.title || "VIEW FULL PORTFOLIO"}
                                                    </div>
                                                    <div className="card-img">
                                                        {project.image_url ? (
                                                            <img src={project.image_url} alt={project.title || "portfolio"} />
                                                        ) : (
                                                            <Image src={Card10} alt={project.title || "portfolio"} />
                                                        )}
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    }
                                    
                                    return (
                                        <div key={actualIndex} className="card-agency">
                                            <div className="card-img">
                                                {project.image_url ? (
                                                    <img src={project.image_url} alt={project.title || `card${actualIndex + 1}`} />
                                                ) : (
                                                    <Image src={[Card6, Card7, Card8, Card9, Card10][index] || Card6} alt={project.title || `card${actualIndex + 1}`} />
                                                )}
                                            </div>
                                            {project.title && project.content && (
                                                <div className="card-content">
                                                    <h4>{project.title}</h4>
                                                    <p>{project.content?.replace(/<[^>]*>/g, '') || ''}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                                
                                {/* Fallback to default portfolio link if no projects with links */}
                                {!projects.some(p => p.link) && (
                                    <div className="card-agency">
                                        <Link href="/portfolio/graphic-design">
                                            <div className="card-overlay-text">
                                                VIEW FULL PORTFOLIO
                                            </div>
                                            <div className="card-img">
                                                <Image src={Card10} alt="portfolio" />
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}
