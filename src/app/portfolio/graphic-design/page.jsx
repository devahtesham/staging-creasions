import React from 'react'
import '@/app/css/PortfolioMain.css'
import PortfolioWebDesignCard from '@/components/views/PortfolioWebDesignCard'
import { graphicsData } from '@/components/mocks/portfolio/graphicMocks'

import { metadata as pageMetadata } from "@/components/mocks/metadata/portfolio-graphic-design/metadata";


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
                  <strong> Graphic Designs </strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cate-main cate-hover">
        <div className="container own-container">
          <div className="row">
            {graphicsData.map((data) => (
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
