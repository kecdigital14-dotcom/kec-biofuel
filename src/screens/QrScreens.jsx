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
      <div className="h-[500px] sm:h-[550px] md:h-[550px] overflow-hidden relative ">
        <HeroBanner backgroundImage="/images/bannernew2.png">
          <div className="flex items-center justify-center min-h-[500px] sm:min-h-[550px] md:min-h-[550px] sm:px-4 px-10 py-8 sm:mt-[-40px] mt-[-40px]">
            <div className="bg-black/5 backdrop-blur-md rounded-xl px-4 sm:px-8 sm:py-6 py-3 w-[90%] sm:max-w-sm text-center shadow-sm sm:space-y-2 space-y-1">
              <img
                src="/images/logo.png"
                alt="Company Logo"
                className='w-[70%] sm:w-[80%] h-auto mx-auto my-2 sm:my-3'
              />

              {/* Subtitle */}
              <p className="text-white/80 text-sm sm:text-lg md:text-lg font-light leading-relaxed px-2 ">
                Shaping the future with sustainable energy innovations.
              </p>

              {/* CTA Button */}
              <button className="sm:mt-3 mb-2 px-5 sm:px-6 py-2 sm:py-3 bg-emerald-500 rounded-full text-white text-sm sm:text-base text-sm font-semibold shadow hover:scale-105 transition-transform active:scale-95">
                Explore Our Vision →
              </button>
            </div>
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