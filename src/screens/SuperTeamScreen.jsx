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
            <HeroBanner backgroundImage="/images/superteamnew1.jpeg">
          
            </HeroBanner>


            <SuperTeam />
            <div className='mt-[1100px] md:mt-[1000px]'>
                <Footer />
            </div>



        </div>
    )
}

export default Home
