'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  User, 
  Eye, 
  Heart, 
  Share2, 
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Check,
  Bookmark
} from 'lucide-react';
import Navbar from '@/app/Components/Navbar';

export default function BlogDetailScreen({ blog, relatedBlogs }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(blog.likes);
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(prev => prev + 1);
      setLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setLiked(false);
    }
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/blog/${blog.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${blog.slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(blog.title);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-green-50 lg:mt-[-40px]">
      {/* Modern Hero Banner */}
      <Navbar/>
      <div className="relative h-[600px] overflow-hidden">
        {/* Animated Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -right-40 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Image with Overlay */}
        <div className="absolute inset-0 ">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-green-600/20"></div>
        </div>
        
        {/* Content Container */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Blog</span>
            </Link>

            <div className="max-w-4xl">
              {/* Category Badge with Glassmorphism */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="px-5 py-2.5 bg-white/15 backdrop-blur-xl border border-white/20 text-white rounded-full text-sm font-semibold shadow-lg hover:bg-white/25 transition-all">
                  {blog.category}
                </span>
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className="p-2.5 bg-white/15 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/25 transition-all"
                >
                  <Bookmark 
                    size={18} 
                    className="text-white" 
                    fill={bookmarked ? 'white' : 'none'}
                  />
                </button>
              </div>
              
              {/* Title with Animation */}
              <h1 className="text-5xl md:text-6xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
                {blog.title}
              </h1>
              
              {/* Metadata Pills */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                  <span className="text-white font-semibold text-sm">{blog.author}</span>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white/90 text-sm">
                  <Calendar size={16} />
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white/90 text-sm">
                  <Clock size={16} />
                  <span>{blog.readTime}</span>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white/90 text-sm">
                  <Eye size={16} />
                  <span>{blog.views.toLocaleString()} views</span>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center gap-2 ml-auto relative z-50">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all ${
                      liked
                        ? 'bg-red-500 text-white shadow-lg shadow-red-500/50'
                        : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20'
                    }`}
                  >
                    <Heart size={16} fill={liked ? 'white' : 'none'} />
                    <span>{likes}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#wave-gradient)"/>
            <defs>
              <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
                <stop offset="0%" stopColor="rgb(251 246 242)" />
                <stop offset="50%" stopColor="rgb(254 243 232)" />
                <stop offset="100%" stopColor="rgb(240 253 244)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {blog.content}
                </p>
              </div>

              {/* Sections */}
              {blog.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-gradient-to-r from-orange-500 to-green-600">
                    {section.subheading}
                  </h2>
                  
                  {section.image && (
                    <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={section.image}
                        alt={section.subheading}
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <div className="prose prose-lg max-w-none">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Engagement Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                      liked
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Heart size={20} fill={liked ? 'white' : 'none'} />
                    <span>{likes} Likes</span>
                  </button>
                  
                  <div className="relative z-50">
                    <button 
                      onClick={() => setShareOpen(!shareOpen)}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
                    >
                      <Share2 size={20} />
                      <span>Share Article</span>
                    </button>
                    
                    {shareOpen && (
                      <div className="absolute right-0 bottom-full mb-3 bg-white backdrop-blur-xl rounded-2xl shadow-2xl p-3 z-[9999] min-w-[220px] border border-gray-100">
                        <div className="flex flex-col gap-1">
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 rounded-xl transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Facebook size={16} className="text-white" />
                            </div>
                            <span className="text-gray-700 font-medium text-sm">Facebook</span>
                          </a>
                          <a
                            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 rounded-xl transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Twitter size={16} className="text-white" />
                            </div>
                            <span className="text-gray-700 font-medium text-sm">Twitter</span>
                          </a>
                          <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 rounded-xl transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Linkedin size={16} className="text-white" />
                            </div>
                            <span className="text-gray-700 font-medium text-sm">LinkedIn</span>
                          </a>
                          <button
                            onClick={handleCopyLink}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-all group"
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${
                              copied ? 'bg-green-600' : 'bg-gray-600'
                            }`}>
                              {copied ? (
                                <Check size={16} className="text-white" />
                              ) : (
                                <Link2 size={16} className="text-white" />
                              )}
                            </div>
                            <span className="text-gray-700 font-medium text-sm">
                              {copied ? 'Copied!' : 'Copy Link'}
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Author Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center">
                    <User size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">About Author</h3>
                    <p className="text-sm text-orange-600 font-semibold">{blog.author}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Expert in renewable energy and sustainable agriculture
                </p>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-orange-500 via-orange-400 to-green-500 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="font-bold mb-4 text-lg">Article Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <span className="text-sm font-medium">Views</span>
                    <span className="font-bold text-lg">{blog.views}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <span className="text-sm font-medium">Likes</span>
                    <span className="font-bold text-lg">{likes}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <span className="text-sm font-medium">Read Time</span>
                    <span className="font-bold text-lg">{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map(relatedBlog => (
                <Link
                  key={relatedBlog.id}
                  href={`/blogs/${relatedBlog.slug}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={relatedBlog.thumbnail}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-orange-600 rounded-full text-xs font-bold shadow-lg">
                        {relatedBlog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mt-1 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors text-lg">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {relatedBlog.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock size={14} />
                      <span>{relatedBlog.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}