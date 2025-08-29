import React from 'react'
import Section6Bg from '/public/services/ecommerce-marketing-agency/Section6Bg.png'
import Section6img from '/public/services/search-engine-marketing/Section4img.png'
import Section5Bg from '/public/services/ecommerce-marketing-agency/Section5Bg.png'
import Image from 'next/image'

export default function Section4() {
  return (
    <section className="section-04" style={{backgroundImage:`url(${Section5Bg.src})`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text">
                <h2>Technologies &<br/> Platforms We use<br/> for Search Engine<br/> Marketing</h2>
            </div>
          </div>
          <div className="col-lg-6" style={{backgroundImage:`url(${Section6Bg.src})`}}>
            <div className="img-box">
              <Image src={Section6img}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}