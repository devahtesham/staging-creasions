import React from 'react'
import CampaignVector from '/public/services/email-marketing/CampaignVector.png'
import EmailVector from '/public/services/email-marketing/EmailVector.png'
import NewsletterVector from '/public/services/email-marketing/NewsletterVector.png'
import eCommerceVector from '/public/services/email-marketing/eCommerceVector.png'
import SegmentationVector from '/public/services/email-marketing/SegmentationVector.png'
import PerformanceVector from '/public/services/email-marketing/PerformanceVector.png'
import bgimage from '/public/services/email-marketing/section3-bg.png'
import Image from 'next/image'

export default function Section3({ servicesData }) {
  const sectionHeading = servicesData?.section_heading || "Our Email Marketing Services in Dallas";
  const servicesCards = servicesData?.services_cards || [];
  const backgroundImage = servicesData?.section_background || bgimage.src;

  // Helper function to decode HTML entities and parse content
  const decodeHtmlEntities = (str) => {
    return str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
  };

  const parseContent = (htmlContent) => {
    if (!htmlContent) return { text: '', listItems: [] };
    
    // Extract text content
    const textMatch = htmlContent.match(/<p[^>]*>([^<]*)<\/p>/);
    const text = textMatch ? decodeHtmlEntities(textMatch[1]) : '';
    
    // Extract list items
    const listMatches = htmlContent.match(/<li[^>]*>([^<]*)<\/li>/g) || [];
    const listItems = listMatches.map(item => 
      decodeHtmlEntities(item.replace(/<[^>]*>/g, '').trim())
    );
    
    return { text, listItems };
  };

  const defaultServices = [
    {
      title: "Email Campaign Strategy & Consulting",
      icon_url: CampaignVector,
      description: "We create custom email marketing strategies based on your business goals, audience, and industry trends. From list segmentation to content optimization, we help maximize your email open rates, click-throughs, and conversions."
    },
    {
      title: "Email Automation and Sequences",
      icon_url: EmailVector,
      description: "<p>Save time and improve engagement with automated email workflows:</p><ul><li>Welcome Series – Make a great first impression.</li><li>Cart Abandonment Emails – Recover lost sales effortlessly.</li><li>Follow-Up Sequences – Nurture leads and drive engagement.</li><li>Win-Back Campaigns – Re-engage inactive customers.</li></ul>"
    },
    {
      title: "Newsletter and Promotional Emails",
      icon_url: NewsletterVector,
      description: "Keep your audience informed and engaged with weekly or monthly email newsletters featuring company updates, promotions, new product releases, and more."
    },
    {
      title: "eCommerce Email Marketing (Shopify, WooCommerce, Amazon, etc.)",
      icon_url: eCommerceVector,
      description: "<p>Maximize revenue for your eCommerce business with high-converting email flows:</p><ul><li>Product recommendations</li><li>Flash sales & seasonal campaigns</li><li>Post-purchase & upsell emails</li><li>Customer loyalty & referral programs</li></ul>"
    },
    {
      title: "Email List Growth & Segmentation",
      icon_url: SegmentationVector,
      description: "We use lead generation strategies to grow your email list with high-quality subscribers. Through advanced segmentation, we tailor campaigns to different customer segments, ensuring higher engagement and conversion rates."
    },
    {
      title: "A/B Testing & Email Performance Optimization",
      icon_url: PerformanceVector,
      description: "We continuously test subject lines, designs, CTAs, and send times to optimize performance and increase open rates, click-throughs, and revenue generation."
    }
  ];

  const defaultIcons = [CampaignVector, EmailVector, NewsletterVector, eCommerceVector, SegmentationVector, PerformanceVector];
  const displayServices = servicesCards.length > 0 ? servicesCards : defaultServices;
  return (
    <section className="section-03" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2>{sectionHeading}</h2>
            </div>
            <div className="services-grid">
                {displayServices.map((service, index) => {
                  const { text, listItems } = parseContent(service.description);
                  return (
                    <div key={index} className="services-box">
                        {service.icon_url && typeof service.icon_url === 'string' ? (
                            <img src={service.icon_url} alt={service.title} />
                        ) : (
                            <Image src={defaultIcons[index] || CampaignVector} alt={service.title} />
                        )}
                        <h5>{service.title}</h5>
                        <p>{text}</p>
                        {listItems.length > 0 && (
                          <ul>
                            {listItems.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}