import React from 'react'

import '@/app/css/services/GraphicDesign.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import IntroSection from '@/components/views/services/graphic-designing/IntroSection';
import Section1 from '@/components/views/services/graphic-designing/Section1';
import Section2 from '@/components/views/services/graphic-designing/Section2';


import { metadata as pageMetadata } from "@/components/mocks/metadata/graphic-designing/metadata";
import Section3 from '@/components/views/services/graphic-designing/Section3';
import Section4 from '@/components/views/services/graphic-designing/Section4';
import Testimonials from '@/components/views/services/graphic-designing/Testimonials';  
import Section6 from '@/components/views/services/graphic-designing/Section6';
import Faq from '@/components/layout/Faq';
import { faqData } from '@/components/mocks/graphic-designing/faqMocks';

export const metadata = pageMetadata;

export default function page() {

  return (
    <main className="graphic-designing">

      <IntroSection />
      <Section1 />
      <Section2 />
      <Section3 />

      <div className="bg-gredient-1">
        <Section4 />
        <Testimonials />
      </div>
      <Section6 />

      <Faq data={faqData} />

    </main>
  )
}
