import React from 'react'
import '@/app/css/PortfolioMain.css'
import PortfolioWebDesignCard from '@/components/views/PortfolioWebDesignCard'
import { WebData } from '@/components/mocks/portfolio/webMocks'

import { metadata as pageMetadata } from "@/components/mocks/metadata/portfolio-website-design/metadata";


export const metadata = pageMetadata; 



export default function page() {
  return (
    <main>
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
                  <strong> Web Designs </strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cate-main cate-hover">
        <div className="container own-container">
          <div className="row">
            {WebData.map((data) => (
              <PortfolioWebDesignCard
                key={data.id}
                imgSrc={data.TitleImg.src}
                altText={data.title}
                link={data.redirect} 
                title={data.title}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
