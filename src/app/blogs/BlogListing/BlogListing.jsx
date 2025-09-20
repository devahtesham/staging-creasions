import { motion } from 'framer-motion';
import Link from 'next/link';
import { fetchBlogPostsListing } from '@/utils/helper';
import { useState, useEffect } from 'react';
import CardsLoadingSkeleton from '@/components/ui/CardsLoadingSkeleton';
import { useSearchParams, useRouter } from 'next/navigation';

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
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchInput, setSearchInput] = useState('');
    
    const searchParams = useSearchParams();
    const router = useRouter();
    
    const BLOGS_PER_PAGE = 9;

    useEffect(() => {
      const pageFromURL = searchParams.get('page') || '1';
      const searchFromURL = searchParams.get('search') || '';
      const pageNumber = parseInt(pageFromURL, 10);
      setCurrentPage(pageNumber);
      setSearchQuery(searchFromURL);
      setSearchInput(searchFromURL);
    }, [searchParams]);

    useEffect(() => {
      const loadBlogs = async () => {
        setLoading(true);
        const blogData = await fetchBlogPostsListing(currentPage, BLOGS_PER_PAGE, true, true, searchQuery);
        console.log('[blogData]', blogData);
        if (blogData) {
          setBlogs(blogData.data || []);
          setTotalPages(blogData.pagination.totalPages || 1);
          setTotalBlogs(blogData.pagination.total || 0);
        }
        setLoading(false);
      };
      loadBlogs();
    }, [currentPage, searchQuery]);

    // Search functions
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (searchInput.trim()) {
            params.set('search', searchInput.trim());
        }
        params.set('page', '1'); // Reset to first page when searching
        const newUrl = `/blogs?${params.toString()}`;
        router.push(newUrl);
    };

    const handleSearchClear = () => {
        setSearchInput('');
        const newUrl = `/blogs?page=1`;
        router.push(newUrl);
    };

    // Pagination functions
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            const params = new URLSearchParams();
            params.set('page', page.toString());
            if (searchQuery) {
                params.set('search', searchQuery);
            }
            const newUrl = `/blogs?${params.toString()}`;
            router.push(newUrl);
        }
    };

    const getPaginationRange = () => {
        const range = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                range.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    range.push(i);
                }
                range.push('...');
                range.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                range.push(1);
                range.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    range.push(i);
                }
            } else {
                range.push(1);
                range.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    range.push(i);
                }
                range.push('...');
                range.push(totalPages);
            }
        }
        
        return range;
    };

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
                {/* Search Section */}
                <div className="row mb-4">
                    <div className="col-12">
                        <form onSubmit={handleSearchSubmit} className="search-form">
                            <div className="search-input-wrapper">
                                <input
                                    type="text"
                                    placeholder="Search blogs by title..."
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    className="search-input"
                                />
                                <div className="search-buttons">
                                    <button type="submit" className="search-btn">
                                        Search
                                    </button>
                                    {searchQuery && (
                                        <button 
                                            type="button" 
                                            onClick={handleSearchClear}
                                            className="clear-btn"
                                        >
                                            Clear
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                        {searchQuery && (
                            <div className="search-results-info">
                                <p>Showing results for: <strong>"{searchQuery}"</strong> ({totalBlogs} results found)</p>
                            </div>
                        )}
                    </div>
                </div>
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
                {totalPages > 1 && (
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
                )}
            </div>
        </div>
    );
}