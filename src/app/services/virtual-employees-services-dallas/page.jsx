import React from 'react'

import '@/app/css/services/NewVirtualEmployees.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import IntroSection from '@/components/views/services/new-virtual-employees/IntroSection';
import Section1 from '@/components/views/services/new-virtual-employees/Section1';
import Section2 from '@/components/views/services/new-virtual-employees/Section2';
import Section3 from '@/components/views/services/new-virtual-employees/Section3';
import Section4 from '@/components/views/services/new-virtual-employees/Section4';
import Section5 from '@/components/views/services/new-virtual-employees/Section5';
import Section6 from '@/components/views/services/new-virtual-employees/Section6';
import Testimonials from '@/components/views/services/new-virtual-employees/Testimonials';

import Faq from "@/components/layout/Faq";
import Section7 from '@/components/views/services/new-virtual-employees/Section7';
import Section8 from '@/components/views/services/new-virtual-employees/Section8';

import { metadata as pageMetadata } from "@/components/mocks/metadata/virtual-employee-service/metadata";
import { faqData } from '@/components/mocks/virtual-employees/faqMocks';

export const metadata = pageMetadata; 


export default function Page() {
  return (
    <main className='virtual-employees'>

      <IntroSection />
      <Section1 />
      <Section2 />

      <div className="bg-gredient-1">
        <Section3 />
        <Section4 />
        <Section5 />
      </div>

      <div className="bg-gredient-2">
        <Section6 />
        <Testimonials />
      </div>
      <Section7 />
      <Section8 />

      <Faq data={faqData} />


    </main>
  )
}
