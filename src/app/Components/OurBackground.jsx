import React from 'react';

const OurBackground = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-600">Background</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-600">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Leading PMC & EPC Company in India
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans text-sm text-justify">
                KEC is one of India's leading PMC & EPC company specializing in Project Assessment, 
                project development, Project Execution, Project Management, Commercialization 
                & market establishment for final products.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Multi-Million Dollar Projects
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans text-sm text-justify">
                Managing projects worth more than million dollars across India. We provide 
                End-to-End solutions on various business models such as Turnkey, BOOT, 
                and RESCO in leading industries.
              </p>
            </div>
          </div>

          {/* Industries Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Industries We Serve
            </h3>
            
            <div className="space-y-4 font-sans text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Renewable Energy & Biofuels</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Bio-CNG, H2O, Ethanol 1G & 2G</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">Solar Energy & Electric Charging Stations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Food Processing & Dairy Farming</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Water Treatment Plants</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-gray-700">Warehouses & Cold Storage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">2020</div>
            <div className="text-gray-500 font-sans ">Founded</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-500 font-sans">EPC Contracts</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">10000+</div>
            <div className="text-gray-500 font-sans">Planned CBG Plants</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500Cr</div>
            <div className="text-gray-500 font-sans">MOU Value</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBackground;