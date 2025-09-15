"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Scrolling Top Banner Component with Faster Restart
const ScrollingTopBanner = ({ isVisible }) => {
  const scrollText =
    "🏆 Jitendra Narayan, CEO & Founder of KEC Agritech, Honoured with R.E.A.L Excellence Award 2025. Recognition celebrates KEC's leadership in agri-innovation, Bio-CNG and the Kisan Experience Centre model that empowers farmers and agri-entrepreneurs.🥇";

  return (
    <div
      className={`bg-green-600 text-white py-2 overflow-hidden fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="animate-scroll-with-gap whitespace-nowrap">
        <span className="text-sm font-semibold inline-block px-4">
          {scrollText}
        </span>
      </div>
      <style jsx>{`
        @keyframes scrollWithGap {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll-with-gap {
          animation: scrollWithGap 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTopBanner, setShowTopBanner] = useState(true);

  // Mobile submenu states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowTopBanner(scrollY < 50); // Hide banner after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scrolling Top Banner */}
      <ScrollingTopBanner isVisible={showTopBanner} />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 bg-gray-100 transition-all duration-300`}
        style={{
          marginTop: showTopBanner ? "40px" : "0px", // push navbar down when banner visible
        }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/images/kec-logo.png"
                alt="Energox Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-green-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-4 md:ml-16">
              <div className="relative group">
                <a
                  href="/"
                  className="text-green-700 text-lg hover:text-green-400 transition-colors font-bold"
                >
                  Home
                </a>
              </div>

              {/* About Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center text-green-700 text-lg font-bold space-x-1 hover:text-green-400 transition-colors duration-200 group"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                >
                  <span>About Us</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isAboutOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isAboutOpen && (
                  <div className="absolute top-full left-[-5px] mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    <a
                      href="ceo"
                      className="block px-3 py-2 text-lg font-bold text-green-700 hover:text-green-400 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Our CEO
                    </a>
                    <a
                      href="about"
                      className="block leading-tight px-3 py-2 text-green-700 hover:bg-gray-50 text-lg font-bold hover:text-green-400 transition-colors duration-200"
                    >
                      KEC-BioFuel
                    </a>
                  </div>
                )}
              </div>

              {/* Other Links */}
              <a
                href="superteam"
                className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors"
              >
                Our Super Team
              </a>
              <a
                href="cbg"
                className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors"
              >
                CBG Park
              </a>
              <a
                href="r&d"
                className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors"
              >
                R&D
              </a>
              <a
                href="project"
                className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="blog"
                className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors"
              >
                Blog
              </a>
            </div>

            {/* Right CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/contact"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors font-sans text-sm font-semibold"
              >
                Contact Us
                <br />
                +91-8527626868
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-gray-200">
              <div className="mt-4 flex flex-col space-y-3 bg-gray-100 rounded-xl px-6 py-4 shadow font-bold text-green-700 text-base">
                <a href="/" className="hover:text-green-400 transition-colors">
                  Home
                </a>
                <a
                  href="superteam"
                  className="hover:text-green-400 transition-colors py-1"
                >
                  Our Super Team
                </a>
                <a
                  href="cbg"
                  className="hover:text-green-400 transition-colors py-1"
                >
                  CBG Park
                </a>
                <a
                  href="r&d"
                  className="hover:text-green-400 transition-colors py-1"
                >
                  R&D
                </a>
                <a
                  href="project"
                  className="hover:text-green-400 transition-colors py-1"
                >
                  Projects
                </a>
                <a
                  href="blog"
                  className="hover:text-green-400 transition-colors py-1"
                >
                  Blog
                </a>
                <a
                  href="contact"
                  className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors w-fit mt-3 text-sm"
                >
                  Contact Us
                  <br />
                  +91-8287933634
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
