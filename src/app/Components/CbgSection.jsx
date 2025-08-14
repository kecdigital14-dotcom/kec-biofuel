import React from 'react';

const CbgSection = () => {
  const images = [
    {
      id: 1,
      src: "/images/cbg1.jpg",
      alt: "CBG Processing Facility",
      title: "Processing Unit",
      description: "Advanced biogas processing facility"
    },
    {
      id: 2,
      src: "/images/cbg2.jpg",
      alt: "Biogas Production Diagram",
      title: "Production Flow",
      description: "Efficient waste-to-energy conversion"
    },
    {
      id: 3,
      src: "/images/cbg3.jpg",
      alt: "CBG Distribution Center",
      title: "Distribution Hub",
      description: "Strategic fuel distribution network"
    },
    {
      id: 4,
      src: "/images/cbg4.jpg",
      alt: "Storage Infrastructure",
      title: "Storage Systems",
      description: "High-capacity biogas storage solutions"
    }
  ];

  const processSteps = [
    { step: "01", title: "Waste Collection", icon: "🗂️", color: "from-orange-400 to-red-500" },
    { step: "02", title: "Biogas Production", icon: "⚗️", color: "from-blue-400 to-indigo-500" },
    { step: "03", title: "Purification", icon: "🔬", color: "from-purple-400 to-pink-500" },
    { step: "04", title: "Distribution", icon: "🚛", color: "from-green-400 to-emerald-500" }
  ];

  const benefits = [
    "Waste-to-Energy Conversion",
    "Sustainable Business Model",
    "Market Residue Utilization",
    "Environmental Impact Reduction"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-green-200/30 rounded-2xl rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-blue-200/30 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-3 bg-green-100/80 backdrop-blur-sm rounded-full px-6 py-3 border border-green-200/50">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 text-sm font-bold tracking-wider uppercase">
              Innovative Solution
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              CBG PARK
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Section - Description */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Main Description Card */}
            <div className="bg-white/70 backdrop-blur-lg border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-xl">
                    🏭
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Platform Overview</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  A platform for <span className="text-green-600 font-bold">CBG unit entrepreneur</span>. 
                  It's unique business model for Cluster of CBG unit, is a purified form of biogas. 
                  It can be produced from waste including <span className="text-emerald-600 font-semibold">municipal solid waste, sludge 
                  from wastewater treatment plants, market residues, agricultural residues, cattle dung, 
                  sugarcane press mud</span> among others.
                </p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Key Benefits:</h4>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-3 bg-white/50 backdrop-blur-sm border border-green-200/50 rounded-xl p-4 hover:bg-white/80 hover:border-green-300 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-8 rounded-2xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
              <span>Explore CBG Solutions</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Section - Image Gallery */}
          <div className="lg:col-span-2">
            
            {/* Main Gallery */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 ${
                    index === 0 || index === 3 ? 'col-span-1' : 'col-span-1'
                  } ${index === 1 ? 'mt-8' : index === 2 ? 'mt-12' : 'mt-0'}`}
                >
                  {/* Main Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-1000 ${
                        index === 0 || index === 3 ? 'h-56' : 'h-48'
                      }`}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Tech Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/30 group-hover:to-emerald-500/20 transition-all duration-500"></div>
                  </div>
                  
                  {/* Info Card */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-white font-bold text-lg mb-1">{image.title}</h4>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                  
                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-green-500/80 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              ))}
            </div>

            {/* Process Flow Section */}
            <div className="bg-white/60 backdrop-blur-lg border border-white/50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">CBG Production Process</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {processSteps.map((process, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/50 backdrop-blur-sm border border-white/50 rounded-2xl p-6 text-center hover:bg-white/80 hover:shadow-lg transition-all duration-500 hover:-translate-y-3"
                  >
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      {process.step}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                      {process.icon}
                    </div>
                    
                    {/* Title */}
                    <h4 className="font-bold text-gray-800 text-sm">{process.title}</h4>
                    
                    {/* Connecting Arrow (except last item) */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-green-500 text-xl">
                        →
                      </div>
                    )}
                    
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${process.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          
          {/* Stat Card 1 */}
          <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-lg border border-green-200/50 rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">♻️</div>
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-700 font-semibold">Renewable Energy</div>
            <div className="mt-4 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full group-hover:animate-pulse"></div>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-lg border border-blue-200/50 rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏭</div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-700 font-semibold">CBG Units Planned</div>
            <div className="mt-4 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full group-hover:animate-pulse"></div>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-purple-200/50 rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌱</div>
            <div className="text-3xl font-bold text-purple-600 mb-2">Zero</div>
            <div className="text-gray-700 font-semibold">Carbon Footprint</div>
            <div className="mt-4 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full group-hover:animate-pulse"></div>
            </div>
          </div>
        </div>

    
      </div>

      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CbgSection;