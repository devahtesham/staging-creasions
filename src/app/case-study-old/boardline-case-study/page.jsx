import React from 'react'
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

export default function page() {
    return (
        <main>
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
        </main>
    )
}
