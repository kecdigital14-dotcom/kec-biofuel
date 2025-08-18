import React, { useState, useEffect } from 'react';
import { ChevronRight, Leaf, Zap, Recycle, Award, Github, ExternalLink, Play, Pause, BarChart3, Users, Calendar, Target } from 'lucide-react';

export default function ProjectSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectImages = [
    '/api/placeholder/800/500',
    '/api/placeholder/800/500',
    '/api/placeholder/800/500'
  ];

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Renewable",
      description: "Sustainable bio fuel production from organic waste materials"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Efficiency",
      description: "Optimized conversion process achieving 85% energy efficiency"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Waste Reduction",
      description: "Converting 90% of organic waste into usable bio fuel"
    }
  ];

  const stats = [
    { label: "Energy Efficiency", value: "85%" },
    { label: "Waste Converted", value: "90%" },
    { label: "CO₂ Reduction", value: "75%" },
    { label: "Cost Savings", value: "40%" }
  ];

  const timeline = [
    { phase: "Research & Planning", duration: "2 months", status: "completed" },
    { phase: "Prototype Development", duration: "3 months", status: "completed" },
    { phase: "Testing & Optimization", duration: "2 months", status: "completed" },
    { phase: "Documentation", duration: "1 month", status: "completed" }
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400">
                <Award className="w-4 h-4" />
                <span className="text-sm">Award Winning Project</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-none">
                Sustainable
                <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Bio Fuel
                </span>
                Revolution
              </h1>
              
              <p className="text-sm font-bold text-gray-300 leading-relaxed max-w-2xl text-justify">
                Converting organic waste into clean, renewable energy with 85% efficiency. 
                A breakthrough in sustainable fuel production that reduces carbon footprint by 75%.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <span className="flex items-center space-x-2">
                    <span>View Demo</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
{/*                 
                <button className="border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/5">
                  <span className="flex items-center space-x-2">
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
                  </span>
                </button> */}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="aspect-video bg-black/40 rounded-2xl relative overflow-hidden">
                  {!isPlaying ? (
                    // Video Thumbnail
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 to-blue-900/50 flex items-center justify-center">
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-60"
                        style={{ 
                          backgroundImage: `url('images/biofuelproject1.jpg')` 
                        }}
                      ></div>
                      
                      {/* Play Button */}
                      <button 
                        onClick={() => setIsPlaying(true)}
                        className="relative z-10 w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-green-500/50"
                      >
                        <Play className="w-8 h-8 ml-1 text-white" />
                      </button>
                      
                      {/* Thumbnail Info */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                          <h3 className="text-white font-semibold text-sm mb-1">Bio Fuel Production Process</h3>
                          <p className="text-gray-300 text-xs">Watch how we convert organic waste into clean energy</p>
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1">
                        <span className="text-white text-xs font-medium">3:45</span>
                      </div>
                    </div>
                  ) : (
                    // Video iframe
                    <div className="absolute inset-0">
                      <iframe
                        src="images/videoproject.mp4"
                        title="Bio Fuel Project Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-2xl"
                      ></iframe>
                      
                      {/* Close button */}
                      <button
                        onClick={() => setIsPlaying(false)}
                        className="absolute top-4 right-4 w-8 h-8 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors z-10"
                      >
                        ×
                      </button>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-spin opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Project <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Timeline</span>
            </h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
            
            {timeline.map((phase, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2 text-green-400">{phase.phase}</h3>
                    <p className="text-gray-300 mb-2">{phase.duration}</p>
                    <div className="inline-flex items-center space-x-2 text-sm text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Completed</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-slate-900"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Project <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Results</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-400">Technical Achievements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span className="text-gray-300 font-sans">Developed efficient biomass conversion process</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span className="text-gray-300 font-sans">Achieved 85% energy conversion efficiency</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span className="text-gray-300 font-sans">Reduced production costs by 40%</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span className="text-gray-300 font-sans">Minimized carbon footprint by 75%</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Environmental Impact</h3>
                <p className="text-gray-300 leading-relaxed font-sans text-justify">
                  This bio fuel project successfully demonstrates how organic waste can be transformed into clean energy, 
                  contributing to a circular economy and reducing environmental pollution while providing sustainable fuel alternatives.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="aspect-square bg-black/40 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-24 h-24 text-green-400" />
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-bounce opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}