import React from 'react'
import { metadata as pageMetadata } from "@/components/mocks/metadata/reputation-management-dallas/metadata";

import '@/app/css/services/reputation-management.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IntroSection from '@/components/views/services/reputation-management/IntroSection';
import Section1 from '@/components/views/services/reputation-management/Section1';
import Section2 from '@/components/views/services/reputation-management/Section2';
import Section3 from '@/components/views/services/reputation-management/Section3';
import Section4 from '@/components/views/services/reputation-management/Section4';
import Section6 from '@/components/views/services/reputation-management/Section6';
import Faq from '@/components/layout/Faq';
import { faqData } from '@/components/mocks/reputation-management/faqMocks';
import Testimonials from '@/components/views/services/reputation-management/Testimonials';

export const metadata = pageMetadata; 

export default function page() {
  return (
    <main className="local-listing">
        <IntroSection/>
        <Section1/>
        <Section2/>
        <div className="bg-gredient-2">
          <Section4/>
          <Section3/>

        </div>
          <Testimonials />
          
          <Section6/> 
          <Faq data={faqData} />
    </main>
  )
}
