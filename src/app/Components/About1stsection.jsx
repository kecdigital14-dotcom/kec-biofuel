import React from 'react'

const About1stsection = () => {
  return (
    <div>
       <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 border border-green-100">
            <div className="mb-4">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our <span className="text-4xl text-green-600">Mission</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6 font-sans font-semibold text-justify">
              At KEC Urban Experience Centre, we're pioneering the future of sustainable living through innovative renewable energy solutions. Our commitment to environmental stewardship drives us to create cutting-edge technologies that power communities while preserving our planet.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                🌱 Sustainable Energy
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                🔋 Innovation
              </span>
              <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                🌍 Environmental Care
              </span>
            </div>
          </div>
          
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4">
                Our <span className="text-green-100">Vision</span>
              </h2>
              <div className="w-16 h-1 bg-white bg-opacity-50 rounded-full mb-6"></div>
            </div>
            
            <p className="leading-relaxed mb-6 text-green-50 font-sans font-semibold">
              To be the leading catalyst in India's renewable energy transformation, creating sustainable urban environments that harmonize technological advancement with ecological responsibility.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Innovation First</h3>
                <p className="text-green-100 text-sm">Leading the renewable revolution</p>
              </div>
            </div>
          </div>
        </div>      
      </section>    
    </div>
  )
}

export default About1stsection
