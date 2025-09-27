import React from 'react'
import Image from 'next/image'
import section4img01 from '/public/services/email-marketing/section4-img-01.png'
import section4img02 from '/public/services/email-marketing/section4-img-02.png'
import section4img03 from '/public/services/email-marketing/section4-img-03.png'
import section4img04 from '/public/services/email-marketing/section4-img-04.png'

export default function Section4({ technologiesData }) {
  const sectionHeading = technologiesData?.section_heading || "Technologies & Platforms We use for Email Marketing";
  const sectionText = technologiesData?.section_text?.replace(/<[^>]*>/g, '').replace(/class="ql-align-center"/g, '') || "As a leading email marketing agency in Dallas, we leverage advanced tools and data-driven strategies to boost engagement, drive conversions, and grow your brand. Our certified team specializes in campaign automation, personalized email content, list management, performance tracking, and A/B testing — all tailored to ensure your business connects meaningfully with your audience and maximizes ROI.";
  const technologiesHeading = technologiesData?.technologies_we_use?.section_headign || "Platforms & Tools We Use for Email Marketing";
  const technologies = technologiesData?.technologies_we_use?.technologies || [];

  // Helper function to decode HTML entities
  const decodeHtmlEntities = (str) => {
    return str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
  };

  const defaultTechnologies = [
    {
      title: "Mailchimp",
      text: "Our Mailchimp experts navigate varied features to design visually appealing campaigns, segment audiences strategically, and analyze performance metrics, ensuring our clients achieve impactful and targeted email marketing.",
      image_url: section4img04
    },
    {
      title: "ActiveCampaign",
      text: "Our ActiveCampaign experts work on robust automation and segmentation capabilities to orchestrate personalized customer journeys, ensuring our clients achieve efficient and targeted marketing campaigns that drive engagement and conversion.",
      image_url: section4img03
    },
    {
      title: "Brevo",
      text: "Our team of Brevo experts excels in providing comprehensive services, encompassing marketing automation, email campaigns, transactional emails, and SMS messaging functionalities within a unified suite.",
      image_url: section4img02
    },
    {
      title: "HubSpot",
      text: "Our HubSpot experts specialize in providing the full spectrum of HubSpot's tools and features, ensuring our clients receive expert guidance in optimizing their marketing, sales, and customer service strategies.",
      image_url: section4img01
    }
  ];

  const displayTechnologies = technologies.length > 0 ? technologies : defaultTechnologies;
  const defaultImages = [section4img04, section4img03, section4img02, section4img01];
  return (
    <section className="section-04" >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
                <p>{sectionText}</p>
                <h6>{technologiesHeading}</h6>
                <div className="img-box">
                  {displayTechnologies.map((tech, index) => (
                    <div key={index} className="box">                    
                      {tech.image_url && typeof tech.image_url === 'string' ? (
                        <img src={tech.image_url} alt={tech.title} />
                      ) : (
                        <Image src={defaultImages[index] || section4img04} alt={tech.title} />
                      )}
                      <div className="content-box">
                        <h6>{decodeHtmlEntities(tech.title)}</h6>
                        <p>{decodeHtmlEntities(tech.text?.replace(/<[^>]*>/g, '') || '')}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}