"use client";

import React from 'react'

import HeroBanner from '../Components/HeroBanner'
import BannerContent from '../Components/BannerContent'
import Navbar from '../Components/Navbar'
import Home2ndsection from '../Components/Home2ndsection';
import Home3rdsection from '../Components/Home3rdsection';
import Home4thsection from '../Components/Home4thsection';
import Home5thsection from '../Components/Home5thsection';
import Faq from '../Components/Faq';
import Homeservices from '../Components/Homeservices';
import Home6thsection from '../Components/Home6thsection';
import Footer from '../Components/Footer';
import BlogSection from '../Components/BlogSectionhome';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <HeroBanner backgroundImage="/images/biofuelbanner1.jpg">
        <BannerContent 
          subtitle="Energizing a Sustainable Tomorrow"
          title="Unleashing Sustainable Energy Solutions"
          showVideo={true}
          showSocialLinks={true}
          ctaText="Learn More →"
          onCtaClick={() => console.log('CTA clicked!')}
        />
      </HeroBanner>
      <Home2ndsection/>
      <Home3rdsection/>
      <Home4thsection/>
      <Homeservices/>
          <Home6thsection/>
      <Home5thsection/>
      <Faq/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}

export default Home
