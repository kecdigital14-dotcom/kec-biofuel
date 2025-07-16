'use client';

import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

const Home5thsection = () => {
  return (
    <div className="relative w-full h-[400px]">
      {/* Background Image */}
      <Image
        src="/images/home5thsection.jpg" // Change if you want another bg
        alt="Biofuel Innovation"
        fill
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div>
          {/* Play Button */}
          <div className="flex justify-center mb-6 items-center">
            <button className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 shadow-lg">
              <FaPlay />
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-white text-xl md:text-4xl lg:text-5xl font-bold mb-2">
            Biofuel Innovation <span className="text-green-400">for a Greener Tomorrow</span>
          </h2>

          {/* Description */}
          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base font-sans">
            Advancing clean energy through sustainable biofuels that reduce emissions, empower rural economies,
            and support a circular future for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home5thsection;
