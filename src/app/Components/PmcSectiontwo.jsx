import React from 'react';

const PmcSectionTwo = () => {
  const images = [
    {
      id: 1,
      src: "/images/pmc5.jpg",
      alt: "Wind Power Generation",
      category: "Wind Energy"
    },
    {
      id: 2,
      src: "/images/pmc6.jpg",
      alt: "Clean Energy Innovation",
      category: "Innovation"
    },
    {
      id: 3,
      src: "/images/pmc7.jpg",
      alt: "Solar Panel Installation",
      category: "Solar Power"
    },
    {
      id: 4,
      src: "/images/pmc8.jpg",
      alt: "Sustainable Energy Landscape",
      category: "Sustainability"
    }
  ];

  const benefits = [
    { icon: "♻️", title: "Sustainable", desc: "Clean & Renewable" },
    { icon: "💚", title: "Eco-Friendly", desc: "Zero Emissions" },
    { icon: "⚡", title: "Efficient", desc: "High Performance" },
    { icon: "🌱", title: "Future-Ready", desc: "Next Generation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 right-20 text-4xl animate-bounce delay-300">🌿</div>
        <div className="absolute bottom-32 left-16 text-3xl animate-bounce delay-700">⚡</div>
        <div className="absolute top-1/2 right-8 text-2xl animate-bounce delay-1000">🌍</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Section - Image Gallery */}
          <div className="relative">
            {/* Main Grid Container */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:rotate-1 ${
                    index % 2 === 0 ? 'mt-0' : 'mt-8 lg:mt-12'
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-44 sm:h-52 lg:h-56 object-cover group-hover:scale-125 transition-transform duration-1000"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Green Accent Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/30 group-hover:to-emerald-500/20 transition-all duration-500"></div>
                  </div>
                  
                  {/* Category Label */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                      <p className="text-sm font-semibold text-gray-800">{image.category}</p>
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              ))}
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-xs text-gray-600">Clean Energy</div>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="space-y-8 lg:pl-8">
            
            {/* Header Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-green-100/50 backdrop-blur-sm rounded-full px-4 py-2 border border-green-200/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 text-sm font-medium tracking-wide">SUSTAINABLE SOLUTIONS</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  Renewable Energy
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
              
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Renewable energy refers to energy sources that can be replenished naturally and are not depleted after use. 
                These sources include <span className="text-green-600 font-semibold">solar energy</span>, <span className="text-green-600 font-semibold">wind power</span>, 
                <span className="text-green-600 font-semibold"> hydroelectric power</span>, <span className="text-green-600 font-semibold">geothermal energy</span>, and <span className="text-green-600 font-semibold">biomass</span>. 
                Renewable energy is considered to be a sustainable and clean alternative to traditional fossil fuels, as it 
                produces fewer greenhouse gas emissions and helps mitigate climate change.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:bg-white/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{benefit.title}</h3>
                      <p className="text-xs text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-white font-semibold bg-gradient-to-r from-green-500 to-emerald-600 rounded-full hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span>Explore Solutions</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 text-green-700 font-semibold bg-white/60 backdrop-blur-sm border-2 border-green-200 rounded-full hover:bg-green-50 hover:border-green-300 transition-all duration-300">
                <svg className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PmcSectionTwo;