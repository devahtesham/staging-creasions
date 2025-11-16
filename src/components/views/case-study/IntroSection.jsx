import Link from 'next/link'
import React from 'react'

export default function IntroSection({ caseStudyIntro }) {
  const data = caseStudyIntro?.data[0];
  return (
    <section
      className="inner-title"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h1>
                {data?.banner?.banner_title_heading}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: data?.banner?.banner_text }} />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}


