import React from 'react';
import SEO1 from "/public/icons/search-engine-optimization-01.png";
import SEO2 from "/public/icons/search-engine-optimization-02.png";
import SEO3 from "/public/icons/search-engine-optimization-03.png";
import SEO4 from "/public/icons/search-engine-optimization-04.png";
import SEO5 from "/public/icons/search-engine-optimization-05.png";
import SEO6 from "/public/icons/search-engine-optimization-06.png";
import SEO7 from "/public/icons/search-engine-optimization-07.png";
import SEO8 from "/public/icons/search-engine-optimization-08.png";
import SEO9 from "/public/icons/search-engine-optimization-09.png";
import SEO10 from "/public/icons/search-engine-optimization-10.png";
import SEO11 from "/public/icons/search-engine-optimization-11.png";
import SEO12 from "/public/icons/search-engine-optimization-12.png";

const tools = [
    {
        alt: "SEO-1 img",
        src: SEO1
    },
    {
        alt: "SEO-2 img",
        src: SEO2
    },
    {
        alt: "SEO-3 img",
        src: SEO3
    },
    {
        alt: "SEO-4 img",
        src: SEO4
    },
    {
        alt: "SEO-5 img",
        src: SEO5
    },
    {
        alt: "SEO-6 img",
        src: SEO6
    },
    {
        alt: "SEO-7 img",
        src: SEO7
    },
    {
        alt: "SEO-8 img",
        src: SEO8
    },
    {
        alt: "SEO-9 img",
        src: SEO9
    },
    {
        alt: "SEO-10 img",
        src: SEO10
    },
    {
        alt: "SEO-11 img",
        src: SEO11
    },
    {
        alt: "SEO-12 img",
        src: SEO12
    }

];

export default function Section4({ technologiesData }) {
    const sectionHeading = technologiesData?.section_heading || "Work With Certified Local Listing Management Experts";
    const sectionText = technologiesData?.section_text?.replace(/<[^>]*>/g, '') || "Ensure accurate and optimized business listings across multiple platforms with our local listing management services in Dallas. Our team is certified in top listing management tools to improve your local SEO, increase brand visibility, and attract more customers.";
    const technologies = technologiesData?.technologies || [];
    
    // Get platform title from the first technology section
    const platformTitle = technologies.length > 0 && technologies[0]?.technology_heading 
        ? technologies[0].technology_heading 
        : "Platforms & Tools We Use For Local Listing Management";
    
    // Get technology tools from the first technology section
    const dynamicTools = (technologies.length > 0 && technologies[0]?.technologies && Array.isArray(technologies[0].technologies)) 
        ? technologies[0].technologies 
        : [];
    
    const displayTools = dynamicTools.length > 0 ? dynamicTools : tools;

    return (
        <section className="section4">
            <div className="max-w-5xl mx-auto">
                <h2>{sectionHeading.split(" ").slice(0, 3).join(" ")}<br />{sectionHeading.split(" ").slice(3).join(" ")}</h2>
                <p>{sectionText}</p>
                <p className="platform-title">{platformTitle}</p>
                <div className="icon-grid">
                    {displayTools.map((tool, idx) => (
                        <div key={idx} className="icon-item">
                            <img
                                src={tool.image_url || (tool.src ? tool.src.src : '')}
                                alt={tool.alt || `Technology ${idx + 1}`}
                                className="icon-img"
                                width="80"
                                height="80"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
