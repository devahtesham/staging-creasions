import React from 'react'

import '../../css/industry/CleaningCompany.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from '@/components/views/industry/cleaning-company/Hero';
import Section1 from '@/components/views/industry/cleaning-company/Section1';
import Section2 from '@/components/views/industry/cleaning-company/Section2';
import Section3 from '@/components/views/industry/cleaning-company/Section3';
import Section4 from '@/components/views/industry/cleaning-company/Section4';
import Section5 from '@/components/views/industry/cleaning-company/Section5';
import PremiumCleaningSection from '@/components/views/industry/cleaning-company/PremiumCleaningSection';
import Section6 from '@/components/views/industry/cleaning-company/Section6';
import Section7 from '@/components/views/industry/cleaning-company/Section7';
import Testimonials from '@/components/views/industry/cleaning-company/Testimonials';
import Section8 from '@/components/views/industry/cleaning-company/Section8';
import Portfolios from '@/components/views/industry/cleaning-company/Portfolio';
import Faq from '@/components/layout/Faq';
import NewsletterForm from '@/components/layout/NewsletterForm';
import { faqData } from '@/components/mocks/cleaning-company/Faq';



import { metadata as pageMetadata } from "@/components/mocks/metadata/cleaning-company/metadata";


export const metadata = pageMetadata; 



export default function MainSection() {
    return (
        <main>
            <Hero />
            <div className="case-bg-marker">
                <NewsletterForm />
                <Section2 />
                <Section3 />
                <Section4 />
                <div className='case-last-bg'>
                    <Section5 />
                </div>

                <PremiumCleaningSection />

                <Section6 />
                <Section7 />

                <div className="mid-bg-marker">
                    <Testimonials />
                    <Section8 />
                    <Portfolios />
                </div>
                <Faq data={faqData} />

            </div>

        </main>
    )
}
