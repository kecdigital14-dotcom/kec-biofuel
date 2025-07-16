'use client';

import { useState } from 'react';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';

/* ─────────────────────────────────────────
   Bio‑Fuel Frequently Asked Questions
────────────────────────────────────────── */

const faqs = [
  {
    question: 'What is Bio‑CNG and how is it produced?',
    answer:
      'Bio‑CNG (Compressed Bio‑Gas) is purified biogas upgraded to >95 % methane. We obtain it via anaerobic digestion of agri‑residues and organic waste, followed by CO₂ removal and compression.',
  },
  {
    question: 'Which feedstocks can be used in your plants?',
    answer:
      'Typical feedstocks include rice straw, sugar‑cane press‑mud, municipal solid waste (organic fraction), poultry litter, and cattle dung. Our pre‑treatment lines are configurable for regional biomass.',
  },
  {
    question: 'Are there government incentives for bio‑fuel projects?',
    answer:
      'Yes. The SATAT scheme, Viability Gap Funding, and state‑level CAPEX subsidies support Bio‑CNG. Ethanol blending policies (E20) and GST benefits also apply.',
  },
  {
    question: 'What environmental benefits do your projects deliver?',
    answer:
      'Each tonne of Bio‑CNG replaces ~1.3 t of CO₂‑eq emissions, mitigates stubble burning, and diverts organic waste from landfills—directly aligning with SDG 7 & SDG 13.',
  },
  {
    question: 'Can existing biogas plants be upgraded to Bio‑CNG?',
    answer:
      'Absolutely. We retrofit legacy digesters with gas‑upgrading skids, compression, and bottling units, turning low‑value biogas into transport‑grade fuel.',
  },
  {
    question: 'How long does an EPC cycle typically take?',
    answer:
      'For a standard 10 TPD Bio‑CNG plant, detailed engineering to commissioning is 12–14 months, subject to timely statutory approvals and feedstock tie‑ups.',
  },
];

/* Optional: update the tag text */


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); // All closed by default

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-green-500 font-bold text-lg mb-2">Bio‑Fuel FAQs</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-800">Frequently Asked Questions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-800">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl hover:shadow-lg transition-all duration-200 rounded-md font-sans"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-4 font-medium text-left"
              >
                <span>{item.question}</span>
                <span>
                  {openIndex === index ? (
                    <FiChevronDown className="transform rotate-180 transition-transform" />
                  ) : (
                    <FiArrowRight />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
