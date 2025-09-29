import React from 'react'
import Image from 'next/image'
import section3img01 from '/public/services/seo-services/section3-img-01.png'
import section3img02 from '/public/services/seo-services/section3-img-02.png'
import section3img03 from '/public/services/seo-services/section3-img-03.png'
import section3img04 from '/public/services/seo-services/section3-img-04.png'
import section3img05 from '/public/services/seo-services/section3-img-05.png'
import section3img06 from '/public/services/seo-services/section3-img-06.png'
import section3img07 from '/public/services/seo-services/section3-img-07.png'
import section3img08 from '/public/services/seo-services/section3-img-08.png'
import section3img09 from '/public/services/seo-services/section3-img-09.png'
import section3img10 from '/public/services/seo-services/section3-img-10.png'
import section3img11 from '/public/services/seo-services/section3-img-11.png'
import section3img12 from '/public/services/seo-services/section3-img-12.png'

export default function Section3({ technologiesData }) {
  const sectionHeading = technologiesData?.section_heading || "Technologies & Platforms We use for Search Engine Optimization";
  const sectionContent = technologiesData?.content?.replace(/<[^>]*>/g, '') || "As a leading reputation management agency in Dallas, we utilize cutting-edge ORM tools to protect and enhance your brand's online presence. Our team is certified and experienced in handling review management, SEO reputation repair, social media monitoring, and PR crisis management to ensure your business maintains a positive and trustworthy image.";
  const cardSectionHeading = technologiesData?.card?.section_heading || "Platforms & Tools We Use for Search Engine Optimization";
  const cards = technologiesData?.card?.cards || [];

  // Helper function to decode HTML entities and clean content
  const decodeHtmlEntities = (str) => {
    if (!str) return '';
    return str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ')
      .replace(/<[^>]*>/g, ''); // Remove HTML tags
  };

  return (
    <section className="section-03" >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.includes('Platforms') ? sectionHeading.replace('Platforms', '<br/> Platforms') : sectionHeading }} />
                <p>{sectionContent}</p>
                <h2 className='h6heading'>{cardSectionHeading}</h2>
                <div className="img-box">
                  {cards.length > 0 ? cards.map((card, index) => {
                    const defaultImages = [
                      section3img01, section3img02, section3img03, section3img04,
                      section3img05, section3img06, section3img07, section3img08,
                      section3img09, section3img10, section3img11, section3img12
                    ];
                    
                    return (
                      <div key={index} className="box">                    
                        {typeof card.image === 'string' ? (
                          <img src={card.image} alt={card.title} />
                        ) : (
                          <Image src={defaultImages[index] || section3img01} alt={card.title} />
                        )}
                        <div className="content-box">
                          <h6>{decodeHtmlEntities(card.title)}</h6>
                          <p>{decodeHtmlEntities(card.content)}</p>
                        </div>
                      </div>
                    );
                  }) : (
                    // Fallback to default cards if no API data
                    [
                      { title: "Google Search Console", content: "Our Google Search Console experts accurately analyze and optimize web performance, leveraging the platform's insights to enhance online visibility and ensure top-notch search engine results for our clients.", image: section3img01 },
                      { title: "Google Analytics", content: "Our Google Analytics experts skillfully interpret data, providing valuable insights that drive informed decision-making, optimize website performance, and maximize the online presence of our clients", image: section3img02 },
                      { title: "Semrush", content: "Our Semrush experts utilize the platform's robust analytics tools to conduct in-depth keyword research, competitor analysis, and website audits, ensuring a strategic and data-driven approach to optimize our clients online presence.", image: section3img03 },
                      { title: "Moz Pro", content: "Our Moz Pro experts utilize the platform's comprehensive suite of SEO tools to enhance website visibility, conduct accurate keyword research, and implement effective strategies for optimizing our clients online presence.", image: section3img04 },
                      { title: "KWFinder", content: "Our KWFinder experts influence the platform's powerful keyword research capabilities to identify high-ranking search terms, enabling strategic content optimization and enhancing the online visibility of our clients.", image: section3img05 },
                      { title: "Screaming Frog", content: "Our Screaming Frog experts make use of the platform's advanced crawling and auditing features to conduct thorough website analyses, ensuring optimal SEO performance and uncovering valuable insights for our clients.", image: section3img06 },
                      { title: "SE Ranking", content: "Our SE Ranking experts employ the platform's robust tools to conduct precise keyword tracking, competitor analysis, and website audits, ensuring strategic optimization and improved search engine visibility for our clients.", image: section3img07 },
                      { title: "Yoast", content: "Our Yoast experts adeptly utilize the features of the platform to optimize on-page SEO, ensuring that our clients websites adhere to best practices and achieve enhanced visibility in search engine results.", image: section3img08 },
                      { title: "Ubersuggest", content: "Our Ubersuggest experts make use of the platform's comprehensive insights to conduct meticulous keyword research and competitor analysis, ensuring data-driven strategies that enhance online visibility for our clients.", image: section3img09 },
                      { title: "Ahrefs", content: "Our Ahrefs experts make productive use of the platform's powerful suite of SEO tools to conduct comprehensive backlink analysis, keyword research, and competitive insights, ensuring a strategic approach to optimize our clients online presence.", image: section3img10 },
                      { title: "SEOquake", content: "Our SEOquake experts join the platform's robust features for real-time SEO analysis, providing invaluable insights into website performance and ensuring data-driven strategies to enhance our clients online visibility.", image: section3img11 },
                      { title: "Google Trends", content: "Our Google Trends experts influence the platform's dynamic insights to analyze search patterns, identify trending topics, and guide content strategies, ensuring our clients stay ahead in their online presence.", image: section3img12 }
                    ].map((card, index) => (
                      <div key={index} className="box">                    
                        <Image src={card.image} alt={card.title} />
                        <div className="content-box">
                          <h6>{card.title}</h6>
                          <p>{card.content}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}