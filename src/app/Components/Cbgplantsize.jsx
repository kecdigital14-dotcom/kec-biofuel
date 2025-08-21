import React, { useState } from 'react';
import { 
  Factory, 
  Zap, 
  Leaf, 
  TrendingUp, 
  Award,
  Settings,
  BarChart3,
  Gauge
} from 'lucide-react';

const Cbgplantsize = () => {
  const [hoveredPlant, setHoveredPlant] = useState(null);

  const plantSizes = [
    {
      id: 1,
      capacity: "12",
      unit: "TPD",
      color: "from-blue-600 to-indigo-700",
      bgColor: "from-blue-50 to-indigo-100",
      icon: Factory
    },
    {
      id: 2,
      capacity: "7.2",
      unit: "TPD",
      color: "from-emerald-600 to-teal-700",
      bgColor: "from-emerald-50 to-teal-100",
      icon: TrendingUp
    },
    {
      id: 3,
      capacity: "4.8",
      unit: "TPD",
      color: "from-purple-600 to-pink-700",
      bgColor: "from-purple-50 to-pink-100",
      icon: Settings
    },
    {
      id: 4,
      capacity: "2.4",
      unit: "TPD",
      color: "from-orange-600 to-red-700",
      bgColor: "from-orange-50 to-red-100",
      icon: BarChart3
    },
    {
      id: 5,
      capacity: "2",
      unit: "TPD",
      color: "from-teal-600 to-cyan-700",
      bgColor: "from-teal-50 to-cyan-100",
      icon: Gauge
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl">
              <Factory className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            CBG <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Plant Sizes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Choose from our range of Compressed Biogas (CBG) plants designed for different scales and applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Leaf className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">100% Sustainable</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700">High Efficiency</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Award className="w-4 h-4 text-purple-600" />
              <span className="text-gray-700">Proven Technology</span>
            </div>
          </div>
        </div>

        {/* Plant Size Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {plantSizes.map((plant, index) => (
            <div
              key={plant.id}
              className={`group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-110 cursor-pointer`}
              onMouseEnter={() => setHoveredPlant(plant.id)}
              onMouseLeave={() => setHoveredPlant(null)}
            >
              {/* Header with Gradient */}
              <div className={`relative bg-gradient-to-br ${plant.color} p-8 text-white overflow-hidden h-48 flex flex-col items-center justify-center`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                                     radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <plant.icon className="w-16 h-16 text-white/90 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{plant.capacity}</div>
                  <div className="text-lg font-medium opacity-90">{plant.unit}</div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
              </div>

              {/* Bottom Section */}
              <div className={`bg-gradient-to-br ${plant.bgColor} p-6 h-24 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">Tons Per Day</div>
                  <div className="text-sm text-gray-600 mt-1">Production Capacity</div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              {hoveredPlant === plant.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none transition-all duration-300"></div>
              )}
            </div>
          ))}
        </div>

    
      </div>
    </div>
  );
};

export default Cbgplantsize;