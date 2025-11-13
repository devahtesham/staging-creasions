import IntroSection from '@/components/views/case-study/IntroSection'
import React from 'react'
import '@/app/css/case-study/CaseStudy.css'
import CaseStudiesGrid from '@/components/views/case-study/CaseStudiesGrid'


export default function page() {
    return (
        <main className="case-study">
            <IntroSection />
            <div className="gradian-bg">
                <CaseStudiesGrid />
            </div>
        </main>
    )
}
