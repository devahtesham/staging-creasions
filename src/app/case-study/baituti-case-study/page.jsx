import React from 'react';
import '@/app/case-study/baituti-case-study/style.css'
import baitutiBg from '/public/baituti/baitutiBg.png'

import Section1 from '@/components/views/case-study/baituti-page/Section1';
import Section2 from '@/components/views/case-study/baituti-page/Section2';
import Section3 from '@/components/views/case-study/baituti-page/Section3';
import Section4 from '@/components/views/case-study/baituti-page/Section4';
import Section5 from '@/components/views/case-study/baituti-page/Section5';
import Section6 from '@/components/views/case-study/baituti-page/Section6';

export default function Page() {
  return (
    <main className='baituti-case-study'>
      <Section1/>
      <div className="gradientBg">
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
      </div>
    </main>
  );
}