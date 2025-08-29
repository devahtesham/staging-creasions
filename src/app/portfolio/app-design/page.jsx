import React from 'react';
import '@/app/css/PortfolioWeb.css'
import PortfolioWebCategoryCard from '@/components/views/PortfolioWebCategoryCard';
import { appData } from '@/components/mocks/portfolio/appMocks';

import { metadata as pageMetadata } from "@/components/mocks/metadata/portfolio-app-design/metadata";


export const metadata = pageMetadata; 

export default async function CategoryPage() {
  return (
    <main>
      <section
        className="inner-title"
        style={{
          backgroundImage: "url(/services/web-design/web-design-bg.webp)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h1>
                  <strong> {appData[0].portfolio.subCategoryTitle} </strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cate-main graphic-inner">
        <div className="container own-container">
          <div className="row">
            {appData[0].portfolio.subEvents.map((event) => (
              <PortfolioWebCategoryCard
                key={event.event_id}
                imgSrc={event.event_img.src}
                link={event.event_img.src}
                caption={event.event_title}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
