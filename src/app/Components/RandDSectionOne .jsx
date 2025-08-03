import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Beaker, Leaf, Factory, Zap, BarChart3, Settings } from 'lucide-react';

const RandDSectionOne = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const feedstocks = [
    {
      name: "Napier Grass",
      icon: <Leaf className="w-6 h-6" />,
      description: "High-yield, fast-growing energy crop with superior biogas potential",
      color: "bg-gradient-to-br from-green-400 to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100"
    },
    {
      name: "Press Mud",
      icon: <Factory className="w-6 h-6" />,
      description: "Sugar industry by-product rich in organic matter for anaerobic digestion",
      color: "bg-gradient-to-br from-amber-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100"
    },
    {
      name: "Cow Dung",
      icon: <Leaf className="w-6 h-6" />,
      description: "Traditional biomass source enhancing microbial activity",
      color: "bg-gradient-to-br from-emerald-400 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-100"
    },
    {
      name: "Mother Liquor",
      icon: <Beaker className="w-6 h-6" />,
      description: "Nutrient-rich residual liquid supporting microbial balance",
      color: "bg-gradient-to-br from-cyan-400 to-blue-500",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-100"
    },
    {
      name: "DAF Sludge",
      icon: <Factory className="w-6 h-6" />,
      description: "Organic-rich industrial residue contributing to higher gas yields",
      color: "bg-gradient-to-br from-purple-400 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-800 via-emerald-700 to-teal-800">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-teal-900/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              KEC AGRITECH PVT. LTD.
            </h1>
            <p className="text-xl text-green-100 mb-4 font-semibold">
              R&D BULANDSHAHR / KEC TECHNICAL
            </p>
            <p className="text-lg text-emerald-200 mb-8">
              July 22, 2025 - Biogas Research & Development Report
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-green-400 to-emerald-500 backdrop-blur-sm rounded-full px-8 py-4 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Zap className="w-5 h-5 mr-2" />
              Sustainable Innovation in Biomass-to-Biogas Conversion
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-2">
            Research & Development Facility
          </h2>
          <p className="text-base font-sans text-gray-500 max-w-4xl mx-auto leading-relaxed">
            KEC Agritech proudly operates its state-of-the-art R&D facility in Bulandshahar, Uttar Pradesh, 
            dedicated to advancing sustainable and innovative solutions in renewable energy through 
            Compressed Biogas (CBG) production.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Beaker className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Advanced Research</h3>
            <p className="text-gray-500 font-sans">
              Modern bioreactors, gas upgrading systems, and analytical labs for thorough 
              evaluation of gas quality and process efficiencies.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200">
            <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Circular Economy</h3>
            <p className="text-gray-500 font-sans">
              Converting organic waste into renewable energy and biofertilizers, 
              promoting waste-to-wealth conversion technologies.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-200">
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Energy Self-Reliance</h3>
            <p className="text-gray-500 font-sans">
              Establishing scalable models for clean energy generation and contributing 
              to India's mission of sustainable energy and waste management.
            </p>
          </div>
        </div>

        {/* Multi-Feedstock Section */}
        <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-8 border border-green-100">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-8 text-center">
            Multi-Feedstock Approach
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedstocks.map((feedstock, index) => (
              <div 
                key={index}
                className={`${feedstock.bgColor} border-2 border-opacity-30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105`}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className="flex items-center mb-4">
                  <div className={`${feedstock.color} w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 shadow-md`}>
                    {feedstock.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">{feedstock.name}</h4>
                  </div>
                  <div className="ml-2">
                    {expandedCard === index ? 
                      <ChevronDown className="w-5 h-5 text-gray-600" /> : 
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    }
                  </div>
                </div>
                {expandedCard === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 border-opacity-50">
                    <p className="text-gray-500 text-sm leading-relaxed font-medium font-sans">
                      {feedstock.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-20 blur-xl"></div>
      <div className="fixed bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-teal-200 to-green-300 rounded-full opacity-20 blur-xl"></div>
    </div>
  );
};

export default RandDSectionOne;