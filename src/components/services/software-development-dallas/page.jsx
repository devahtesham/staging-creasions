import React from 'react'

import '@/app/css/services/SoftwareDevelopment.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroSection from '@/components/views/services/software-development/IntroSection'
import Section1 from '@/components/views/services/software-development/Section1'
import Section2 from '@/components/views/services/software-development/Section2'
import Section3 from '@/components/views/services/software-development/Section3'
import Section4 from '@/components/views/services/software-development/Section4'
import { faqData } from '@/components/mocks/software-development/faqMocks'
import Testimonials from '@/components/views/services/software-development/Testimonials'
import { getServiceDetailPage } from '@/utils/helper'


import { metadata as pageMetadata } from "@/components/mocks/metadata/software-development/metadata";
import Faq from './Faq';


export const metadata = pageMetadata;



export default async function SoftwareDevelopmentDallas({ template, slug }) {

  const pageData = await getServiceDetailPage(template, slug)
  // console.log('[pageData]', pageData)
  return (
    <main className="software-development">

      <IntroSection pageData={pageData} />
      <div className="gradian-bg">
        <Section1 pageData={pageData} />
      </div>
      <Section2 pageData={pageData} />
      <Section3 pageData={pageData} />
      <Section4 pageData={pageData} />
      <Testimonials pageData={pageData} />


      <Faq allFaqs={pageData?.faqs || []} />


    </main>
  )
}
