import React from 'react'
import '../../css/industry/BeautySalons.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Hero from '@/components/views/industry/beauty-salons/Hero';
import Section2 from '@/components/views/industry/beauty-salons/Section2';
import Section3 from '@/components/views/industry/beauty-salons/Section3';
import Section4 from '@/components/views/industry/beauty-salons/Section4';
import Section5 from '@/components/views/industry/beauty-salons/Section5';
import Section6 from '@/components/views/industry/beauty-salons/Section6';
import Section7 from '@/components/views/industry/beauty-salons/Section7';
import Portfolios from '@/components/views/industry/beauty-salons/Portfolio';
import Section1 from '@/components/views/industry/beauty-salons/Section1';
import Faq from '@/components/layout/Faq';
import Testimonials from '@/components/views/industry/beauty-salons/Testimonials';
import NewsletterForm from '@/components/layout/NewsletterForm';
import { faqData } from '@/components/mocks/beauty-salons-spa/Faq';


import { metadata as pageMetadata } from "@/components/mocks/metadata/beauty-salons/metadata";


export const metadata = pageMetadata; 


export default function MainSection() {
    return (
        <main className='beauty-salons'>
            <Hero />

            <div className="bg-barr">
                {/* Section1 Here */}
                <NewsletterForm />
                <Section2 />
            </div>

            <Section3 />

            <div className="case-last-bg">
                <Section4 />
            </div>

            <Section5 />
            <Section6 />
            <Section7 />
            
            <Portfolios />
            <Testimonials />

            <Faq data={faqData}/>


        </main>
    )
}