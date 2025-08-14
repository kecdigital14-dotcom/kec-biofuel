"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Leaf, Factory, BookOpen, HelpCircle, Lightbulb } from 'lucide-react';

const Footer = () => {
    const footerSections = [
        {
            title: "Why KEC-BIOFUEL",
            icon: <Lightbulb />,
            items: [
                { name: "About KEC-BIOFUEL", path: "/about" },
                { name: "Benefits of KEC-BIOFUEL", path: "/about" }
            ]
        },
        {
            title: "Lets Know CBG",
            icon: <Factory />,
            items: [
                { name: "Biogas", path: "/biogas" },
                { name: "Purification", path: "/biogas" },
                { name: "Compression", path: "/biogas" },
                { name: "Compressed Biogas (CBG)", path: "/biogas" },
                { name: "Cascade Storage", path: "/biogas" },
                { name: "Transportation", path: "/biogas" }
            ]
        },
        {
            title: "Organic Fertilizers",
            icon: <Leaf />,
            items: [
                { name: "About Organic Fertilizers", path: "https://kisanexperience.com/" },
                { name: "Support for Organic Fertilizers", path: "https://kisanexperience.com/support" }

            ]
        },
        {
            title: "Enablers Of Scheme",
            icon: <ChevronRight />,
            items: [
                { name: "Assured Long-Term Pricing", path: "/enablesschemes" },
                { name: "Facilitation by OMCs through LOI", path: "/enablesschemes" },
                { name: "Priority Sector Lending", path: "/enablesschemes" },
                { name: "Central Financial Assistance by MNRE", path: "/enablesschemes" }
            ]
        },
        {
            title: "Technology",
            icon: <Factory />,
            items: [
                { name: "Biogas Production Technology", path: "/technology" },
                { name: "Purification Technology", path: "/technology" },
                { name: "Compression Technology", path: "/technology" }
            ]
        },
        {
            title: "Learning Modules",
            icon: <BookOpen />,
            items: [
                { name: "Learn More", path: "/cbgdownload" }
            ]
        }
    ];

    const processSections = [
        {
            title: "Major Process Involved",
            items: [
                { name: "Expression of Interest", path: "/majorprocess" },
                { name: "Letter of Intent", path: "/majorprocess" },
                { name: "Retail Outlet selection and readiness", path: "/majorprocess" },
                { name: "Signing of Commercial Agreement", path: "/majorprocess" },
                { name: "Sale of CBG through RO", path: "/majorprocess" }
            ]
        },
        { title: "Complete Process at a Glance", items: [{ name: "Explore", path: "/about" }] },
        { title: "FAQs", items: [{ name: "Read FAQs", path: "/contact" }] },
        { title: "Participation in KEC Scheme", items: [{ name: "Join Now", path: "/contact" }] }
    ];

    const developmentItems = [
        { name: "Synchronization of CBG in CGD network", path: "/latestdevlopment" },
        { name: "Fertilizer Control Order & Environmental Clearances", path: "/latestdevlopment" },
        { name: "Priority Sector Lending for CBG Projects", path: "/latestdevlopment" },
        { name: "Loan Facilitation by Banks", path: "/latestdevlopment" },
        { name: "Commercial Agreement (Version 1 and 2)", path: "/latestdevlopment" },
        { name: "Central Financial Assistance by MNRE", path: "/latestdevlopment" },
        { name: "Commissioned Plants", path: "/latestdevlopment" }
    ];

    return (
        <footer className="bg-gradient-to-br from-green-50 via-green-100 to-green-400 text-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent transform -skew-y-1"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-3 mb-4">
                        <Leaf className="w-8 h-8 text-green-600" />
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent">
                            A Step Towards A Sustainable Future
                        </h2>
                        <Leaf className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Left Column - Main Sections */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                        {footerSections.map((section, index) => (
                            <div key={index} className="group">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="p-2 bg-green-600/10 rounded-lg group-hover:bg-green-600/20 transition-colors duration-300 border border-green-600/20">
                                        {React.cloneElement(section.icon, { className: "w-5 h-5 text-green-700" })}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-800 transition-colors duration-300">
                                        {section.title}
                                    </h3>
                                </div>

                                <ul className="space-y-3">
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Link href={item.path} className="group/link flex items-center text-gray-600 hover:text-green-800 transition-all duration-300 hover:translate-x-2">
                                                <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-green-600" />
                                                <span className="text-sm leading-relaxed font-sans font-semibold">{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Middle Column - Process */}
                    <div className="space-y-8">
                        {processSections.map((section, index) => (
                            <div key={index} className="group">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="p-2 bg-green-600/10 rounded-lg group-hover:bg-green-600/20 transition-colors duration-300 border border-green-600/20">
                                        <HelpCircle className="w-5 h-5 text-green-700" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-800 transition-colors duration-300">
                                        {section.title}
                                    </h3>
                                </div>

                                <ul className="space-y-3">
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Link href={item.path} className="group/link flex items-center text-gray-600 hover:text-green-800 transition-all duration-300 hover:translate-x-2">
                                                <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-green-600" />
                                                <span className="text-sm leading-relaxed font-sans font-semibold">{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Latest Developments */}
                    <div className="space-y-8">
                        <div className="group">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-2 bg-green-600/10 rounded-lg group-hover:bg-green-600/20 transition-colors duration-300 border border-green-600/20">
                                    <Lightbulb className="w-5 h-5 text-green-700" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-800 transition-colors duration-300">
                                    Latest Developments
                                </h3>
                            </div>

                            <ul className="space-y-3">
                                {developmentItems.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.path} className="group/link flex items-center text-gray-600 hover:text-green-800 transition-all duration-300 hover:translate-x-2">
                                            <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-green-600" />
                                            <span className="text-sm leading-relaxed font-sans font-semibold">{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Help Section */}
                        <div className="group">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-2 bg-green-600/10 rounded-lg group-hover:bg-green-600/20 transition-colors duration-300 border border-green-600/20">
                                    <HelpCircle className="w-5 h-5 text-green-700" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-800 transition-colors duration-300">
                                    How can we help
                                </h3>
                            </div>

                            <div className="bg-white/30 rounded-xl p-6 backdrop-blur-sm border border-green-600/20 hover:bg-white/40 transition-all duration-300 shadow-lg">
                                <p className="text-gray-700 text-sm leading-relaxed mb-4 font-sans font-semibold">
                                    Need assistance with KEC scheme? Our team is here to help you navigate through the sustainable energy journey.
                                </p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
                                >
                                    Get Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-green-600/30">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-4">
                            <Leaf className="w-6 h-6 text-green-600" />
                            <span className="text-gray-600 text-sm font-sans ">
                                © 2025 by Developers Infotech Pvt Ltd. All Rights Reserved with KEC
                            </span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <Link href="/privacypolicy" className="text-gray-600 hover:text-green-800 text-sm transition-colors duration-300 font-sans font-semibold">
                                Privacy Policy
                            </Link>
                            <Link href="/termsandcondition" className="text-gray-600 hover:text-green-800 text-sm transition-colors duration-300 font-sans font-semibold">
                                Terms of Service
                            </Link>
                            <Link href="/contact" className="text-gray-600 hover:text-green-800 text-sm transition-colors duration-300 font-sans font-semibold">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
