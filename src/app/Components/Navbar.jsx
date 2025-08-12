"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Reusable Navbar Component
const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile submenu states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100">
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 md:ml-16">
            <div className="relative group">
              <a href="/" className="text-green-700 text-lg hover:text-green-400 transition-colors font-bold">
                Home
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-3/4"></span>
            </div>

            <div className="relative">
              <button
                className="flex items-center text-green-700 text-lg font-bold space-x-1 hover:text-green-400 transition-colors duration-200 group"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                <span>About Us</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-3/4"></span>
              </button>
              {isAboutOpen && (
                <div className="absolute top-full left-[-5px] mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <a href="ceo" className="block px-3 py-2 text-lg font-bold text-green-700 hover:text-green-400 hover:bg-gray-50 transition-colors duration-200">
                    Our CEO
                  </a>
                  <a href="about" className="block leading-tight px-3 py-2 text-green-700 hover:bg-gray-50 text-lg font-bold hover:text-green-400 transition-colors duration-200">
                    About the Organization
                  </a>
                </div>
              )}
            </div>

            <div className="relative group">
              <a href="superteam" className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors">
                Our Super Team 
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-3/4"></span>
            </div>

            <div className="relative group">
              <a href="cbg" className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors">
                CBG Park
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-3/4"></span>
            </div>

            <div className="relative group">
              <a href="r&d" className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors">
                R&D
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-3/4"></span>
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-green-700 text-lg font-bold space-x-1 hover:text-green-400 transition-colors group"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-3/4"></span>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg py-2">
                  <a href="pmc" className="block px-4 py-2 text-lg font-bold text-green-700 hover:text-green-400 transition-colors hover:bg-gray-50">PMC</a>
                  <a href="epc" className="block px-4 py-2 text-green-700 hover:bg-gray-50 text-lg font-bold hover:text-green-400 transition-colors">EPC</a>
                </div>
              )}
            </div>

            <div className="relative group">
              <a href="project" className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors">
                Projects
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-3/4"></span>
            </div>

            {/* Library Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-green-700 text-lg font-bold space-x-1 hover:text-green-400 transition-colors group"
                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
              >
                <span>Library</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isGalleryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-3/4"></span>
              </button>
              {isGalleryOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 ">
                  <a href="gallery" className="block px-4 py-2 text-lg font-bold text-green-700 hover:text-green-400 transition-colors hover:bg-gray-50">Gallery</a>
                  <a href="cbgdownload" className="block px-4 py-2 text-lg font-bold text-green-700 hover:text-green-400 transition-colors hover:bg-gray-50">Download</a>
                </div>
              )}
            </div>

            <div className="relative group">
              <a href="blog" className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors">
                Blog
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-3/4"></span>
            </div>
          </div>

          {/* Right Side - Social Icons and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2"></div>
            <a
              href="/contact"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors font-sans text-sm font-semibold"
            >
              Contact Us<br />+91-8287933634
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-gray-200">
            <div className="mt-4 flex flex-col space-y-3 bg-gray-100 rounded-xl px-6 py-4 shadow font-bold text-green-700 text-base">
              <a href="/" className="hover:text-green-400 transition-colors">Home</a>
              
              {/* Mobile About Us Submenu */}
              <div>
                <button
                  className="flex items-center space-x-1 hover:text-green-400 transition-colors w-full text-left"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                >
                  <span>About Us</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileAboutOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="ceo" className="block hover:text-green-400 transition-colors">Our CEO</a>
                    <a href="about" className="block hover:text-green-400 transition-colors">About the Organization</a>
                  </div>
                )}
              </div>

              <a href="superteam" className="hover:text-green-400 transition-colors">Our Super Team</a>
              <a href="cbg" className="hover:text-green-400 transition-colors">CBG Park</a>
              <a href="r&d" className="hover:text-green-400 transition-colors">R&D</a>

              {/* Mobile Services Submenu */}
              <div>
                <button
                  className="flex items-center space-x-1 hover:text-green-400 transition-colors w-full text-left"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="pmc" className="block hover:text-green-400 transition-colors">PMC</a>
                    <a href="epc" className="block hover:text-green-400 transition-colors">EPC</a>
                  </div>
                )}
              </div>

              <a href="project" className="hover:text-green-400 transition-colors">Projects</a>

              {/* Mobile Library Submenu */}
              <div>
                <button
                  className="flex items-center space-x-1 hover:text-green-400 transition-colors w-full text-left"
                  onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}
                >
                  <span>Library</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${mobileGalleryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileGalleryOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="gallery" className="block hover:text-green-400 transition-colors">Gallery</a>
                    <a href="cbgdownload" className="block hover:text-green-400 transition-colors">Download</a>
                  </div>
                )}
              </div>

              <a href="blog" className="hover:text-green-400 transition-colors">Blog</a>
              <a href="contact" className="block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors w-fit mt-3">
                Contact Us<br />+91-8287933634
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;