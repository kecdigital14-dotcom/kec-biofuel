import Footer from '@/app/Components/Footer'
import HeroBanner from '@/app/Components/HeroBanner'
import Navbar from '@/app/Components/Navbar'
import VisitPlantComp from '@/app/Components/VisitPlantComp'
import VisitPlantCompOne from '@/app/Components/VisitPlantCompOne'
import VisitPlantCompTwo from '@/app/Components/VisitPlantCompTwo'
import React from 'react'

const Visitplant = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className='relative sm:mt-8 md:mt-20 mt-[-60px]'>
        <HeroBanner
          backgroundImage="/images/plantvisit6.jpeg"
          className="z-1 h-[400px] md:h-auto"
        >
          {/* Box only shows on desktop (md and above) */}
          <div className="hidden md:block absolute 
      left-[500px] top-[470px] -translate-y-1/2
      bg-black/20 backdrop-blur-sm rounded-xl 
      px-8 py-6
      w-[418px]
      text-center shadow-lg space-y-3 z-10 h-[160px]">

            {/* Title */}
            <h1 className="text-5xl font-extrabold text-green-600">
              CBG Plant <span className="text-white/80">Visit</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-lg font-light leading-relaxed">
              Shaping the future with sustainable energy innovations.
            </p>
          </div>
        </HeroBanner>
      </div>
      <VisitPlantCompOne />
      <VisitPlantComp />
      <VisitPlantCompTwo />
      <Footer />
    </div>
  )
}

export default Visitplant             