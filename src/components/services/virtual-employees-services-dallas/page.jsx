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

import Faq from "./Faq";
import Section7 from '@/components/views/services/new-virtual-employees/Section7';
import Section8 from '@/components/views/services/new-virtual-employees/Section8';

import { metadata as pageMetadata } from "@/components/mocks/metadata/virtual-employee-service/metadata";
import { getServiceDetailPage } from '@/utils/helper';

export const metadata = pageMetadata; 


export default async function VirtualEmployeesServicesDallas( { template, slug } ) {
  const pageData = await getServiceDetailPage(template, slug)
  console.log('[pageData]', pageData)
  return (
    <main className='virtual-employees'>

      <IntroSection bannerData={pageData?.banner} />
      <Section1 standOutData={pageData?.stand_out_section} />
      <Section2 achievementsData={pageData?.our_achievements_section} />

      <div className="bg-gredient-1">
        <Section3 expertiesData={pageData?.our_experties_section} />
        <Section4 challengesData={pageData?.challenges_section} />
        <Section5 informationCardData={pageData?.information_card} />
      </div>

      <div className="bg-gredient-2">
        <Section6 whyChooseUsData={pageData?.why_choose_us_section} />
        <Testimonials clientsData={pageData?.our_top_clients_section} />
      </div>
      <Section7 aboutUsData={pageData?.about_us_section} />
      <Section8 portfolioData={pageData?.portfolio_section} />

      <Faq allFaqs={pageData?.faqs || []} />


    </main>
  )
}
