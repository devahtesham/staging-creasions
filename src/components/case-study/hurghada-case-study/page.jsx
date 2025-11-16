


import React from 'react';
import '@/app/case-study/hurghada-case-study/page.css'

import Section01 from '@/components/views/case-study/hurghada-page/Section01';
import Section02 from '@/components/views/case-study/hurghada-page/Section02';
import Section03 from '@/components/views/case-study/hurghada-page/Section03';
import Section04 from '@/components/views/case-study/hurghada-page/Section04';
import Section05 from '@/components/views/case-study/hurghada-page/Section05';
import { metadata as pageMetadata } from "@/components/mocks/metadata/hurghadaCaseStudy/metadata";
import { fetchCaseStudyTemplate } from '@/utils/helper';
export const metadata = pageMetadata; 

const HurghadaCaseStudy = async ({ template, id }) => {
  const data = await fetchCaseStudyTemplate(template, id)
  
  return (
    <main className='baituti-case-study'>
      <Section01 data={data.banner} />
      <Section02 data={data.intro} />
      <Section03 data={data.features_delivered} />
      <Section04 
        technologies={data.technologies_used} 
        visualLanguage={data.visual_language} 
        results={data.results} 
      />
      <Section05 data={data.gallery} />
    </main>
  );
}

export default HurghadaCaseStudy;
