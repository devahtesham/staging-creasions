import React from 'react';
import '@/app/case-study/commercial-plus-group/page.css'

import CursorLinesBackground from "@/components/views/services/web-development/CursorLinesBackground";
import Section1 from '@/components/views/case-study/commercial-page/Section1';
import Section2 from '@/components/views/case-study/commercial-page/Section2';
import Section3 from '@/components/views/case-study/commercial-page/Section3';
import Section4 from '@/components/views/case-study/commercial-page/Section4';
import Section5 from '@/components/views/case-study/commercial-page/Section5';
import Section6 from '@/components/views/case-study/commercial-page/Section6';

export default function Page() {
  return (
    <main className='commercial-plus-group'>
      <CursorLinesBackground />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </main>
  );
}
