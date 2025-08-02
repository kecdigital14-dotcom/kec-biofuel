"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Reusable Navbar Component
const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <a href="/" className="text-green-700 text-lg hover:text-green-400 transition-colors font-bold">
              Home
            </a>
            <a href="about" className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors">
              About Us
            </a>
            <a href="superteam" className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors">
              Our Super Team
            </a>
            <a href="cbg" className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors">
              CBG Park
            </a>
            <a href="r&d" className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors">
              R&D
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-green-700 text-lg font-bold space-x-1 hover:text-green-400 transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button> 
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg py-2 font-bold">
                  <a href="pmc" className="block px-4 py-2 text-lg font-bold text-green-700 hover:text-green-400 transition-colors hover:bg-gray-100">PMC</a>
                  <a href="epc" className="block px-4 py-2 text-green-700 hover:bg-gray-100  text-lg font-bold hover:text-green-400 transition-colors">EPC</a>
                </div>
              )}
            </div>

            <a href="project" className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors">
              Projects
            </a>
            <a href="blog" className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors">
              Blog
            </a>
            <a href="gallery" className="text-green-700 text-lg font-bold hover:text-green-400 transition-colors">
              Gallery
            </a>
          </div>

          {/* Right Side - Social Icons and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Icons */}
            <div className="hidden lg:flex items-center space-x-2">
            </div>

            {/* Contact Us Button */}
            <a
              href="/contact"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors font-sans text-sm font-semibold"
            >
              Contact Us<br/>+91 8527-626-868
            </a>

            {/* Phone   Number */}
            {/* <div className="hidden xl:flex items-center space-x-2 text-green-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <div className="text-xs">Call us now</div>
                <div className="font-bold">+91 8527-626-868</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-gray-200">
            <div className="mt-4 flex flex-col space-y-3 bg-gray-100 rounded-xl px-6 py-4 shadow font-bold text-green-700 text-base">
              <a href="/" className="hover:text-green-400 transition-colors">Home</a>
              <a href="about" className="hover:text-green-400 transition-colors">About Us</a>
              <a href="super-team" className="hover:text-green-400 transition-colors">Our Super Team</a>
              <a href="cbg-park" className="hover:text-green-400 transition-colors">CBG Park</a>
              <a href="rd" className="hover:text-green-400 transition-colors">R&D</a>
              
              {/* Mobile Services Submenu */}
              <div>
                <button
                  className="flex items-center space-x-1 hover:text-green-400 transition-colors w-full text-left"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="pmc" className="block hover:text-green-400 transition-colors">PMC</a>
                    <a href="epc" className="block hover:text-green-400 transition-colors">EPC</a>
                  </div>
                )}
              </div>
              
              <a href="project" className="hover:text-green-400 transition-colors">Projects</a>
              <a href="blog" className="hover:text-green-400 transition-colors">Blog</a>
              <a href="gallery" className="hover:text-green-400 transition-colors">Gallery</a>
              <a href="contact" className="hover:text-green-400 transition-colors">Contact Us</a>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors w-fit">
                Get a Quote →
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;