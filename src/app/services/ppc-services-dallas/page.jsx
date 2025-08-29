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
import Faq from "@/components/layout/Faq";
import { faqData } from "@/components/mocks/search-engine-marketing/faqMocks";


export const metadata = pageMetadata; 


export default function MainSection() {
  return (
    
      <main className="search-engine-marketing">
        <IntroSection />
        <Section1 />
        <Section2 />
        <Section6 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Testimonials />
        <Faq data={faqData} />
        <Section7 />
      </main>
  );
}
