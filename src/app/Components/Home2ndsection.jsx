"use client";
import React, { useState, useEffect } from "react";

const Home2ndsection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images for the slider
  const sliderImages = [
    {
      src: "/images/homeonesection1.jpg",
      alt: "Environmental Sustainability"
    },
    {
      src: "/images/homeonesection4.jpg",
      alt: "Bio-Fuel Production"
    },
    {
      src: "/images/homeonesection3.jpg",
      alt: "Green Energy Solutions"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Image Slider */}
          <div className="relative flex items-center justify-center min-h-[600px]">
            <div className="relative w-full max-w-lg">
              {/* Main Slider Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {sliderImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[450px] object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Slide Counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentSlide + 1} / {sliderImages.length}
                </div>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${currentSlide === index
                      ? 'bg-green-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
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
                <span className="text-green-600">with Bio CBG</span>
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
                <p className="text-gray-600 text-[14px] leading-relaxed font-sans text-justify font-semibold">
                  Core expertise in PMC, EPC, Technology Transfer and renewable energy projects in Bio-CNG, Bio-Diesel, and Ethanol. Signed MoU with Uttarakhand , UP , Tripura , Assam , MP Government for ₹5000 Cr +  under PPP in FY 2024–25. Over CBG  Project of 74+ @1154 Cr + PMC , EPC & Technology Transfer  contracts across India.
                  Established JV Company with Uttrakhand Govt . HEMU - Harit Energy Mission Uttrakhand under ( PPP Model )
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
                <p className="text-gray-600 text-[14px] leading-relaxed font-sans text-justify font-semibold">
                  A Unique Platform for CBG Project - Asia's First CBG Park
                  # Launched First CBG Park , Bulandshahr , UP. 
                  <br />Establishing 15 CBG Parks in UP, Uttarakhand, Assam, Karnataka , Madhya Pradesh , Rajasthan , Gujarat , Chattisgarh and planning expansion into MP, Gujarat, and North East.
                  Under CBG Park , Aims to build 150+ CBG plants by FY 2026–27 under a unified national platform.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium font-sans flex items-center space-x-2 transition-colors duration-200">
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