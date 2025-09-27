import React from 'react'
import Image from 'next/image'
import section4img01 from '/public/services/email-marketing/section4-img-01.png'
import section4img03 from '/public/services/email-marketing/section4-img-03.png'
import section4img04 from '/public/services/email-marketing/section4-img-04.png'
import section6img02 from '/public/services/email-marketing/section6-img-02.png'
import section6img05 from '/public/services/email-marketing/section6-img-05.png'
import section6img06 from '/public/services/email-marketing/section6-img-06.png'
import section6img07 from '/public/services/email-marketing/section6-img-07.png'
import section6img08 from '/public/services/email-marketing/section6-img-08.png'
import section6img09 from '/public/services/email-marketing/section6-img-09.png'
import section6img10 from '/public/services/email-marketing/section6-img-10.png'
import GreenTick from '/public/services/email-marketing/GreenTick.png'

export default function Section6({ certificationsData }) {
  const sectionHeading = certificationsData?.section_heading || "Work With Certified Email Marketing Experts in Dallas";
  const sectionText = certificationsData?.section_text?.replace(/<[^>]*>/g, '') || "As a top email marketing company in Dallas, we specialize in email automation, lead nurturing, drip campaigns, and retention marketing to help businesses boost engagement and revenue. Our team is certified in industry-leading email marketing platforms, ensuring you receive data-driven strategies that maximize ROI.";
  
  const certificationHeading = certificationsData?.our_certification?.section_heading || "Certified & Experienced in:";
  const certificationText = certificationsData?.our_certification?.section_text?.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&') || "Boost Engagement, Increase Sales & Strengthen Customer Loyalty with Our Dallas Email Marketing Experts!";
  const certificationCards = certificationsData?.our_certification?.cards || [];
  const technologiesImages = certificationsData?.technologies_we_work || [];

  const defaultTechImages = [section4img04, section6img02, section4img01, section4img03, section6img05, section6img06, section6img07, section6img08, section6img09, section6img10];
  
  const defaultCertifications = [
    { title: "Email Automation & Drip Campaigns" },
    { title: "Lead Nurturing & Customer Retention" },
    { title: "eCommerce Email Marketing (Klaviyo, Shopify)" },
    { title: "Segmentation & Personalized Email Strategies" },
    { title: "AI-Powered Email Analytics & Optimization" },
    { title: "SMS & Omnichannel Marketing Integration" }
  ];

  const displayCertifications = certificationCards.length > 0 ? certificationCards : defaultCertifications;
  const displayTechImages = technologiesImages.length > 0 ? technologiesImages : defaultTechImages.map(img => ({ image: img }));
  return (
    <section className="section-06" >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
                <p>{sectionText}</p>
                <div className="img-box">
                    {displayTechImages.map((tech, index) => (
                        tech.image && typeof tech.image === 'string' ? (
                            <img key={index} src={tech.image} alt="Technology" />
                        ) : (
                            <Image key={index} src={defaultTechImages[index] || section4img04} alt="Technology" />
                        )
                    ))}
                </div>
                <h6>{certificationHeading}</h6>
                <div className="experienced-grid">
                    {displayCertifications.map((cert, index) => (
                        <div key={index} className="experience-box">
                            <Image src={GreenTick} alt="Green Tick" />
                            <h6>{cert.title}</h6>
                        </div>
                    ))}
                </div>
                <p>{certificationText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}