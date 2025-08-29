import React from 'react'

import '@/app/css/services/SoftwareDevelopment.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroSection from '@/components/views/services/software-development/IntroSection'
import Section1 from '@/components/views/services/software-development/Section1'
import Section2 from '@/components/views/services/software-development/Section2'
import Section3 from '@/components/views/services/software-development/Section3'
import Section4 from '@/components/views/services/software-development/Section4'
import Faq from '@/components/layout/Faq'
import { faqData } from '@/components/mocks/software-development/faqMocks'
import Testimonials from '@/components/views/services/software-development/Testimonials'


import { metadata as pageMetadata } from "@/components/mocks/metadata/software-development/metadata";


export const metadata = pageMetadata; 



export default function MainSection() {
  return (
    <main className="software-development">

        <IntroSection />
        <div className="gradian-bg">
        <Section1 />
        </div>
        <Section2 />
        <Section3 />
        <Section4 />
        <Testimonials />


        <Faq data={faqData} />


    </main>
  )
}
