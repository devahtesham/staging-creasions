import React from "react";
import { metadata as pageMetadata } from "@/components/mocks/metadata/seo-services-dallas/metadata";

import '@/app/css/services/SeoServices.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroSection from "@/components/views/services/seo-services/IntroSection";
import Section1 from "@/components/views/services/seo-services/Section1";
import Section2 from "@/components/views/services/seo-services/Section2";
import Section3 from "@/components/views/services/seo-services/Section3";
import Section4 from "@/components/views/services/seo-services/Section4";
import Section5 from "@/components/views/services/seo-services/Section5";
import Section6 from "@/components/views/services/seo-services/Section6";
import Testimonials from "@/components/views/services/seo-services/Testimonial";
import Faq from "./Faq";
import { getServiceDetailPage } from "@/utils/helper";


export const metadata = pageMetadata; 


export default async function SeoServicesDallas( { template, slug } ) {
  const transformedTemp = template.split("-")[0];
  const pageData = await getServiceDetailPage(transformedTemp, slug)
  console.log('[pageData]', pageData)
  return (
    
      <main className="seo-services">
        <IntroSection bannerData={pageData?.banner} />
        <Section1 standOutData={pageData?.stand_out_section} />
        <Section2 servicesData={pageData?.our_services_section} />
        <Section3 servicesCardsData={pageData?.services_cards} />
        <Section4 technologiesData={pageData?.technologies_we_use} />
        <Testimonials reviewsData={pageData?.reviews || []} />
        <Section5 profileData={pageData?.view_profile} />
        <Section6 cardsData={pageData?.cards} />
        <Faq allFaqs={pageData?.faqs || []} />  
      </main>
  );
}
