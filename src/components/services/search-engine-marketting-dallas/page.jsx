import React from "react";
import { metadata as pageMetadata } from "@/components/mocks/metadata/ppc-services-dallas/metadata";

import '@/app/css/services/search-engine-marketing.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroSection from "@/components/views/services/search-engine-marketing/IntroSection";
import Section1 from "@/components/views/services/search-engine-marketing/Section1";
import Section2 from "@/components/views/services/search-engine-marketing/Section2";
import Section3 from "@/components/views/services/search-engine-marketing/Section3";
import Section4 from "@/components/views/services/search-engine-marketing/Section4";
import Section5 from "@/components/views/services/search-engine-marketing/Section5";
import Section6 from "@/components/views/services/search-engine-marketing/Section6";
import Section7 from "@/components/views/services/search-engine-marketing/Section7";
import Testimonials from "@/components/views/services/search-engine-marketing/Testimonial";
import Faq from "./Faq";
import { getServiceDetailPage } from "@/utils/helper";


export const metadata = pageMetadata; 


export default async function SearchEngineMarketingDallas( { template, slug } ) {
  const pageData = await getServiceDetailPage(template, slug)
  console.log('[pageData]', pageData)
  return (
    
      <main className="search-engine-marketing">
        <IntroSection bannerData={pageData?.banner} />
        <Section1 standOutData={pageData?.stand_out_section} />
        <Section2 standOutData={pageData?.stand_out_section} />
        <Section6 achievementsData={pageData?.our_achievements_section} />
        <Section3 servicesData={pageData?.our_services_section} />
        <Section4 technologiesData={pageData?.technnologies_section} />
        <Section5 expertiesData={pageData?.our_experties} />
        <Testimonials reviewsData={pageData?.reviews || []} />
        <Faq allFaqs={pageData?.faqs || []} />
        <Section6 aboutUsData={pageData?.about_us} />
      </main>
  );
}
