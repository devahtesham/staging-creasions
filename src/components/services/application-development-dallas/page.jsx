

import '@/app/css/services/ApplicationDevelopment.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import IntroSection from '@/components/views/services/application-development/IntroSection'
import Section1 from '@/components/views/services/application-development/Section1'
import Section2 from '@/components/views/services/application-development/Section2'
import Section3 from '@/components/views/services/application-development/Section3'
import Section4 from '@/components/views/services/application-development/Section4'
import Section5 from '@/components/views/services/application-development/Section5';
import Testimonials from '@/components/views/services/application-development/Testimonials'
import React from 'react'
import { faqData } from '@/components/mocks/application-development/faqMocks';
import { getServiceDetailPage } from '@/utils/helper';


import { metadata as pageMetadata } from "@/components/mocks/metadata/application-development/metadata";
import Faq from './Faq';


export const metadata = pageMetadata; 



export default async function ApplicationDevelopmentDallas({template,slug}) {
    const pageData = await getServiceDetailPage(template,slug)
    // console.log('[pageData]',pageData)
    return (
        <main className="application-development">
            <IntroSection pageData={pageData} />
            <div className="gradian-bg">
                <Section1 pageData={pageData} />
                <Section2 pageData={pageData} />
            </div>
            <Section3 pageData={pageData} />
            <Section4 pageData={pageData} />
            <Section5 pageData={pageData} />

            <Testimonials pageData={pageData} />
            <Faq allFaqs={pageData?.faqs} />
        </main>
    )
}
