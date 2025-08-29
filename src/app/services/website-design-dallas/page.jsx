import React from "react";

import '@/app/css/services/WebDesign.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import IntroSection from "@/components/views/services/web-design/IntroSection";
import Section1 from "@/components/views/services/web-design/Section1";
import Section2 from "@/components/views/services/web-design/Section2";
import Section3 from "@/components/views/services/web-design/Section3";
import Section4 from "@/components/views/services/web-design/Section4";

import Faq from "@/components/layout/Faq";
import { faqData } from "@/components/mocks/web-design/faqMocks";
import Testimonials from "@/components/views/services/web-design/Testimonials";

import { metadata as pageMetadata } from "@/components/mocks/metadata/web-design/metadata";


export const metadata = pageMetadata; 


export default function MainSection() {
  return (
    <main className="website-design">
      <IntroSection />

      <div className="gradian-bg">
        <Section1 />
        <Section2 />
      </div>
        <Section3 />
        <Section4 />
        <Testimonials />
        
        <Faq data={faqData} />

    </main>
  );
}
