import React from 'react';
import '@/app/case-study/KaDoBu-case-study/page.css'

import Hero from '@/components/views/case-study/KaDoBu-page/Hero';
import Section1 from '@/components/views/case-study/KaDoBu-page/Section1';
import Section2 from '@/components/views/case-study/KaDoBu-page/Section2';
import Section3 from '@/components/views/case-study/KaDoBu-page/Section3';
import Section4 from '@/components/views/case-study/KaDoBu-page/Section4';
import Section6 from '@/components/views/case-study/KaDoBu-page/Section6';
import Section7 from '@/components/views/case-study/KaDoBu-page/Section7';
import { fetchCaseStudyTemplate } from '@/utils/helper'


const Kadobucasestudy = async ({ template, id }) => {
    const data = await fetchCaseStudyTemplate(template, id)
    
    return (
        <main className='KaDoBu-case-study'>
            <Hero data={data.banner} />
            <Section1 data={data.about} />
            <Section2 data={data.challenge} />
            <Section3 data={data.wireframing} />
            <Section4 />
            <Section6 data={data.portfolio_section} />
            <Section7 data={data.mobile_experience} />
        </main>
    )
}

export default Kadobucasestudy