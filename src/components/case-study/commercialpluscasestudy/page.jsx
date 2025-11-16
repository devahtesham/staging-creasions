



import React from 'react';
import '@/app/case-study/commercial-plus-group/page.css'

import CursorLinesBackground from "@/components/views/services/web-development/CursorLinesBackground";
import Section1 from '@/components/views/case-study/commercial-page/Section1';
import Section2 from '@/components/views/case-study/commercial-page/Section2';
import Section3 from '@/components/views/case-study/commercial-page/Section3';
import Section4 from '@/components/views/case-study/commercial-page/Section4';
import Section5 from '@/components/views/case-study/commercial-page/Section5';
import Section6 from '@/components/views/case-study/commercial-page/Section6';
import { fetchCaseStudyTemplate } from '@/utils/helper'

const Commercialpluscasestudy = async ({ template, id }) => {
    const data = await fetchCaseStudyTemplate(template, id)
    
    return (
        <main className='commercial-plus-group'>
            <CursorLinesBackground />
            <Section1 data={data.banner} />
            <Section2 data={data.intro} />
            <Section3 data={data.design_framework} />
            <Section4 data={data.desktop_design} />
            <Section5 data={data.problem_solution} />
            <Section6 data={data.mobile_experience} />
        </main>
    );
}

export default Commercialpluscasestudy