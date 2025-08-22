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
      description: "34+ EPC contracts across India and planned expansion to over 100 CBG plants by FY 2026.",
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
    <section className="relative py-4 bg-gradient-to-br from-green-50 via-green-100 to-green-400 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-emerald-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-green-100 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold text-sm tracking-wider uppercase">Our Features</span>
            <div className="w-8 h-px bg-green-300"></div>
          </div>

          <h2 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-1">
            Key Features of KEC Bio-Fuel
            <br />
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Powering a Green Revolution through innovative sustainable energy solutions
          </p>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-18 items-center">

            {/* Left Features */}
            <div className="space-y-8">
              {features.slice(0, 2).map((feature, index) => (
                <div
                  key={feature.id}
                  className={`group cursor-pointer transition-all duration-500 ${activeFeature === feature.id ? 'scale-105' : 'hover:scale-102'
                    }`}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                >
                  <div className={`relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border transition-all duration-300 ${activeFeature === feature.id
                    ? 'border-green-300 shadow-xl bg-white/90'
                    : 'border-gray-100 hover:border-green-200'
                    }`}>
                    <div className="flex items-start space-x-4">
                      <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-300 ${activeFeature === feature.id ? 'scale-110 rotate-3' : 'group-hover:scale-105'
                        }`}>
                        <span className="text-2xl">{feature.icon}</span>
                        {activeFeature === feature.id && (
                          <div className="absolute -inset-2 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-2xl blur-lg animate-pulse"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${activeFeature === feature.id ? 'text-green-700' : 'text-gray-900 group-hover:text-green-600'
                          }`}>
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {activeFeature === feature.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Central Image */}
            <div className="relative flex justify-center">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-teal-400/20 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Main image container */}
                <div className="relative bg-white/60 backdrop-blur-sm px-2 rounded-3xl shadow-xl border border-green-100/50">
                  {/* <img 
                    src="/images/home3ndsection.png"  
                    alt="Bio-Fuel Illustration" 
                    className="w-full max-w-md h-[270px] object-contain transform transition-transform duration-700 group-hover:scale-105"
                  /> */}
                  <video
                    src="/images/home-section-two.mp4"
                    alt="Bio-Fuel Illustration" // not valid for <video>, so use aria-label instead
                    aria-label="Bio-Fuel Illustration"
                    className="max-w-md h-[350px] object-contain transform transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />


                  {/* Floating indicators */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-500"></div>
                </div>

                {/* Stats overlay */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg">
                  <div className="text-center">
                    <div className="text-sm font-semibold">100+ Plants Target</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-8">
              {features.slice(2, 4).map((feature, index) => (
                <div
                  key={feature.id}
                  className={`group cursor-pointer transition-all duration-500 ${activeFeature === feature.id ? 'scale-105' : 'hover:scale-102'
                    }`}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                >
                  <div className={`relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border transition-all duration-300 ${activeFeature === feature.id
                    ? 'border-green-300 shadow-xl bg-white/90'
                    : 'border-gray-100 hover:border-green-200'
                    }`}>
                    <div className="flex items-start space-x-4">
                      <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-300 ${activeFeature === feature.id ? 'scale-110 rotate-3' : 'group-hover:scale-105'
                        }`}>
                        <span className="text-2xl">{feature.icon}</span>
                        {activeFeature === feature.id && (
                          <div className="absolute -inset-2 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-2xl blur-lg animate-pulse"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${activeFeature === feature.id ? 'text-green-700' : 'text-gray-900 group-hover:text-green-600'
                          }`}>
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed font-sans text-justify">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {activeFeature === feature.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-green-100">
          <div className=" gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">🚀 Technology</div>
              <div className="text-[15px] text-gray-600 font-sans">Advanced fermentation, gasification, and purification systems ensure efficient conversion of biomass into high-quality Bio-CBG, Bio-Diesel, and Ethanol with optimized yield and lower operating costs.
Continuous R&D integration drives innovation, efficiency, and scalability in sustainable energy production.</div>
            </div>

          </div>
        </div>
        {/* Bottom Stats Section */}
        <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-green-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">100+</div>
              <div className="text-sm text-gray-600 font-sans">EPC & PMC Contracts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">10000+</div>
              <div className="text-sm text-gray-600 font-sans">CBG Plants Target</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">30+</div>
              <div className="text-sm text-gray-600 font-sans">States Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">2025-26</div>
              <div className="text-sm text-gray-600 font-sans">Target Timeline</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3rdsection;