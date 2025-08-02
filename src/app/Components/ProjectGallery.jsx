"use client";

import React from 'react';
import Image from 'next/image';

const ProjectGallery = () => {
  const projects = [
    {
      id: 1,
      title: "MATHURA CBG PLANT 4TPD",
      description: "End-to-end solution for setting up sustainable biofuel plants using advanced processing technologies.",
      image: "/images/Project1.jpg",
      technologies: ["Biodiesel", "Ethanol", "Process Automation"],
      liveUrl: "https://example.com/biofuel-plant",
      githubUrl: "#",
      category: "Plant Engineering"
    },
    {
      id: 2,
      title: "MATHURA CBG PLANT 4TPD",
      description: "Innovative technology converting agricultural waste into eco-friendly biofuel.",
      image: "/images/Project2.avif",
      technologies: ["Pyrolysis", "Biogas", "Automation"],
      liveUrl: "https://example.com/waste-biofuel",
      githubUrl: "#",
      category: "Waste Management"
    },
    {
      id: 3,
      title: "MATHURA CBG PLANT 4TPD",
      description: "Digital system for tracking and managing biofuel supply chain and distribution efficiently.",
      image: "/images/Project3.jpg",
      technologies: ["IoT Sensors", "Cloud Monitoring", "Logistics"],
      liveUrl: "https://example.com/distribution",
      githubUrl: "#",
      category: "Logistics & Distribution"
    },
    {
      id: 4,
      title: "MATHURA CBG PLANT 4TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project5.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#",
      category: "Industrial Solutions"
    },
    {
      id: 5,

      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project6.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#",
      category: "Industrial Solutions"
    },
    {
      id: 6,

      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project4.jpg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#",
      category: "Industrial Solutions"
    },
    {
      id: 7,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project7.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#",
      category: "Industrial Solutions"
    },
    {
      id: 8,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project8.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#",
      category: "Industrial Solutions"
    },
        {
      id: 9,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project9.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#",
      category: "Industrial Solutions"
    },
        {
      id: 10,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project10.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#",
      category: "Industrial Solutions"
    },
        {
      id: 11,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project11.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#",
      category: "Industrial Solutions"
    },
        {
      id: 12,
      title: "PALWAL CBG PLANT 2 TPD",
      description: "High-capacity biodiesel production line integrated with quality control and monitoring systems.",
      image: "/images/Project12.jpeg",
      technologies: ["Biodiesel", "Process Control", "SCADA"],
      liveUrl: "https://example.com/biodiesel-production",
      githubUrl: "#",
      category: "Industrial Solutions"
    },

  ];

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my completed projects showcasing various technologies and solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="w-full">
                <div className="relative w-full h-72">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Overlay & Badge */}
                <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black/20 transition-all duration-300 pointer-events-none" />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                {/* <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p> */}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-900 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-900 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2">
            View More Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
