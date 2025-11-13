import React from 'react'
import Image from 'next/image'
import skinstar from '/public/hurghada-image/skin-star.png'
import greycirlce from '/public/hurghada-image/grey-cirlce.png'
import greystar from '/public/hurghada-image/grey-start.png'
import orangecircle from '/public/hurghada-image/orange-circle.png'

export default function Section02() {
  return (
    <section className="section02">
        <div className="freeElementBox">
            <a href="https://hurghada.com/" target='_blank'>Hurghada.com</a>
            <Image src={skinstar} alt="image" className='skinstar'/>
            <Image src={greycirlce} alt="image" className='greycirlce'/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text">
                        <h2><span>Overview</span> <Image src={orangecircle} alt="image"/></h2>
                        <p>Hurghada.com is the official digital gateway to one of Egypt&apos;s most popular Red Sea resort cities Hurghada. The site aims to serve tourists, travel agents, and local businesses with a rich hub of information, listings, and services.</p>
                        <p>When I was approached for this project, the existing website was outdated, slow, and visually disconnected from the stunning, sun-soaked beauty of  hurghada. The goal was to revamp the entire digital experience into a modern, content-rich, and visually immersive travel platform capable of engaging international visitors, supporting business listings, and improving search engine visibility.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text">
                        <h2><span>Objectives</span> <Image src={greystar} alt="image"/></h2>
                        <ul>
                            <li>Create a stunning, modern design reflecting the travel and resort vibe</li>
                            <li>Develop a fully responsive WordPress platform</li>
                            <li>Highlight top attractions, hotels, activities, and business listings</li>
                            <li>Improve SEO, loading speed, and multilingual scalability</li>
                            <li>Build a CMS-based structure to allow non-technical staff to manage content</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text">
                        <h2><span>My Role</span> <Image src={orangecircle} alt="image"/></h2>
                        <ul>
                            <li>UI/UX Design (Inspired by top global travel brands)</li>
                            <li>Custom WordPress Theme Develo ment</li>
                            <li>PHP-based Backend Enhancements</li>
                            <li>SEO Setup, Multilingual Structure, Speed Optimization</li>
                            <li>Mobile-First & Accessibility-Focused Build</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
