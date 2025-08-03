import React, { useState } from 'react';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Globe, 
  Calendar, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Target,
  Lightbulb,
  Heart,
  ChevronRight,
  Star,
  Building
} from 'lucide-react';

const AboutUsCEO = () => {
  const [activeTab, setActiveTab] = useState('journey');

  // Sample data - Replace with actual data from Jitender Narayan's LinkedIn
  const ceoData = {
    name: "Jitender Narayan",
    title: "Founder & CEO",
    company: "KEC Industries",
    location: "Delhi, India",
    experience: "15+ Years",
    bio: "Visionary leader with over 15 years of experience in driving business transformation and innovation. Passionate about building sustainable solutions that create lasting impact in the industry.",
    profileImage: "/images/ceo.jpg", // Replace with actual image
    
    achievements: [
      { icon: TrendingUp, label: "Revenue Growth", value: "300%" },
      { icon: Users, label: "Team Members", value: "150+" },
      { icon: Globe, label: "Global Clients", value: "50+" },
      { icon: Award, label: "Industry Awards", value: "12" }
    ],
    
    journey: [
      {
        year: "2024",
        title: "Expansion & Innovation",
        company: "CBG Industries",
        description: "Leading digital transformation initiatives and expanding into new international markets.",
        icon: Globe
      },
      {
        year: "2020",
        title: "Founder & CEO",
        company: "CBG Industries",
        description: "Founded CBG Industries with a vision to revolutionize the industry through innovative solutions and sustainable practices.",
        icon: Building
      },
      {
        year: "2018",
        title: "Senior Director",
        company: "Tech Solutions Ltd",
        description: "Spearheaded strategic initiatives that resulted in 200% revenue growth and market expansion.",
        icon: TrendingUp
      },
      {
        year: "2015",
        title: "Business Development Manager",
        company: "Innovation Corp",
        description: "Built strategic partnerships and developed new market opportunities in emerging sectors.",
        icon: Briefcase
      },
      {
        year: "2010",
        title: "Project Manager",
        company: "StartUp Ventures",
        description: "Led cross-functional teams to deliver complex projects and establish operational excellence.",
        icon: Target
      }
    ],
    
    values: [
      {
        icon: Lightbulb,
        title: "Innovation",
        description: "Constantly pushing boundaries to find creative solutions that drive progress and efficiency."
      },
      {
        icon: Users,
        title: "Team Excellence",
        description: "Building high-performing teams and fostering a culture of collaboration and growth."
      },
      {
        icon: Heart,
        title: "Customer Focus",
        description: "Putting customers at the center of everything we do, ensuring exceptional value delivery."
      },
      {
        icon: Globe,
        title: "Global Impact",
        description: "Creating solutions that make a positive difference on a global scale and drive sustainability."
      }
    ],
    
    education: [
      {
        degree: "MBA in Business Administration",
        institution: "Indian Institute of Management",
        year: "2008"
      },
      {
        degree: "B.Tech in Engineering",
        institution: "Delhi Technological University",
        year: "2006"
      }
    ]
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-600">Visionary Leader</span>
          </h2>
          <p className="text-lg font-sans text-gray-600 max-w-3xl mx-auto">
            Driving innovation and excellence with passion, dedication, and a commitment to transforming industries
          </p>
        </div>

        {/* CEO Profile Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="relative bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-700 p-8 md:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative grid md:grid-cols-3 gap- items-center">
              {/* Profile Image */}
              <div className="flex justify-center ">
                <div className="relative">
                  <img
                    src={ceoData.profileImage}
                    alt={ceoData.name}
                    className="w-48 h-64 rounded-2xl object-cover shadow-2xl border-4 border-white/20"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                    <Award className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="md:col-span-2 text-center md:text-left text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{ceoData.name}</h3>
                <p className="text-xl text-teal-100 mb-4">{ceoData.title}, {ceoData.company}</p>
                <p className="text-teal-100 mb-6 leading-relaxed max-w-2xl font-sans">{ceoData.bio}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <MapPin size={16} />
                    <span>{ceoData.location}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Calendar size={16} />
                    <span>{ceoData.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Achievements */}
          <div className="p-8 bg-gray-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {ceoData.achievements.map((achievement, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-teal-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                  <div className="text-sm text-gray-500 font-sans">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12 font-sans">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <div className="flex gap-2">
              {[
                { id: 'journey', label: 'Professional Journey', icon: TrendingUp },
                { id: 'values', label: 'Leadership Values', icon: Heart },
                { id: 'education', label: 'Education', icon: GraduationCap }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-teal-600 to-green-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon size={18} />
                  <span className="hidden sm:block">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Professional Journey */}
          {activeTab === 'journey' && (
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Journey</h3>
              <div className="">
                {ceoData.journey.map((item, index) => (
                  <div key={index} className="flex gap-6 group hover:bg-gray-50 p-6 rounded-2xl transition-all duration-300">
                    <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-br from-teal-500 to-green-600 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      {index < ceoData.journey.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-teal-200 to-transparent mt-4"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                        <span className="text-teal-600 font-semibold text-lg">{item.year}</span>
                      </div>
                      <p className="text-green-600 font-medium mb-3">{item.company}</p>
                      <p className="text-gray-500 leading-relaxed font-sans">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Leadership Values */}
          {activeTab === 'values' && (
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Philosophy</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {ceoData.values.map((value, index) => (
                  <div key={index} className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="bg-gradient-to-br from-teal-500 to-green-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {activeTab === 'education' && (
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Educational Background</h3>
              <div className="space-y-6 max-w-3xl mx-auto">
                {ceoData.education.map((edu, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-teal-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                        <p className="text-green-600 font-medium mb-1">{edu.institution}</p>
                        <p className="text-gray-600">{edu.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUsCEO;