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
import Faq from './Faq';
import Testimonials from '@/components/views/services/local-listing-management/Testimonials';
import { getServiceDetailPage } from '@/utils/helper';

export const metadata = pageMetadata; 

export default async function ListingServiceDallas( { template, slug } ) {
  const transformedTemp = template.split("-")[0];
  const pageData = await getServiceDetailPage(transformedTemp, slug)
  console.log('[pageData]', pageData)
  return (
    <main className="local-listing">
        <IntroSection bannerData={pageData?.banner} />
        <Section1 standOutData={pageData?.stand_out_section} />
        <Section2 achievementsData={pageData?.our_achievements_section} />
        <div className="bg-gredient-2">
          <Section3 servicesData={pageData?.our_services_section} />
          <Section4 technologiesData={pageData?.technologies_we_work_section} />
          <Section5 certificationsData={pageData?.certification_sections} /> 

          <Testimonials clientsData={pageData?.our_top_clients_section} />
          
          <Section6 portfolioData={pageData?.portfolio_section} /> 
          <Faq allFaqs={pageData?.faqs || []} />
        </div>
    </main>
  )
}
