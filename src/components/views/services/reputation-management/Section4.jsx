import React from 'react';
import Image from 'next/image'
import section4img01 from '/public/services/internet-marketing-agency/section4-img-01.png'
import section4img02 from '/public/services/internet-marketing-agency/section4-img-02.png'
import section4img03 from '/public/services/internet-marketing-agency/section4-img-03.png'
import section4img04 from '/public/services/internet-marketing-agency/section4-img-04.png'
import section4img05 from '/public/services/internet-marketing-agency/section4-img-05.png'
import section4img06 from '/public/services/internet-marketing-agency/section4-img-06.png'
import section4img07 from '/public/services/internet-marketing-agency/section4-img-07.png'
import section4img08 from '/public/services/internet-marketing-agency/section4-img-08.png'
import section4img09 from '/public/services/internet-marketing-agency/section4-img-09.png'
import section4img10 from '/public/services/internet-marketing-agency/section4-img-10.png'
import section4img11 from '/public/services/internet-marketing-agency/section4-img-11.png'
import section4img12 from '/public/services/internet-marketing-agency/section4-img-12.png'

export default function Section4({ technologyData }) {
    const sectionHeading = technologyData?.section_heading || "Work With Certified Reputation Management Experts";
    const sectionText = technologyData?.section_text?.replace(/<[^>]*>/g, '') || "As a leading reputation management agency in Dallas, we utilize cutting-edge ORM tools to protect and enhance your brand's online presence. Our team is certified and experienced in handling review management, SEO reputation repair, social media monitoring, and PR crisis management to ensure your business maintains a positive and trustworthy image.";
    const cards = technologyData?.cards || [];
    const technologies = cards.length > 0 ? cards[0]?.technologies || [] : [];
    const platformTitle = cards.length > 0 ? cards[0]?.section_heading || "Platforms & Tools We Use For Reputation Management" : "Platforms & Tools We Use For Reputation Management";

    const defaultTechnologies = [
        { heading: "Google Search Console", description: "Our Google Search Console experts accurately analyze and optimize web performance, leveraging the platform's insights to enhance online visibility and ensure top-notch search engine results for our clients.", icon_url: section4img01 },
        { heading: "Google Analytics", description: "Our Google Analytics experts skillfully interpret data, providing valuable insights that drive informed decision-making, optimize website performance, and maximize the online presence of our clients", icon_url: section4img02 },
        { heading: "Semrush", description: "Our Semrush experts utilize the platform's robust analytics tools to conduct in-depth keyword research, competitor analysis, and website audits, ensuring a strategic and data-driven approach to optimize our clients online presence.", icon_url: section4img03 },
        { heading: "Moz Pro", description: "Our Moz Pro experts utilize the platform's comprehensive suite of SEO tools to enhance website visibility, conduct accurate keyword research, and implement effective strategies for optimizing our clients online presence.", icon_url: section4img04 },
        { heading: "KWFinder", description: "Our KWFinder experts influence the platform's powerful keyword research capabilities to identify high-ranking search terms, enabling strategic content optimization and enhancing the online visibility of our clients.", icon_url: section4img05 },
        { heading: "Screaming Frog", description: "Our Screaming Frog experts make use of the platform's advanced crawling and auditing features to conduct thorough website analyses, ensuring optimal SEO performance and uncovering valuable insights for our clients.", icon_url: section4img06 },
        { heading: "SE Ranking", description: "Our SE Ranking experts employ the platform's robust tools to conduct precise keyword tracking, competitor analysis, and website audits, ensuring strategic optimization and improved search engine visibility for our clients.", icon_url: section4img07 },
        { heading: "Yoast", description: "Our Yoast experts adeptly utilize the features of the platform to optimize on-page SEO, ensuring that our clients websites adhere to best practices and achieve enhanced visibility in search engine results.", icon_url: section4img08 },
        { heading: "Ubersuggest", description: "Our Ubersuggest experts make use of the platform's comprehensive insights to conduct meticulous keyword research and competitor analysis, ensuring data-driven strategies that enhance online visibility for our clients.", icon_url: section4img09 },
        { heading: "Ahrefs", description: "Our Ahrefs experts make productive use of the platform's powerful suite of SEO tools to conduct comprehensive backlink analysis, keyword research, and competitive insights, ensuring a strategic approach to optimize our clients online presence.", icon_url: section4img10 },
        { heading: "SEOquake", description: "Our SEOquake experts join the platform's robust features for real-time SEO analysis, providing invaluable insights into website performance and ensuring data-driven strategies to enhance our clients online visibility.", icon_url: section4img11 },
        { heading: "Google Trends", description: "Our Google Trends experts influence the platform's dynamic insights to analyze search patterns, identify trending topics, and guide content strategies, ensuring our clients stay ahead in their online presence.", icon_url: section4img12 }
    ];
    
    const displayTechnologies = technologies.length > 0 ? technologies : defaultTechnologies;
    const defaultImages = [section4img01, section4img02, section4img03, section4img04, section4img05, section4img06, section4img07, section4img08, section4img09, section4img10, section4img11, section4img12];

    return (
        <section className="section4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                                    <div className="max-w-5xl mx-auto">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br />') }} />
                <p>{sectionText}</p>
                <p className="platform-title">{platformTitle}</p>
                                <div className="img-box">
                                  {displayTechnologies.map((tech, index) => (
                                    <div key={index} className="box">                    
                                      {tech.icon_url ? (
                                        <img src={tech.icon_url} alt={tech.heading} />
                                      ) : (
                                        <Image src={defaultImages[index] || section4img01} alt={tech.heading} />
                                      )}
                                        <div className="content-box">
                                          <h6>{tech.heading}</h6>
                                          <p>{tech.description?.replace(/<[^>]*>/g, '') || ''}</p>
                                        </div>
                                    </div>
                                  ))}
                                </div>
            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
