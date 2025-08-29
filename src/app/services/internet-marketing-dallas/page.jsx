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
import Faq from "@/components/layout/Faq";
import { faqData } from "@/components/mocks/internet-marketing-agency/faqMocks";


export const metadata = pageMetadata; 


export default function MainSection() {
  return (
    
      <main className="internet-marketing-agency">
        <IntroSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Testimonials />
        <Section7 />
        <Section8 />
        <Faq data={faqData} />
      </main>
  );
}
