import React from 'react'
import Image from 'next/image'
import laptopimage from '/public/hurghada-image/laptop-image.png'
import greystar from '/public/hurghada-image/grey-start.png'

export default function Section04({ technologies, visualLanguage, results }) {
  const techTitle = technologies?.title || 'Technologies Used'
  const techItems = technologies?.items || [
    'WordPress (Custom Theme from Scratch)',
    'PHP (Backend Logic, Form Handling)',
    'ACF Pro (Flexible Content Management)',
    'HTML5, CSS3, JavaScript',
    'WP Rocket, Yoast SEO, WPML-ready Structure',
    'CDN + Image Optimization for Speed'
  ]
  const techImage = technologies?.image || laptopimage.src

  const visualTitle = visualLanguage?.title || 'Visual Language'
  const visualItems = visualLanguage?.items || [
    { label: 'Color Palette:', text: '<p>Ocean blues, warm sands, and sun-kissed accents</p>' },
    { label: 'Typography:', text: '<p>Clean, legible sans-serif fonts suited for travel audiences</p>' },
    { label: 'Imagery:', text: '<p>High-resolution local photography with interactive hover effects</p>' },
    { label: 'Design Philosophy:', text: '<p>Minimal, immersive, and mobile-first</p>' }
  ]

  const resultsTitle = results?.title || 'Results'
  const resultsItems = results?.items || [
    '300% increase in average time on site',
    '2x faster load times across all devices',
    'Higher organic traffic due to SEO improvements',
    'Fully editable CMS for hotel listings, blog posts, and pages',
    'Positive feedback from both local tourism operators and international users'
  ]

  return (
    <section className="section04">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <div className="text text-center">
                        <h2>{techTitle}</h2>
                        <ul>
                            {techItems.map((item, index) => (
                                <li key={index}><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="imgBox">
                        <Image src={greystar} alt="decoration" width={100} height={100} />
                        <img src={techImage} alt="Technologies" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text">
                        <h2>{visualTitle}</h2>
                        <ul>
                            {visualItems.map((item, index) => (
                                <li key={index}>
                                    <b>{item.label}</b> <div style={{display: 'inline'}} dangerouslySetInnerHTML={{ __html: item.text }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text">
                        <h2>{resultsTitle}</h2>
                        <ul>
                            {resultsItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
