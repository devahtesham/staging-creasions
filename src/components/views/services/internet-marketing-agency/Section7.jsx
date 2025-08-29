import React from 'react'
import Section6Bg from '/public/services/ecommerce-marketing-agency/Section6Bg.png'
import Section6img from '/public/services/ecommerce-marketing-agency/Section6img.png'
import Section5Bg from '/public/services/ecommerce-marketing-agency/Section5Bg.png'
import Image from 'next/image'

export default function Section7() {
  return (
    <section className="section-02" style={{backgroundImage:`url(${Section5Bg.src})`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text">
                <h2>Work With<br/> Certified Internet<br/> Marketing Experts<br/> in Dallas</h2>
                <p>As a top advertising agency in Dallas, we are certified in<br/> industry-leading marketing tools:</p>
                <ul>
                    <li>Google Ads & Google Analytics</li>
                    <li>Facebook & Instagram Advertising</li>
                    <li>HubSpot & Mailchimp Email Marketing</li>
                    <li>SEMrush & Ahrefs for SEO Optimization</li>
                    <li>Shopify & WooCommerce eCommerce Marketing</li>
                </ul>
            </div>
          </div>
          <div className="col-lg-6" style={{backgroundImage:`url(${Section6Bg.src})`}}>
            <div className="img-box">
              <Image src={Section6img}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}