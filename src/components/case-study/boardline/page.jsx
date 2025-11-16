import '@/app/case-study/boardline-case-study/page.css'
import Hero from '@/components/views/case-study/boardline-page/Hero'
import Section1 from '@/components/views/case-study/boardline-page/Section1'
import Section2 from '@/components/views/case-study/boardline-page/Section2'
import Section3 from '@/components/views/case-study/boardline-page/Section3'
import Section4 from '@/components/views/case-study/boardline-page/Section4'
import Section5 from '@/components/views/case-study/boardline-page/Section5'
import Section6 from '@/components/views/case-study/boardline-page/Section6'
import Section7 from '@/components/views/case-study/boardline-page/Section7'
import Section8 from '@/components/views/case-study/boardline-page/Section8'
import Section9 from '@/components/views/case-study/boardline-page/Section9'
import React from 'react'


import { Poppins, Domine } from "next/font/google";
import { fetchCaseStudyTemplate } from '@/utils/helper'

export const poppins = Poppins({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

export const domine = Domine({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

const Boardline = async ({ template, id }) => {
  const data = await fetchCaseStudyTemplate(template, id)
  
  return (
    <div className={`${poppins.className} px-24`}>
      <main>
        <Hero data={data.banner} />
        <Section1 data={data.strategy} />
        <Section2 data={data.projectoverview} timeline={data.timeline} />
        <Section3 data={data.before_after} />
        <Section4 data={data.approach} />
        <Section5 image={data.approach?.image} />
        <Section6 data={data.homepage_section} />
        <Section7 image={data.homepage_section?.image} />
        <Section8 data={data.mobile_explorers} />
        <Section9 data={data.related} category={data.category} />
      </main>
    </div>
  )
}

export default Boardline