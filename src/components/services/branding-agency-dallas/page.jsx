import React from "react";

import '@/app/css/services/Branding.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import IntroSection from "@/components/views/services/branding/IntroSection";
import Section1 from "@/components/views/services/branding/Section1";
import Section2 from "@/components/views/services/branding/Section2";
import Section3 from "@/components/views/services/branding/Section3";
import Section4 from "@/components/views/services/branding/Section4";
import pageBg from "/public/services/branding/pageBg.png"
import brandingsectestibg from "/public/services/branding/brandingsectestibg.png"

import Faq from "./Faq";
import { getServiceDetailPage } from "@/utils/helper";
import Testimonials from "@/components/views/services/branding/Testimonials";
import Section5 from "@/components/views/services/branding/Section5";
import Section6 from "@/components/views/services/branding/Section6";

import { metadata as pageMetadata } from "@/components/mocks/metadata/branding/metadata";


export const metadata = pageMetadata; 

export default async function BrandingAgencyDallas({ template, slug }) {    
  let pageData = {};
  
  try {
    pageData = await getServiceDetailPage(template, slug);
    console.log('[pageData]', pageData);
  } catch (error) {
    console.error('Error fetching page data:', error);
    // Continue with empty pageData to show fallback content
  }

  return (
    <main className="branding">
      <div className="pageBg" style={{backgroundImage: `url(${pageBg.src})` }}>
        <IntroSection bannerData={pageData?.banner} />
        <Section1 whyUsImage={pageData?.why_us_image} />
        <Section2 standOutData={pageData?.stand_out_section} />
        <Section3 whyChooseData={pageData?.why_choose_us_section} />
        <Section4 allServicesData={pageData?.all_services_grid} />
        <Section5 ourServicesData={pageData?.our_services_section} />
      </div>
      <div className="testiSection" style={{backgroundImage: `url(${brandingsectestibg.src})`}}>
        <Section6 technologiesData={pageData?.technologies_we_use} />
        <Testimonials reviewsData={pageData?.reviews} />
      </div>
        <Faq allFaqs={pageData?.faqs || []} />
    </main>
  );
}
