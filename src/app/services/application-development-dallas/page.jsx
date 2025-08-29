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
import Faq from '@/components/layout/Faq';
import { faqData } from '@/components/mocks/application-development/faqMocks';


import { metadata as pageMetadata } from "@/components/mocks/metadata/application-development/metadata";


export const metadata = pageMetadata; 



export default function MainSection() {
    return (
        <main className="application-development">
            <IntroSection />
            <div className="gradian-bg">
                <Section1 />
                <Section2 />
            </div>
            <Section3 />
            <Section4 />
            <Section5 />

            <Testimonials />
            <Faq data={faqData} />
        </main>
    )
}
