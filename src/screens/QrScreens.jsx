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


        <HeroBanner backgroundImage="/images/bannernew2.png" >
          <div className="bg-black/5 backdrop-blur-md rounded-xl px-8 py-4 max-w-sm mx-auto text-center shadow-sm space-y-2 lg:mt-[-250px]">
            <img src="/images/logo.png" alt="" srcset="" className='w-[80%] h-[80%] mx-auto my-8' />
            {/* Title */}


            {/* Decorative Line */}
            <div className="mx-auto w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"></div>

            {/* Subtitle */}
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
              Shaping the future with sustainable energy innovations.
            </p>

            {/* CTA Button */}
            <button className="mt-2 mb-3 px-6 py-3 bg-emerald-500 rounded-full text-white font-semibold shadow hover:scale-105 transition-transform">
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
