import React from "react";
import { metadata as pageMetadata } from "@/components/mocks/metadata/ecommerce-marketing-dallas/metadata";

import '@/app/css/services/ecommercemarketingagency.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroSection from "@/components/views/services/ecommerce-marketing-agency/IntroSection";
import Section1 from "@/components/views/services/ecommerce-marketing-agency/Section1";
import Section3 from "@/components/views/services/ecommerce-marketing-agency/Section3";
import Section4 from "@/components/views/services/ecommerce-marketing-agency/Section4";
import Section5 from "@/components/views/services/ecommerce-marketing-agency/Section5";
import Section8 from "@/components/views/services/ecommerce-marketing-agency/Section8";
import Testimonials from "@/components/views/services/ecommerce-marketing-agency/Testimonial";
import Faq from "./Faq";
import { getServiceDetailPage } from "@/utils/helper";


export const metadata = pageMetadata; 


export default async function EcommerceMarketingDallas({ template, slug }) {  
  const pageData = await getServiceDetailPage(template, slug)
  console.log('[pageData]', pageData)
  return (
    
      <main className="ecommerce-marketing-agency">
        <IntroSection bannerData={pageData?.banner} />
        <Section1 standOutData={pageData?.stand_out_section} />
        <Section3 achievementsData={pageData?.our_achievements_section} />
        <Section4 servicesData={pageData?.our_services_section} />
        <Testimonials reviewsData={pageData?.reviews || []} />
        <Section5 technologiesData={pageData?.technnologies_section} />
        <Section8 aboutUsData={pageData?.about_us} />
        <Faq allFaqs={pageData?.faqs || []} />
      </main>
  );
}
