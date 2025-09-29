import React from 'react'
import outlineanimation from '/public/services/email-marketing/outline-animation.png'
import Image from 'next/image'

export default function Section7() {
  return (
    <section className="section-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h6>Why Choose Creasions for Website Development Services in the USA.</h6>
                <p>When it comes to selecting a premier web development company in the USA, Creasions stands out as an industry leader with a myriad of distinctive features that set us apart from the competition.</p>
                <p>Our commitment to excellence in website development services is evident through our unwavering focus on mobile responsiveness. In an era where users access websites from various devices, our adept web developers ensure that your site seamlessly adapts to different screen sizes, providing an optimal viewing experience for all visitors.</p>
                <p>Our advanced mega menu system enhances website navigation, offering users a streamlined and efficient way to explore the diverse facets of your online platform. This feature not only enhances user experience but also contributes to the overall aesthetic appeal of your website.</p>
                <a href="tel:+1 469-854-3814" className='t-btn'>Schedule a Call</a>
            </div>
            <div className="bg-circle-animation">
                <div className="animation-component">
                  <Image src={outlineanimation} alt="image" className='outline-image-01'/>
                  <Image src={outlineanimation} alt="image" className='outline-image-02'/>
                  <Image src={outlineanimation} alt="image" className='outline-image-03'/>
                  <Image src={outlineanimation} alt="image" className='outline-image-04'/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}