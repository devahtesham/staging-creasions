import React from 'react'
import Image from 'next/image'
import skinstar from '/public/hurghada-image/skin-star.png'
import greycirlce from '/public/hurghada-image/grey-cirlce.png'
import greystar from '/public/hurghada-image/grey-start.png'
import orangecircle from '/public/hurghada-image/orange-circle.png'

export default function Section02({ data }) {
  const sectionHeading = data?.section_heading || 'Overview'
  const text = data?.text || '<p>Hurghada.com is the official digital gateway...</p>'
  const objectives = data?.objectives || [
    'Create a stunning, modern design reflecting the travel and resort vibe',
    'Develop a fully responsive WordPress platform',
    'Highlight top attractions, hotels, activities, and business listings',
    'Improve SEO, loading speed, and multilingual scalability',
    'Build a CMS-based structure to allow non-technical staff to manage content'
  ]
  const myRole = data?.my_role || [
    'UI/UX Design (Inspired by top global travel brands)',
    'Custom WordPress Theme Develo ment',
    'PHP-based Backend Enhancements',
    'SEO Setup, Multilingual Structure, Speed Optimization',
    'Mobile-First & Accessibility-Focused Build'
  ]

  return (
    <section className="section02">
        <div className="freeElementBox">
            <a href="https://hurghada.com/" target='_blank'>Hurghada.com</a>
            <Image src={skinstar} alt="image" className='skinstar' width={100} height={100} />
            <Image src={greycirlce} alt="image" className='greycirlce' width={100} height={100} />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text">
                        <h2><span>{sectionHeading}</span> <Image src={orangecircle} alt="image" width={50} height={50} /></h2>
                        <div dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text">
                        <h2><span>Objectives</span> <Image src={greystar} alt="image" width={50} height={50} /></h2>
                        <ul>
                            {objectives.map((objective, index) => (
                                <li key={index}>{objective}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text">
                        <h2><span>My Role</span> <Image src={orangecircle} alt="image" width={50} height={50} /></h2>
                        <ul>
                            {myRole.map((role, index) => (
                                <li key={index}>{role}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
