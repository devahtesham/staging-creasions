import React from 'react';
import Image from 'next/image';

import SecImg1 from '/public/services/digital-marketing/dm-sec04-01.png';
import SecImg2 from '/public/services/digital-marketing/dm-sec04-02.png';
import SecImg3 from '/public/services/digital-marketing/dm-sec04-03.png';

const SectionContent = ({ title, content, imgSrc, imgAlt, reverse = false }) => {
  return (
    <div className={`row align-items-center pb-0 pt-0 ${reverse ? 'row-reverse' : ''}`}>
      <div className={`col-lg-6 ${reverse ? 'border-right-0' : 'border-bottom-0 border-top-0'}`}>
        <div className="img-box">
          <Image src={imgSrc} alt={imgAlt} className="img-fluid w-100" />
        </div>
      </div>
      <div className={`col-lg-6 ${reverse ? 'border-right-0' : 'border-0'}`}>
        <div className="text box-2">
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <section className="web-sec-2 web-design-2 pb-0 gradian-bg digital-sec-3 mobile-screen-slider">
      <div className="container">
        <div className="row file-text">
          <div className="col-lg-12">
            <div className="text text-center">
              <h4>Comprehensive Digital Marketing Dallas | Grow Your Brand Online</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pl-0 designing-slider" style={{ backgroundColor: '#fff' }}>
        <SectionContent
          title="Digital Marketing Plan"
          content="At Creasions, we offer a data-driven digital marketing Dallas strategy designed to enhance your brand’s visibility and engagement. Our SEO services ensure your website ranks higher on search engines, driving organic traffic and improving conversions. With targeted digital advertising Dallas, we create high-impact PPC campaigns that generate leads through Google Ads, Bing Ads, and social media marketing (SMM). Our content marketing and SEM strategies further position your brand in front of the right audience at the right time. Whether you need brand awareness, lead generation, or customer retention, our tailored digital strategy Dallas helps you achieve measurable results."
          imgSrc={SecImg1}
          imgAlt="Digital Marketing Plan"
        />

        {/* Why Choose Creasions Section */}
        <SectionContent
          title="Why Choose Creasions for Digital Marketing Benefits?"
          content="Choose Creasions as your trusted marketing consultant Dallas, specializing in result-driven digital marketing Dallas solutions. As a leading digital marketing agency, we craft budget-friendly marketing strategies tailored to your business goals, ensuring maximum ROI. Our expertise spans SEO, PPC, social media marketing, content marketing, and paid advertising, making us the go-to digital advertising firm in Dallas.We believe in transparency, offering complimentary website audits to provide valuable insights and kickstart your digital growth. At Creasions, we’re more than just an agency—we’re your strategic partner, dedicated to helping businesses establish, scale, and dominate online."
          imgSrc={SecImg2}
          imgAlt="Why Choose Creasions"
          reverse={true}
        />

        {/* Trade Promotion Management Software Section */}
        <SectionContent
          title={<>Trade Promotion<br />Management Software</>}
          content="Creasions introduces cutting-edge Trade Promotion Management (TPM) software, revolutionizing the way businesses strategize, execute, and optimize their promotional activities. Our TPM solution is a comprehensive platform designed to streamline and enhance the entire trade promotion process. With advanced features for planning, budgeting, and analyzing promotional campaigns, our software empowers businesses to make data-driven decisions, maximize ROI, and achieve greater visibility into promotional effectiveness."
          imgSrc={SecImg3}
          imgAlt="Trade Promotion Management Software"
        />
      </div>
    </section>
  );
};

export default Section4;
