'use client';

import React from 'react';
import Navbar from '../app/Components/Navbar';
import HeroBanner from '../app/Components/HeroBanner';
import About1stsection from '../app/Components/About1stsection';
import About2ndsection from '../app/Components/About2ndsection';
import Footer from '../app/Components/Footer';
import About3rdsection from '../app/Components/About3rdsection';
import BlogSingle from '../app/Components/BlogSingle';

const BlogSingelScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <HeroBanner backgroundImage="/images/aboutbanner2.png">
        <div className="bg-black/20 backdrop-blur-md rounded-xl px-8 py-4 max-w-sm mx-auto text-center shadow-sm space-y-2">

          {/* Title */}
          <h1 className="text-5xl md:text-5xl font-extrabold text-green-800 tracking-tight leading-tight">
            About <span className="text-green-600">Us</span> <span className="text-cyan-400"></span>
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

      <BlogSingle />

      <Footer />
    </div>
  );
};

export default BlogSingelScreen;