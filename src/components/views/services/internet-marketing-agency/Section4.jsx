"use client";

import React, { useState } from 'react';
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
import socialmediamarketing1 from '/public/services/internet-marketing-agency/social-media-marketing-01.png'
import socialmediamarketing2 from '/public/services/internet-marketing-agency/social-media-marketing-02.png'
import socialmediamarketing3 from '/public/services/internet-marketing-agency/social-media-marketing-03.png'
import socialmediamarketing4 from '/public/services/internet-marketing-agency/social-media-marketing-04.png'
import socialmediamarketing5 from '/public/services/internet-marketing-agency/social-media-marketing-05.png'
import emailmarketing1 from '/public/services/internet-marketing-agency/email-marketing-01.png'
import emailmarketing2 from '/public/services/internet-marketing-agency/email-marketing-02.png'
import emailmarketing3 from '/public/services/internet-marketing-agency/email-marketing-03.png'
import emailmarketing4 from '/public/services/internet-marketing-agency/email-marketing-04.png'
import payperclick1 from '/public/services/internet-marketing-agency/pay-per-click-01.png'
import payperclick2 from '/public/services/internet-marketing-agency/pay-per-click-02.png'
import payperclick3 from '/public/services/internet-marketing-agency/pay-per-click-03.jpeg'
import payperclick4 from '/public/services/internet-marketing-agency/pay-per-click-04.png'

