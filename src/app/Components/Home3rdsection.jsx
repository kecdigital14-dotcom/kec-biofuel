import React from 'react';

const Home3rdsection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 w-[80%] ">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-green-600 mb-4">
            <div className="w-8 h-0.5 bg-green-600"></div>
            <span className="text-sm font-bold uppercase tracking-wider">Our Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Key Features of KEC Bio-Fuel
            <br />
            <span className="text-gray-700">Powering a Green Revolution</span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Image */}
          <div className="flex justify-center items-center mb-8 lg:mb-0">
            <div className="relative">
              <img 
                src="/images/home3ndsection.png"  
                alt="Bio-Fuel Illustration" 
                className="w-full max-w-2xl h-auto object-contain"
              />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Top Left */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:w-80">
              <div className="text-center lg:text-left space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mx-auto lg:mx-0">
                  <span className="text-white text-2xl">💯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">High Purity Output</h3>
                <p className="text-gray-600 leading-relaxed font-sans">
                  Our process ensures top-grade Bio-CNG, Bio-Diesel, and Ethanol with consistent calorific value and purity.
                </p>
              </div>
            </div>

            {/* Top Right */}
            <div className="lg:absolute lg:top-0 lg:right-0 lg:w-80">
              <div className="text-center lg:text-right space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mx-auto lg:ml-auto">
                  <span className="text-white text-2xl">🔁</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sustainable Process</h3>
                <p className="text-gray-600 leading-relaxed font-sans">
                  Leveraging waste-to-energy tech that minimizes emissions and supports circular economy goals.
                </p>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="lg:absolute lg:bottom-0 lg:left-0 lg:w-80">
              <div className="text-center lg:text-left space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mx-auto lg:mx-0">
                  <span className="text-white text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Nationwide Scalability</h3>
                <p className="text-gray-600 leading-relaxed font-sans">
                  34+ EPC contracts across India and planned expansion to over 100 CBG plants by FY 2026.
                </p>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="lg:absolute lg:bottom-0 lg:right-0 lg:w-80">
              <div className="text-center lg:text-right space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mx-auto lg:ml-auto">
                  <span className="text-white text-2xl">👷</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Farmer & Industry Friendly</h3>
                <p className="text-gray-600 leading-relaxed font-sans ">
                  Enables rural empowerment through agri-waste buyback, local job creation & PPP-led development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3rdsection;
