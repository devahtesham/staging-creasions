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

export default function Section3() {
  return (
    <section className="section-03" >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2>Technologies & Platforms<br/> We use for Search Engine Optimization</h2>
                <p>As a leading reputation management agency in Dallas, we utilize cutting-edge ORM tools to protect and enhance your brand’s online presence. Our team is certified and experienced in handling review management, SEO reputation repair, social media monitoring, and PR crisis management to ensure your business maintains a positive and trustworthy image.</p>
                <h2 className='h6heading'>Platforms & Tools We Use for Search Engine Optimization</h2>
                <div className="img-box">
                  <div className="box">                    
                    <Image src={section3img01} />
                      <div class="content-box">
                        <h6>Google Search Console</h6>
                        <p>Our Google Search Console experts accurately analyze and optimize web performance, leveraging the platform&apos;s insights to enhance online visibility and ensure top-notch search engine results for our clients.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section3img02} />
                      <div class="content-box">
                        <h6>Google Analytics</h6>
                        <p>Our Google Analytics experts skillfully interpret data, providing valuable insights that drive informed decision-making, optimize website performance, and maximize the online presence of our clients</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section3img03} />
                      <div class="content-box">
                        <h6>Semrush</h6>
                        <p>Our Semrush experts utilize the platform&apos;s robust analytics tools to conduct in-depth keyword research, competitor analysis, and website audits, ensuring a strategic and data-driven approach to optimize our clients online presence.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section3img04} />
                      <div class="content-box">
                        <h6>Moz Pro</h6>
                        <p>Our Moz Pro experts utilize the platform&apos;s comprehensive suite of SEO tools to enhance website visibility, conduct accurate keyword research, and implement effective strategies for optimizing our clients online presence.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section3img05} />
                      <div class="content-box">
                        <h6>KWFinder</h6>
                        <p>Our KWFinder experts influence the platform&apos;s powerful keyword research capabilities to identify high-ranking search terms, enabling strategic content optimization and enhancing the online visibility of our clients.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section3img06} />
                      <div class="content-box">
                        <h6>Screaming Frog</h6>
                        <p>Our Screaming Frog experts make use of the platform&apos;s advanced crawling and auditing features to conduct thorough website analyses, ensuring optimal SEO performance and uncovering valuable insights for our clients.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section3img07} />
                      <div class="content-box">
                        <h6>SE Ranking</h6>
                        <p>Our SE Ranking experts employ the platform&apos;s robust tools to conduct precise keyword tracking, competitor analysis, and website audits, ensuring strategic optimization and improved search engine visibility for our clients.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section3img08} />
                      <div class="content-box">
                        <h6>Yoast</h6>
                        <p>Our Yoast experts adeptly utilize the features of the platform to optimize on-page SEO, ensuring that our clients websites adhere to best practices and achieve enhanced visibility in search engine results.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section3img09} />
                      <div class="content-box">
                        <h6>Ubersuggest</h6>
                        <p>Our Ubersuggest experts make use of the platform&apos;s comprehensive insights to conduct meticulous keyword research and competitor analysis, ensuring data-driven strategies that enhance online visibility for our clients.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section3img10} />
                      <div class="content-box">
                        <h6>Ahrefs</h6>
                        <p>Our Ahrefs experts make productive use of the platform&apos;s powerful suite of SEO tools to conduct comprehensive backlink analysis, keyword research, and competitive insights, ensuring a strategic approach to optimize our clients online presence.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section3img11} />
                      <div class="content-box">
                        <h6>SEOquake</h6>
                        <p>Our SEOquake experts join the platform&apos;s robust features for real-time SEO analysis, providing invaluable insights into website performance and ensuring data-driven strategies to enhance our clients online visibility. </p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section3img12} />
                      <div class="content-box">
                        <h6>Google Trends</h6>
                        <p>Our Google Trends experts influence the platform&apos;s dynamic insights to analyze search patterns, identify trending topics, and guide content strategies, ensuring our clients stay ahead in their online presence.</p>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}