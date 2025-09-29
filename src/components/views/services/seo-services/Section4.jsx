"use client";

import React, { useState } from 'react';
import Image from 'next/image'
import tab1img from '/public/services/seo-services/tab1-img.png'

export default function Section4({ servicesCardsData }) {
  const [activeTab, setActiveTab] = useState('tab0');

  const sectionSpan = servicesCardsData?.section_span || "Dallas SEO Services";
  const sectionHeading = servicesCardsData?.section_heading || "Maximize Your Online Presence with Creasions";
  const sectionContent = servicesCardsData?.content?.replace(/<[^>]*>/g, '') || "At Creasions, we provide expert search engine optimization in Dallas, helping businesses achieve higher search rankings, increased organic traffic, and improved conversions. Our SEO services in Dallas are customized to meet your specific business goals, ensuring measurable results and long-term growth.";
  const sectionCards = servicesCardsData?.section_cards || [];

  // Helper functions
  const decodeHtmlEntities = (str) => {
    if (!str) return '';
    return str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
  };

  const parseContent = (content) => {
    if (!content) return '';
    // Remove HTML tags except <ul> and <li>
    let parsed = content.replace(/<(?!\/?(?:ul|li)\b)[^>]*>/gi, '');
    // Convert <ul> and <li> to proper format
    parsed = parsed.replace(/<ul[^>]*>/gi, '');
    parsed = parsed.replace(/<\/ul>/gi, '');
    parsed = parsed.replace(/<li[^>]*>/gi, '✔ ');
    parsed = parsed.replace(/<\/li>/gi, '\n');
    return decodeHtmlEntities(parsed).trim();
  };

  const formatContentWithLists = (content) => {
    if (!content) return null;

    const parts = content.split(/(<ul>.*?<\/ul>)/gs);
    return parts.map((part, index) => {
      if (part.includes('<ul>')) {
        const items = part.match(/<li[^>]*>(.*?)<\/li>/g) || [];
        return (
          <ul key={index}>
            {items.map((item, itemIndex) => {
              const cleanItem = decodeHtmlEntities(item.replace(/<\/?li[^>]*>/g, ''));
              return <li key={itemIndex}>{cleanItem}</li>;
            })}
          </ul>
        );
      } else {
        const cleanText = decodeHtmlEntities(part.replace(/<[^>]*>/g, ''));
        return cleanText && <p key={index}>{cleanText}</p>;
      }
    });
  };

  const renderContent = () => {
    const tabIndex = parseInt(activeTab.replace('tab', ''));
    let currentService = null;

    // If we have API data, use it
    if (sectionCards && sectionCards.length > 0) {
      currentService = sectionCards[tabIndex] || sectionCards[0];
    }

    // If no API data or no service found, use default fallback services
    if (!currentService) {
      const defaultServices = [
        {
          title: "Keyword Research",
          heading: "Keyword Research & Strategy – Target the Right Audience",
          content: "A successful SEO campaign starts with the right keywords. Our SEO company in Dallas conducts in-depth keyword research to identify high-value search terms that drive targeted traffic. We use data-driven strategies to optimize your website, ensuring it ranks for search engine optimization Dallas and other relevant industry terms.",
          image: tab1img
        },
        {
          title: "Link Building",
          heading: "Link Building - Build Authority & Improve Rankings",
          content: "Backlinks remain one of the strongest ranking factors. Our Dallas SEO agency implements high-quality, white-hat link-building strategies to increase your website's credibility. We acquire authoritative backlinks through ethical outreach, industry partnerships, and content marketing, strengthening your domain authority.",
          image: tab1img
        },
        {
          title: "Content Writing",
          heading: "Content Writing - Engaging, SEO-Optimized Content",
          content: "Content is at the heart of successful SEO. Our SEO services in Dallas include expert content writing that engages users and ranks on search engines. We provide:<ul><li>✔ SEO-optimized blog posts</li><li>✔ Website content updates</li><li>✔ Product descriptions</li><li>✔ Landing page copy</li><li>✔ Press releases and more</li></ul>",
          image: tab1img
        },
        {
          title: "On-Page SEO",
          heading: "On-Page SEO - Optimize Your Website for Search Engines",
          content: "Our SEO experts in Dallas implement on-page optimization techniques that improve search rankings and enhance user experience. This includes:<ul><li>✔ Title tag and meta description optimization</li><li>✔ Image optimization and alt text</li><li>✔ URL structuring</li><li>✔ Internal linking strategies</li><li>✔ Mobile-friendly enhancements</li></ul>",
          image: tab1img
        },
        {
          title: "Local SEO",
          heading: "Local SEO - Dominate the Local Search Market",
          content: "If you want to attract more local customers, our local SEO services in Dallas are designed to enhance your visibility on Google Maps and local search results. We optimize:<ul><li>✔ Google My Business (GMB) listings</li><li>✔ NAP consistency (Name, Address, Phone)</li><li>✔ Local citations and directory listings</li><li>✔ Geo-targeted keyword strategies</li></ul>",
          image: tab1img
        },
        {
          title: "Technical SEO",
          heading: "Technical SEO - Ensure a Strong Website Foundation",
          content: "A well-structured website is crucial for SEO success. Our SEO company in Dallas performs:<ul><li>✔ Comprehensive SEO audits</li><li>✔ Website speed and performance optimization</li><li>✔ Mobile-first indexing improvements</li><li>✔ Fixing crawl errors, broken links, and duplicate content</li></ul>",
          image: tab1img
        },
        {
          title: "eCommerce SEO",
          heading: "eCommerce SEO - Maximize Online Sales & Revenue",
          content: "For eCommerce brands, our SEO services in Dallas focus on:<ul><li>✔ Optimizing product pages for search visibility</li><li>✔ Implementing schema markup for better click-through rates</li><li>✔ Enhancing site architecture for easy navigation</li><li>✔ Reducing cart abandonment with improved user experience</li></ul>",
          image: tab1img
        },
        {
          title: "Amazon SEO",
          heading: "Amazon SEO - Stand Out in the Competitive Marketplace",
          content: "Selling on Amazon? Our SEO agency in Dallas specializes in Amazon marketing, offering:<ul><li>✔ Product listing optimization</li><li>✔ Amazon SEO campaigns</li><li>✔ Competitor research and analysis</li><li>✔ Advertising and PPC strategies for higher conversions</li></ul>",
          image: tab1img
        },
        {
          title: "Franchise SEO",
          heading: "Franchise SEO - Grow Your Multi-Location Business",
          content: "For businesses with multiple locations, our SEO company Dallas offers franchise SEO solutions, including:<ul><li>✔ Optimized location-specific landing pages</li><li>✔ Local backlink building</li><li>✔ Reputation management and review optimization</li><li>✔ Geo-targeted ad campaigns</li></ul>",
          image: tab1img
        }
      ];
      
      currentService = defaultServices[tabIndex] || defaultServices[0];
    }

    const serviceImage = currentService.image || tab1img;
    
    return <div className="tab-content">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="text">
                    <h2>{decodeHtmlEntities(currentService.heading || currentService.title)}</h2>
                    <div>{formatContentWithLists(currentService.content)}</div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="img-box">
                    {typeof serviceImage === 'string' ? (
                      <img src={serviceImage} alt={currentService.title} />
                    ) : (
                      <Image src={serviceImage} alt={currentService.title || "Service Image"} />
                    )}
                </div>
            </div>
        </div>
    </div>;
  };

  return (
    <section className="section-04">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
              <h2 className='h6heading'>{sectionSpan}</h2>
              <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.includes('Online Presence') ? sectionHeading.replace('Online Presence', 'Online<br /> Presence') : sectionHeading }} />
              <p className='mt-3'>{sectionContent}</p>
            </div>
            <div className="tabs-container">
              <div className="tabs">
                {sectionCards.length > 0 ?
                  sectionCards.map((service, index) => (
                    <button
                      key={index}
                      className={activeTab === `tab${index}` ? 'active' : ''}
                      onClick={() => setActiveTab(`tab${index}`)}
                    >
                      {decodeHtmlEntities(service.title)}
                    </button>
                  ))
                  :
                  // Fallback to default tabs if no services data
                  [
                    'Keyword Research', 'Link Building', 'Content Writing', 'On-Page SEO',
                    'Local SEO', 'Technical SEO', 'eCommerce SEO', 'Amazon SEO', 'Franchise SEO'
                  ].map((title, index) => (
                    <button
                      key={index}
                      className={activeTab === `tab${index}` ? 'active' : ''}
                      onClick={() => setActiveTab(`tab${index}`)}
                    >
                      {title}
                    </button>
                  ))
                }
              </div>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
