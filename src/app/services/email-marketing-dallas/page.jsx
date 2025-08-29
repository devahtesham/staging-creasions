import React from "react";
import { metadata as pageMetadata } from "@/components/mocks/metadata/email-marketing/metadata";

import '@/app/css/services/EmailMarketing.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroSection from "@/components/views/services/email-marketing/IntroSection";
import Section1 from "@/components/views/services/email-marketing/Section1";
import Section2 from "@/components/views/services/email-marketing/Section2";
import Section3 from "@/components/views/services/email-marketing/Section3";
import Section4 from "@/components/views/services/email-marketing/Section4";
import Section5 from "@/components/views/services/email-marketing/Section5";
import Section6 from "@/components/views/services/email-marketing/Section6";
import Section7 from "@/components/views/services/email-marketing/Section7";
import Testimonials from "@/components/views/services/email-marketing/Testimonial";
import Faq from "@/components/layout/Faq";
import { faqData } from "@/components/mocks/email-marketing/faqMocks";


export const metadata = pageMetadata; 


export default function MainSection() {
  return (
    
      <main className="email-marketing">
        <IntroSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Testimonials />
        <Section6 />
        <Faq data={faqData} />
        <Section7 />
      </main>
  );
}
