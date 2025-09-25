import React from "react";
import { metadata as pageMetadata } from "@/components/mocks/metadata/internet-marketing-dallas/metadata";

import '@/app/css/services/internetmarketingagency.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroSection from "@/components/views/services/internet-marketing-agency/IntroSection";
import Section1 from "@/components/views/services/internet-marketing-agency/Section1";
import Section2 from "@/components/views/services/internet-marketing-agency/Section2";
import Section3 from "@/components/views/services/internet-marketing-agency/Section3";
import Section4 from "@/components/views/services/internet-marketing-agency/Section4";
import Section7 from "@/components/views/services/internet-marketing-agency/Section7";
import Section8 from "@/components/views/services/internet-marketing-agency/Section8";
import Testimonials from "@/components/views/services/internet-marketing-agency/Testimonial";
import Faq from "./Faq";
import { getServiceDetailPage } from '@/utils/helper';


export const metadata = pageMetadata; 


export default async function InternetMarketingDallas( { template, slug } ) {
  const pageData = await getServiceDetailPage(template, slug)
  // console.log('[pageData]', pageData)
  return (
    
      <main className="internet-marketing-agency">
        <IntroSection bannerData={pageData?.banner} />
        <Section1 servicesTabsData={pageData?.services_tabs_section_image} />
        <Section2 standOutData={pageData?.stand_out_section} />
        <Section3 informationCardData={pageData?.information_card} />
        <Section4 technologyData={pageData?.technnology_used} />
        <Testimonials reviewsData={pageData?.reviews || []} />
        <Section7 expertiesData={pageData?.our_experties_section} />
        <Section8 aboutUsData={pageData?.about_us_section} />
        <Faq allFaqs={pageData?.faqs || []} />
      </main>
  );
}
