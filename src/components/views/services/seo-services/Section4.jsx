"use client";

import React, { useState } from 'react';
import Image from 'next/image'
import tab1img from '/public/services/seo-services/tab1-img.png'

export default function Section4() {
  const [activeTab, setActiveTab] = useState('tab1');

  const renderContent = () => {
    switch (activeTab) {
      case 'tab0':
        return <div className="tab-content">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="text">
                        <h2>Keyword Research & Strategy – Target the Right Audience</h2>
                        <p>A successful SEO campaign starts with the right keywords. Our SEO company in Dallas conducts in-depth keyword research to identify high-value search terms that drive targeted traffic. We use data-driven strategies to optimize your website, ensuring it ranks for search engine optimization Dallas and other relevant industry terms.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-box">
                        <Image src={tab1img} />
                    </div>
                </div>
            </div>
        </div>;
      case 'tab1':
        return <div className="tab-content">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="text">
                        <h2>Link Building - Build Authority & Improve Rankings</h2>
                        <p>Backlinks remain one of the strongest ranking factors. Our Dallas SEO agency implements high-quality, white-hat link-building strategies to increase your website’s credibility. We acquire authoritative backlinks through ethical outreach, industry partnerships, and content marketing, strengthening your domain authority.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-box">
                        <Image src={tab1img} />
                    </div>
                </div>
            </div>
        </div>;
      case 'tab2':
        return <div className="tab-content">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="text">
                        <h2>Content Writing - Engaging, SEO-Optimized Content</h2>
                        <p>Content is at the heart of successful SEO. Our SEO services in Dallas include expert content writing that engages users and ranks on search engines. We provide:</p>
                        <ul>
                          <li>✔ SEO-optimized blog posts</li>
                          <li>✔ Website content updates</li>
                          <li>✔ Website content updates</li>
                          <li>✔ Product descriptions</li>
                          <li>✔ Landing page copy</li>
                          <li>✔ Press releases and more</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-box">
                        <Image src={tab1img} />
                    </div>
                </div>
            </div>
        </div>;
      case 'tab3':
        return <div className="tab-content">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="text">
                        <h2>On-Page SEO - Optimize Your Website for Search Engines</h2>
                        <p>Our SEO experts in Dallas implement on-page optimization techniques that improve search rankings and enhance user experience. This includes:</p>
                        <ul>
                          <li>✔ Title tag and meta description optimization</li>
                          <li>✔ Image optimization and alt text</li>
                          <li>✔ URL structuring</li>
                          <li>✔ Internal linking strategies</li>
                          <li>✔ Mobile-friendly enhancements</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-box">
                        <Image src={tab1img} />
                    </div>
                </div>
            </div>
        </div>;
      case 'tab4':
        return <div className="tab-content">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="text">
                        <h2>Local SEO - Dominate the Local Search Market</h2>
                        <p>If you want to attract more local customers, our local SEO services in Dallas are designed to enhance your visibility on Google Maps and local search results. We optimize:</p>
                        <ul>
                          <li>✔ Google My Business (GMB) listings</li>
                          <li>✔ NAP consistency (Name, Address, Phone)</li>
                          <li>✔ Local citations and directory listings</li>
                          <li>✔ Geo-targeted keyword strategies</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-box">
                        <Image src={tab1img} />
                    </div>
                </div>
            </div>
        </div>;
      case 'tab5':
        return <div className="tab-content">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="text">
                        <h2>Technical SEO - Ensure a Strong Website Foundation</h2>
                        <p>A well-structured website is crucial for SEO success. Our SEO company in Dallas performs:</p>
                        <ul>
                          <li>✔ Comprehensive SEO audits</li>
                          <li>✔ Website speed and performance optimization</li>
                          <li>✔ Mobile-first indexing improvements</li>
                          <li>✔ Fixing crawl errors, broken links, and duplicate content</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-box">
                        <Image src={tab1img} />
                    </div>
                </div>
            </div>
        </div>;
      case 'tab6':
        return <div className="tab-content">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="text">
                        <h2>eCommerce SEO - Maximize Online Sales & Revenue</h2>
                        <p>For eCommerce brands, our SEO services in Dallas focus on:</p>
                        <ul>
                          <li>✔ Optimizing product pages for search visibility</li>
                          <li>✔ Implementing schema markup for better click-through rates</li>
                          <li>✔ Enhancing site architecture for easy navigation</li>
                          <li>✔ Reducing cart abandonment with improved user experience</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-box">
                        <Image src={tab1img} />
                    </div>
                </div>
            </div>
        </div>;
      case 'tab7':
        return <div className="tab-content">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="text">
                        <h2>Amazon SEO - Stand Out in the Competitive Marketplace</h2>
                        <p>Selling on Amazon? Our SEO agency in Dallas specializes in Amazon marketing, offering:</p>
                        <ul>
                          <li>✔ Product listing optimization</li>
                          <li>✔ Amazon SEO campaigns</li>
                          <li>✔ Competitor research and analysis</li>
                          <li>✔ Advertising and PPC strategies for higher conversions</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-box">
                        <Image src={tab1img} />
                    </div>
                </div>
            </div>
        </div>;
      case 'tab8':
        return <div className="tab-content">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="text">
                        <h2>Franchise SEO - Grow Your Multi-Location Business</h2>
                        <p>For businesses with multiple locations, our SEO company Dallas offers franchise SEO solutions, including:</p>
                        <ul>
                          <li>✔ Optimized location-specific landing pages</li>
                          <li>✔ Local backlink building</li>
                          <li>✔ Reputation management and review optimization</li>
                          <li>✔ Geo-targeted ad campaigns</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-box">
                        <Image src={tab1img} />
                    </div>
                </div>
            </div>
        </div>;
      default:
        return null;
    }
  };

  return (
    <section className="section-04">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
              <h2 className='h6heading'>Dallas SEO Services</h2>
              <h2>Maximize Your<br /> Online Presence with Creasions
              </h2>
              <p className='mt-3'>At Creasions, we provide expert search engine optimization in Dallas, helping businesses achieve higher search rankings, increased organic traffic, and improved conversions. Our SEO services in Dallas are customized to meet your specific business goals, ensuring measurable results and long-term growth.</p>
            </div>
                          <div className="tabs-container">
                <div className="tabs">

                  <button
                    className={activeTab === 'tab0' ? 'active' : ''}
                    onClick={() => setActiveTab('tab0')}
                  >
                    Keyword Research
                  </button>

                  <button
                    className={activeTab === 'tab1' ? 'active' : ''}
                    onClick={() => setActiveTab('tab1')}
                  >
                    Link Building
                  </button>

                  <button
                    className={activeTab === 'tab2' ? 'active' : ''}
                    onClick={() => setActiveTab('tab2')}
                  >
                    Content Writing
                  </button>

                  <button
                    className={activeTab === 'tab3' ? 'active' : ''}
                    onClick={() => setActiveTab('tab3')}
                  >
                    On-Page SEO
                  </button>

                  <button
                    className={activeTab === 'tab4' ? 'active' : ''}
                    onClick={() => setActiveTab('tab4')}
                  >
                    Local SEO
                  </button>

                  <button
                    className={activeTab === 'tab5' ? 'active' : ''}
                    onClick={() => setActiveTab('tab5')}
                  >
                    Technical SEO
                  </button>

                  <button
                    className={activeTab === 'tab6' ? 'active' : ''}
                    onClick={() => setActiveTab('tab6')}
                  >
                    eCommerce SEO
                  </button>

                  <button
                    className={activeTab === 'tab7' ? 'active' : ''}
                    onClick={() => setActiveTab('tab7')}
                  >
                    Amazon SEO
                  </button>

                  <button
                    className={activeTab === 'tab8' ? 'active' : ''}
                    onClick={() => setActiveTab('tab8')}
                  >
                    Franchise SEO
                  </button>

                </div>
                {renderContent()}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
