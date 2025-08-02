"use client";

import React from 'react'
import HeroBanner from '../app/Components/HeroBanner'
import BannerContent from '../app/Components/BannerContent'
import Navbar from '../app/Components/Navbar'
import Footer from '../app/Components/Footer';
import SuperTeam from '@/app/Components/SuperTeam';


const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-50">
            <Navbar />
            <HeroBanner backgroundImage="/images/aboutbanner2.png">
                <div className=" backdrop-blur-md rounded-xl px-8 py-4 max-w-sm mx-auto text-center shadow-sm space-y-2">

                    {/* Title */}
                    <h1 className="text-5xl md:text-5xl font-extrabold text-green-800 tracking-tight leading-tight">
                        Our <span className="text-green-600">Super Team</span> <span className="text-cyan-400"></span>
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

            <SuperTeam />
            <div className='mt-[800px] '>
                <Footer />
            </div>



        </div>
    )
}

export default Home
