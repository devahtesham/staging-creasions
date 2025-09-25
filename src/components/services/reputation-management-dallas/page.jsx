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
import Faq from './Faq';
import Testimonials from '@/components/views/services/reputation-management/Testimonials';
import { getServiceDetailPage } from '@/utils/helper';

export const metadata = pageMetadata; 

export default async function ReputationManagementDallas( { template, slug } ) {
  const pageData = await getServiceDetailPage(template, slug)
  // console.log('[pageData]', pageData)
  return (
    <main className="local-listing">
        <IntroSection bannerData={pageData?.banner} />
        <Section1 standOutData={pageData?.stand_out_section} />
        <Section2 achievementsData={pageData?.our_achievements_section} />
        <div className="bg-gredient-2">
          <Section4 technologyData={pageData?.technology_we_use} />
          <Section3 expertiesData={pageData?.our_experties_section} />

        </div>
          <Testimonials reviewsData={pageData?.reviews} />
          
          <Section6 portfolioData={pageData?.portfolio_section} /> 
          <Faq allFaqs={pageData?.faqs || []} />
    </main>
  )
}
