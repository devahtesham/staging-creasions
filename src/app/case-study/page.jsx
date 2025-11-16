import IntroSection from '@/components/views/case-study/IntroSection'
import React from 'react'
import '@/app/css/case-study/CaseStudy.css'
import CaseStudiesGrid from '@/components/views/case-study/CaseStudiesGrid'
import CursorLinesBackground from "@/components/views/services/web-development/CursorLinesBackground";
import caseStudyBg from '/public/case-study/caseStudyBg.png'
import { fetchCaseStudyPage } from '@/utils/helper';


export default async function page() {
    const [caseStudiesList, caseStudyIntro] = await fetchCaseStudyPage();
    // console.log('[data]', data);
    return (
        <main className="case-study" style={{ backgroundImage: `url(${caseStudyBg.src})` }}>
            <CursorLinesBackground />
            <IntroSection caseStudyIntro={caseStudyIntro} />
            <CaseStudiesGrid caseStudiesList={caseStudiesList} />
        </main>
    )
}
