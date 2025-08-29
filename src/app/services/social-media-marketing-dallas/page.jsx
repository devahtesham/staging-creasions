import React from "react";
import { metadata as pageMetadata } from "@/components/mocks/metadata/social-media-marketing-dallas/metadata";

import '@/app/css/services/social-media-marketing.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroSection from "@/components/views/services/social-media-marketing/IntroSection";
import Section1 from "@/components/views/services/social-media-marketing/Section1";
import Section2 from "@/components/views/services/social-media-marketing/Section2";
import Section3 from "@/components/views/services/social-media-marketing/Section3";
import Section4 from "@/components/views/services/social-media-marketing/Section4";
import Section5 from "@/components/views/services/social-media-marketing/Section5";
import Section6 from "@/components/views/services/social-media-marketing/Section6";
import Section7 from "@/components/views/services/social-media-marketing/Section7";
import Testimonials from "@/components/views/services/social-media-marketing/Testimonial";
import Faq from "@/components/layout/Faq";
import { faqData } from "@/components/mocks/social-media-marketing/faqMocks";


export const metadata = pageMetadata; 


export default function MainSection() {
  return (
    
      <main className="email-marketing">
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
