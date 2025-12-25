"use client"

import React, { useState, useEffect } from 'react';
import {
  Heart, Share2, Clock, Calendar, User, MessageCircle,
  Eye, ChevronUp, Bookmark, ArrowRight
} from 'lucide-react';
import { blogData, getBlogBySlug } from "../../data/blogData";

const BlogDetailClient = ({ slug }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const post = getBlogBySlug(slug);

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

      {/* HERO SECTION */}
      <div className="relative mt-28 bg-gradient-to-br from-green-50 via-green-100 to-green-400 text-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[82%] mx-auto">

            <div>
              <span className="inline-block px-4 py-1 bg-green-600 rounded-full text-sm font-medium text-white">
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
                    <div className="text-sm opacity-80">Leading sustainable energy solutions</div>
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

            <div className="block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN ARTICLE */}
      <article className="max-w-5xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-gray-700 text-justify leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-green-600 first-letter:mr-3 first-letter:float-left">
            {post.excerpt}
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-[17.5px] text-gray-700 leading-relaxed">
            {post.content}
          </p>
        </div>

        {post.sections && post.sections.map((section, index) => (
          <div key={index} className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {section.subheading}
            </h2>

            {section.image && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <img
                  src={section.image}
                  alt={section.subheading}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            )}

            <div className="text-[17.5px] text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
              {section.content}
            </div>
          </div>
        ))}

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-10 my-16">
          <p className="text-2xl font-medium text-center">
            "Investing in CBG is investing in India's sustainable future..."
          </p>
        </div>

        {post.featured && (
          <div className="flex flex-wrap gap-3 pt-8 border-t border-gray-200">
            {["CBG", "Renewable Energy", "Green Investment", "Sustainable Farming", "Clean Energy"].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* COMMENTS SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Join the Discussion
          </h2>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <textarea
                  placeholder="What are your thoughts?"
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
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogData
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
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
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
          className="fixed bottom-8 right-8 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all flex items-center justify-center z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default BlogDetailClient;