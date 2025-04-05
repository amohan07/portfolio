import React from 'react';

const projectsData = [
  {
    title: 'Project 1',
    description: 'Brief description of project 1.',
    technologies: ['React', 'Tailwind CSS'],
    githubLink: '#',
  },
  {
    title: 'Project 2',
    description: 'Brief description of project 2.',
    technologies: ['Node.js', 'Express'],
    githubLink: '#',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-semibold mb-6 section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-3 py-1 text-sm font-semibold">{tech}</span>
              ))}
            </div>
            <a href={project.githubLink} className="text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};
