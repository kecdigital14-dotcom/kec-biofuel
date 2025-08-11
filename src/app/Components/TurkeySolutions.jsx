import React from 'react';
import { Settings, Zap, Shield, Clock, Users, CheckCircle, ArrowRight, Award, Factory, Leaf, Battery, TrendingUp } from 'lucide-react';

const TurkeySolutions = () => {
  const features = [
    "Bio-CNG, Bio-Diesel & Ethanol Plants",
    "CBG Parks Development & Setup", 
    "PMC & EPC Services",
    "BOOT & RESCO Business Models",
    "Operational & Maintenance Solutions",
    "Joint Venture & PPP Partnerships"
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Content and Image */}
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Turnkey Solutions
                </h3>
                <div className="space-y-4 mb-2">
                  {features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 leading-tight">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-500 font-sans">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2 w-fit">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button> */}
              </div>
              
              {/* Image below content */}
              <div className="">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
                  <img 
                    src="/images/turnkeythree.jpg" 
                    alt="Solutions Overview" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-gray-800 text-sm font-semibold">Solutions Overview</span>
                  </div>
                </div>
              </div>
            </div>
                        
            {/* Right Side - Vertical Stack Layout */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-green-50 to-blue-50">
              <div className="space-y-4 h-full min-h-[500px] flex flex-col">
                <div className="flex-1 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
                  <img src="/images/turnkeyone.jpeg" alt="Main Facility" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-gray-800 text-sm font-semibold">Main Facility</span>
                  </div>
                </div>
                <div className="flex-1 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
                  <img src="/images/turnkeytwo.jpeg" alt="Control Systems" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-gray-800 text-sm font-semibold">Control Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TurkeySolutions;