import Link from 'next/link'
import React from 'react'

export default function IntroSection() {
  return (
    <section
      className="inner-title"
      style={{
        backgroundImage:
          "url(/services/web-design/web-design-bg.webp)"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h1>
                Web Design Dallas
              </h1>
              <p>
                Creasions stands out as a leading force in <Link href="/services/website-design-dallas">website design services in Dallas</Link>, playing a pivotal role in shaping the digital identity of local businesses. With a specialized focus on aesthetics, functionality, and user experience, our Dallas-based website design company seamlessly blends creativity with technical expertise to deliver exceptional web design solutions. Our agency prioritizes responsiveness across all devices, ensuring an optimal user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}


