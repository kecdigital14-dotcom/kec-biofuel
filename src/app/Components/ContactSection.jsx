import React from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Zap, Leaf, Droplets, Factory, Recycle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                Ready to start your renewable energy project? Our expert team is here to help you 
                navigate every step of the process.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                    <p className="text-gray-300">
                      429, 4th Floor, Ansal Chamber 2,<br />
                      Metro Station - Gate No. 3,<br />
                      Bhikaji Cama Place, New Delhi - 110066
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                    <p className="text-gray-300">Mon-Sat: 9am-6pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <a 
                    href="tel:+918527626868" 
                    className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Phone className="w-6 h-6 text-green-400" />
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p className="text-gray-300">+91-8527626868</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:info@kecbiofuel.com" 
                    className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-green-400" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-gray-300">info@kecbiofuel.com</p>
                    </div>
                  </a>
                </div>
                
                <div className="mt-8">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;