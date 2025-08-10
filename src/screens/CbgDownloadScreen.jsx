"use client";

import React from 'react'
import HeroBanner from '../app/Components/HeroBanner'
import BannerContent from '../app/Components/BannerContent'
import Navbar from '../app/Components/Navbar'
import Footer from '../app/Components/Footer';
import ContactSection from '../app/Components/ContactSection';
import PmcSectionOne from '@/app/Components/PmcSectionOne';
import PmcSectionTwo from '@/app/Components/PmcSectiontwo';
import PmcSectionThree from '@/app/Components/PmcSectionthree';
import PmcSectionFour from '@/app/Components/PmcSectionfour';
import CbgDownloadComp from '@/app/Components/CbgdownloadComp';

const CbgDownloadScreen = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner backgroundImage="/images/aboutbanner2.png">
        <div className="bg-black/5 backdrop-blur-md rounded-xl px-8 py-4 max-w-sm mx-auto text-center shadow-sm space-y-2">

          {/* Title */}
          <h1 className="text-5xl md:text-5xl font-extrabold tracking-tight leading-tight text-white/80">
            Download  <span className="text-green-600">Brochure</span> <span className="text-cyan-400"></span>
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
      <CbgDownloadComp
        title="CBG Park Brochure"
        description="Explore our CBG Park with cutting-edge biofuel solutions."
        brochurePdfUrl="/images/KECProfileJune25.pdf"
        fileName="CBG-Park.pdf"
        whatsInside={[
          "Overview of CBG Park",
          "Technology and Process Flow",
          "Benefits and Use Cases",
          "Contact Information"
        ]}
        moreInfoTitle="Want to Partner with Us?"
        moreInfoDesc="Learn how our CBG solutions can help you achieve sustainable growth."
        moreInfoButtonText="Contact Us"
        moreInfoButtonLink="/contact"
      />
      <CbgDownloadComp
        title="KEC ISO 9001:2015 Certificate"
        description="View our ISO 9001:2015 Certification, showcasing our commitment to quality management standards."
        brochurePdfUrl="/images/KEC_ ISO CERTIFICATE_9001(2).pdf"
        fileName="KEC-ISO-9001-2015.pdf"
        whatsInside={[
          "Certificate of ISO 9001:2015 compliance",
          "Scope of certification for our operations",
          "Quality management principles adhered to",
          "Standards for continuous improvement and customer satisfaction"
        ]}
        moreInfoTitle="Why ISO 9001:2015 Matters?"
        moreInfoDesc="ISO 9001:2015 ensures our processes meet international quality standards, fostering trust and consistency."
        moreInfoButtonText="Learn More About Our Quality Standards"
        moreInfoButtonLink="/quality-standards"
      />

      <CbgDownloadComp
        title="CBG Park Startup Certificate"
        description="Access our Startup India Recognition Certificate, highlighting our innovation in sustainable biofuel solutions."
        brochurePdfUrl="/images/CBG_PARK_STARTUP_CERTIFICATE.pdf"
        fileName="CBG-Park-Startup-Certificate.pdf"
        whatsInside={[
          "Startup India Recognition Certificate",
          "Details of recognition for CBG Park",
          "Government validation for innovative biofuel solutions",
          "Commitment to sustainability and renewable energy"
        ]}
        moreInfoTitle="Why Startup Recognition is Important?"
        moreInfoDesc="Our Startup India certificate validates our innovative approach towards clean energy and provides opportunities for growth."
        moreInfoButtonText="Explore Our CBG Initiatives"
        moreInfoButtonLink="/cbg"
      />

      <Footer />
    </div>
  )
}

export default CbgDownloadScreen
