'use client';

import React from 'react';
import Navbar from '../app/Components/Navbar';
import HeroBanner from '../app/Components/HeroBanner';
import CbgSection from '../app/Components/CbgSection';
import About2ndsection from '../app/Components/About2ndsection';
import Footer from '../app/Components/Footer';
import About3rdsection from '../app/Components/About3rdsection';
import BlogsPage from '../app/Components/BlogsPage';
import CbgGlimpse from '@/app/Components/CbgGlimpse';
import Cbgplantsize from '@/app/Components/Cbgplantsize';

const CbgScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <HeroBanner backgroundImage="/images/aboutbanner2.png">
        <div className="bg-black/5 backdrop-blur-md rounded-xl px-8 py-4 max-w-sm mx-auto text-center shadow-sm space-y-2">

          {/* Title */}
          <h1 className="text-5xl md:text-5xl font-extrabold tracking-tight leading-tight text-white/80">
            Our <span className="text-green-600">CBG</span> <span className="text-cyan-400"></span>
          </h1>

          {/* Decorative Line */}
          <div className="mx-auto w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"></div>

          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
            Shaping the future with sustainable energy innovations.
          </p>

          {/* CTA Button */}
          <button className="mt-2 mb-3 px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full text-white font-semibold shadow hover:scale-105 transition-transform">
            Explore Our Vision →
          </button>

        </div>
      </HeroBanner>

      <CbgSection />
      <Cbgplantsize/>
<CbgGlimpse/>
      <Footer />
    </div>
  );
};

export default CbgScreen;