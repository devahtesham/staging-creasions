import React from 'react'

import '../../css/industry/RealEstate.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from '@/components/views/industry/real-estate/Hero';
import Section1 from '@/components/views/industry/real-estate/Section1';
import Section2 from '@/components/views/industry/real-estate/Section2';
import Section3 from '@/components/views/industry/real-estate/Section3';
import Section4 from '@/components/views/industry/real-estate/Section4';
import Section5 from '@/components/views/industry/real-estate/Section5';
import Section6 from '@/components/views/industry/real-estate/Section6';
import Section7 from '@/components/views/industry/real-estate/Section7';
import Section8 from '@/components/views/industry/real-estate/Section8';
import Section9 from '@/components/views/industry/real-estate/Section9';
import Testimonials from '@/components/views/industry/real-estate/Testimonials';
import Portfolios from '@/components/views/industry/real-estate/Portfolio';
import Faq from '@/components/layout/Faq';
import NewsletterForm from '@/components/layout/NewsletterForm';
import { faqData } from '@/components/mocks/real-estate/Faq';


import { metadata as pageMetadata } from "@/components/mocks/metadata/real-estate/metadata";


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
                <Section6 />

                <div className="mid-bg-marker">
                    <Section7 />
                    <Section8 />
                    <Section9 />
                </div>

                <div className='testimonial-and-portfolio'>
                    <Testimonials />
                    <Portfolios />
                </div>

                <Faq data={faqData} />

            </div>

        </main>
    )
}
