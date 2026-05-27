
import dynamic from 'next/dynamic';
import Image from 'next/image';
import HeroBanner from '@/app/Components/HeroBanner'
import Navbar from '@/app/Components/Navbar'






import React from 'react'

const LazyLoader = () => (
  <div className="w-full flex justify-center items-center py-16">
    <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Footer = dynamic(() => import('@/app/Components/Footer'), { ssr: false, loading: () => <LazyLoader /> });
const QrCompOne = dynamic(() => import('@/app/Components/QrCompOne'), { ssr: false, loading: () => <LazyLoader /> });
const QrComp = dynamic(() => import('@/app/Components/QrCompOne'), { ssr: false, loading: () => <LazyLoader /> });
const QrcompThree = dynamic(() => import('@/app/Components/QrCompThree'), { ssr: false, loading: () => <LazyLoader /> });
const QrCompFour = dynamic(() => import('@/app/Components/QrCompFour'), { ssr: false, loading: () => <LazyLoader /> });
const QrCompTwo = dynamic(() => import('@/app/Components/QrCompTwo'), { ssr: false, loading: () => <LazyLoader /> });
const QrServices = dynamic(() => import('@/app/Components/QrServices'), { ssr: false, loading: () => <LazyLoader /> });
const QrCta = dynamic(() => import('@/app/Components/QtCta'), { ssr: false, loading: () => <LazyLoader /> });
const QrVisCards = dynamic(() => import('@/app/Components/QrVisCards'), { ssr: false, loading: () => <LazyLoader /> });



const QrScreens = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[500px] sm:h-[550px] md:h-[550px] overflow-hidden relative ">
        <HeroBanner backgroundImage="/images/bannernew2.png">
          <div className="flex items-center justify-center min-h-[500px] sm:min-h-[550px] md:min-h-[550px] sm:px-4 px-10 py-8 sm:mt-[-40px] mt-[-40px]">
            <div className="bg-black/5 backdrop-blur-md rounded-xl px-4 sm:px-8 sm:py-6 py-3 w-[90%] sm:max-w-sm text-center shadow-sm sm:space-y-2 space-y-1">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={800}
                height={600}
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