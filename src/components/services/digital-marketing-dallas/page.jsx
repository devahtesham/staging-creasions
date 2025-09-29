import React from 'react'

import '@/app/css/services/DigitalMarketing.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IntroSection from '@/components/views/services/digital-marketing-services-in-usa/IntroSection';
import CursorLinesBackground from "@/components/views/services/web-development/CursorLinesBackground";
import Section1 from '@/components/views/services/digital-marketing-services-in-usa/Section1';
import Section2 from '@/components/views/services/digital-marketing-services-in-usa/Section2';
import Section3 from '@/components/views/services/digital-marketing-services-in-usa/Section3';
import Section4 from '@/components/views/services/digital-marketing-services-in-usa/Section4';
import Testimonials from '@/components/views/services/digital-marketing-services-in-usa/Testimonials';
import Section5 from '@/components/views/services/digital-marketing-services-in-usa/Section5';
import Faq from './Faq';
import digitalMainBg from '/public/services/digital-marketing/digitalMainBg.png';
import { getServiceDetailPage } from '@/utils/helper';


import { metadata as pageMetadata } from "@/components/mocks/metadata/digital-marketing/metadata";


export const metadata = pageMetadata; 



export default async function DigitalMarketingDallas({ template, slug }) {
  let pageData = {};
  
  try {
    pageData = await getServiceDetailPage(template, slug);
    console.log('[pageData]', pageData);
  } catch (error) {
    console.error('Error fetching page data:', error);
    // Continue with empty pageData to show fallback content
  }

  return (
    <main className="digital-marketing">
      <CursorLinesBackground />
      <div className='bggradient' style={{backgroundImage: `url(${digitalMainBg.src})`}}>
        <IntroSection bannerData={pageData?.banner} />
        <Section1 serviceTabsData={pageData?.service_section_Tabs} />
        <Section2 servicesCardsData={pageData?.services_cards} />
        <Section3 allServicesData={pageData?.all_services_grid} />
        <Section5 technologiesData={pageData?.technologies_we_work_with} />
        <Section4 infoCardsData={pageData?.info_cards_section} />
        <Testimonials reviewsData={pageData?.reviews} />
      </div>

        <Faq allFaqs={pageData?.faqs || []} />

    </main>
  )
}
