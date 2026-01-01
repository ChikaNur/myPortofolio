import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('All');

  // Extract unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    PROJECTS.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return ['All', ...Array.from(techs).sort()];
  }, []);

  // Filter projects based on selection
  const filteredProjects = selectedTech === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.technologies.includes(selectedTech));

  return (
    <section id="projects" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-pastel-text mb-8 text-center">
          Projects & Initiatives
        </h2>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${selectedTech === tech
                ? 'bg-pastel-dark text-white shadow-md'
                : 'bg-white text-gray-600 border border-pastel-light hover:border-pastel-dark hover:text-pastel-dark'
                }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-pastel-light hover:border-pastel-dark group transform hover:-translate-y-2"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-pastel-light rounded-lg text-pastel-dark group-hover:bg-pastel group-hover:text-white transition-colors duration-300">
                    <Folder size={24} />
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-pastel-dark hover:bg-gray-50 rounded-full transition-all duration-300"
                      aria-label={`View ${project.title} details`}
                    >
                      <ExternalLink size={22} strokeWidth={2} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pastel-dark transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded transition-colors ${selectedTech === tech
                        ? 'bg-pastel-dark text-white'
                        : 'bg-gray-100 text-gray-600'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;