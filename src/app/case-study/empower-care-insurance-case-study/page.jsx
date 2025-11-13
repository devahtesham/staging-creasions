import React from 'react';
import '@/app/case-study/empower-care-insurance-case-study/page.css'
import baitutiBg from '/public/baituti/baitutiBg.png'
import Section01 from '@/components/views/case-study/empower-page/Section01';
import Section02 from '@/components/views/case-study/empower-page/Section02';
import Section03 from '@/components/views/case-study/empower-page/Section03';
import Section04 from '@/components/views/case-study/empower-page/Section04';
import Section05 from '@/components/views/case-study/empower-page/Section05';
import Section06 from '@/components/views/case-study/empower-page/Section06';

export default function Page() {
  return (
    <main className='empower-page' style={{backgroundImage:`url(${baitutiBg.src})`}}>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
    </main>
  );
}
