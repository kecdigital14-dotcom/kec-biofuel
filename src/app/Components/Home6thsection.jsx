'use client';

import Image from 'next/image';

import { FiPlay, FiCheckCircle, FiDollarSign } from 'react-icons/fi';

const Home6thsection = () => {
  return (
    <section className="bg-[#f6fcf6] py-16 px-4 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-[80%] mx-auto">

        {/* LEFT CONTENT */}
        <div>
          {/* Tag */}
          <span className="inline-block bg-white text-green-700 border border-green-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            GLOBAL SUSTAINABILITY
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 ">
            Advancing Self-Sustainable Global Goals Through Biofuels
          </h2>

          {/* Description */}
          <p className="text-gray-700 mb-6 font-sans text-justify">
            Biofuels, especially Bio-CBG, are a key enabler of a sustainable energy ecosystem. Produced from agricultural residue, organic waste, and renewable biomass, they significantly lower greenhouse gas emissions while reducing dependency on fossil fuels.
          </p>

          {/* Features */}
          <ul className="space-y-3 text-gray-700 mb-8 font-sans">
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
