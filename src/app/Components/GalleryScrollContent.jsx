"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Trophy, Star } from 'lucide-react';

const GalleryScrollContent = ({ 
  data = [
    {
      id: 1,
      title: "Innovation Excellence Award",
      subtitle: "Best Digital Product 2024",
      date: "December 2024",
      description: "Recognized for outstanding innovation in digital product design and user experience. This award celebrates our commitment to pushing boundaries and creating solutions that truly make a difference in users' lives.",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd27?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Design Leadership Award",
      subtitle: "UI/UX Excellence",
      date: "November 2024",
      description: "Awarded for exceptional leadership in design thinking and creating user-centered experiences that set new industry standards. This recognition reflects our dedication to crafting intuitive and beautiful interfaces.",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Technology Pioneer",
      subtitle: "Innovation Summit",
      date: "October 2024",
      description: "Honored as a technology pioneer for breakthrough achievements in modern web development and cutting-edge solutions that drive the industry forward.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    }
  ],
  sectionTitle = "ACHIEVEMENTS", 
  sectionSubtitle = "AWARDS",
  sectionIcon = <Trophy className="w-8 h-8" />
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = data[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? data.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === data.length - 1 ? 0 : prev + 1
    );
  };

  const handleItemChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-green-50/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(5,150,105,0.03),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20 shadow-lg">
            <div className="text-green-600">
              {sectionIcon}
            </div>
            <span className="text-sm font-semibold text-slate-600 tracking-wider uppercase">
              Recognition
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-slate-800 via-green-700 to-emerald-700 bg-clip-text text-transparent leading-tight">
            {sectionTitle}
            <span className="block text-4xl lg:text-4xl font-light mt-2">
              & {sectionSubtitle}
            </span>
          </h2>
          
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Celebrating milestones and recognitions that define our journey of excellence
          </p>
        </div>

        {/* Main Content Card */}
        <div className="relative">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/5 border border-white/20 overflow-hidden">
            <div className="flex flex-col xl:flex-row">
              {/* Left Side - Enhanced Image Section */}
              <div className="xl:w-3/5 relative group">
                <div className="relative h-96 xl:h-[500px] overflow-hidden">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-white/20"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-700" />
                  </button>
                  
                  <button
                    onClick={handleNext}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-white/20"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                  </button>

                  {/* Progress Indicators */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {data.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentIndex 
                            ? 'w-8 h-3 bg-white shadow-lg' 
                            : 'w-3 h-3 bg-white/60 hover:bg-white/90 hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Award Badge */}
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full p-3 shadow-xl">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Right Side - Enhanced Content */}
              <div className="xl:w-2/5 p-8 xl:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Date Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-full px-4 py-2 text-sm font-medium text-green-700 w-fit">
                    <Star className="w-4 h-4" />
                    {currentItem.date}
                  </div>
                  
                  <div>
                    <h3 className="text-3xl xl:text-4xl font-bold text-slate-800 mb-3 leading-tight">
                      {currentItem.title}
                    </h3>
                    
                    <h4 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                      {currentItem.subtitle}
                    </h4>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-lg text-justify">
                    {currentItem.description}
                  </p>
                  
                  <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation - Modern Tab Selector */}
          {data.length > 1 && (
            <div className="mt-8">
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg p-2">
                <div className="flex justify-center flex-wrap gap-2">
                  {data.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemChange(index)}
                      className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
                        index === currentIndex
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/30 scale-105'
                          : 'text-slate-600 hover:text-slate-800 hover:bg-white/70 border border-transparent hover:border-white/40'
                      }`}
                    >
                      <span className="relative z-10 truncate max-w-48 block">
                        {item.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GalleryScrollContent;