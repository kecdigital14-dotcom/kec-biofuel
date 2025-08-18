"use client";
import React from "react";

const Home2ndsection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="relative flex items-center justify-center min-h-[600px]">
            <div className="relative w-full max-w-lg">
              <img
                src="/images/home-bannersectionone.jpeg"
                alt="Environmental Sustainability"
                className="w-full h-[450px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-green-600 font-bold uppercase text-sm tracking-wide">
                <span>🌿</span>
                <span>About KEC Bio-Fuel,</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Eco-Smart Future <br />
                {/* with Bio  CBG <br /> */}
                <span className="text-green-600">with Bio  CBG</span>
              </h2>
            </div>

            {/* Benefit 1 - Economic Impact */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl">💰</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Economic Impact
                </h3>
                <p className="text-gray-600 text-sm text-base leading-relaxed font-sans text-justify">
                  Core expertise in PMC, EPC, and renewable energy projects in Bio-CNG, Bio-Diesel, and Ethanol. Signed MoU with Uttarakhand Government for ₹500 Cr under PPP in FY 2023–24. Over 34+ EPC contracts across India.
                </p>
              </div>
            </div>

            {/* Benefit 2 - Green Expansion */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center"> 
                <span className="text-xl">🛡️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Green Expansion
                </h3>
                <p className="text-gray-600 text-sm text-base leading-relaxed font-sans text-justify">
                  Establishing CBG Parks in UP, Uttarakhand, Assam, and planning expansion into MP, Gujarat, and North East. Aims to build 100+ CBG plants by FY 2025–26 under a unified national platform.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center space-x-2">
                <span>More About</span>
                <span className="text-lg">→</span>                       
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2ndsection;
