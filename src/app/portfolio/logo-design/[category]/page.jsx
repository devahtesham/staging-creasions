import React from 'react';
import '@/app/css/PortfolioCategory.css';
import PortfolioCategoryCard from '@/components/views/PortfolioCategoryCard';
import { LogoData } from '@/components/mocks/portfolio/logoMocks';

const getSubCategory = async(categorySlug) => {
  return await LogoData.find((item) => item.category === categorySlug);
};

export async function generateStaticParams() {
  const categories = LogoData.map((item) => item.category);
  
  return categories.map((category) => ({
    category: category,
  }));
}

export default async function CategoryPage({ params }) {
  const { category } = params;

  const categoryData = await getSubCategory(category);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

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
                  <strong> {categoryData.portfolio.subCategoryTitle} </strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cate-main cate-hover">
        <div className="container own-container">
          <div className="row">
            {categoryData.portfolio.subEvents.map((event) => (
              <PortfolioCategoryCard
                key={event.event_id}
                imgSrc={event.event_img.src}
                link={event.event_img.src} // Adjust the link as necessary
                caption={event.event_title}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
