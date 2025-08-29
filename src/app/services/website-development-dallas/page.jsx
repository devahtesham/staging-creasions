import React from "react";
import Head from "next/head";
import { metadata as pageMetadata } from "@/components/mocks/metadata/web-development/metadata";
import RootLayout from "@/app/layout";

import '@/app/css/services/WebDevelopment.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroSection from "@/components/views/services/web-development/IntroSection";
import Section1 from "@/components/views/services/web-development/Section1";
import Section2 from "@/components/views/services/web-development/Section2";
import Section3 from "@/components/views/services/web-development/Section3";
import Section4 from "@/components/views/services/web-development/Section4";
import Section5 from "@/components/views/services/web-development/Section5";
import Section6 from "@/components/views/services/web-development/Section6";
import Testimonials from "@/components/views/services/web-development/Testimonials";
import Faq from "@/components/layout/Faq";
import { faqData } from "@/components/mocks/web-development/faqMocks";

export const metadata = pageMetadata; 


export default function MainSection() {
  return (
    
      <main className="website-development">
        <IntroSection />

        <div className="gradian-bg">
          <Section1 />
          <Section2 />
        </div>

        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Testimonials />
        <Faq data={faqData} />

      </main>
  );
}
