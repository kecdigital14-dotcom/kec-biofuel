// HomeBannerSlider.jsx
import React, { useState } from "react";

const HomeBannerSlider = () => {
  const slides = [
    {
      id: 1,
      image: "/images/biofuelbanner1.png",
      title: "Sustainable Future with Bio CBG",
      description: "Innovating green energy solutions for a cleaner tomorrow."
    },
    {
      id: 2,
      image: "/images/biofuelbanner3.png",
      title: "Renewable Energy Revolution",
      description: "Empowering communities with renewable biofuels."
    },
    {
      id: 3,
      image: "/images/biofuelbanner4.png",
      title: "Clean Energy, Bright Future",
      description: "Reducing carbon footprint with innovative technology."
    },
      {
      id: 4,
      image: "/images/biofuelbanner2.png",
      title: "Clean Energy, Bright Future",
      description: "Reducing carbon footprint with innovative technology."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full h-[590px] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative"
            style={{ height: "500px" }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className=" w-full object-cover"
            />
         
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBannerSlider;
