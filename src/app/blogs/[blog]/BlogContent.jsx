'use client';

import React, { useMemo, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';




export default function BlogContent({ post, featuredPosts }) {
  const featuredImage = post.yoast_head_json?.og_image?.[0]?.url;
  const mainContentRef = useRef(null);
  const [isMainContentInView, setIsMainContentInView] = useState(false);

  console.log('[featuredPosts]', featuredPosts);
  console.log('[post]', post);

  // Extract table of contents from H2 headings
  const { tableOfContents, processedContent } = useMemo(() => {
    if (!post?.content) return { tableOfContents: [], processedContent: '' };

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.content;
    
    const h2Elements = tempDiv.querySelectorAll('h2');
    const toc = [];
    
    h2Elements.forEach((h2, index) => {
      const text = h2.textContent.trim();
      const id = `heading-${index + 1}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
      
      // Add ID to the heading for anchor linking
      h2.setAttribute('id', id);
      
      toc.push({
        id,
        text,
        level: 2
      });
    });

    return {
      tableOfContents: toc,
      processedContent: tempDiv.innerHTML
    };
  }, [post?.content]);

  const scrollToHeading = (headingId) => {
    const element = document.getElementById(headingId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Add some offset for better visibility
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Intersection Observer to detect when main content section reaches the top
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the section is intersecting and at the top of viewport
          const isAtTop = entry.boundingClientRect.top <= 0;
          const isInView = entry.isIntersecting && isAtTop;
          console.log('[isInView]', isInView)
          console.log('[isAtTop]', isAtTop) 
          console.log('[entry.isIntersecting]', entry.isIntersecting)
          if(entry.isIntersecting){
            console.log('[entry]',mainContentRef.current)
            setIsMainContentInView(isInView);
          }else{
            setIsMainContentInView(isInView);
          }
        });
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px 0px -100% 0px', // Only trigger when element reaches the very top
        threshold: 0
      }
    );

    if (mainContentRef.current) {
      observer.observe(mainContentRef.current);
    }

    return () => {
      if (mainContentRef.current) {
        observer.unobserve(mainContentRef.current);
      }
    };
  }, []);


  return (
    <main className="single-blog">
      <section
        className="inner-title"
        style={{ backgroundImage: "url(/blogs/blogs-intro-bg.webp)" }}
      >
        <div className="container">
          <h1>{post?.title}</h1>
        </div>
      </section>

      <section className="blog-sec main-blog-content-sec" ref={mainContentRef}>
        
          <div className="row">
            <div className="col-lg-3">
              <section className={`table-of-contents ${!isMainContentInView ? 'd-none' : ''}`}>
                <h2>Table of Contents</h2>
                {/* Debug indicator */}
                <div className="debug-indicator" style={{ 
                  fontSize: '12px', 
                  color: isMainContentInView ? '#4ade80' : '#f87171',
                  marginBottom: '8px',
                  fontWeight: 'bold'
                }}>
                </div>
                {tableOfContents.length > 0 && (
                  <ul className="toc-list">
                    {tableOfContents.map((item, index) => (
                      <li key={index} className="toc-item">
                        <button
                          onClick={() => scrollToHeading(item.id)}
                          className="toc-link"
                        >
                          {item.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {tableOfContents.length === 0 && (
                  <p className="toc-empty">No headings found in this article.</p>
                )}
              </section>
            </div>
            <div className="col-lg-5">
              <div className="print_pdf">
                <div className="text">
                  {post?.feature_image && (
                    <img
                      src={post?.feature_image}
                      alt={post.image_alt}
                      width={800}
                      height={400}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  )}
                  {parse(processedContent || post?.content || '')}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="text">
                <h4>FEATURED BLOGS</h4>
                <div className="post-blog">
                  {featuredPosts.map((related) => {
                    return (
                      <div className="col-lg-12" key={related.id}>
                        <div className="text">
                          <Link href={`/blogs/${related.slug}`}>
                            <img src={related.feature_image || '/placeholder.jpg'} width={346} height={196} alt={related.image_alt} />
                            <h5>{related.title}</h5>
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
        
      </section>
    </main>
  );
}
