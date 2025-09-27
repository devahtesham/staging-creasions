import React from "react";
import { metadata as pageMetadata } from "@/components/mocks/metadata/social-media-marketing-dallas/metadata";

import '@/app/css/services/social-media-marketing.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroSection from "@/components/views/services/social-media-marketing/IntroSection";
import Section1 from "@/components/views/services/social-media-marketing/Section1";
import Section2 from "@/components/views/services/social-media-marketing/Section2";
import Section3 from "@/components/views/services/social-media-marketing/Section3";
import Section4 from "@/components/views/services/social-media-marketing/Section4";
import Section5 from "@/components/views/services/social-media-marketing/Section5";
import Section6 from "@/components/views/services/social-media-marketing/Section6";
import Section7 from "@/components/views/services/social-media-marketing/Section7";
import Testimonials from "@/components/views/services/social-media-marketing/Testimonial";
import Faq from "./Faq";
import { getServiceDetailPage } from "@/utils/helper";


export const metadata = pageMetadata; 


export default async function SocialMediaMarketingDallas( { template, slug } ) {
  const pageData = await getServiceDetailPage(template, slug)
  console.log('[pageData]', pageData)
  return (
    
      <main className="email-marketing">
        <IntroSection bannerData={pageData?.banner} />
        <Section1 bannerData={pageData?.banner} />
        <Section2 standOutData={pageData?.stand_out_section} />
        <Section6 achievementsData={pageData?.our_achievements_section} />
        <Section3 servicesData={pageData?.our_services_section} expertiesData={pageData?.our_experties} />
        <Section4 technologiesData={pageData?.technologies_we_work_section} />
        <Section5 profileData={pageData?.our_profile} />
        <Testimonials reviewsData={pageData?.reviews || []} />
        <Faq allFaqs={pageData?.faqs || []} />  
        <Section7 aboutUsData={pageData?.about_us} />
      </main>
  );
}
