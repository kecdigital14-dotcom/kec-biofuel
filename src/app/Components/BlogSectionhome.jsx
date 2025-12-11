import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';
import { blogData  } from "../data/blogData";

const BlogSection = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      Innovation: "bg-green-100 text-green-800",
      Technology: "bg-blue-100 text-blue-800",
      Industry: "bg-orange-100 text-orange-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 space-y-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
           <h2 className="text-3xl lg:text-[42px] font-bold text-green-800 leading-tight text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text animate-pulse">
                Latest <span className="text-green-600">Biofuel Insights
                  </span>
              </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Stay updated with cutting-edge research, innovations, and industry developments in sustainable biofuel technology
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <article 
              key={post.id} 
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 animate-fade-in">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)} backdrop-blur-sm transition-all duration-300 group-hover:scale-110`}>
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-all duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 mb-4 line-clamp-3 text-justify font-sans text-[15px] transition-colors duration-300 group-hover:text-gray-700">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 transition-all duration-300">
                  <div className="flex items-center space-x-2 group-hover:text-green-600 transition-colors duration-300">
                    <User className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 group-hover:text-green-600 transition-colors duration-300">
                    <Clock className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 group-hover:text-green-600 transition-colors duration-300">
                    <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{post.date}</span>
                  </div>
                  
                  <div className="flex items-center text-green-600 font-medium">
                    {/* <span className="mr-1">Read More</span> */}
                      <a 
                                                  // href={`/blogsingle/${post.id}`}
                                                  href={`/blog`}
                    
                                                  className="flex items-center text-white font-medium font-sans transition-all duration-300 bg-green-700 hover:bg-green-400 hover:shadow-lg px-3 py-1 rounded-lg group-hover:translate-x-2 hover:scale-105"
                                                >
                                                  <span className="mr-1">Read More</span>
                                                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link href="/blog">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:rotate-1 active:scale-95">
            View All Posts
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;