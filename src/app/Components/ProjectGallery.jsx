"use client";

import React, { useState } from 'react';

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "MATHURA CBG PLANT 4TPD",
      description: "End-to-end solution for setting up sustainable biofuel plants using advanced processing technologies.",
      image: "/images/Project1.jpg",
      technologies: ["Biodiesel", "Ethanol", "Process Automation"],
      liveUrl: "https://example.com/biofuel-plant",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "MATHURA CBG PLANT 4TPD",
      description: "Innovative technology converting agricultural waste into eco-friendly biofuel.",
      image: "/images/Project2.avif",
      technologies: ["Pyrolysis", "Biogas", "Automation"],
      liveUrl: "https://example.com/waste-biofuel",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "MATHURA CBG PLANT 4TPD",
      description: "Digital system for tracking and managing biofuel supply chain and distribution efficiently.",
      image: "/images/Project3.jpg",
      technologies: ["IoT Sensors", "Cloud Monitoring", "Logistics"],
      liveUrl: "https://example.com/distribution",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "MATHURA CBG PLANT 4TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project5.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project6.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project4.jpg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project7.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project8.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#"
    },
    {
      id: 9,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project9.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#"
    },
    {
      id: 10,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project10.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#"
    },
    {
      id: 11,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project11.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#"
    },
    {
      id: 12,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project12.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#"
    }
  ];

  // const categories = ['', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-1">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              Portfolio Showcase
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-green-700 to-teal-700 bg-clip-text text-transparent leading-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Innovative solutions in sustainable energy and industrial automation, 
              <br className="hidden md:block" />
              transforming ideas into impactful realities
            </p>
          </div>



          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-emerald-100 hover:border-emerald-300 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-gradient-to-br from-emerald-100 to-green-100 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent"></div>
                  
                  {/* Project Info Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      Project #{project.id}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-emerald-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-full font-medium transition-colors duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Project
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-xs font-medium border border-emerald-100"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.technologies.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 via-transparent to-green-500/5"></div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </div>
  );
};

export default ProjectGallery;