'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import '@/app/css/Blogs.css';
import IntroSection from '@/components/views/blogs/IntroSection';
import Link from 'next/link';
import { useLenis } from '@/components/ui/LenisSmoothScroll';
const BLOGS_PER_PAGE = 9;
const MAX_PAGE_NUMS_TO_SHOW = 50;
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [featuredImages, setFeaturedImages] = useState({});
  const searchParams = useSearchParams();
  const pageFromURL = searchParams.get('page') || '1';
  const [currentPage, setCurrentPage] = useState(Number(pageFromURL));
  const [totalPages, setTotalPages] = useState(1);
  // Fetch featured image for a given media ID
  const fetchFeaturedImage = async (mediaId) => {
    const mediaUrl = `https://blogs.creasions.com/wp-json/wp/v2/media/${mediaId}`;
    try {
      const res = await fetch(mediaUrl);
      const mediaData = await res.json();
      return mediaData.source_url; // Return the image URL
    } catch (error) {
      console.error('Error fetching media:', error);
      return null;
    }
  };
  const fetchBlogs = async () => {
    const url = `https://blogs.creasions.com/wp-json/wp/v2/posts?page=${currentPage}&per_page=${BLOGS_PER_PAGE}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const totalPagesFromHeader = res.headers.get('X-WP-TotalPages');
      setBlogs(data);
      setTotalPages(Number(totalPagesFromHeader));
      // Fetch the featured images for each blog
      const mediaPromises = data.map(async (blog) => {
        const mediaId = blog.featured_media;
        const mediaUrl = await fetchFeaturedImage(mediaId);
        return { [blog.id]: mediaUrl }; // Set the media URL with blog ID as key
      });
      const mediaResults = await Promise.all(mediaPromises);
      const mediaMap = Object.assign({}, ...mediaResults);
      setFeaturedImages(mediaMap); // Set the fetched media URLs
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogs([]);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      scrollToSection('product-sec');
    }
  };
  const getPaginationRange = () => {
    let pageNumbers = [];
    if (totalPages <= MAX_PAGE_NUMS_TO_SHOW) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= MAX_PAGE_NUMS_TO_SHOW - 2) {
        for (let i = 1; i <= MAX_PAGE_NUMS_TO_SHOW; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - (MAX_PAGE_NUMS_TO_SHOW - 2)) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - (MAX_PAGE_NUMS_TO_SHOW - 2); i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };
  useEffect(() => {
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('page', currentPage);
    window.history.pushState({}, '', newUrl);
  }, [currentPage]);
  const lenis = useLenis();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element && lenis?.current) {
      lenis.current.scrollTo(element, {
        duration: 2,
      });
    }
  };
  // Function to clean and truncate the excerpt
  const getExcerpt = (content) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    return textContent.length > 120 ? textContent.substring(0, 120) + '...' : textContent;
  };
  return (
    <main className="blogs">
      <IntroSection />
      <div className="product-sec" id="product-sec">
        <div className="container">
          <div className="row post-lest">
            {blogs.length > 0 ? (
              blogs.map(blog => (
                <motion.div
                  className="col-lg-4 col-md-6"
                  key={blog.id}
                  initial={{ opacity: 0, transform: 'translateY(50px)' }}
                  animate={{ opacity: 1, transform: 'translateY(0)' }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="prod-main">
                  <Link href={`/blogs/${blog.slug}`} target="_self">
                      {featuredImages[blog.id] ? (
                        <img
                          className="lazy entered loaded"
                          decoding="async"
                          src={featuredImages[blog.id]}
                          alt={blog.title.rendered}
                        />
                      ) : (
                        <div style={{ height: '250px', background: '#eee' }}></div>
                      )}
                    </Link>
                    <div className="main-heading">
                      <div className="heading-box">
                      <Link href={`/blogs/${blog.slug}`} target="_self">
                          <h3 dangerouslySetInnerHTML={{ __html: blog.title.rendered }} />
                        </Link>
                        <p>{getExcerpt(blog.excerpt.rendered)}</p>
                      </div>
                      <div className="pric-box">
                        <span>{new Date(blog.date).toLocaleDateString('en-US', {
                          day: '2-digit', month: 'short', year: 'numeric'
                        })}</span>
                        <Link href={`/blogs/${blog.slug}`} className="b-btn" target="_blank">Explore More</Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div>No blogs found for this page.</div>
            )}
          </div>
          <motion.div
            className="pagination"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className={`pagination-btn prev-btn ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              whileTap={{ scale: 0.95 }}
            >
              Prev
            </motion.button>
            {getPaginationRange().map((page, index) => (
              page === '...' ? (
                <motion.span key={index} className="dots">...</motion.span>
              ) : (
                <motion.button
                  key={index}
                  className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => goToPage(page)}
                  whileTap={{ scale: 0.95 }}
                >
                  {page}
                </motion.button>
              )
            ))}
            <motion.button
              className={`pagination-btn next-btn ${currentPage === totalPages ? 'disabled' : ''}`}
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              whileTap={{ scale: 0.95 }}
            >
              Next
            </motion.button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}