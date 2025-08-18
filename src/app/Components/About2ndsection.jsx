import React from 'react'

const About2ndsection = () => {
  return (
    <div>
       <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-6">
            <h2 className="text-5xl font-bold text-gray-800 mb-3">
              Our <span className="text-green-600">Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Sustainability",
                description: "Every solution we create prioritizes environmental harmony and long-term ecological balance."
              },
              {
                icon: "🔬",
                title: "Innovation",
                description: "We continuously push boundaries to develop cutting-edge renewable energy technologies."
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description: "Building partnerships that create meaningful impact in communities worldwide."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed font-sans font-base text-justify">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About2ndsection
