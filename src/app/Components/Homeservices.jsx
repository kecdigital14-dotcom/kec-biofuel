'use client';

import { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  {
    title: 'PMC Services',
    description:
      'Comprehensive Project Management Consultancy for biofuel infrastructure – from feasibility to commissioning.',
    icon: '📝',
    link: '/services/pmc',
  },
  {
    title: 'EPC Solutions',
    description:
      'Turnkey Engineering, Procurement & Construction for Bio-CNG, Bio-Diesel, and Ethanol plants across India.',
    icon: '🏗️',
    link: '/services/epc',
  },
  {
    title: 'PPP Projects',
    description:
      'Working with state governments under PPP mode, including ₹500 Cr MoU with Uttarakhand for bio-energy parks.',
    icon: '🤝',
    link: '/services/ppp',
  },
  {
    title: 'Project Developer – CAPEX / OPEX',
    description:
      'Build, own, and operate biofuel projects under flexible models like CAPEX, OPEX, and RESCO partnerships.',
    icon: '⚙️',
    link: '/services/development',
  },
  {
    title: 'O&M Services',
    description:
      'Operation & Maintenance of biofuel, ETP/STP, and gas purification systems with efficiency-driven SLAs.',
    icon: '🔧',
    link: '/services/maintenance',
  },
  {
    title: 'Revamp & Upgrade',
    description:
      'Modernize outdated biogas, STP, or ETP plants with new tech, automation, and performance optimization.',
    icon: '🔄',
    link: '/services/upgradation',
  },
  {
    title: 'Hydrogen & Renewables',
    description:
      'Emerging solutions in hydrogen production, solar integration, and next-gen renewables for clean energy.',
    icon: '⚡',
    link: '/services/hydrogen',
  },
  {
    title: 'Tech Advisory & DPR',
    description:
      'Detailed Project Reports (DPR), techno-economic feasibility, and advisory for scalable green energy rollouts.',
    icon: '📊',
    link: '/services/advisory',
  },
];

const Homeservices = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100 text-white py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
         
           <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm border border-green-100 mb-4 sm:mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold text-xs sm:text-sm tracking-wider uppercase">BUILD WITH EASE</span>
            <div className="w-6 sm:w-8 h-px bg-green-300"></div>
          </div>
          {/* <h2 className="text-3xl md:text-4xl font-bold text-black">Powerful Features</h2> */}
          <h2 className="text-3xl lg:text-[45px] font-bold text-green-800 leading-tight text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text">
                Powerful <span className="text-green-600">Features
                  </span>
              </h2>
        </div>

        {/* Scroll Buttons (visible on all screens) */}
        <div className="flex justify-end mb-4 gap-2">
          <button
            onClick={scrollLeft}
            className="text-gray-900 border border-black px-3 py-1 font-bold rounded hover:bg-white hover:text-black transition"
            aria-label="Scroll left"
            type="button"
          >
            &#8592;
          </button>
          <button
            onClick={scrollRight}
            className="text-gray-900 border border-black px-3 py-1 font-bold rounded hover:bg-white hover:text-black transition"
            aria-label="Scroll right"
            type="button"
          >
            &#8594;
          </button>
        </div>

        {/* Horizontal scroll on ALL screens */}
        <div
          ref={scrollRef}
          className="
            flex flex-nowrap gap-6 overflow-x-auto overflow-y-hidden pb-4
            hide-scrollbar scroll-smooth touch-pan-x snap-x snap-mandatory
            overscroll-x-contain
          "
          role="region"
          aria-label="Services carousel"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                min-w-[250px] sm:min-w-[280px] lg:min-w-[300px]
                bg-white text-left text-black rounded-xl p-6 
                flex flex-col justify-between shadow-md hover:shadow-xl 
                transition-shadow duration-300 snap-start
              "
            >
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-700">{service.title}</h3>
                <p className="font-sans text-sm mb-6 text-justify text-gray-600">
                  {service.description}
                </p>
              </div>
              <a
                href={service.link}
                className="inline-flex items-center text-gray-900 font-sans hover:underline text-sm font-medium"
              >
                Learn More <FiArrowRight className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Homeservices;
