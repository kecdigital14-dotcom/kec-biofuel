import { notFound } from 'next/navigation';
import { getBlogBySlug, getRelatedBlogs } from '@/app/data/blogData';
import BlogDetailScreen from '@/screens/BlogDetailScreen';

// Helper to convert relative URLs to absolute
const getAbsoluteUrl = (path) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.kecbiofuel.com';
  
  // If path is already absolute, return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

export async function generateMetadata({ params }) {
  const blog = getBlogBySlug(params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  const blogUrl = `https://www.kecbiofuel.com/blogs/${blog.slug}`;
  const imageUrl = getAbsoluteUrl(blog.image);

  return {
    title: `${blog.title} | KEC Biofuel Blog`,
    description: blog.excerpt,
    keywords: `${blog.category}, CBG, biofuel, renewable energy, ${blog.title}`,
    authors: [{ name: blog.author }],
    
    // Open Graph (for LinkedIn, Facebook, etc.)
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author],
      url: blogUrl,
      siteName: 'KEC Biofuel',
      locale: 'en_IN',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
          type: 'image/jpeg',
        },
      ],
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [imageUrl],
      creator: '@KEC_Biofuel',
      site: '@KEC_Biofuel',
    },
    
    // Additional metadata
    alternates: {
      canonical: blogUrl,
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Generate static params for all blog posts (for static generation)
export async function generateStaticParams() {
  const { blogData } = await import('@/app/data/blogData');
  
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetailPage({ params }) {
  const blog = getBlogBySlug(params.slug);
  
  if (!blog) {
    notFound();
  }
  
  const relatedBlogs = getRelatedBlogs(blog.id);
  
  return <BlogDetailScreen blog={blog} relatedBlogs={relatedBlogs} />;
}