import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Algae-Based Biofuels: The Next Generation of Clean Energy",
      excerpt: "Exploring how microalgae cultivation is revolutionizing sustainable fuel production with higher yields and lower environmental impact than traditional crops.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Dr. Sarah Mitchell",
      date: "March 15, 2025",
      readTime: "6 min read",
      category: "Innovation"
    },
    {
      id: 2,
      title: "From Waste to Energy: Converting Agricultural Residues into Biofuel",
      excerpt: "Learn how agricultural waste like corn stalks, wheat straw, and rice husks are being transformed into sustainable biofuels through advanced processing technologies.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Dr. Marcus Chen",
      date: "March 12, 2025",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "Biodiesel Production: Scaling Up for Commercial Success",
      excerpt: "Discover the latest developments in biodiesel manufacturing, from feedstock optimization to advanced refining processes that make biofuels commercially viable.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Dr. Elena Rodriguez",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Industry"
    }
  ];

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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-green-600">Biofuel</span> Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with cutting-edge research, innovations, and industry developments in sustainable biofuel technology
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  
                  <div className="flex items-center text-green-600 font-medium group-hover:translate-x-1 transition-transform duration-200">
                    <span className="mr-1">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;