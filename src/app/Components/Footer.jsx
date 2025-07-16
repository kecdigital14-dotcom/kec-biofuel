"use client";
import React from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
                    {/* Column 1 - Brand */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">KISAN EXPERIENCE CENTER</h2>
                        <p className="text-sm w-[90%] font-sans">At Kisanexperincecentre, we are dedicated to transforming agriculture through innovative and reliable solutions.</p>
                        <div className="flex gap-3 mt-4">
                            <a className="bg-white/10 hover:bg-white/20 p-2 rounded-full" href="#"><FaFacebookF /></a>
                            <a className="bg-white/10 hover:bg-white/20 p-2 rounded-full" href="#"><FaLinkedinIn /></a>
                            <a className="bg-white/10 hover:bg-white/20 p-2 rounded-full" href="#"><FaYoutube /></a>
                            <a className="bg-white/10 hover:bg-white/20 p-2 rounded-full" href="#"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Column 2 - Pages */}
                    <div>
                        <h3 className="font-semibold text-base mb-4">Pages</h3>
                        <ul className="space-y-2 text-sm text-gray-300 font-sans">
                            <li>About Us</li>
                            <li>Our Services</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    {/* Column 3 - Product Category */}
                    <div>
                        <h3 className="font-semibold text-base mb-4">Product Category</h3>
                        <ul className="space-y-2 text-sm text-gray-300 font-sans">
                            <li>Agri Inputs</li>
                            <li>Agri Field</li>
                            <li>Solar Products</li>
                            <li>Smart Farming</li>
                            <li>Electric Vehicle</li>
                        </ul>
                    </div>

                    {/* Column 4 - Business Models */}
                    <div>
                        <h3 className="font-semibold text-base mb-4">Business Models</h3>
                        <ul className="space-y-2 text-sm text-gray-300 font-sans">
                            <li>Elite Franchise Brand</li>
                            <li>Master Franchise Agro</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center text-sm text-gray-400 py-4 font-sans">
                    © 2025 by Developers Infotech Pvt Ltd. All Right Reserved with KEC
                </div>
            </div>
        </footer>
    );
};

export default Footer;
