// src/app/blogs/[slug]/page.jsx
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import BlogDetailPage from '../../Components/BlogDetailPage';

// ⭐ Add Metadata Function (Fix OG Thumbnail)
export async function generateMetadata({ params }) {
  const { slug } = params;

  // import blog posts
  const { blogPosts } = await import("../../data/blogData");

  // FIXED SLUG MATCHING
  const post = blogPosts.find(p => {
    const generatedSlug = p.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return generatedSlug === slug;
  });

  if (!post) {
    return {
      title: "Blog Not Found",
      description: "The blog you're looking for does not exist."
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.kecbiofuel.com/blogs/${slug}`,
      type: "article",
      images: [
        {
          url: post.image,  // MUST be full URL now
          width: 1200,
          height: 630
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      images: [post.image]
    }
  };
}


// ⭐ Your existing UI component starts here
export default function BlogSingleScreen({ params }) {
  const slug = params.slug;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <BlogDetailPage slug={slug} />
      <Footer />
    </div>
  );
}
