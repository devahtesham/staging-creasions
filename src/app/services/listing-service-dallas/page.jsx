import React from 'react'
import { metadata as pageMetadata } from "@/components/mocks/metadata/listing-service-dallas/metadata";

import '@/app/css/services/LocalListingManagement.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IntroSection from '@/components/views/services/local-listing-management/IntroSection';
import Section1 from '@/components/views/services/local-listing-management/Section1';
import Section2 from '@/components/views/services/local-listing-management/Section2';
import Section3 from '@/components/views/services/local-listing-management/Section3';
import Section4 from '@/components/views/services/local-listing-management/Section4';
import Section5 from '@/components/views/services/local-listing-management/Section5';
import Section6 from '@/components/views/services/local-listing-management/Section6';
import Faq from '@/components/layout/Faq';
import { faqData } from '@/components/mocks/local-listing-management/faqMocks';
import Testimonials from '@/components/views/services/local-listing-management/Testimonials';

export const metadata = pageMetadata; 

export default function page() {
  return (
    <main className="local-listing">
        <IntroSection/>
        <Section1/>
        <Section2/>
        <div className="bg-gredient-2">
          <Section3/>
          <Section4/>
          <Section5/> 

          <Testimonials />
          
          <Section6/> 
          <Faq data={faqData} />
        </div>
    </main>
  )
}
