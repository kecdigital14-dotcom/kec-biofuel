// HomeBannerSlider.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomeBannerSlider = () => {
  const slides = [
    {
      id: 1,
      image: "/images/homebannernew1.png",
      title: "Sustainable Future with Bio CBG",
      description: "Innovating green energy solutions for a cleaner tomorrow.",
    },
    {
      id: 2,
      image: "/images/biofuelbanner3.png",
      title: "Renewable Energy Revolution",
      description: "Empowering communities with renewable biofuels.",
    },
    {
      id: 3,
      image: "/images/biofuelbanner4.png",
      title: "Clean Energy, Bright Future",
      description: "Reducing carbon footprint with innovative technology.",
    },
    {
      id: 4,
      image: "/images/biofuelbanner2.png",
      title: "Clean Energy, Bright Future",
      description: "Reducing carbon footprint with innovative technology.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[510px] overflow-hidden mt-16">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[590px]"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 group"
      >
        <div className="relative">
          <div className="relative w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center backdrop-blur-sm border border-white/20">
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover:-translate-x-0.5" />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-green-300 opacity-0 group-hover:opacity-100 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
        </div>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 group"
      >
        <div className="relative">
          <div className="relative w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center backdrop-blur-sm border border-white/20">
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-green-300 opacity-0 group-hover:opacity-100 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
        </div>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBannerSlider;
