import React from 'react';
import '@/app/css/PortfolioCategory.css';
import PortfolioCategoryCard from '@/components/views/PortfolioCategoryCard';
import { LogoData } from '@/components/mocks/portfolio/logoMocks';
import { getSubCategoryByCatSlug } from '@/utils/helper';

// const getSubCategory = async(categorySlug) => {
//   return await LogoData.find((item) => item.category === categorySlug);
// };

// export async function generateStaticParams() {
//   const categories = LogoData.map((item) => item.category);
  
//   return categories.map((category) => ({
//     category: category,
//   }));
// }

export default async function SubCategoryPage({ params }) {
  const { cat, subcat } = params;

  const response = await getSubCategoryByCatSlug(subcat);
  console.log('[response]',response);
  const data = response?.subcategory;

  return (
    <main>
      <section
        className="inner-title"
        style={{
          backgroundImage: `url(${data?.image})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h1>
                  <strong> {data?.text} </strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cate-main cate-hover">
        <div className="container own-container">
          <div className="row">
            {data?.grand_images?.length > 0 ? data?.grand_images.map((item,index) => (
              <PortfolioCategoryCard
                key={index}
                imgSrc={item}
                link={item} // Adjust the link as necessary
                caption={item}
              />
            )) : <div>No images found</div>}
          </div>
        </div>
      </section>
    </main>
  );
}
