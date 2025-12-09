import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import {
  Heart, Share2, Clock, Calendar, User, MessageCircle,
  Eye, ChevronUp, Bookmark, ArrowRight
} from 'lucide-react';
import { blogPosts, getCategoryColor, formatDate } from '../../data/blogData';

const BlogSingle = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [isLiked, setIsLiked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // OPTION 1: Find the blog post from blogData based on slug
  const post = blogPosts.find(p => 
    p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") === slug
  );

  // If post not found, show loading or 404
  if (!slug) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <a href="/blogs" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Back to Blogs
          </a>
        </div>
      </div>
    );
  }

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

  // Get 3 related posts from the same category (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-green-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-400 text-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[82%] mx-auto">

            <div>
              <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>

              <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 mt-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">{post.author}</div>
                    <div className="text-sm opacity-80">Contributing Author</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{formatDate(post.date)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{post.readTime}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{post.views.toLocaleString()}</span>
                </div>

              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SOCIAL ACTION BAR */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-40 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isLiked ? 'bg-red-50 text-red-600' : 'hover:bg-gray-100 text-gray-700'}`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span className="font-medium">{isLiked ? post.likes + 1 : post.likes}</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700 transition-all">
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">24</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-700 transition-all">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-700 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN ARTICLE */}
      <article className="max-w-5xl mx-auto px-6 py-12">

        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-gray-700 leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-green-600 first-letter:mr-3 first-letter:float-left">
            {post.excerpt}
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Understanding {post.category}
          </h2>
          
          <p className="text-[17.5px] text-gray-700 leading-relaxed">
            This comprehensive guide explores the key aspects of {post.title.toLowerCase()}, 
            providing valuable insights and practical information for readers interested in {post.category.toLowerCase()}.
          </p>

          <div className="my-8 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Comprehensive coverage of {post.category} topics</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Expert insights and practical applications</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Real-world examples and case studies</span>
              </li>
            </ul>
          </div>

          <p className="text-[17.5px] text-gray-700 leading-relaxed">
            The field of {post.category.toLowerCase()} continues to evolve, bringing new opportunities 
            and challenges. Understanding these developments is crucial for anyone looking to stay 
            informed and make educated decisions in this space.
          </p>

          <div className="border-l-4 border-green-600 bg-green-50 p-6 rounded-r-xl my-6">
            <p className="text-lg text-gray-800 italic">
              "Success in {post.category.toLowerCase()} requires staying informed, being adaptable, 
              and maintaining a forward-thinking approach to emerging trends and technologies."
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-10 my-16">
          <p className="text-2xl font-medium text-center">
            "Stay informed, stay ahead. Subscribe to our newsletter for the latest updates in {post.category}."
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-8 border-t border-gray-200">
          <span className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition-colors cursor-pointer">
            #{post.category}
          </span>
          <span className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition-colors cursor-pointer">
            #Article
          </span>
          <span className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition-colors cursor-pointer">
            #Guide
          </span>
        </div>

      </article>

      {/* COMMENTS SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Join the Discussion (24)
          </h2>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <textarea
                  placeholder={`Share your thoughts about ${post.title}...`}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  rows="4"
                />
                <div className="flex justify-end mt-4">
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">More from {post.category}</h2>
            <div className="grid md:grid-cols-3 gap-8">

              {relatedPosts.map((relatedPost, index) => {
                const relatedSlug = relatedPost.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-+|-+$/g, "");

                return (
                  <a 
                    key={index} 
                    href={`/blogs/${relatedSlug}`}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl mb-4 h-56">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>

                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {relatedPost.readTime}
                    </div>
                  </a>
                );
              })}

            </div>
          </div>
        </section>
      )}

      {/* SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all flex items-center justify-center z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

    </div>
  );
};

export default BlogSingle;