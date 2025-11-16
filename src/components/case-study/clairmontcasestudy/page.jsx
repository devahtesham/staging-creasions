import '@/app/case-study/clairmont-case-study/page.css'

import React from 'react'
import { Poppins, Domine } from "next/font/google";


export const poppins = Poppins({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

export const domine = Domine({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

import Hero from '@/components/views/case-study/clairmont-page/Hero'
import Section1 from '@/components/views/case-study/clairmont-page/Section1'
import Section2 from '@/components/views/case-study/clairmont-page/Section2'
import Section3 from '@/components/views/case-study/clairmont-page/Section3'
import Section4 from '@/components/views/case-study/clairmont-page/Section4'
import Section5 from '@/components/views/case-study/clairmont-page/Section5'
import Section6 from '@/components/views/case-study/clairmont-page/Section6'
import Section7 from '@/components/views/case-study/clairmont-page/Section7'
import { fetchCaseStudyTemplate } from '@/utils/helper'
const Clairmontcasestudy = async ({ template, id }) => {
    const data = await fetchCaseStudyTemplate(template, id)
    console.log('[data]', data)
    return (
        <div className={`${poppins.className} px-24`}>
            <main>
                <Hero data={data.banner} />
                <Section1 data={data.strategy} />
                <Section2 data={data.projectoverview} timeline={data.timeline} />
                <Section3 data={data?.approach_section} />
                <Section4 data={data.homepage_section} />
                <Section5 data={data.homepage_section} />
                <Section6 data={data.mobile_explorers} />
                <Section7 data={data.related} category={data.category} />
            </main>
        </div>
    )
}

export default Clairmontcasestudy