export default function Section4() {
  const [activeTab, setActiveTab] = useState('tab0');

  const renderContent = () => {
    switch (activeTab) {
      case 'tab0':
        return <div className="tab-content">
            <div className="row align-items-center">
                <div className="col-lg-12">
                <div className="img-box">
                  <div className="box">                    
                    <Image src={section4img01} />
                      <div class="content-box">
                        <h6>Google Search Console</h6>
                        <p>Our Google Search Console experts accurately analyze and optimize web performance, leveraging the platform&apos;s insights to enhance online visibility and ensure top-notch search engine results for our clients.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img02} />
                      <div class="content-box">
                        <h6>Google Analytics</h6>
                        <p>Our Google Analytics experts skillfully interpret data, providing valuable insights that drive informed decision-making, optimize website performance, and maximize the online presence of our clients</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img03} />
                      <div class="content-box">
                        <h6>Semrush</h6>
                        <p>Our Semrush experts utilize the platform&apos;s robust analytics tools to conduct in-depth keyword research, competitor analysis, and website audits, ensuring a strategic and data-driven approach to optimize our clients online presence.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img04} />
                      <div class="content-box">
                        <h6>Moz Pro</h6>
                        <p>Our Moz Pro experts utilize the platform&apos;s comprehensive suite of SEO tools to enhance website visibility, conduct accurate keyword research, and implement effective strategies for optimizing our clients online presence.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img05} />
                      <div class="content-box">
                        <h6>KWFinder</h6>
                        <p>Our KWFinder experts influence the platform&apos;s powerful keyword research capabilities to identify high-ranking search terms, enabling strategic content optimization and enhancing the online visibility of our clients.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img06} />
                      <div class="content-box">
                        <h6>Screaming Frog</h6>
                        <p>Our Screaming Frog experts make use of the platform&apos;s advanced crawling and auditing features to conduct thorough website analyses, ensuring optimal SEO performance and uncovering valuable insights for our clients.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img07} />
                      <div class="content-box">
                        <h6>SE Ranking</h6>
                        <p>Our SE Ranking experts employ the platform&apos;s robust tools to conduct precise keyword tracking, competitor analysis, and website audits, ensuring strategic optimization and improved search engine visibility for our clients.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img08} />
                      <div class="content-box">
                        <h6>Yoast</h6>
                        <p>Our Yoast experts adeptly utilize the features of the platform to optimize on-page SEO, ensuring that our clients websites adhere to best practices and achieve enhanced visibility in search engine results.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img09} />
                      <div class="content-box">
                        <h6>Ubersuggest</h6>
                        <p>Our Ubersuggest experts make use of the platform&apos;s comprehensive insights to conduct meticulous keyword research and competitor analysis, ensuring data-driven strategies that enhance online visibility for our clients.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img10} />
                      <div class="content-box">
                        <h6>Ahrefs</h6>
                        <p>Our Ahrefs experts make productive use of the platform&apos;s powerful suite of SEO tools to conduct comprehensive backlink analysis, keyword research, and competitive insights, ensuring a strategic approach to optimize our clients online presence.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img11} />
                      <div class="content-box">
                        <h6>SEOquake</h6>
                        <p>Our SEOquake experts join the platform&apos;s robust features for real-time SEO analysis, providing invaluable insights into website performance and ensuring data-driven strategies to enhance our clients online visibility. </p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img12} />
                      <div class="content-box">
                        <h6>Google Trends</h6>
                        <p>Our Google Trends experts influence the platform&apos;s dynamic insights to analyze search patterns, identify trending topics, and guide content strategies, ensuring our clients stay ahead in their online presence.</p>
                      </div>
                  </div>
                </div>
                </div>
            </div>
        </div>;
      case 'tab1':
        return <div className="tab-content">
            <div className="row align-items-center">
                <div className="col-lg-12">
                <div className="img-box">
                  <div className="box">                    
                    <Image src={socialmediamarketing1} />
                      <div class="content-box">
                        <h6>Facebook</h6>
                        <p>Our Facebook specialist employs strategic expertise to optimize engagement, analyze analytics, and implement targeted campaigns, ensuring our clients effectively connect with their audience on the Facebook platform.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={socialmediamarketing2} />
                      <div class="content-box">
                        <h6>Instagram</h6>
                        <p>Our Instagram specialist adeptly utilizes the platform&apos;s visual storytelling features, analytics, and engagement strategies to create a compelling brand presence, ensuring our clients connect authentically with their audience on Instagram.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={socialmediamarketing3} />
                      <div class="content-box">
                        <h6>Linkedin</h6>
                        <p>Our LinkedIn experts strategically optimize profiles, curate engaging content, and implement targeted networking strategies, ensuring our clients establish a strong professional presence and effectively connect with their target audience on the platform.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={socialmediamarketing4} />
                      <div class="content-box">
                        <h6>Twitter</h6>
                        <p>Our Twitter experts grip dynamic features to curate engaging content, implement strategic hashtag strategies, and foster meaningful interactions, ensuring our clients effectively amplify their brand presence and connect with their audience.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={socialmediamarketing5} />
                      <div class="content-box">
                        <h6>Pinterest</h6>
                        <p>Our Pinterest experts work on aesthetics to create engaging content, implement effective pinning strategies, and optimize boards, ensuring our clients enhance their brand visibility and connect with their audience creatively.</p>
                      </div>
                  </div>
                </div>
                </div>
            </div>
        </div>
      case 'tab2':
        return <div className="tab-content">
            <div className="row align-items-center">
                <div className="col-lg-12">
                <div className="img-box">
                  <div className="box">                    
                    <Image src={emailmarketing1} />
                      <div class="content-box">
                        <h6>Mailchimp</h6>
                        <p>Our Mailchimp experts navigate varied features to design visually appealing campaigns, segment audiences strategically, and analyze performance metrics, ensuring our clients achieve impactful and targeted email marketing.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={emailmarketing2} />
                      <div class="content-box">
                        <h6>ActiveCampaign</h6>
                        <p>Our ActiveCampaign experts work on robust automation and segmentation capabilities to orchestrate personalized customer journeys, ensuring our clients achieve efficient and targeted marketing campaigns that drive engagement and conversion.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={emailmarketing3} />
                      <div class="content-box">
                        <h6>Brevo</h6>
                        <p>Our team of Brevo experts excels in providing comprehensive services, encompassing marketing automation, email campaigns, transactional emails, and SMS messaging functionalities within a unified suite.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={emailmarketing4} />
                      <div class="content-box">
                        <h6>HubSpot</h6>
                        <p>Our HubSpot experts specialize in providing the full spectrum of HubSpot&apos;s tools and features, ensuring our clients receive expert guidance in optimizing their marketing, sales, and customer service strategies.</p>
                      </div>
                  </div>
                </div>
                </div>
            </div>
        </div>
      case 'tab3':
        return <div className="tab-content">
            <div className="row align-items-center">
                <div className="col-lg-12">
                <div className="img-box">
                  <div className="box">                    
                    <Image src={payperclick1} />
                      <div class="content-box">
                        <h6>Google Ads</h6>
                        <p>Our Google Ads specialists expertly navigate the Pay Per Click landscape, utilizing strategic insights and optimization techniques to maximize the effectiveness of our clients advertising campaigns. </p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={payperclick2} />
                      <div class="content-box">
                        <h6>Google Keyword Planner</h6>
                        <p>Our Google Keyword Planner specialists strategically analyze insights to curate targeted keyword lists, ensuring optimal performance and visibility for our clients online content.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={payperclick3} />
                      <div class="content-box">
                        <h6>Google Ads Editor</h6>
                        <p>Our Google Ads Editor specialists proficiently utilize advanced features to streamline campaign management, ensuring efficient optimization and strategic implementation for our clients advertising initiatives.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={payperclick4} />
                      <div class="content-box">
                        <h6>Google Analytics</h6>
                        <p>Our Google Analytics specialists put to use the power of data analytics to provide invaluable insights, enabling our clients to make informed decisions and optimize their online strategies for enhanced performance.</p>
                      </div>
                  </div>
                </div>
                </div>
            </div>
        </div>
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
              <h2>Technologies and Platforms<br/> We use for Search Engine Optimization</h2>
            </div>
                          <div className="tabs-container">
                <div className="tabs">

                  <button
                    className={activeTab === 'tab0' ? 'active' : ''}
                    onClick={() => setActiveTab('tab0')}
                  >
                    Search Engine Optimization
                  </button>

                  <button
                    className={activeTab === 'tab1' ? 'active' : ''}
                    onClick={() => setActiveTab('tab1')}
                  >
                    Social Media Marketing
                  </button>

                  <button
                    className={activeTab === 'tab2' ? 'active' : ''}
                    onClick={() => setActiveTab('tab2')}
                  >
                    Email marketing
                  </button>

                  <button
                    className={activeTab === 'tab3' ? 'active' : ''}
                    onClick={() => setActiveTab('tab3')}
                  >
                    Pay per Click
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
