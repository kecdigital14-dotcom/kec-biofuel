import React, { useState, useMemo } from 'react';
import { Calendar, Clock, User, ArrowRight, Eye, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const postsPerPage = 6;

  // Sample blog posts data
  const blogPosts = [
    // INNOVATION
    {
      id: 1,
      title: "Algae-Based Biofuels: Revolutionizing Renewable Energy",
      excerpt: "Discover how algae cultivation is reshaping the biofuel sector by offering higher yields and eco-friendly production methods.",
      content: "Algae, as a next-gen feedstock, enables efficient biofuel production with minimal environmental impact...",
      image: "images/blog20.jpg",
      author: "Dr. Sarah Mitchell",
      date: "2025-03-15",
      readTime: "6 min read",
      category: "Innovation",
      views: 2340,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: "AI Integration in Biofuel Processing",
      excerpt: "Artificial Intelligence is redefining efficiency in biofuel plants through data-driven production strategies.",
      content: "Machine learning algorithms help optimize fermentation and processing, minimizing waste and enhancing yields...",
      image: "images/blog2.jpg",
      author: "Dr. Marcus Chen",
      date: "2025-03-18",
      readTime: "5 min read",
      category: "Innovation",
      views: 1780,
      likes: 64,
      featured: false
    },
    {
      id: 3,
      title: "Innovative Feedstocks Driving Green Energy",
      excerpt: "Exploring seaweed, duckweed, and industrial oils as next-gen biofuel sources for a sustainable future.",
      content: "Alternative feedstocks diversify biofuel production, reducing dependency on traditional crops and enhancing sustainability...",
      image: "images/blog12.jpg",
      author: "Dr. Elena Rodriguez",
      date: "2025-03-20",
      readTime: "7 min read",
      category: "Innovation",
      views: 2000,
      likes: 78,
      featured: false
    },
    // TECHNOLOGY
    {
      id: 5,
      title: "Smart Sensors Revolutionizing Refinery Monitoring",
      excerpt: "IoT sensors provide real-time insights to optimize production stages in modern biofuel refineries.",
      content: "Advanced sensors monitor temperature, pressure, and flow to ensure consistent fuel quality and process optimization...",
      image: "images/blog5.jpg",
      author: "Dr. Olivia Park",
      date: "2025-03-17",
      readTime: "6 min read",
      category: "Technology",
      views: 1540,
      likes: 59,
      featured: false
    },
    {
      id: 6,
      title: "Automation Driving Efficiency in Biofuel Plants",
      excerpt: "Robotics and automated systems streamline refining, reducing costs and enhancing productivity.",
      content: "Industry 4.0 tools automate feedstock handling, fermentation monitoring, and packaging operations in modern biofuel industries...",
      image: "images/blog22.avif",
      author: "Dr. Alex Turner",
      date: "2025-03-19",
      readTime: "7 min read",
      category: "Technology",
      views: 2100,
      likes: 82,
      featured: false
    },
    // INDUSTRY
    {
      id: 7,
      title: "Scaling Biodiesel: Commercial Strategies for Growth",
      excerpt: "Understand how innovative refining processes make large-scale biodiesel production viable globally.",
      content: "From microalgae-based biodiesel to waste oil conversion, learn strategies that help scale up operations for commercial markets...",
      image: "images/blog7.jpg",
      author: "Dr. Elena Rodriguez",
      date: "2025-03-10",
      readTime: "7 min read",
      category: "Industry",
      views: 2150,
      likes: 103,
      featured: true
    },
    {
      id: 8,
      title: "Overcoming Infrastructure Challenges in Biofuel Distribution",
      excerpt: "Addressing storage, transport, and regulatory hurdles to scale global biofuel adoption.",
      content: "Developing robust pipelines, storage solutions, and transport networks is critical for commercializing biofuels worldwide...",
      image: "images/blog8.jpg",
      author: "Dr. Priya Nair",
      date: "2025-03-11",
      readTime: "9 min read",
      category: "Industry",
      views: 1850,
      likes: 97,
      featured: false
    },
    {
      id: 9,
      title: "Building Global Supply Chains for Biofuel Export",
      excerpt: "Learn how international logistics networks support global biofuel commerce.",
      content: "From port facilities to intermodal transport, strategic infrastructure is key to scaling biofuel exports...",
      image: "images/blog9.jpg",
      author: "Dr. Priya Nair",
      date: "2025-03-06",
      readTime: "9 min read",
      category: "Industry",
      views: 1750,
      likes: 92,
      featured: false
    },
    // POLICY
    {
      id: 10,
      title: "Decoding Biofuel Regulations Across Borders",
      excerpt: "Understand how regional and international regulations shape the biofuel sector's growth.",
      content: "From emission standards to tax incentives, government policies directly impact the pace and direction of biofuel adoption...",
      image: "images/blog10.jpg",
      author: "Dr. Robert Kim",
      date: "2025-02-28",
      readTime: "6 min read",
      category: "Policy",
      views: 2100,
      likes: 87,
      featured: false
    },
    {
      id: 11,
      title: "How Government Incentives Boost Renewable Energy Adoption",
      excerpt: "A look into global grants, subsidies, and fiscal policies supporting biofuel initiatives.",
      content: "Tax credits, green energy subsidies, and low-interest loans are fueling biofuel projects globally...",
      image: "images/blog11.jpg",
      author: "Dr. James Wilson",
      date: "2025-02-25",
      readTime: "7 min read",
      category: "Policy",
      views: 1900,
      likes: 74,
      featured: false
    },
    // SUSTAINABILITY
    {
      id: 13,
      title: "Aviation's Green Revolution: Biofuels in Air Travel",
      excerpt: "Biofuels are powering sustainable aviation, reducing reliance on conventional jet fuels.",
      content: "Airlines are turning to bio-based jet fuels to lower emissions and meet international climate goals...",
      image: "images/blog13.jpg",
      author: "Dr. James Wilson",
      date: "2025-03-08",
      readTime: "9 min read",
      category: "Sustainability",
      views: 3200,
      likes: 156,
      featured: false
    },
    {
      id: 14,
      title: "Circular Economy Solutions via Biofuel Production",
      excerpt: "Turning industrial waste and biomass into valuable fuel is central to sustainable resource management.",
      content: "Biofuel technologies are closing the loop in resource utilization by converting waste into energy...",
      image: "images/blog14.jpg",
      author: "Dr. Olivia Park",
      date: "2025-03-05",
      readTime: "7 min read",
      category: "Sustainability",
      views: 1950,
      likes: 80,
      featured: false
    },
    {
      id: 15,
      title: "Biofuels: A Tool for Carbon Neutrality",
      excerpt: "Explore how biofuels contribute to emission reduction strategies across industries.",
      content: "By replacing fossil fuels, biofuels help industries achieve net-zero targets and mitigate climate change impacts...",
      image: "images/blog15.jpg",
      author: "Dr. Sarah Mitchell",
      date: "2025-03-09",
      readTime: "8 min read",
      category: "Sustainability",
      views: 2500,
      likes: 110,
      featured: false
    },
    // EXTRA
    {
      id: 16,
      title: "Emerging Markets for Biofuel Innovations",
      excerpt: "Countries across Asia and Africa are fast becoming hubs for biofuel innovation and production.",
      content: "Expanding production facilities and supportive policies in emerging economies are accelerating biofuel adoption...",
      image: "images/blog16.jpg",
      author: "Dr. Marcus Chen",
      date: "2025-03-21",
      readTime: "7 min read",
      category: "Innovation",
      views: 1400,
      likes: 58,
      featured: false
    },
    {
      id: 17,
      title: "Energy Security through Domestic Biofuel Production",
      excerpt: "Producing biofuels domestically can reduce dependence on imported fossil fuels and enhance national energy security.",
      content: "Strategic investments in local biofuel industries help stabilize energy supplies while boosting green initiatives...",
      image: "images/blog17.jpg",
      author: "Dr. Ahmed Hassan",
      date: "2025-03-22",
      readTime: "6 min read",
      category: "Policy",
      views: 1700,
      likes: 77,
      featured: false
    },
    {
      id: 18,
      title: "Blockchain in Biofuel Supply Chain Transparency",
      excerpt: "Digital ledger technology ensures traceability and authenticity across biofuel supply networks.",
      content: "Blockchain records transactions across the supply chain, enhancing transparency and combating fraud in biofuel trade...",
      image: "images/blog4.jpg",
      author: "Dr. Robert Kim",
      date: "2025-03-23",
      readTime: "7 min read",
      category: "Technology",
      views: 1650,
      likes: 63,
      featured: false
    },
    {
      id: 19,
      title: "Co-Processing Biofuels in Existing Refineries",
      excerpt: "Blending bio-components in traditional refineries provides a cost-effective pathway to green fuel production.",
      content: "Existing petroleum infrastructure can be adapted to produce biofuel blends, minimizing upfront investments...",
      image: "images/blog21.avif",
      author: "Dr. Alex Turner",
      date: "2025-03-24",
      readTime: "8 min read",
      category: "Industry",
      views: 1800,
      likes: 70,
      featured: false
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Innovation: "bg-green-100 text-green-800",
      Technology: "bg-blue-100 text-blue-800",
      Industry: "bg-orange-100 text-orange-800",
      Research: "bg-purple-100 text-purple-800",
      Policy: "bg-red-100 text-red-800",
      Sustainability: "bg-teal-100 text-teal-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const isNotFeatured = !post.featured;
      return matchesSearch && matchesCategory && isNotFeatured;
    });

    switch (sortBy) {
      case 'latest':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'popular':
        filtered.sort((a, b) => b.views - a.views);
        break;
      case 'mostLiked':
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const groupedPosts = useMemo(() => {
    const grouped = {};
    filteredAndSortedPosts.forEach(post => {
      if (!grouped[post.category]) {
        grouped[post.category] = [];
      }
      grouped[post.category].push(post);
    });
    return grouped;
  }, [filteredAndSortedPosts]);

  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredAndSortedPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-semibold text-center mb-8 text-green-800">Featured Articles</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, idx) => (
              <article key={post.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full ${idx === 0 ? 'lg:col-span-2' : ''}`}>
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow font-sans">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    <a 
                      // href={`/blogsingle/${post.id}`}
                      href={`/blogsingle`}
                      className="flex items-center text-white font-medium hover:translate-x-1 transition-transform duration-200 bg-green-700 hover:bg-green-500 px-3 py-1 rounded-lg"
                    >
                      <span className="mr-1">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Blog Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {selectedCategory === 'All' ? (
            Object.entries(groupedPosts).map(([category, posts]) => (
              <div key={category} className="mb-12">
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mr-4">{category}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
                    {posts.length} {posts.length === 1 ? 'Article' : 'Articles'}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1 flex flex-col h-full">
                      <div className="relative overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow font-sans">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.date)}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.views.toLocaleString()}</span>
                            </div>
                            {/* <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.date)}</span>
                            </div> */}
                          </div>
                          <div className="flex items-center space-x-2">
                            <a 
                              // href={`/blogsingle/${post.id}`}
                              href={`/blogsingle`}

                              className="flex items-center text-white font-medium font-sans hover:translate-x-1 transition-transform duration-200 bg-green-700 hover:bg-green-500 px-3 py-1 rounded-lg"
                            >
                              <span className="mr-1">Read More</span>
                              <ArrowRight className="w-4 h-4" />
                            </a>
                            <button 
                              onClick={() => handleLike(post.id)} 
                              className={`p-2 rounded-full transition-colors duration-200 ${likedPosts.has(post.id)
                                ? 'bg-red-100 text-red-600'
                                : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-600'}`}
                            >
                              <Heart className="w-4 h-4" fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />
                            </button>
                            {/* <button className="p-2 rounded-full bg-gray-100 text-gray-400 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">
                              <Share2 className="w-4 h-4" />
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">Filtered view applied.</p>
          )}

          {/* Pagination */}
          {totalPages > 1 && selectedCategory !== 'All' && (
            <div className="flex items-center justify-center space-x-2 mt-8">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                disabled={currentPage === 1} 
                className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button 
                  key={page} 
                  onClick={() => setCurrentPage(page)} 
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${currentPage === page
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'}`}
                >
                  {page}
                </button>
              ))}
              
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                disabled={currentPage === totalPages} 
                className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;