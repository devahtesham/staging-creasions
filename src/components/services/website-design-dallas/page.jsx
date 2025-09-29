import React from "react";

import '@/app/css/services/WebDesign.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CursorLinesBackground from "@/components/views/services/web-development/CursorLinesBackground";
import IntroSection from "@/components/views/services/web-design/IntroSection";
import Section1 from "@/components/views/services/web-design/Section1";
import Section2 from "@/components/views/services/web-design/Section2";
import Section3 from "@/components/views/services/web-design/Section3";
import Section4 from "@/components/views/services/web-design/Section4";
import Section5 from "@/components/views/services/web-design/Section5";
import Section6 from "@/components/views/services/web-design/Section6";

import Faq from "./Faq";
import { getServiceDetailPage } from "@/utils/helper";
import Testimonials from "@/components/views/services/web-design/Testimonials";

import { metadata as pageMetadata } from "@/components/mocks/metadata/web-design/metadata";


export const metadata = pageMetadata; 


export default async function WebsiteDesignDallas({ template, slug }) {
  let pageData = {};
  
  try {
    pageData = await getServiceDetailPage(template, slug);
    console.log('[pageData]', pageData);
  } catch (error) {
    console.error('Error fetching page data:', error);
    // Continue with empty pageData to show fallback content
  }

  return (
    <main className="website-design">
       <CursorLinesBackground />
        <IntroSection bannerData={pageData?.banner} />
        <Section1 bannerData={pageData?.banner} />
        <Section2 serviceTabsData={pageData?.service_section_Tabs} servicesTabsImage={pageData?.services_tabs_section_image} />
        <Section6 servicesCardsData={pageData?.services_cards} />
        <Section5 portfolioData={pageData?.why_choose_us_section} />
        <Section3 />
        <Section4 technologiesData={pageData?.technologies_section} />
        <Testimonials reviewsData={pageData?.reviews} />
        <Faq allFaqs={pageData?.faqs || []} />  

    </main>
  );
}
