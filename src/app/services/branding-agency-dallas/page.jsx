import React from "react";

import '@/app/css/services/Branding.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import IntroSection from "@/components/views/services/branding/IntroSection";
import Section1 from "@/components/views/services/branding/Section1";
import Section2 from "@/components/views/services/branding/Section2";
import Section3 from "@/components/views/services/branding/Section3";
import Section4 from "@/components/views/services/branding/Section4";

import Faq from "@/components/layout/Faq";
import { faqData } from "@/components/mocks/branding/faqMocks";
import Testimonials from "@/components/views/services/branding/Testimonials";
import Section5 from "@/components/views/services/branding/Section5";

import { metadata as pageMetadata } from "@/components/mocks/metadata/branding/metadata";


export const metadata = pageMetadata; 

export default function MainSection() {
  return (
    <main className="branding">
      <IntroSection />

      <div className="gradian-bg">
        <Section1 />
        <Section2 />
      </div>
        <Section3 />
        <Section4 />
        <Section5 />
        <Testimonials />
        
        <Faq data={faqData} />

    </main>
  );
}
