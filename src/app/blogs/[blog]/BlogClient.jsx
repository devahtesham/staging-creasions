"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BlogContent from './BlogContent';
import '@/app/css/BlogSingle.css';

const getBlog = async (slug) => {
  const res = await fetch(`https://blogs.creasions.com/wp-json/wp/v2/posts?slug=${slug}`);
  const data = await res.json();
  return data[0];
};

const getAllBlogs = async (excludeSlug) => {
  const res = await fetch('https://blogs.creasions.com/wp-json/wp/v2/posts?per_page=20');
  const all = await res.json();
  return all.filter((post) => post.slug !== excludeSlug);
};

export default function BlogClient({ slug }) {
  const [post, setPost] = useState(null);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogData = async () => {
      const blogPost = await getBlog(slug);
      if (!blogPost) {
        router.push('/404');
        return;
      }

      setPost(blogPost);

      const allPosts = await getAllBlogs(slug);
      const featured = allPosts.sort(() => 0.5 - Math.random()).slice(0, 4);
      setFeaturedPosts(featured);
    };

    fetchBlogData();
  }, [slug]);

  if (!post) return <div style={{ textAlign: 'center', height: '90vh', fontSize: '2rem', color: '#fff', marginTop: '20rem' }}>Loading...</div>;

  return <BlogContent post={post} featuredPosts={featuredPosts} />;
}
