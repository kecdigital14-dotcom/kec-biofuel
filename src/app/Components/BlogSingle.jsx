import React, { useState, useEffect } from 'react';
import { Heart, Share2, BookOpen, Clock, Calendar, User, ArrowLeft, ArrowRight, MessageCircle, Eye, ChevronUp } from 'lucide-react';

const BlogSingle = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  // Bio-fuel focused blog data
  const blogData = {
    title: "The Revolutionary Rise of Bio-fuels: Powering a Sustainable and reliable Energy Future",
    author: "Dr. Michael Rodriguez",
    date: "March 15, 2024",
    readTime: "8 min read",
    views: "3.2k",
    likes: 245,
    comments: 34,
    category: "Bio-fuel",
    tags: ["Renewable Energy", "Bio-diesel", "Sustainability", "Green Technology"],
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=400&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "The global energy landscape is undergoing a transformative shift as bio-fuels emerge as a cornerstone of sustainable energy solutions. From agricultural waste to algae cultivation, bio-fuel technologies are revolutionizing how we approach energy production while addressing climate change concerns."
      },
      {
        type: "heading",
        text: "Next-Generation Bio-fuel Production"
      },
      {
        type: "paragraph",
        text: "Advanced bio-fuel production techniques are breaking new ground in efficiency and sustainability. Second and third-generation bio-fuels derived from non-food biomass sources are showing remarkable promise in reducing carbon footprints while maintaining energy density comparable to traditional fossil fuels."
      },
      {
        type: "quote",
        text: "The future of transportation lies in the seamless integration of bio-fuel technologies with existing infrastructure."
      },
      {
        type: "heading",
        text: "Market Dynamics and Economic Impact"
      },
      {
        type: "paragraph",
        text: "The bio-fuel market is experiencing unprecedented growth, driven by supportive government policies, technological breakthroughs, and increasing corporate commitments to carbon neutrality. Investment in bio-fuel infrastructure is creating new economic opportunities while reducing dependency on fossil fuel imports."
      }
    ]
  };

  const relatedPosts = [
    {
      title: "Algae Bio-fuel: The Ocean's Green Gold",
      image: "images/blog4.jpg",
      readTime: "6 min read"
    },
    {
      title: "From Waste to Energy: Agricultural Biomass Solutions",
      image: "images/blog9.jpg",
      readTime: "10 min read"
    },
    {
      title: "Bio-diesel Production: Commercial Scale Opportunities",
      image: "images/blog11.jpg",
      readTime: "7 min read"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setReadingProgress(scrollPercent);
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogData.title,
          text: 'Check out this amazing blog post!',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Reading Progress Bar */}
      {/* <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div> */}

   

      {/* Main Content */}
      <article className="max-w-5xl mx-auto px-4 py-8 mt-12">
        {/* Header */}
        <header className="mb-8">
          

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {blogData.title}
          </h1>
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
              {blogData.category}
            </span>
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{blogData.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{blogData.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{blogData.views}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{blogData.author}</div>
                <div className="text-gray-500 text-sm">Bio-fuel Research Scientist</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-500">
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>{blogData.comments}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-8 group">
            <img 
              src={blogData.image} 
              alt={blogData.title}
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {blogData.content.map((section, index) => (
            <div key={index} className="mb-6">
              {section.type === 'paragraph' && (
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {section.text}
                </p>
              )}
              {section.type === 'heading' && (
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {section.text}
                </h2>
              )}
              {section.type === 'quote' && (
                <blockquote className="border-l-4 border-green-500 pl-6 py-4 my-8 bg-green-50 rounded-r-lg">
                  <p className="text-lg italic text-gray-700 mb-0">
                    "{section.text}"
                  </p>
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200">
          {blogData.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Related Posts */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Comments Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Comments ({blogData.comments})</h2>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <textarea 
                placeholder="Share your thoughts on bio-fuel innovations..."
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                rows="4"
              />
              <div className="flex justify-end mt-4">
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default BlogSingle;