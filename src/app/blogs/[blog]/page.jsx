import BlogClient from './BlogClient';

const getBlog = async (slug) => {
  const res = await fetch(`https://blogs.creasions.com/wp-json/wp/v2/posts?slug=${slug}`);
  const data = await res.json();
  return data[0];
};

export async function generateStaticParams() {
  const allPosts = [];
  let page = 1;
  let totalPages = 1;

  do {
    const res = await fetch(`https://blogs.creasions.com/wp-json/wp/v2/posts?page=${page}&per_page=100`);
    const posts = await res.json();

    if (page === 1) {
      const totalPagesHeader = res.headers.get('X-WP-TotalPages');
      totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 1;
    }

    allPosts.push(...posts);
    page++;
  } while (page <= totalPages);

  return allPosts.map((post) => ({
    blog: post.slug,
  }));
}


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
      siteName: meta.og_site_name || 'creasions',
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
