import { notFound } from 'next/navigation';
// import { getBlogBySlug, getRelatedBlogs } from '@/data/BlogData';
// import BlogDetailScreen from '@/components/Screen/BlogDetailScreen';
import { getBlogBySlug, getRelatedBlogs } from '@/app/data/blogData';
import BlogDetailScreen from '@/screens/BlogDetailScreen';

export async function generateMetadata({ params }) {
  const blog = getBlogBySlug(params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: `${blog.title} | KEC Biofuel Blog`,
    description: blog.excerpt,
    keywords: `${blog.category}, CBG, biofuel, renewable energy, ${blog.title}`,
    authors: [{ name: blog.author }],
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author],
      url: `https://www.kecbiofuel.com/blog/${blog.slug}`,
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      creator: '@KEC_Biofuel',
    },
  };
}

export default function BlogDetailPage({ params }) {
  const blog = getBlogBySlug(params.slug);
  
  if (!blog) {
    notFound();
  }
  
  const relatedBlogs = getRelatedBlogs(blog.id);
  
  return <BlogDetailScreen blog={blog} relatedBlogs={relatedBlogs} />;
}
