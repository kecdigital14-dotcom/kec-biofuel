"use client";
import React, { useState } from 'react';

const Home3rdsection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      icon: "💯",
      title: "High Purity Output",
      description: "Our process ensures top-grade Bio-CNG, Bio-Diesel, and Ethanol with consistent calorific value and purity.",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 1,
      icon: "🔁",
      title: "Sustainable Process",
      description: "Leveraging waste-to-energy tech that minimizes emissions and supports circular economy goals.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      id: 2,
      icon: "🌍",
      title: "Nationwide Scalability",
      description: "74+ PMC, EPC, Technology Transfer, Operation & Maintenance. Launch First CBG Park, Bulandhshar in 2025 & Plant to Establishing 15 CBG Park till 2026-27. 150+ CBG Plant Under CBG Park till 2026-27.",
      color: "from-teal-400 to-green-500"
    },
    {
      id: 3,
      icon: "👷",
      title: "Farmer & Industry Friendly",
      description: "Enables rural empowerment through agri-waste buyback, local job creation & PPP-led development.",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="relative py-6 sm:py-10 bg-gradient-to-br from-green-50 via-green-100 to-green-400 overflow-hidden font-sans">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-6 w-24 h-24 sm:w-32 sm:h-32 bg-green-200/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-6 w-32 h-32 sm:w-48 sm:h-48 bg-emerald-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm border border-green-100 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold text-xs sm:text-sm tracking-wider uppercase">Our Features</span>
            <div className="w-6 sm:w-8 h-px bg-green-300"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2">
            Key Features of KEC Bio-Fuel
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
            Powering a Green Revolution through innovative sustainable energy solutions
          </p>
        </div>

        {/* Main Features */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-6 items-center">
            
            {/* Left Features */}
            <div className="space-y-6 sm:space-y-8">
              {features.slice(0, 2).map((feature) => (
                <div
                  key={feature.id}
                  className={`group cursor-pointer transition-all duration-500 ${activeFeature === feature.id ? 'scale-105' : 'hover:scale-102'
                    }`}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                >
                  <div className={`relative bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border transition-all duration-300 ${activeFeature === feature.id
                    ? 'border-green-300 shadow-xl bg-white/90'
                    : 'border-gray-100 hover:border-green-200'
                    }`}>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-300 ${activeFeature === feature.id ? 'scale-110 rotate-3' : 'group-hover:scale-105'
                        }`}>
                        <span className="text-xl sm:text-2xl">{feature.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-base sm:text-lg font-bold mb-2 transition-colors duration-300 ${activeFeature === feature.id ? 'text-green-700' : 'text-gray-900 group-hover:text-green-600'
                          }`}>
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Video */}
            <div className="relative flex justify-center my-6 md:my-0">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-teal-400/20 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative bg-white/60 backdrop-blur-sm px-2 rounded-2xl sm:rounded-3xl shadow-xl border border-green-100/50">
                  <video
                    src="/images/home-section-two.mp4"
                    aria-label="Bio-Fuel Illustration"
                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-contain transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg text-xs sm:text-sm font-semibold">
                  225+ Plants Target till 2026-2027
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-6 sm:space-y-8">
              {features.slice(2, 4).map((feature) => (
                <div
                  key={feature.id}
                  className={`group cursor-pointer transition-all duration-500 ${activeFeature === feature.id ? 'scale-105' : 'hover:scale-102'
                    }`}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                >
                  <div className={`relative bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border transition-all duration-300 ${activeFeature === feature.id
                    ? 'border-green-300 shadow-xl bg-white/90'
                    : 'border-gray-100 hover:border-green-200'
                    }`}>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <span className="text-xl sm:text-2xl">{feature.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-base sm:text-lg font-bold mb-2 transition-colors duration-300 ${activeFeature === feature.id ? 'text-green-700' : 'text-gray-900 group-hover:text-green-600'
                          }`}>
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border border-green-100">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">🚀 Technology</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
              Our technology efficiently transforms biomass into valuable biofuels and sustainable energy sources like Bio-CBG, Bio-Diesel, Ethanol, Hydrogen, and Green Ammonia through advanced fermentation, gasification, and purification systems...
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border border-green-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-green-700 mb-1">74+</div>
              <div className="text-xs sm:text-sm text-gray-600">EPC, PMC, Tech Transfer</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-green-700 mb-1">1154+</div>
              <div className="text-xs sm:text-sm text-gray-600">CBG Plant Order Book</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-green-700 mb-1">16+</div>
              <div className="text-xs sm:text-sm text-gray-600">States Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-green-700 mb-1">2026-2027</div>
              <div className="text-xs sm:text-sm text-gray-600">Target Timeline</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3rdsection;
