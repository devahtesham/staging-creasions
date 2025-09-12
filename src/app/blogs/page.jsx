'use client';
import React, { Suspense, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import '@/app/css/Blogs.css';
import IntroSection from '@/components/views/blogs/IntroSection';
import BlogListing from './BlogListing/BlogListing';

// Component that uses useSearchParams - needs to be wrapped in Suspense
function BlogsWithSearchParams() {
  const searchParams = useSearchParams();
  const router = useRouter();
 
  useEffect(() => {
    // If no page parameter is present, redirect to page 1
    if (!searchParams.get('page')) {
      router.replace('/blogs?page=1');
    }
  }, [searchParams, router]);

  return (
    <main className="blogs">
      <IntroSection />
      <BlogListing />
    </main>
  );
}

// Main component that wraps BlogsWithSearchParams in Suspense
export default function Blogs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogsWithSearchParams />
    </Suspense>
  );
}