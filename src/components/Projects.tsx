import React from 'react';
import { ExternalLink, Star, GitBranch } from 'lucide-react';

const featuredProjects = [
  {
    name: "Fake News Detection",
    description: "A machine learning-based system that detects fake news articles using advanced NLP techniques and classification algorithms. Built with Python, scikit-learn, and NLTK.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    tech: ["Python", "Machine Learning", "NLP", "scikit-learn"],
    github: "https://github.com/hey-arun18/Fake-News-Detection",
    stars: 5,
    language: "Python"
  },
  {
    name: "Daily Weather Data Analysis",
    description: "A comprehensive weather data analysis tool that processes and visualizes daily weather patterns. Features interactive data visualization and statistical analysis of weather trends.",
    image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80",
    tech: ["Python", "Data Analysis", "Pandas", "Matplotlib"],
    github: "https://github.com/hey-arun18/Analyze-Daily-Weather-Data",
    stars: 4,
    language: "Python"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <span className="text-sm text-gray-600">{project.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{project.stars}</span>
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}