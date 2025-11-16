import React from 'react'
import '@/app/case-study/lres-case-study/page.css'
import Section2 from '@/components/views/case-study/lres-page/Section2'
import Section3 from '@/components/views/case-study/lres-page/Section3'
import Section4 from '@/components/views/case-study/lres-page/Section4'
import Section5 from '@/components/views/case-study/lres-page/Section5'
import Section6 from '@/components/views/case-study/lres-page/Section6'
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
const Lrescasestudy = async ({ template, id }) => {
    const data = await fetchCaseStudyTemplate(template, id)
    
    return (
        <div className={`${poppins.className} px-24`}>
            <main className="ires-case-study">
                <Section2 data={data.banner} />
                <Section3 data={data.introduction} />
                <Section4 data={data.market_highlight} />
                <Section5 data={data.solution} />
                <Section6 data={data.website_layout} />
            </main>
        </div>
    )
}

export default Lrescasestudy