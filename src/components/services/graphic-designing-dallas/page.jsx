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

import { getServiceDetailPage } from '@/utils/helper';
import Faq from './Faq';

export const metadata = pageMetadata;

export default async function GraphicDesigningDallas({ template, slug }) {
  const pageData = await getServiceDetailPage(template, slug)
  // console.log('[pageData]', pageData)

  return (
    <main className="graphic-designing">

      <IntroSection bannerData={pageData?.banner} />
      <Section1 standOutData={pageData?.stand_out_section} />
      <Section2 achievementsData={pageData?.our_achievements_section} />
      <Section3 servicesData={pageData?.our_services_section} />

      <div className="bg-gredient-1">
        <Section4 industriesData={pageData?.industries_we_serve_section} />
        <Testimonials clientsData={pageData?.our_top_clients_section} />
      </div>
      <Section6 portfolioData={pageData?.portfolio_section} />

      <Faq allFaqs={pageData?.faqs || []} />

    </main>
  )
}
