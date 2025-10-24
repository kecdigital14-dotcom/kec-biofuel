import Footer from '@/app/Components/Footer'
import HeroBanner from '@/app/Components/HeroBanner'
import Navbar from '@/app/Components/Navbar'
import QrCompOne from '@/app/Components/QrCompOne'
import QrComp from '@/app/Components/QrCompOne'
import QrcompThree from '@/app/Components/QrCompThree'
import QrCompFour from '@/app/Components/QrCompFour'
import QrCompTwo from '@/app/Components/QrCompTwo'
import QrServices from '@/app/Components/QrServices'
import React from 'react'
import QrCta from '@/app/Components/QtCta'
import QrVisCards from '@/app/Components/QrVisCards'

const QrScreens = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[450px] md:h-[450px] overflow-hidden">


        <HeroBanner backgroundImage="/images/bannernew2.png">
          <div className="bg-black/5 backdrop-blur-md rounded-xl  sm:px-8 py-4 sm:py-6 max-w-[90%] sm:max-w-sm mx-auto text-center shadow-sm space-y-2 mt-4 sm:mt-0 lg:mt-[-250px]">
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className='w-[70%] sm:w-[80%] h-auto mx-auto my-4 sm:my-8'
            />

            {/* Decorative Line */}
            <div className="mx-auto w-16 sm:w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"></div>

            {/* Subtitle */}
            <p className="text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed px-2">
              Shaping the future with sustainable energy innovations.
            </p>

            {/* CTA Button */}
            <button className="mt-2 mb-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-emerald-500 rounded-full text-white text-sm sm:text-base font-semibold shadow hover:scale-105 transition-transform active:scale-95">
              Explore Our Vision →
            </button>
          </div>
        </HeroBanner>
      </div>
      <QrCompOne />
      <QrcompThree />
      <QrCompFour />
      {/* <QrCompTwo/> */}
      <QrServices />
      <QrCta />
      <QrVisCards />
      <Footer />
    </div>
  )
}

export default QrScreens
