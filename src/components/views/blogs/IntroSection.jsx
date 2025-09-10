"use client"
import React, { useState, useEffect } from 'react'
import { fetchBlogPageBanner } from '@/utils/helper';
import CustomLoadingWrapper from '@/components/ui/CustomLoadingWrapper';

export default function IntroSection() {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPageBanner()
      .then((data) => {
        setBanner(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    loading ? <CustomLoadingWrapper /> : (
      <section
        className="inner-title"
        style={{
          backgroundImage:
            `url(${banner[0]?.blog_image})`
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h1 style={{ marginBottom: '25px' }}>
                  {banner[0]?.main_heading.split(" ").slice(0, 4).join(" ")}
                  <br />
                  {banner[0]?.main_heading.split(" ").slice(4).join(" ")}
                </h1>
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: banner[0]?.content }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )

  )
}


