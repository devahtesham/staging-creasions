


import React from 'react';
import '@/app/case-study/baituti-case-study/style.css'
import baitutiBg from '/public/baituti/baitutiBg.png'

import Section1 from '@/components/views/case-study/baituti-page/Section1';
import Section2 from '@/components/views/case-study/baituti-page/Section2';
import Section3 from '@/components/views/case-study/baituti-page/Section3';
import Section4 from '@/components/views/case-study/baituti-page/Section4';
import Section5 from '@/components/views/case-study/baituti-page/Section5';
import Section6 from '@/components/views/case-study/baituti-page/Section6';
import { fetchCaseStudyTemplate } from '@/utils/helper'

const Baituticasestudy = async ({ template, id }) => {
  const data = await fetchCaseStudyTemplate(template, id)
  
  return (
    <main className='baituti-case-study'>
      <Section1 data={data.banner} />
      <div className="gradientBg">
        <Section2 data={data.banner} />
        <Section3 data={data.intro} />
        <Section4 data={data.design_framework} />
        <Section5 data={data.typography} />
        <Section6 problemSolution={data.problem_solution} mobileExperience={data.mobile_experience} />
      </div>
    </main>
  );
}

export default Baituticasestudy