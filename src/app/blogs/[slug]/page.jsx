// src/app/blogs/[slug]/page.jsx
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import BlogDetailPage from '../../Components/BlogDetailPage';

// ⭐ Add Metadata Function (Fix OG Thumbnail)
export async function generateMetadata({ params }) {
  const { slug } = params;

  // Fetch your blog from local blogPosts file
  // Because your BlogDetailPage takes from blogPosts, not API
  const { blogPosts } = await import("../../data/blogData");

  const post = blogPosts.find(p =>
    p.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") === slug
  );

  // If post not found → default metadata
  if (!post) {
    return {
      title: "Blog Not Found | KEC Biofuel",
      description: "Requested blog does not exist.",
      openGraph: {
        title: "Blog Not Found",
        description: "Requested blog does not exist.",
        images: [
          "https://www.kecbiofuel.com/default-blog-image.jpg"
        ],
      }
    };
  }

  // ⭐ IMPORTANT → This is the correct OG metadata
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
          url: post.image,   // must be a full URL like https://...
          width: 1200,
          height: 630,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
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
