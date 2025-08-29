import React from 'react'
import Image from 'next/image'
import section03img01 from '/public/services/internet-marketing-agency/section03img01.png'
import section03img02 from '/public/services/internet-marketing-agency/section03img02.png'
import section03img03 from '/public/services/internet-marketing-agency/section03img03.png'
import section03img04 from '/public/services/internet-marketing-agency/section03img04.png'
import section03img05 from '/public/services/internet-marketing-agency/section03img05.png'

export default function Section3() {
  return (
    <section className="section-03" >
      <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-12">
                <div className="text text-center">
                    <h2>Our Dallas Internet<br/> Marketing & Advertising Services</h2>
                </div>
            </div>
          <div className="col-lg-6">
            <div className="img-box">
                <Image src={section03img01}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text textRight">
                <h2>Search Engine<br/> Optimization (SEO)</h2>
                <p>As a leading internet marketing agency in Dallas, we implement advanced SEO strategies to improve search rankings and drive organic traffic. Our SEO services in Dallas include:</p>
                <ul>
                    <li>Keyword Research & Strategy</li>
                    <li>On-Page & Off-Page SEO</li>
                    <li>Technical SEO & Local SEO Optimization</li>
                    <li>Link Building & Content Strategy</li>
                </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="text textLeft">
                <h2>Pay-Per-Click (PPC)<br/> Advertising</h2>
                <p>Maximize your ROI with high-performing PPC campaigns. Our Dallas advertising agency specializes in:</p>
                <ul>
                    <li>Google Ads & Bing Ads Management</li>
                    <li>Display & Retargeting Ads</li>
                    <li>YouTube & Video Advertising</li>
                    <li>eCommerce PPC & Amazon Ads</li>
                </ul>
            </div>
          </div>
            <div className="col-lg-6">
            <div className="img-box">
                <Image src={section03img02}/>
            </div>
          </div>

                    <div className="col-lg-6">
            <div className="img-box">
                <Image src={section03img03}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text textRight">
                <h2>Social Media Marketing &<br/> Advertising</h2>
                <p>Boost engagement and conversions with targeted social media marketing campaigns. Our social media marketing services in Dallas include:</p>
                <ul>
                    <li>Facebook & Instagram Ads</li>
                    <li>LinkedIn & Twitter Advertising</li>
                    <li>TikTok & YouTube Marketing</li>
                    <li>Influencer & Community Engagement</li>
                </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="text textLeft">
                <h2>Content Marketing<br/> and Brand Storytelling</h2>
                <p>Position your brand as an authority with high-quality, SEO-optimized content marketing strategies.</p>
                <ul>
                    <li>Blog Writing & Article Marketing</li>
                    <li>Website & Landing Page Content</li>
                    <li>Video & Visual Content Creation</li>
                    <li>Press Releases & Digital PR</li>
                </ul>
            </div>
          </div>
            <div className="col-lg-6">
            <div className="img-box">
                <Image src={section03img04}/>
            </div>
          </div>

           <div className="col-lg-6">
            <div className="img-box">
                <Image src={section03img05}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text textRight">
                <h2>Email Marketing &<br/> Automation</h2>
                <p>Leverage email marketing automation to nurture leads and increase customer retention.</p>
                <ul>
                    <li>Email Campaign Strategy & Execution</li>
                    <li>Personalized Drip Sequences</li>
                    <li>Lead Nurturing & Segmentation</li>
                    <li>eCommerce & B2B Email Marketing</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}