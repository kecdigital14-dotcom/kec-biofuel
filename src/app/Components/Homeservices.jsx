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
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100 text-white py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-2">
          <p className="text-gray-800 text-sm font-semibold mb-2">BUILD WITH EASE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Powerful Features</h2>
        </div>

        {/* Scroll Buttons */}
        <div className="flex justify-end mb-4 gap-2">
          <button
            onClick={scrollLeft}
            className="text-gray-900 border border-black px-3 py-1 font-bold rounded hover:bg-white hover:text-black transition"
            aria-label="Scroll left"
          >
            &#8592;
          </button>
          <button
            onClick={scrollRight}
            className="text-gray-900 border border-black px-3 py-1 font-bold rounded hover:bg-white hover:text-black transition"
            aria-label="Scroll right"
          >
            &#8594;
          </button>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[250px] sm:min-w-[280px] lg:min-w-[300px] bg-white text-left text-black rounded-xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-600">{service.title}</h3>
                <p className="font-sans text-sm mb-6 text-justify text-gray-700">{service.description}</p>
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
