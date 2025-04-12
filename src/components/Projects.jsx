import React from 'react';

const projectsData = [
  {
    title: 'Stress Detection Using Machine Learning',
    description: 'Developed a machine learning model to classify stress levels based on physiological signals such as heart rate and skin conductance. Integrated the model into a responsive web application with real-time stress detection features.',
    technologies: ['React', 'Tailwind CSS', 'Python', 'scikit-learn'],
    githubLink: 'https://github.com/amohan07/Stress-Detection',
    liveDemoLink: 'https://www.youtube.com/watch?v=a24W35nSLaE',
  },
  {
    title: 'Simple Blockchain Implementation',
    description: 'Built a lightweight blockchain prototype in C++ featuring block creation, proof-of-work, and chain validation. Implemented a RESTful API using the Crow web framework to interact with the blockchain, and connected it with a React-based frontend for visualization.',
    technologies: ['C++', 'Crow', 'REST API', 'React'],
    githubLink: 'https://github.com/amohan07/blockchain_react_cplus_plus',
    liveDemoLink: 'https://www.youtube.com/watch?v=wcHg6PJk3Yo',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-semibold mb-6 section-title text-center">Projects</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-gray-700 rounded-lg shadow-md p-6 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-4 text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-600 text-gray-200 rounded-full px-3 py-1 text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
