import React from 'react';
import { CheckCircle, Cog, Users, TrendingUp, Shield, Award } from 'lucide-react';

const PMCServices = () => {
  const services = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "EPC SERVICES",
      description: "Complete Engineering, Procurement, and Construction solutions for renewable energy projects."
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "TURNKEY SOLUTIONS",
      description: "End-to-end project delivery from concept to commissioning with comprehensive support."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "OPERATIONAL & MAINTENANCE SOLUTIONS",
      description: "Long-term operational support and maintenance services for optimal plant performance."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "DEVELOPER OF CBG PARK",
      description: "Strategic development and establishment of Compressed Bio-Gas parks across India."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "JOINT VENTURE & PPP",
      description: "Public-Private Partnership models for sustainable and scalable project development."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "ALLIED SERVICES",
      description: "Comprehensive support services including financial assistance and technical consultation."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            PMC <span className="text-green-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-2"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We facilitate PMC & EPC services as technical assistance and financial approach 
            to all prospective promoters, providing End-to-End solutions for plant setup
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border-t-4 border-green-600"
            >
              <div className="text-green-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-sans text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Flow Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Our Project Management Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Assessment</h4>
              <p className="text-sm text-gray-500 font-sans">Project feasibility and technical assessment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Development</h4>
              <p className="text-sm text-gray-500 font-sans">Detailed project planning and development</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-500 font-sans">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Execution</h4>
              <p className="text-sm text-gray-500 font-sans">Project implementation and construction</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Commercialization</h4>
              <p className="text-sm text-gray-500 font-sans">Market establishment and operations</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PMCServices;