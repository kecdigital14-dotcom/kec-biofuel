import React from 'react';
import { ChevronRight, Leaf, Factory, BookOpen, HelpCircle, Lightbulb } from 'lucide-react';

const Footer = () => {
    const footerSections = [
        {
            title: "Why KEC-BIOFUEL",
            icon: <Lightbulb className="w-5 h-5" />,
            items: [
                "About KEC-BIOFUEL",
                "Benefits of KEC-BIOFUEL"
            ]
        },
        {
            title: "Lets Know CBG",
            icon: <Factory className="w-5 h-5" />,
            items: [
                "White Paper on CBG",
                "Biogas",
                "Purification",
                "Compression",
                "Compressed Biogas (CBG)",
                "Cascade Storage",
                "Transportation"
            ]
        },
        {
            title: "Organic Fertilizers",
            icon: <Leaf className="w-5 h-5" />,
            items: [
                "About Organic Fertilizers",
                "Support for Organic Fertilizers"
            ]
        },
        {
            title: "Enablers Of Scheme",
            icon: <ChevronRight className="w-5 h-5" />,
            items: [
                "Assured Long-Term Pricing",
                "Facilitation by OMCs through LOI",
                "Priority Sector Lending",
                "Central Financial Assistance by MNRE"
            ]
        },
        {
            title: "Technology",
            icon: <Factory className="w-5 h-5" />,
            items: [
                "Biogas Production Technology",
                "Purification Technology",
                "Compression Technology"
            ]
        },
        {
            title: "Learning Modules",
            icon: <BookOpen className="w-5 h-5" />,
            items: []
        }
    ];

    const processSections = [
        {
            title: "Major Process Involved",
            items: [
                "Expression of Interest",
                "Letter of Intent",
                "Retail Outlet selection and readiness",
                "Signing of Commercial Agreement",
                "Sale of CBG through RO"
            ]
        },
        {
            title: "Complete Process at a Glance",
            items: []
        },
        {
            title: "FAQs",
            items: []
        },
        {
            title: "Participation in SATAT Scheme",
            items: []
        }
    ];

    const developmentItems = [
        "Synchronization of CBG in CGD network",
        "Fertilizer Control Order & Environmental Clearances",
        "Priority Sector Lending for CBG Projects",
        "Loan Facilitation by Banks",
        "Commercial Agreement (Version 1 and 2)",
        "Central Financial Assistance by MNRE",
        "Commissioned Plants"
    ];

    return (
        <footer className="bg-gradient-to-br from-green-50 via-green-100 to-green-400 text-gray-800 relative overflow-hidden">
            {/* Background Pattern */}
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
                                            <a href="#" className="group/link flex items-center text-gray-600 hover:text-green-800 transition-all duration-300 hover:translate-x-2">
                                                <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-green-600" />
                                                <span className="text-sm leading-relaxed font-sans font-semibold text-gray-500">{item}</span>
                                            </a>
                                        </li>
                                    ))}
                                    {section.items.length === 0 && (
                                        <li>
                                            <a href="#" className="group/link flex items-center text-gray-600 hover:text-green-800 transition-all duration-300 hover:translate-x-2">
                                                <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-green-600" />
                                                <span className="text-sm leading-relaxed font-sans font-semibold text-gray-500">Learn More</span>
                                            </a>
                                        </li>
                                    )}
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
                                            <a href="#" className="group/link flex items-center text-gray-600 hover:text-green-800 transition-all duration-300 hover:translate-x-2">
                                                <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-green-600" />
                                                <span className="text-sm leading-relaxed font-sans font-semibold text-gray-500">{item}</span>
                                            </a>
                                        </li>
                                    ))}
                                    {section.items.length === 0 && (
                                        <li>
                                            <a href="#" className="group/link flex items-center text-gray-600 hover:text-green-800 transition-all duration-300 hover:translate-x-2">
                                                <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-green-600" />
                                                <span className="text-sm leading-relaxed font-sans font-semibold text-gray-500">Explore</span>
                                            </a>
                                        </li>
                                    )}
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
                                        <a href="#" className="group/link flex items-center text-gray-600 hover:text-green-800 transition-all duration-300 hover:translate-x-2">
                                            <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-green-600" />
                                            <span className="text-sm leading-relaxed font-sans font-semibold text-gray-500">{item}</span>
                                        </a>
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
                                <p className="text-gray-700 text-sm leading-relaxed mb-4 font-sans font-semibold text-gray-500">
                                    Need assistance with KEC scheme? Our team is here to help you navigate through the sustainable energy journey.
                                </p>
                                <a
                                    href="/contact" // replace with your desired link
                                    className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
                                >
                                    Get Support
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-green-600/30">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-4">
                            <Leaf className="w-6 h-6 text-green-600" />
                            <span className="text-gray-600 text-sm">
                                © 2025 by Developers Infotech Pvt Ltd . All Right Reserved with KEC
                            </span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-gray-600 hover:text-green-800 text-sm transition-colors duration-300 font-sans font-semibold text-gray-500">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-800 text-sm transition-colors duration-300 font-sans font-semibold text-gray-500">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-800 text-sm transition-colors duration-300 font-sans font-semibold text-gray-500">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;