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
import Faq from "@/components/layout/Faq";
import { faqData } from "@/components/mocks/ecommerce-marketing-agency/faqMocks";


export const metadata = pageMetadata; 


export default function MainSection() {
  return (
    
      <main className="ecommerce-marketing-agency">
        <IntroSection />
        <Section1 />
        <Section3 />
        <Section4 />
        <Testimonials />
        <Section5 />
        <Section8 />
        <Faq data={faqData} />
      </main>
  );
}
