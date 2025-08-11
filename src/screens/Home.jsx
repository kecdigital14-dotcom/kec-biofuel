"use client";

import React from 'react'

import HeroBanner from '../app/Components/HeroBanner'
import BannerContent from '../app/Components/BannerContent'
import Navbar from '../app/Components/Navbar'
import Home2ndsection from '../app/Components/Home2ndsection';
import Home3rdsection from '../app/Components/Home3rdsection';
import Home4thsection from '../app/Components/Home4thsection';
import Home5thsection from '../app/Components/Home5thsection';
import Faq from '../app/Components/Faq';
import Homeservices from '../app/Components/Homeservices';
import Home6thsection from '../app/Components/Home6thsection';
import Footer from '../app/Components/Footer';
import BlogSection from '../app/Components/BlogSectionhome';
import HomeBannerSlider from '@/app/Components/HomeBannerSlider';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
        <HomeBannerSlider />
      <Home2ndsection />
      <Home3rdsection />
      <Home4thsection />
      <Homeservices />
      <Home6thsection />
      <Home5thsection />
      <Faq />
      <BlogSection />
      <Footer />
    </div>
  )
}

export default Home
