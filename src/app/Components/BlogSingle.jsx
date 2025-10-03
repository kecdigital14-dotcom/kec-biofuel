import React, { useState, useEffect } from 'react';
import { Heart, Share2, Clock, Calendar, User, MessageCircle, Eye, ChevronUp, Bookmark, ArrowRight } from 'lucide-react';

const BlogSingle = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const blogData = {
    title: "CBG Plants: A Sustainable Solution to India's Farm Waste Crisis",
    author: "KEC Agritech",
    authorBio: "Leading sustainable energy solutions across India",
    date: "October 3, 2025",
    readTime: "7 min read",
    views: "1.1k",
    likes: 120,
    comments: 18,
    category: "Sustainability",
    tags: ["CBG", "Renewable Energy", "Farm Waste", "Green Economy", "Sustainable Farming"],
    featuredImage: "images/blog20.jpg",

    content: `
      Every year, India generates millions of tonnes of agricultural residue, including paddy straw, wheat stalks, and sugarcane trash. In the absence of proper waste management systems, farmers often burn this residue in fields—a practice known as stubble burning.
      
      This not only contributes heavily to air pollution and smog in states like Punjab, Haryana, and Delhi but also destroys vital organic matter that enriches the soil. Alongside stubble, animal dung and other organic farm residues often remain underutilized, creating sanitation issues and missed opportunities for farmers to earn additional income.
    `,

    sections: [
      {
        heading: "CBG Technology: Turning Waste into Wealth",
        content: "Compressed Biogas (CBG) technology is emerging as a breakthrough solution by converting agricultural waste, dung, and organic matter into multiple high-value outputs. Through anaerobic digestion, CBG plants transform waste into energy and eco-friendly byproducts that can replace polluting fuels and synthetic chemicals.",
        points: [
          "Compressed Biogas (CBG): A clean, renewable fuel that can replace CNG in vehicles",
          "Organic Fertilizer: A nutrient-rich byproduct that restores soil health",
          "Carbon Credits: Additional income through carbon markets"
        ],
        image: "images/blog4.jpg"
      },
      {
        heading: "Why CBG Over Traditional Energy Sources?",
        content: "Unlike coal, petrol, or diesel that are depleting finite natural resources, CBG is renewable, sustainable, and produced domestically from readily available biomass. It reduces India's dependence on costly energy imports—currently over 80% of crude oil—and strengthens the country's energy security. Moreover, CBG aligns perfectly with India's climate goals, particularly the net-zero emissions target by 2070.",
        image: "images/blog9.jpg"
      },
      {
        heading: "Empowering Farmers & Rural Economies",
        content: "Farmers stand at the heart of the CBG revolution. By selling their agricultural residue to CBG plants instead of burning it, farmers unlock new income streams. This not only compensates them fairly for their biomass but also prevents pollution and improves soil fertility through access to organic manure.",
        highlight: "Rural economies benefit in several ways: jobs are created in biomass collection, storage, and transportation; youth gain employment in plant operations; and women-led self-help groups participate in distributing organic fertilizers.",
        image: "images/blog11.jpg"
      },
      {
        heading: "The CBG Parks Model",
        content: "At KEC Agritech, we are driving the idea of 'CBG Parks'—cluster-based projects where multiple CBG units function with shared infrastructure for feedstock collection, storage, and distribution. This plug-and-play model reduces operational costs, encourages investor participation, and ensures that farmers have easy access to processing facilities. By integrating collection centers with logistics hubs, the CBG Parks model makes the entire system profitable and scalable."
      },
      {
        heading: "Environmental Benefits of CBG",
        content: "The environmental benefits of CBG are transformative. Every ton of biomass diverted to CBG plants prevents methane emissions from cattle dung and avoids the harmful effects of stubble burning. The use of organic bio-manure improves soil structure, reduces chemical load, and enhances crop productivity. Cleaner air, better soil, and healthier rural sanitation all contribute to long-term sustainable development."
      }
    ]
  };

  const relatedPosts = [
    {
      title: "Algae Bio-fuel: The Ocean's Green Gold",
      image: "images/blog4.jpg",
      readTime: "6 min read",
      excerpt: "Exploring the potential of algae as a sustainable biofuel source"
    },
    {
      title: "Agricultural Biomass Solutions",
      image: "images/blog9.jpg",
      readTime: "10 min read",
      excerpt: "Converting farm waste into valuable energy resources"
    },
    {
      title: "Bio-diesel Production at Scale",
      image: "images/blog11.jpg",
      readTime: "7 min read",
      excerpt: "Commercial opportunities in bio-diesel manufacturing"
    }
  ];

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
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-green-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Header */}
      <div className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-400 backdrop-blur-xl text-gray-800 overflow-hidden ">
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
        <div className="relative max-w-7xl mx-auto px-6 py-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[82%] mx-auto">
            <div>
              <div className="">
                <span className="inline-block px-4 py-1 bg-green-600 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                  {blogData.category}
                </span>
              </div>
              {/* <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight text-3xl sm:text-4xl font-bold text-gray-800 mb-4.">
                {blogData.title}
              </h1> */},
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
                CBG Plants: A Sustainable Solution 
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> to India's Farm Waste Crisis</span>
              </h2>
              <div className="flex flex-wrap items-center gap-6 text-,">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">{blogData.author}</div>
                    <div className="text-sm opacity-80">{blogData.authorBio}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{blogData.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{blogData.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{blogData.views}</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={blogData.featuredImage}
                  alt={blogData.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Actions Bar */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-40 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isLiked ? 'bg-red-50 text-red-600' : 'hover:bg-gray-100 text-gray-700'
                  }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span className="font-medium">{isLiked ? blogData.likes + 1 : blogData.likes}</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700 transition-all">
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">{blogData.comments}</span>
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

      {/* Article Content */}
      <article className="max-w-5xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-gray-700 leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-green-600 first-letter:mr-3 first-letter:float-left">
            {blogData.content}
          </p>
        </div>

        {/* Sections with Images */}
        {blogData.sections.map((section, index) => (
          <div key={index} className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {section.heading}
            </h2>

            {section.image && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            )}

            <p className="text-[17.5px] text-gray-700 leading-relaxed mb-6">
              {section.content}
            </p>

            {section.points && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 mb-6">
                <ul className="space-y-4">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.highlight && (
              <div className="border-l-4 border-green-600 bg-green-50 p-6 rounded-r-xl my-6">
                <p className="text-lg text-gray-800 italic">
                  {section.highlight}
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Final Quote */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-10 my-16">
          <p className="text-2xl font-medium text-center">
            "CBG is not just a renewable fuel; it is a complete ecosystem that transforms waste into wealth, empowers farmers, and provides India with a cleaner energy future. 🌱💰"
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 pt-8 border-t border-gray-200">
          {blogData.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Comments Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Join the Discussion ({blogData.comments})
          </h2>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <textarea
                  placeholder="What are your thoughts on CBG technology?"
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

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Continue Reading</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <article
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
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