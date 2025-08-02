"use client";

import React,{useState} from 'react'
import HeroBanner from '../app/Components/HeroBanner'
import BannerContent from '../app/Components/BannerContent'
import Navbar from '../app/Components/Navbar'
import Footer from '../app/Components/Footer';
import RandDSectionOne from '@/app/Components/RandDSectionOne ';
import RandDSectionTwo from '@/app/Components/RandDSectionTwo';
import RandDSectionThree from '@/app/Components/RandDSectionThree';
import RandDSectionFour from '@/app/Components/RandDSectionFour';

const RandDScreen = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroBanner backgroundImage="/images/aboutbanner2.png">
                <div className="bg-black/20 backdrop-blur-md rounded-xl px-8 py-4 max-w-sm mx-auto text-center shadow-sm space-y-2">

                    {/* Title */}
                    <h1 className="text-5xl md:text-5xl font-extrabold text-green-800 tracking-tight leading-tight">
                        Research & <span className="text-green-600">Development</span> <span className="text-cyan-400"></span>
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
            <RandDSectionOne/>
            <RandDSectionTwo/>
            <RandDSectionThree/>
            <RandDSectionFour/>
            <Footer />
        </div>
    )
}

export default RandDScreen
