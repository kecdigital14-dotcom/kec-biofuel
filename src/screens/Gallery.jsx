"use client";

import React from 'react'
import HeroBanner from '../app/Components/HeroBanner'
import BannerContent from '../app/Components/BannerContent'
import Navbar from '../app/Components/Navbar'
import GalleryScroll from '../app/Components/GalleryScroll'
import Footer from '../app/Components/Footer';
// import { galleryData } from '../app/data/GalleryContent'
import GalleryScrollContent from '../app/Components/GalleryScrollContent';
import { galleryData, achievementsData, projectsData } from '../app/data/galleryData';


const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner backgroundImage="/images/aboutbanner2.png">
        <div className="bg-black/20 backdrop-blur-md rounded-xl px-8 py-4 max-w-sm mx-auto text-center shadow-sm space-y-2">

          {/* Title */}
          <h1 className="text-5xl md:text-5xl font-extrabold text-green-800 tracking-tight leading-tight">
            Our <span className="text-green-600">Gallery</span> <span className="text-cyan-400"></span>
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

       <GalleryScrollContent 
        data={galleryData}
        sectionTitle="OUTREACH"
        sectionSubtitle="PROGRAMS"
        sectionIcon="🌱"
      />

      {/* Projects Section */}
      <GalleryScrollContent 
         data={achievementsData}
        sectionTitle="PROJECTS"
        sectionSubtitle="INNOVATIONS"
        sectionIcon="🚀"
      />
      <GalleryScrollContent 
        data={projectsData}
        sectionTitle="OUR PROGRAM"
        sectionSubtitle="TRAININGS"
        sectionIcon="🚀"
      />

      <Footer />
    </div>
  )
}

export default Home
