import React from 'react';
import '@/app/case-study/KaDoBu-case-study/page.css'

import Hero from '@/components/views/case-study/KaDoBu-page/Hero';
import Section1 from '@/components/views/case-study/KaDoBu-page/Section1';
import Section2 from '@/components/views/case-study/KaDoBu-page/Section2';
import Section3 from '@/components/views/case-study/KaDoBu-page/Section3';
import Section4 from '@/components/views/case-study/KaDoBu-page/Section4';
import Section6 from '@/components/views/case-study/KaDoBu-page/Section6';
import Section7 from '@/components/views/case-study/KaDoBu-page/Section7';

export default function Page() {
  return (
    <main className='KaDoBu-case-study'>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <Section4 /> */}
      {/* Section5 (laptop mockup) can be added if you have the asset and want to match the Figma exactly */}
      <Section6 />
      <Section7 />
    </main>
  );
}
