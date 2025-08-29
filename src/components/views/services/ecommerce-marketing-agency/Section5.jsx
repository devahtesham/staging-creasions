import React from 'react'
import Section6Bg from '/public/services/ecommerce-marketing-agency/Section6Bg.png'
import Section6img from '/public/services/ecommerce-marketing-agency/Section6img.png'
import Section5Bg from '/public/services/ecommerce-marketing-agency/Section5Bg.png'
import Image from 'next/image'

export default function Section2() {
  return (
    <section className="section-02" style={{backgroundImage:`url(${Section5Bg.src})`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="text">
                <h2>Work With<br/> Certified Ecommerce<br/> Marketing Experts<br/> in Dallas</h2>
                <p>As a leading Ecommerce marketing company in Dallas, we specialize in SEO, PPC, social media, and conversion rate optimization to help online businesses scale rapidly. Our team is certified in industry-leading Ecommerce tools and platforms, ensuring you receive cutting-edge marketing strategies that drive revenue.</p>
                                <ul>
                    <li>Google Ads & Shopping Campaigns</li>
                    <li>Facebook, Instagram & TikTok Ads</li>
                    <li>Shopify & WooCommerce Store Optimization</li>
                    <li>Amazon & eBay Marketplace Growth</li>
                    <li>SEO & Content Marketing for Ecommerce</li>
                    <li>Email & SMS Marketing for Retention</li>
                </ul>
            </div>
          </div>
          <div className="col-lg-5" style={{backgroundImage:`url(${Section6Bg.src})`}}>
            <div className="img-box">
              <Image src={Section6img}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}