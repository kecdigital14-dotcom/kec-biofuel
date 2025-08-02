import React, { useState } from 'react';
import { BarChart3, Thermometer, Droplets, Zap, Clock, Beaker } from 'lucide-react';

const RandDSectionThree = () => {
  const [selectedFeedstock, setSelectedFeedstock] = useState('napier');

  const feedstockData = {
    napier: {
      title: "Napier Grass",
      duration: "19 Days",
      feedstock: "5 KG Napier Grass Powder + 2 KG Cow Dung + 10 L Water",
      culture: "PEARL LG-MT (80 GM)",
      avgPh: "5.51 (Acidic)",
      avgTemp: "38.1°C (Mesophilic Range)",
      totalYield: "3.2 M³",
      efficiency: "1 M³ from 1.56 KG Napier Powder",
      color: "bg-gradient-to-br from-green-400 to-green-600",
      hoverColor: "hover:from-green-500 hover:to-green-700",
      shadowColor: "shadow-green-200",
      icon: "🌱"
    },
    parali: {
      title: "Parali (Stubble)",
      duration: "31 Days (Mar 21 – Apr 21, 2025)",
      feedstock: "5 KG Parali + 10 L Water",
      culture: "PEARL LG-MT (80 GM)",
      avgPh: "8.57",
      avgTemp: "31.8°C",
      totalYield: "4.83 M³",
      efficiency: "1 M³ from 1.04 KG Feedstock",
      color: "bg-gradient-to-br from-amber-400 to-orange-500",
      hoverColor: "hover:from-amber-500 hover:to-orange-600",
      shadowColor: "shadow-amber-200",
      icon: "🌾"
    },
    cowdung: {
      title: "Cow Dung + Vegetable Waste",
      duration: "39 Days (Jan 21 – Feb 28, 2025)",
      feedstock: "358 KG Cow Dung + 25 KG Vegetable Waste + 400 L Water",
      culture: "PEARL LG-MT (200 GM)",
      avgPh: "7.37",
      avgTemp: "28.8°C",
      totalYield: "18.55 M³",
      efficiency: "1 M³ from 20.64 KG Feedstock",
      color: "bg-gradient-to-br from-emerald-400 to-teal-600",
      hoverColor: "hover:from-emerald-500 hover:to-teal-700",
      shadowColor: "shadow-emerald-200",
      icon: "🐄"
    },
    daf: {
      title: "DAF Sludge",
      duration: "41 Days",
      feedstock: "20 L DAF-2 Sample",
      culture: "PEARL LG-MT (80 GM)",
      avgPh: "6.04",
      avgTemp: "34.2°C",
      totalYield: "4.7 M³",
      efficiency: "High-Ammonia Slurry (~10–15 L/day)",
      color: "bg-gradient-to-br from-purple-400 to-indigo-600",
      hoverColor: "hover:from-purple-500 hover:to-indigo-700",
      shadowColor: "shadow-purple-200",
      icon: "🧪"
    },
    mother: {
      title: "Mother Liquor",
      duration: "25 Days (March 15 – April 9, 2025)",
      feedstock: "5 KG Cow Dung + 20 L Mother Liquor + 5 L Water",
      culture: "PEARL LG-MT (40 GM)",
      avgPh: "6.73",
      avgTemp: "29.6°C",
      totalYield: "5.065 M³",
      efficiency: "Optimized nutrient balance",
      color: "bg-gradient-to-br from-blue-400 to-cyan-600",
      hoverColor: "hover:from-blue-500 hover:to-cyan-700",
      shadowColor: "shadow-blue-200",
      icon: "💧"
    }
  };

  const currentData = feedstockData[selectedFeedstock];

  const getMetricIcon = (type) => {
    switch(type) {
      case 'feedstock': return <Beaker className="w-5 h-5" />;
      case 'culture': return <BarChart3 className="w-5 h-5" />;
      case 'ph': return <Droplets className="w-5 h-5" />;
      case 'temp': return <Thermometer className="w-5 h-5" />;
      case 'yield': return <Zap className="w-5 h-5" />;
      case 'efficiency': return <BarChart3 className="w-5 h-5" />;
      default: return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Floating particles background effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-300 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-300 rounded-full opacity-15 animate-bounce" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <BarChart3 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-green-800 to-green-800 bg-clip-text text-transparent mb-6">
            Raw Material Analysis & Results
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Comprehensive analysis of multi-feedstock biogas production with detailed 
            performance metrics and efficiency measurements across various organic materials.
          </p>
        </div>

        {/* Feedstock Selector */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Clock className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-800">
              Select Feedstock for Detailed Analysis
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(feedstockData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setSelectedFeedstock(key)}
                className={`group relative overflow-hidden rounded-xl p-6 font-medium transition-all duration-300 transform ${
                  selectedFeedstock === key
                    ? `${data.color} text-white shadow-2xl ${data.shadowColor} scale-105`
                    : `bg-white text-gray-700 hover:bg-gray-50 hover:shadow-lg hover:scale-102 border border-gray-200 ${data.hoverColor}`
                }`}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="text-3xl">{data.icon}</div>
                  <div className="text-center">
                    <div className="font-semibold text-sm">{data.title}</div>
                    <div className={`text-xs mt-1 ${selectedFeedstock === key ? 'text-white/80' : 'text-gray-500'}`}>
                      {data.duration.split(' ')[0]} {data.duration.split(' ')[1]}
                    </div>
                  </div>
                </div>
                
                {/* Animated border effect */}
                <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                  selectedFeedstock === key ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Feedstock Details */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/50 transition-all duration-500">
          <div className={`${currentData.color} p-8 text-white relative overflow-hidden`}>
            <div className="absolute top-0 right-0 text-8xl opacity-10 transform rotate-12">
              {currentData.icon}
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{currentData.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{currentData.title}</h3>
                  <div className="flex items-center gap-2 text-lg opacity-90">
                    <Clock className="w-5 h-5" />
                    <span>Duration: {currentData.duration}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animated wave effect */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8">
                <path d="M0,60 C300,90 900,30 1200,60 L1200,120 L0,120 Z" fill="white" fillOpacity="0.1"></path>
              </svg>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { key: 'feedstock', title: 'Feedstock Composition', value: currentData.feedstock, type: 'feedstock' },
                { key: 'culture', title: 'Culture Used', value: currentData.culture, type: 'culture' },
                { key: 'ph', title: 'Average pH', value: currentData.avgPh, type: 'ph' },
                { key: 'temp', title: 'Average Temperature', value: currentData.avgTemp, type: 'temp' },
                { key: 'yield', title: 'Total Biogas Yield', value: currentData.totalYield, type: 'yield', highlight: true },
                { key: 'efficiency', title: 'Gas Efficiency', value: currentData.efficiency, type: 'efficiency' }
              ].map((metric, index) => (
                <div 
                  key={metric.key}
                  className={`group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 ${
                    metric.highlight ? 'ring-2 ring-blue-400 ring-opacity-50' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${currentData.color.replace('bg-gradient-to-br', 'bg-gradient-to-r')} text-white`}>
                      {getMetricIcon(metric.type)}
                    </div>
                    <h4 className="font-semibold text-gray-800 flex-1">{metric.title}</h4>
                  </div>
                  
                  <div className={`${metric.highlight ? 'text-3xl font-bold text-blue-600' : 'text-gray-600 text-sm'} transition-colors duration-200 group-hover:text-gray-800`}>
                    {metric.value}
                  </div>
                  
                  {metric.highlight && (
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                  )}
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            
            {/* Performance Indicator */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Performance Summary</h4>
                    <p className="text-sm text-gray-600">Optimized for maximum biogas production efficiency</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{currentData.totalYield}</div>
                  <div className="text-sm text-gray-500">Total Yield</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandDSectionThree;