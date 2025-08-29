import React from 'react'
import '@/app/case-study/clairmont-case-study/page.css'
import Hero from '@/components/views/case-study/clairmont-page/Hero'
import Section1 from '@/components/views/case-study/clairmont-page/Section1'
import Section2 from '@/components/views/case-study/clairmont-page/Section2'
import Section3 from '@/components/views/case-study/clairmont-page/Section3'
import Section4 from '@/components/views/case-study/clairmont-page/Section4'
import Section5 from '@/components/views/case-study/clairmont-page/Section5'
import Section6 from '@/components/views/case-study/clairmont-page/Section6'
import Section7 from '@/components/views/case-study/clairmont-page/Section7'

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
        </main>
    )
}
