import React from 'react';
import '@/app/case-study/hurghada-case-study/page.css'

import Section01 from '@/components/views/case-study/hurghada-page/Section01';
import Section02 from '@/components/views/case-study/hurghada-page/Section02';
import Section03 from '@/components/views/case-study/hurghada-page/Section03';
import Section04 from '@/components/views/case-study/hurghada-page/Section04';
import Section05 from '@/components/views/case-study/hurghada-page/Section05';
import { metadata as pageMetadata } from "@/components/mocks/metadata/hurghadaCaseStudy/metadata";
export const metadata = pageMetadata; 

const baituti = () => {
  return (
    <main className='baituti-case-study'>
      <Section01/>
      <Section02/>
      <Section03/>
      <Section04/>
      <Section05/>
    </main>
  );
}

export default baituti;
