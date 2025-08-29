import React from 'react'
import Image from 'next/image'
import section4img01 from '/public/services/email-marketing/section4-img-01.png'
import section4img02 from '/public/services/email-marketing/section4-img-02.png'
import section4img03 from '/public/services/email-marketing/section4-img-03.png'
import section4img04 from '/public/services/email-marketing/section4-img-04.png'

export default function Section4() {
  return (
    <section className="section-04" >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2>Technologies & Platforms<br/> We use for Email Marketing</h2>
                <p>As a leading email marketing agency in Dallas, we leverage advanced tools and data-driven strategies to boost engagement, drive conversions, and grow your brand. Our certified team specializes in campaign automation, personalized email content, list management, performance tracking, and A/B testing — all tailored to ensure your business connects meaningfully with your audience and maximizes ROI.</p>
                <h6>Platforms & Tools We Use for Email Marketing</h6>
                <div className="img-box">
                  <div className="box">                    
                    <Image src={section4img04} />
                      <div class="content-box">
                        <h6>Mailchimp</h6>
                        <p>Our Mailchimp experts navigate varied features to design visually appealing campaigns, segment audiences strategically, and analyze performance metrics, ensuring our clients achieve impactful and targeted email marketing.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img03} />
                      <div class="content-box">
                        <h6>ActiveCampaign</h6>
                        <p>Our ActiveCampaign experts work on robust automation and segmentation capabilities to orchestrate personalized customer journeys, ensuring our clients achieve efficient and targeted marketing campaigns that drive engagement and conversion.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img02} />
                      <div class="content-box">
                        <h6>Brevo</h6>
                        <p>Our team of Brevo experts excels in providing comprehensive services, encompassing marketing automation, email campaigns, transactional emails, and SMS messaging functionalities within a unified suite.</p>
                      </div>
                  </div>
                  <div className="box">                    
                    <Image src={section4img01} />
                      <div class="content-box">
                        <h6>HubSpot</h6>
                        <p>Our HubSpot experts specialize in providing the full spectrum of HubSpot&apos;s tools and features, ensuring our clients receive expert guidance in optimizing their marketing, sales, and customer service strategies.</p>
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