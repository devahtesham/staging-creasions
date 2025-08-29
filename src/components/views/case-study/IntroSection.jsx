import Link from 'next/link'
import React from 'react'

export default function IntroSection() {
  return (
    <section
      className="inner-title"
      style={{
        backgroundImage:
          "url(/services/web-development/web-developemnt-bg-1.webp)"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h1>
                Case Studies
              </h1>
              <p>
                Discover the best website development in the Dallas with Creasions Digital. We offer comprehensive web development packages to create scalable, innovative websites tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}


