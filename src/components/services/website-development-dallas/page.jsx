import React from "react";
import { metadata as pageMetadata } from "@/components/mocks/metadata/web-development/metadata";

import '@/app/css/services/WebDevelopment.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CursorLinesBackground from "@/components/views/services/web-development/CursorLinesBackground";
import IntroSection from "@/components/views/services/web-development/IntroSection";
import Section1 from "@/components/views/services/web-development/Section1";
import Section2 from "@/components/views/services/web-development/Section2";
import Section3 from "@/components/views/services/web-development/Section3";
import Section4 from "@/components/views/services/web-development/Section4";
import Section5 from "@/components/views/services/web-development/Section5";
import Section6 from "@/components/views/services/web-development/Section6";
import Testimonials from "@/components/views/services/web-development/Testimonials";
import Faq from "./Faq";
import { getServiceDetailPage } from "@/utils/helper";

export const metadata = pageMetadata; 


export default async function WebsiteDevelopmentDallas({ template, slug }) {
  const pageData = await getServiceDetailPage(template, slug)
  console.log('[pageData]', pageData)
  return (
    <main className="website-development">
      <CursorLinesBackground />
      <Section1 bannerData={pageData?.banner} />
      <IntroSection bannerData={pageData?.banner} />
      <Section2 serviceTabsData={pageData?.service_section_Tabs} />
      <Section3 whyChooseData={pageData?.why_choose_us_section} />
      <Section4 whyChooseData={pageData?.why_choose_us_section} />
      <Section5 portfolioData={pageData?.info_cards_section} />
      <Section6 technologiesData={pageData?.technologies_section} />
      <Testimonials reviewsData={pageData?.reviews} />
      <Faq allFaqs={pageData?.faqs || []} />  
    </main>
  );
}
