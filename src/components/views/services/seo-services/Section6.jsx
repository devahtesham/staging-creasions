import React from 'react'
import Image from 'next/image'
import section06img from '/public/services/seo-services/section06img.png'

export default function Section6({ cardsData }) {
  const cardData = cardsData && cardsData.length > 0 ? cardsData[0] : null;
  const sectionHeading = cardData?.heading || "Work with the Best SEO Agency in Dallas!";
  const sectionContent = cardData?.content?.replace(/<[^>]*>/g, '') || "At Creasions, we are committed to providing expert search engine optimization in Dallas, helping businesses rank higher, drive more traffic, and achieve long-term success. Call us today at +1 469-854-3814 or Book a Free Consultation to grow your business with top-notch SEO services in Dallas!";
  const backgroundImage = cardData?.backgroud || section06img.src;

  // Helper function to decode HTML entities
  const decodeHtmlEntities = (str) => {
    if (!str) return '';
    return str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
  };

  // Extract phone number and consultation link from content
  const extractLinksFromContent = (content) => {
    const phoneMatch = content.match(/\+1 469-854-3814/);
    const consultationMatch = content.match(/Book a Free Consultation/);
    
    if (phoneMatch || consultationMatch) {
      return content.replace(/Call us today at\s*/, '').replace(/\s*or\s*/, ' or ');
    }
    return content;
  };

  const processedContent = extractLinksFromContent(decodeHtmlEntities(sectionContent));

  return (
    <section className="section-06">
      <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5">
                <div className="text">
                    <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.includes('Best') ? sectionHeading.replace('Best', 'Best<br/>') : sectionHeading }} />
                    <div dangerouslySetInnerHTML={{ __html: processedContent }} />
                </div>
            </div>
          <div className="col-lg-7 justify-end">
            {typeof backgroundImage === 'string' ? (
              <img src={backgroundImage} alt="SEO Agency" />
            ) : (
              <Image src={section06img} alt="SEO Agency" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}