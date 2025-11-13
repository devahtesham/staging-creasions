import React from 'react'
import Image from 'next/image'
import laptopimage from '/public/hurghada-image/laptop-image.png'
import greystar from '/public/hurghada-image/grey-start.png'

export default function Section04() {
  return (
    <section className="section04">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <div className="text text-center">
                        <h2>Technologies Used</h2>
                        <ul>
                            <li><span>WordPress (Custom Theme from Scratch)</span></li>
                            <li><span>PHP (Backend Logic, Form Handling)</span></li>
                            <li><span>ACF Pro (Flexible Content Management)</span></li>
                            <li><span>HTML5, CSS3, JavaScript</span></li>
                            <li><span>WP Rocket, Yoast SEO, WPML-ready Structure</span></li>
                            <li><span>CDN + Image Optimization for Speed</span></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="imgBox">
                        <Image src={greystar} alt="image"/>
                        <Image src={laptopimage} alt="image"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text">
                        <h2>Visual Language</h2>
                        <ul>
                            <li><b>Color Palette:</b> Ocean blues, warm sands, and sun-kissed accents</li>
                            <li><b>Typography:</b> Clean, legible sans-serif fonts suited for travel audiences</li>
                            <li><b>Imagery:</b> High-resolution local photography with interactive hover effects</li>
                            <li><b>Design Philosophy:</b> Minimal, immersive, and mobile-first</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text">
                        <h2>Results</h2>
                        <ul>
                            <li>300% increase in average time on site</li>
                            <li>2x faster load times across all devices</li>
                            <li>Higher organic traffic due to SEO improvements</li>
                            <li>Fully editable CMS for hotel listings, blog posts, and pages</li>
                            <li>Positive feedback from both local tourism operators and international users</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
