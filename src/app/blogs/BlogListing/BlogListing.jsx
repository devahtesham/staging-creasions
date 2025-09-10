import { motion } from 'framer-motion';
import Link from 'next/link';
import { fetchBlogPostsListing } from '@/utils/helper';
import { useState, useEffect } from 'react';
import CardsLoadingSkeleton from '@/components/ui/CardsLoadingSkeleton';

export default function BlogListing() {
    // Function to clean and truncate the excerpt from content
    const getExcerpt = (content) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        const textContent = tempDiv.textContent || tempDiv.innerText || '';
        return textContent.length > 120 ? textContent.substring(0, 120) + '...' : textContent;
    };

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadBlogs = async () => {
        const blogData = await fetchBlogPostsListing(true);
        setBlogs(blogData || []);
        setLoading(false);
      };
      loadBlogs();
    }, []);

    if (loading) {
        return (
            <div className="product-sec" id="product-sec">
                <CardsLoadingSkeleton count={6} />
            </div>
        );
    }

    return (
        <div className="product-sec blog-post-sec" id="product-sec">
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
                                        {blog.feature_image ? (
                                            <img
                                                className="lazy entered loaded"
                                                decoding="async"
                                                src={blog.feature_image}
                                                alt={blog.image_alt || blog.title}
                                            />
                                        ) : (
                                            <div style={{ height: '250px', background: '#eee' }}></div>
                                        )}
                                    </Link>
                                    <div className="main-heading">
                                        <div className="heading-box">
                                            <Link href={`/blogs/${blog.slug}`} target="_self">
                                                <h3>{blog.title}</h3>
                                            </Link>
                                            <p>{getExcerpt(blog.content)}</p>
                                        </div>
                                        <div className="pric-box">
                                            <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
                                                day: '2-digit', month: 'short', year: 'numeric'
                                            })}</span>
                                            <Link href={`/blogs/${blog.slug}`} className="b-btn" target="_blank">Explore More</Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', fontSize: '2rem', color: '#fff', }}>No blogs found for this page.</div>
                    )}
                </div>
                {/* <motion.div
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
                </motion.div> */}
            </div>
        </div>
    );
}