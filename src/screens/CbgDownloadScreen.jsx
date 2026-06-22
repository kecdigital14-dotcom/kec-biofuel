"use client";

import dynamic from 'next/dynamic';
import React from 'react'
import HeroBanner from '../app/Components/HeroBanner'
import BannerContent from '../app/Components/BannerContent'
import Navbar from '../app/Components/Navbar'

const LazyLoader = () => (
  <div className="w-full flex justify-center items-center py-16">
    <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Footer = dynamic(() => import('../app/Components/Footer'), { ssr: false, loading: () => <LazyLoader /> });
const ContactSection = dynamic(() => import('../app/Components/ContactSection'), { ssr: false, loading: () => <LazyLoader /> });
const PmcSectionOne = dynamic(() => import('@/app/Components/PmcSectionOne'), { ssr: false, loading: () => <LazyLoader /> });
const PmcSectionTwo = dynamic(() => import('@/app/Components/PmcSectiontwo'), { ssr: false, loading: () => <LazyLoader /> });
const PmcSectionThree = dynamic(() => import('@/app/Components/PmcSectionthree'), { ssr: false, loading: () => <LazyLoader /> });
const PmcSectionFour = dynamic(() => import('@/app/Components/PmcSectionfour'), { ssr: false, loading: () => <LazyLoader /> });
const CbgDownloadComp = dynamic(() => import('@/app/Components/CbgdownloadComp'), { ssr: false, loading: () => <LazyLoader /> });








const CbgDownloadScreen = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner backgroundImage="/images/bannernew2.png">
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
        title="KEC Agritech Company Profile 2026"
        description="Updated 2026 profile — 74+ EPC contracts, ₹1200 Cr+ orderbook, AI-enabled CBG plants, CBG Parks across India. Farm to Fuel."
        brochurePdfUrl="/images/KECProfile2026.pdf"
        fileName="KEC-Agritech-Profile-2026.pdf"
        whatsInside={[
          "About KEC — company structure, 5 subsidiaries, CIN & financial snapshot",
          "Awards & Recognitions — BIA Malaysia 2026, German Energy Solutions Initiative & more",
          "74+ EPC projects, ₹1200 Cr+ orderbook across 42 districts in 14 states",
          "KEC & CBG Industry Roadmap 2020–2026 (ongoing)",
          "AI-Enabled Biogas Plant — smart feedstock, predictive performance, SCADA monitoring",
          "CBG Park overview — Plug & Play model, Bulandshahr Phase 1 launched",
          "CBG Park locations: Khurja, Koil (Aligarh), Gabhana & 8 states Pan India",
          "Investment table: 2.4–20 TPD plants, ROI 40–50%, payback <3 yrs, 15yr buyback",
          "Bio-Manure products: Carbon Enhancer & PROM (Phosphate Rich Organic Manure)",
          "Investor Interest Form — Individual CBG Plant or CBG Park entry options"
        ]}
        moreInfoTitle="Build Your CBG Plant with KEC Agritech"
        moreInfoDesc="74+ projects executed. AI-enabled plants. Government support. 35–50% ROI. The right partner for India's CBG revolution."
        moreInfoButtonText="Contact KEC"
        moreInfoButtonLink="mailto:info@kisanexperience.com"
      />
      <CbgDownloadComp
        title="CBG-CGD SYNCHRONISATION 
KEC CBG -CGD STUDY"
        description="KEC Agritech's technical study on integrating Compressed Biogas into City Gas Distribution networks under the MOP&NG Synchro Scheme."
        brochurePdfUrl="/images/KECCBGCGDSTUDY.pdf"
        fileName="KEC-CBG-CGD-Synchronisation-Study.pdf"
        whatsInside={[
          "What is the CBG-CGD Synchronisation Scheme (Synchro Scheme)",
          "How to supply Biogas/CBG to CGD entities via GAIL",
          "Quantity accounting via GAIL's online joint-ticketing portal",
          "Fortnightly invoicing process under the Synchro Scheme",
          "Quality specifications per BIS IS 16087:2016 (Methane ≥90%)",
          "3 delivery options: Cascade, pipeline injection, DCU injection",
          "No LoI required — direct GAIL Tripartite Agreement process"
        ]}
        moreInfoTitle="Connect CBG Output to CGD Networks"
        moreInfoDesc="KEC helps CBG producers navigate GAIL agreements, quality compliance, and pipeline integration under the Synchro Scheme."
        moreInfoButtonText="Contact KEC"
        moreInfoButtonLink="mailto:info@kisanexperience.com"
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

      <CbgDownloadComp
        title="Biogas Magazine – Edition 34"
        description="Featured in Biogas Magazine (Edition 34), showcasing KEC Agritech’s leadership in CBG Parks and clean energy."
        brochurePdfUrl="/images/Biogas-Magazine.pdf"
        fileName="Biogas-Magazine-Edition-34.pdf"
        whatsInside={[
          "Exclusive interview with Mr. Jitendra Narayan, Founder & CEO, KEC Agritech Pvt. Ltd.",
          "KEC’s vision for CBG Parks and bio-CNG ecosystem in India",
          "Cluster-based models empowering farmers and rural communities",
          "Role of biogas in circular agriculture and renewable energy transition",
          "Insights on challenges, scalability, and future of the biogas sector"
        ]}
        moreInfoTitle="Why This Feature Matters?"
        moreInfoDesc="This magazine feature showcases KEC Agritech’s real-world impact in building sustainable biofuel infrastructure, strengthening farmer income, and driving India’s clean energy mission through CBG and bio-CNG solutions."
        moreInfoButtonText="Explore Our CBG & Biofuel Initiatives"
        moreInfoButtonLink="/cbg"
      />


      <Footer />
    </div>
  )
}

export default CbgDownloadScreen
