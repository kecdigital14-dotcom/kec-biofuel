"use client"

import React, { useState, useEffect } from 'react';
import {
  Heart, Share2, Clock, Calendar, User, MessageCircle,
  Eye, ChevronUp, Bookmark, ArrowRight
} from 'lucide-react';

// Mock blog data for demonstration
const mockBlogData = [
  {
    id: 1,
    slug: "cbg-sustainability",
    title: "In CBG, 'Sasta' Is Not Smart — 'Sabse Achha' Is Sustainable",
    excerpt: "India is embracing a decisive shift in its energy narrative. Clean fuels are no longer viewed merely as alternatives, but as experimental. Among all alternatives, Compressed Bio Gas (CBG) has emerged as one of the most practical solutions.",
    content: "India is embarking on a transformative journey in energy sustainability, with Compressed Bio Gas (CBG) leading the charge. This revolutionary fuel source represents not just an alternative, but a fundamental shift in how we approach energy production and consumption. The technology harnesses organic waste and agricultural residue, converting them into clean, sustainable energy while simultaneously addressing waste management challenges.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    category: "Bio CBG",
    author: "Tech Blog Team",
    date: "2023-12-21",
    views: 1200,
    likes: 156,
    readTime: "5 min",
    featured: true,
    sections: [
      {
        subheading: "The Rise of Bio-CBG in India",
        content: "India's commitment to renewable energy has catalyzed the growth of Bio-CBG infrastructure across the nation. Government policies and private sector investments are converging to create a robust ecosystem for sustainable fuel production.\n\nThe technology offers multiple benefits: reducing greenhouse gas emissions, providing farmers with additional income streams, and decreasing dependence on fossil fuels. With over 5000 CBG plants planned nationwide, India is positioning itself as a global leader in bio-energy innovation.",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop"
      },
      {
        subheading: "Economic and Environmental Impact",
        content: "The economic implications of CBG adoption extend beyond energy production. Rural communities benefit from new employment opportunities, while urban areas enjoy cleaner air quality. The circular economy model inherent in CBG production transforms waste into wealth, creating sustainable value chains.\n\nEnvironmental benefits include significant reductions in methane emissions from organic waste, improved soil health through the use of bio-slurry as organic fertilizer, and decreased water pollution from agricultural runoff.",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=600&fit=crop"
      }
    ]
  },
  {
    id: 2,
    slug: "renewable-energy-future",
    title: "The Future of Renewable Energy in India",
    excerpt: "Exploring the latest developments in renewable energy infrastructure.",
    content: "Content here...",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-509391366360-2e959784a276?w=800&h=600&fit=crop",
    category: "Bio CBG",
    author: "Energy Team",
    date: "2023-12-18",
    views: 980,
    likes: 124,
    readTime: "4 min",
    featured: false
  }
];

const getBlogBySlug = (slug) => {
  return mockBlogData.find(blog => blog.slug === slug) || mockBlogData[0];
};

const BlogDetailClient = ({ slug = "cbg-sustainability" }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const post = getBlogBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">404 - Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <a href="/blogs" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Back to Blogs
          </a>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setReadingProgress(scrollPercent);
      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-green-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* HERO SECTION - FIXED RESPONSIVENESS */}
      <div className="relative mt-16 sm:mt-20 lg:mt-28 bg-gradient-to-br from-green-50 via-green-100 to-green-400 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center w-full lg:max-w-[82%] mx-auto">

            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 sm:px-4 py-1 bg-green-600 rounded-full text-xs sm:text-sm font-medium text-white">
                {post.category}
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 mt-3 sm:mt-4 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 lg:gap-6 text-gray-700">
                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm sm:text-base truncate">{post.author}</div>
                    <div className="text-xs sm:text-sm opacity-80 truncate">Leading sustainable energy solutions</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{formatDate(post.date)}</span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{post.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN ARTICLE */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-12 sm:mb-16">
          <p className="text-base sm:text-lg text-gray-700 text-justify leading-relaxed first-letter:text-5xl sm:first-letter:text-6xl lg:first-letter:text-7xl first-letter:font-bold first-letter:text-green-600 first-letter:mr-2 sm:first-letter:mr-3 first-letter:float-left">
            {post.excerpt}
          </p>
        </div>

        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-8 sm:mb-12">
          <p className="text-[15px] sm:text-[16px] lg:text-[17.5px] text-gray-700 leading-relaxed">
            {post.content}
          </p>
        </div>

        {post.sections && post.sections.map((section, index) => (
          <div key={index} className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              {section.subheading}
            </h2>

            {section.image && (
              <div className="mb-6 sm:mb-8 rounded-lg sm:rounded-xl overflow-hidden">
                <img
                  src={section.image}
                  alt={section.subheading}
                  className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover"
                />
              </div>
            )}

            <div className="text-[15px] sm:text-[16px] lg:text-[17.5px] text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
              {section.content}
            </div>
          </div>
        ))}

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 my-12 sm:my-16">
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-center leading-relaxed">
            "Investing in CBG is investing in India's sustainable future..."
          </p>
        </div>

        {post.featured && (
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-6 sm:pt-8 border-t border-gray-200">
            {["CBG", "Renewable Energy", "Green Investment", "Sustainable Farming", "Clean Energy"].map((tag, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* COMMENTS SECTION */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Join the Discussion
          </h2>

          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
            <div className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <textarea
                  placeholder="What are your thoughts?"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm sm:text-base"
                  rows="4"
                />
                <div className="flex justify-end mt-3 sm:mt-4">
                  <button className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-sm sm:text-base">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mockBlogData
              .filter(b => b.id !== post.id && b.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <a
                  key={relatedPost.id}
                  href={`/blogs/${relatedPost.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={relatedPost.thumbnail}
                    alt={relatedPost.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all flex items-center justify-center z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
};

export default BlogDetailClient;