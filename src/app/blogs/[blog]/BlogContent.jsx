'use client';

import React from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';

export default function BlogContent({ post, featuredPosts }) {
  const featuredImage = post.yoast_head_json?.og_image?.[0]?.url;

  return (
    <main className="single-blog">
      <section
        className="inner-title"
        style={{ backgroundImage: "url(/blogs/blogs-intro-bg.webp)" }}
      >
        <div className="container">
          <h1>{post.title.rendered}</h1>
        </div>
      </section>

      <section className="blog-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="print_pdf">
                <div className="text">
                  {featuredImage && (
                    <img
                      src={featuredImage}
                      alt={post.title.rendered}
                      width={800}
                      height={400}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  )}
                  {parse(post.content.rendered)}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="text">
                <h4>FEATURED BLOGS</h4>
                <div className="post-blog">
                  {featuredPosts.map((related) => {
                    const img =
                      related.yoast_head_json?.og_image?.[0]?.url || '/placeholder.jpg';
                    return (
                      <div className="col-lg-12" key={related.id}>
                        <div className="text">
                          <Link href={`/blogs/${related.slug}`}>
                            <img src={img} width={346} height={196} alt={related.title.rendered} />
                            <h5>{related.title.rendered}</h5>
                          </Link>
                          <Link href={`/blogs/${related.slug}`}>
                            Read More <i className="fa fa-angle-right" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
