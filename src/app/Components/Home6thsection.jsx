'use client';

import Image from 'next/image';

import { FiPlay, FiCheckCircle, FiDollarSign } from 'react-icons/fi';

const Home6thsection = () => {
  return (
    <section className="bg-[#f6fcf6] py-16 px-4 lg:mb-1 mb-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center lg:w-[80%] w-[90%] mx-auto">

        {/* LEFT CONTENT */}
        <div>
          {/* Tag */}
          {/* <span className="inline-block bg-white text-green-700 border border-green-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            GLOBAL SUSTAINABILITY
          </span> */}
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm border border-green-100 mb-4 sm:mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold text-xs sm:text-sm tracking-wider uppercase">GLOBAL SUSTAINABILITY</span>
            <div className="w-6 sm:w-8 h-px bg-green-300"></div>
          </div>

          {/* Heading */}
          {/* <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 ">
            Advancing Self-Sustainable Global Goals Through Biofuels
          </h2> */}
          <h2 className="text-3xl lg:text-[37px] font-bold text-green-800 leading-tight text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text">
                Advancing Self-Sustainable <br /> <span className="text-green-600">Global Goals Through Biofuels
                  </span>
              </h2>

          {/* Description */}
          <p className="text-gray-700 mb-6  text-justify">
            Biofuels, especially Bio-CBG, are a key enabler of a sustainable energy ecosystem. Produced from agricultural residue, organic waste, and renewable biomass, they significantly lower greenhouse gas emissions while reducing dependency on fossil fuels.
          </p>

          {/* Features */}
          <ul className="space-y-3 text-gray-700 mb-8 text-[14.4px]">
            <li className="flex items-start">
              <FiCheckCircle className="text-green-600 mt-1 mr-2 font-sans" />
             Accelerates the transition to clean energy and supports UN SDGs like Affordable & Clean Energy and Climate Action.
            </li>
            <li className="flex items-start">
              <FiCheckCircle className="text-green-600 mt-1 mr-2 font-sans" />
              Boosts rural economy through job creation and local feedstock cultivation.
            </li>
            <li className="flex items-start">
              <FiCheckCircle className="text-green-600 mt-1 mr-2" />
              Enhances energy security by reducing reliance on fossil fuel imports.
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/support"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow-md"
            >
              <FiDollarSign className="text-xl" />
              <span className="text-sm font-semibold">SUPPORT THE MISSION</span>
            </a>

            <button className="flex items-center gap-2 text-green-800 font-semibold hover:underline">
              <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center">
                <FiPlay />
              </div>
              <span className="text-sm">WATCH IMPACT VIDEO</span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGES PLACEHOLDER */}
        <div className="relative">
          {/* Top Image */}
          <div className="w-full h-[280px] rounded-lg overflow-hidden shadow-lg mb-4 bg-gray-300">
            <Image
              src="/images/biofuel2.png"
              alt="Charging Car"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="w-72 h-56 rounded-lg overflow-hidden shadow-md absolute bottom-0 right-0 top-55 bg-gray-200 border-2 border-white">
            <Image
              src="/images/homeglobal2nd.jpg"
              alt="Charging Car"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home6thsection;
