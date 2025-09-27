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
  const pageData = await getServiceDetailPage(template, slug)
  console.log('[pageData]', pageData)
  return (
    
      <main className="seo-services">
        <IntroSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Testimonials />
        <Section5 />
        <Section6 />
        <Faq allFaqs={pageData?.faqs || []} />  
      </main>
  );
}
