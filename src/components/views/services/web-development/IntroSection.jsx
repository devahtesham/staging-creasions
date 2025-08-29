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
                Web Development in Dallas
              </h1>
              <p>
                Creasions offers top-notch <Link href="/services/website-development-dallas">website development Dallas</Link> services tailored to meet the diverse needs of businesses. As one of the leading web development companies in the USA, we specialize in creating dynamic and responsive websites that not only reflect your brand identity but also enhance the user experience. With a focus on cutting-edge technologies and innovative solutions, we ensure our clients stay ahead in the rapidly evolving digital space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}


