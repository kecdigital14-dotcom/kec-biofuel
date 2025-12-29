'use client';

import { useState, useEffect } from 'react';
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
  Bookmark,
  Share2Icon
} from 'lucide-react';
import Navbar from '@/app/Components/Navbar';
import BlogReviews from '@/app/Components/BlogReviews';
import Footer from '@/app/Components/Footer';

export default function BlogDetailScreen({ blog, relatedBlogs }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(blog?.likes || 0);
  const [isLoadingLike, setIsLoadingLike] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Fetch initial like status from server
  useEffect(() => {
    const fetchLikeStatus = async () => {
      if (!blog?._id && !blog?.id) return;

      const blogId = blog._id || blog.id;

      try {
        const res = await fetch(`/api/blogs/${blogId}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
          const data = await res.json();
          if (data.success && data.blog) {
            setLikes(data.blog.likes || 0);
            setLiked(data.blog.hasLiked || false);
          }
        }
      } catch (err) {
        console.error('Failed to fetch blog like status:', err);
      }
    };

    fetchLikeStatus();
  }, [blog?._id, blog?.id]);

  const handleLike = async () => {
    if (isLoadingLike) return;

    const blogId = blog?._id || blog?.id;

    if (!blogId) {
      console.warn('No blog ID available for like action');
      return;
    }

    // Optimistic update
    const previouslyLiked = liked;
    const previousLikes = likes;

    setLiked(!liked);
    setLikes(prev => previouslyLiked ? Math.max(0, prev - 1) : prev + 1);
    setIsLoadingLike(true);

    try {
      const response = await fetch(`/api/blogs/${blogId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        // Rollback on failure
        setLiked(previouslyLiked);
        setLikes(previousLikes);
        console.error('Like toggle failed:', data.message || 'Unknown error');
        return;
      }

      // Update with real values from server
      setLikes(data.likes);
      setLiked(data.hasLiked);

    } catch (error) {
      // Rollback on network error
      setLiked(previouslyLiked);
      setLikes(previousLikes);
      console.error('Error toggling like:', error);
    } finally {
      setIsLoadingLike(false);
    }
  };

  const handleCopyLink = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getShareUrl = () => {
    return typeof window !== 'undefined' ? window.location.href : '';
  };

  const shareUrl = getShareUrl();
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(blog?.title || 'Interesting article');

  const handleFacebookShare = () => {
    window.open(`https://www.facebook.com/sharer.php?u=${encodedUrl}`, '_blank', 'width=600,height=400');
    setShareOpen(false);
  };

  const handleTwitterShare = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, '_blank', 'width=600,height=400');
    setShareOpen(false);
  };

  const handleLinkedInShare = () => {
    if (shareUrl.includes('localhost') || shareUrl.includes('127.0.0.1')) {
      alert('LinkedIn sharing works best on deployed sites. Link copied instead.');
      handleCopyLink();
      setShareOpen(false);
      return;
    }
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank', 'width=600,height=600');
    setShareOpen(false);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title || '',
          text: blog?.excerpt || blog?.content?.substring(0, 150) || '',
          url: shareUrl,
        });
        setShareOpen(false);
      } catch (err) {
        console.log('Native share failed or cancelled', err);
      }
    }
  };

  // Fallback mock data if blog prop is missing
  const displayBlog = blog || {
    slug: 'sample-blog',
    title: 'Sample Blog Post About Renewable Energy',
    category: 'Renewable Energy',
    author: 'John Doe',
    date: '2024-12-20',
    readTime: '5 min read',
    views: 1250,
    likes: likes,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
    excerpt: 'Discover the future of clean energy',
    content: 'This is a sample blog post about renewable energy and sustainable practices...',
    sections: [
      {
        subheading: 'Introduction to Solar Power',
        content: 'Solar power has become one of the most promising renewable energy sources...',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600'
      }
    ]
  };

  const displayRelatedBlogs = relatedBlogs || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-green-50">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -right-40 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="absolute inset-0">
          <img
            src={displayBlog.image}
            alt={displayBlog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-green-600/20"></div>
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Blog</span>
            </a>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="px-5 py-2.5 bg-white/15 backdrop-blur-xl border border-white/20 text-white rounded-full text-sm font-semibold shadow-lg hover:bg-white/25 transition-all">
                  {displayBlog.category}
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

              <h1 className="text-5xl md:text-6xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-8">
                {displayBlog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                  <span className="text-white font-semibold text-sm">{displayBlog.author}</span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white/90 text-sm">
                  <Calendar size={16} />
                  <span>{new Date(displayBlog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white/90 text-sm">
                  <Clock size={16} />
                  <span>{displayBlog.readTime}</span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white/90 text-sm">
                  <Eye size={16} />
                  <span>{displayBlog.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#wave-gradient)" />
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

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {displayBlog.content}
                </p>
              </div>

              {displayBlog.sections?.map((section, index) => (
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
                      <p key={pIndex} className="text-gray-700 leading-relaxed mb-4 text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Engagement Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-4">

                  <div className="relative">
                    {/* <button
                      onClick={() => setShareOpen(!shareOpen)}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
                    >
                      <Share2 size={20} />
                      <span>Share Article</span>
                    </button>

                    {shareOpen && ( */}
                    <>

                      <div className="flex items-center justify-center gap-8">
                        <div className=''>
                          <h1 className='bg-gradient-to-r from-orange-500 to-green-600 text-white py-2 rounded-lg px-3'>
                            <Share2Icon size={15} className="inline-block mr-2" />
                            Share Article</h1>
                        </div>
                        <div
                          className="fixed inset-0"
                        // onClick={() => setShareOpen(false)}
                        />
                        <div className=" mb-3 bg-transparent backdrop-blur-3xl rounded-2xl shadow-2xl px-4 py-2 border border-gray-100">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={handleFacebookShare}
                              className="group flex flex-col items-center gap-1.5 p-2 hover:bg-blue-50 rounded-xl transition-all"
                              title="Facebook"
                            >
                              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Facebook size={18} className="text-white" />
                              </div>
                              <span className="text-gray-700 font-medium text-xs whitespace-nowrap">Facebook</span>
                            </button>

                            <button
                              onClick={handleTwitterShare}
                              className="group flex flex-col items-center gap-1.5 p-2 hover:bg-blue-50 rounded-xl transition-all"
                              title="Twitter"
                            >
                              <div className="w-10 h-10 rounded-lg bg-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Twitter size={18} className="text-white" />
                              </div>
                              <span className="text-gray-700 font-medium text-xs whitespace-nowrap">Twitter</span>
                            </button>

                            <button
                              onClick={handleLinkedInShare}
                              className="group flex flex-col items-center gap-1.5 p-2 hover:bg-blue-50 rounded-xl transition-all"
                              title="LinkedIn"
                            >
                              <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Linkedin size={18} className="text-white" />
                              </div>
                              <span className="text-gray-700 font-medium text-xs whitespace-nowrap">LinkedIn</span>
                            </button>

                            <button
                              onClick={handleCopyLink}
                              className="group flex flex-col items-center gap-1.5 p-2 hover:bg-gray-50 rounded-xl transition-all"
                              title="Copy Link"
                            >
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${copied ? 'bg-green-600' : 'bg-gray-600'
                                }`}>
                                {copied ? <Check size={18} className="text-white" /> : <Link2 size={18} className="text-white" />}
                              </div>
                              <span className="text-gray-700 font-medium text-xs whitespace-nowrap">
                                {copied ? 'Copied!' : 'Copy Link'}
                              </span>
                            </button>

                            {typeof navigator !== 'undefined' && navigator.share && (
                              <button
                                onClick={handleNativeShare}
                                className="group flex flex-col items-center gap-1.5 p-2 hover:bg-orange-50 rounded-xl transition-all border-l border-gray-200 pl-3 ml-1"
                                title="More Options"
                              >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Share2 size={18} className="text-white" />
                                </div>
                                <span className="text-gray-700 font-medium text-xs whitespace-nowrap">More</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                    </>

                  </div>
                </div>

                <BlogReviews blogSlug={displayBlog.slug} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center">
                    <User size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">About Author</h3>
                    <p className="text-sm text-orange-600 font-semibold">{displayBlog.author}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Expert in renewable energy and sustainable agriculture
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 via-orange-400 to-green-500 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="font-bold mb-4 text-lg">Article Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <span className="text-sm font-medium">Views</span>
                    <span className="font-bold text-lg">{displayBlog.views}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <span className="text-sm font-medium">Likes</span>
                    <span className="font-bold text-lg">{likes}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <span className="text-sm font-medium">Read Time</span>
                    <span className="font-bold text-lg">{displayBlog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {displayRelatedBlogs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {displayRelatedBlogs.map((relatedBlog) => (
                <a
                  key={relatedBlog.id || relatedBlog.slug}
                  href={`/blogs/${relatedBlog.slug}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={relatedBlog.thumbnail || relatedBlog.image}
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
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}