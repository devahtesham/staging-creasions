



import React from 'react';
import '@/app/case-study/empower-care-insurance-case-study/page.css'
import baitutiBg from '/public/baituti/baitutiBg.png'
import Section01 from '@/components/views/case-study/empower-page/Section01';
import Section02 from '@/components/views/case-study/empower-page/Section02';
import Section03 from '@/components/views/case-study/empower-page/Section03';
import Section04 from '@/components/views/case-study/empower-page/Section04';
import Section05 from '@/components/views/case-study/empower-page/Section05';
import Section06 from '@/components/views/case-study/empower-page/Section06';
import { fetchCaseStudyTemplate } from '@/utils/helper'

export default async function Empowercareinsurance({ template, id }) {
    const data = await fetchCaseStudyTemplate(template, id)
      
  return (
    <main className='empower-page' style={{backgroundImage:`url(${baitutiBg.src})`}}>
      <Section01 data={data.banner} />
      <Section02 data={data.intro} />
      <Section03 data={data.design_framework} />
      <Section04 data={data.desktop_design} />
      <Section05 data={data.problem_solution} />
      <Section06 data={data.mobile_experience} />
    </main>
  );
}
