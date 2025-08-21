import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Beaker, Leaf, Factory, Zap, BarChart3, Settings, } from 'lucide-react';

const RandDSectionOne = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const feedstocks = [
    // First row (indices 0-2)
    {
      name: "Napier Grass",
      icon: <Leaf className="w-6 h-6" />,
      description: "High-yield, fast-growing energy crop with superior biogas potential",
      color: "bg-gradient-to-br from-green-400 to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      row: 0
    },
    {
      name: "Press Mud",
      icon: <Factory className="w-6 h-6" />,
      description: "Sugar industry by-product rich in organic matter for anaerobic digestion",
      color: "bg-gradient-to-br from-amber-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
      row: 0
    },
    {
      name: "Cow Dung",
      icon: <Leaf className="w-6 h-6" />,
      description: "Traditional biomass source enhancing microbial activity",
      color: "bg-gradient-to-br from-emerald-400 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-100",
      row: 0
    },
    // Second row (indices 3-4)
    {
      name: "Mother Liquor",
      icon: <Beaker className="w-6 h-6" />,
      description: "Nutrient-rich residual liquid supporting microbial balance",
      color: "bg-gradient-to-br from-cyan-400 to-blue-500",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-100",
      row: 1
    },
    {
      name: "DAF Sludge",
      icon: <Factory className="w-6 h-6" />,
      description: "Organic-rich industrial residue contributing to higher gas yields",
      color: "bg-gradient-to-br from-purple-400 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-100",
      row: 1
    }
  ];

  const handleCardClick = (row) => {
    setExpandedRow(expandedRow === row ? null : row);
  };

  const isRowExpanded = (row) => expandedRow === row;

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


        <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-40 to-green-300 p-8 rounded-2xl">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-10">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-2">
                Our Core Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transforming waste into wealth through cutting-edge biotechnology and sustainable innovation
              </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              {/* Advanced Research Card */}
              <div className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src="images/randnew3.jpg"
                    alt="Advanced Research Laboratory"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

       
                </div>

                <div className="p-8 pt-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    Advanced Research
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] text-justify font-sans">
                    State-of-the-art bioreactors, precision gas upgrading systems, and world-class analytical laboratories delivering unprecedented insights into biogas optimization and process excellence.
                    Our facilities are designed to ensure maximum efficiency, reliability, and scalability for industrial applications.
                 
                  </p>


                  {/* Progress bar animation */}
                  <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>

              {/* Circular Economy Card */}
              <div className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src="images/randnew2.jpg"
                    alt="Circular Economy and Sustainability"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

               
                </div>

                <div className="p-8 pt-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    Circular Economy
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] text-justify font-sans">
                    Revolutionary waste-to-wealth technologies transforming organic waste streams into premium renewable energy and high-quality biofertilizers for sustainable agriculture.
                    These innovations not only reduce environmental pollution but also create circular economy models that benefit both farmers and industries.
                
                  </p>

                  {/* Progress bar animation */}
                  <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-200"></div>
                  </div>
                </div>
              </div>

              {/* Energy Self-Reliance Card */}
              <div className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src="images/randnew1.jpg"
                    alt="Renewable Energy and Solar Power"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-8 pt-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    Energy Self-Reliance
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] text-justify font-sans">
                    Pioneering scalable clean energy solutions that drive India's sustainable future, creating energy independence through innovative biogas and renewable technologies.
                    Our approach integrates advanced engineering with environmental stewardship to deliver reliable and impactful outcomes.
               
                  </p>


                  {/* Progress bar animation */}
                  <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-400"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-400/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Multi-Feedstock Section */}
        <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-8 border border-green-100">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-8 text-center">
            Multi-Feedstock Approach
          </h3>

          {/* First Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {feedstocks.filter(feedstock => feedstock.row === 0).map((feedstock, index) => {
              const actualIndex = feedstocks.findIndex(f => f === feedstock);
              return (
                <div
                  key={actualIndex}
                  className={`${feedstock.bgColor} border-2 border-opacity-30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105`}
                  onClick={() => handleCardClick(0)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`${feedstock.color} w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 shadow-md`}>
                      {feedstock.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800">{feedstock.name}</h4>
                    </div>
                    <div className="ml-2">
                      {isRowExpanded(0) ?
                        <ChevronDown className="w-5 h-5 text-gray-600" /> :
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      }
                    </div>
                  </div>
                  {isRowExpanded(0) && (
                    <div className="mt-4 pt-4 border-t border-gray-200 border-opacity-50">
                      <p className="text-gray-500 text-sm leading-relaxed font-medium font-sans">
                        {feedstock.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {feedstocks.filter(feedstock => feedstock.row === 1).map((feedstock, index) => {
              const actualIndex = feedstocks.findIndex(f => f === feedstock);
              return (
                <div
                  key={actualIndex}
                  className={`${feedstock.bgColor} border-2 border-opacity-30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105`}
                  onClick={() => handleCardClick(1)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`${feedstock.color} w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 shadow-md`}>
                      {feedstock.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800">{feedstock.name}</h4>
                    </div>
                    <div className="ml-2">
                      {isRowExpanded(1) ?
                        <ChevronDown className="w-5 h-5 text-gray-600" /> :
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      }
                    </div>
                  </div>
                  {isRowExpanded(1) && (
                    <div className="mt-4 pt-4 border-t border-gray-200 border-opacity-50">
                      <p className="text-gray-500 text-sm leading-relaxed font-medium font-sans">
                        {feedstock.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
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