import React from 'react'
import '@/app/css/PortfolioMain.css'

import { metadata as pageMetadata } from "@/components/mocks/metadata/portfolio-website-design/metadata";
import { fetchPortfolioCategoryBySlug, fetchPortfolioGrandImagesBySlug } from '@/utils/helper';
import PortfolioCardCategory from '@/components/views/PortfolioCardCategory';
import PortfolioCategoryCard from '@/components/views/PortfolioCategoryCard';


export const metadata = pageMetadata;



export default async function CategoryPage({ params }) {
  const { cat } = params;

  const response = await fetchPortfolioCategoryBySlug(cat);
  const responseImages = await fetchPortfolioGrandImagesBySlug(cat);
  console.log('[response]', response);
  console.log('[responseImages]', responseImages);
  const categoryData = response?.category;
  const subCategoryData = response?.subcategories
  const grandImagesData = responseImages?.category?.grand_images;
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
                  <strong> {categoryData?.text} </strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cate-main cate-hover">
        <div className="container own-container">
          <div className="row">
            {subCategoryData?.length > 0 ? subCategoryData.map((data) => (
              <PortfolioCardCategory
                key={data.id}
                imgSrc={data.image}
                altText={data.text}
                link={`/portfolio/${cat}/${data.slug}`}
                title={data.text}
              />
            )) : (
              <section className="cate-main cate-hover">
                <div className="container own-container">
                  <div className="row">
                    {grandImagesData?.length > 0 ? grandImagesData.map((item, index) => (
                      <PortfolioCategoryCard
                        key={index}
                        imgSrc={item}
                        link={item} // Adjust the link as necessary
                        caption={"direct-images-card"}
                      />
                    )) : <div>No images found</div>}
                  </div>
                </div>
              </section>
              
            )}
          </div>
        </div>
      </section>

    </main>
  )
}
