import React from 'react'

import '@/app/css/services/DigitalMarketing.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IntroSection from '@/components/views/services/digital-marketing-services-in-usa/IntroSection';
import Section1 from '@/components/views/services/digital-marketing-services-in-usa/Section1';
import Section2 from '@/components/views/services/digital-marketing-services-in-usa/Section2';
import Section3 from '@/components/views/services/digital-marketing-services-in-usa/Section3';
import Section4 from '@/components/views/services/digital-marketing-services-in-usa/Section4';
import Testimonials from '@/components/views/services/digital-marketing-services-in-usa/Testimonials';
import Section5 from '@/components/views/services/digital-marketing-services-in-usa/Section5';
import Faq from '@/components/layout/Faq';
import { faqData } from '@/components/mocks/digital-marketing/faqMocks';


import { metadata as pageMetadata } from "@/components/mocks/metadata/digital-marketing/metadata";


export const metadata = pageMetadata; 



export default function MainSection() {
  return (
    <main className="digital-marketing">
        <IntroSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section5 />
        <Section4 />
        <Testimonials />

        <Faq data={faqData} />

    </main>
  )
}
