import '@/app/case-study/lres-case-study/page.css'
import Section2 from '@/components/views/case-study/lres-page/Section2'
import Section1 from '@/components/views/case-study/lres-page/Section2'
import Section3 from '@/components/views/case-study/lres-page/Section3'
import Section4 from '@/components/views/case-study/lres-page/Section4'
import Section5 from '@/components/views/case-study/lres-page/Section5'
import Section6 from '@/components/views/case-study/lres-page/Section6'
import React from 'react'

export default function Home() {
    return (
        <main className="ires-case-study">
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </main>
    )
}
