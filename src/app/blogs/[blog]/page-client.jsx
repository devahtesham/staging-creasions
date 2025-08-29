import BlogClient from './BlogClient';

// Server-side fetch for metadata only
const getBlog = async (slug) => {
  const res = await fetch(`https://blogs.creasions.com/wp-json/wp/v2/posts?slug=${slug}`, {
    cache: 'no-store',
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data[0];
};

export async function generateMetadata({ params }) {
  const post = await getBlog(params.blog);
  if (!post) return {};

  const meta = post.yoast_head_json || {};

  return {
    title: meta.title || post.title.rendered,
    description: meta.og_description || '',
    openGraph: {
      title: meta.og_title || post.title.rendered,
      description: meta.og_description || '',
      url: meta.og_url || `https://creasions.com/blog/${params.blog}`,
      siteName: meta.og_site_name || 'Your Site Name',
      images: meta.og_image?.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        type: img.type,
      })),
    },
  };
}

export default function BlogPage({ params }) {
  return <BlogClient slug={params.blog} />;
}
