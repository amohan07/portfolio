import React from 'react';

const skillsData = {
  languages: [
    { name: 'c/c++', level: 80, icon: '' },
    { name: 'Python', level: 70, icon: '🐍' },
    { name: 'JavaScript', level: 70, icon: 'JS' },
    { name: 'HTML/CSS', level: 60, icon: '5' },
    { name: 'Rust', level: 75, icon: 'R' },
    { name: 'Solidity', level: 85, icon: '◇' },
  
  ],
  frameworks: [
    { name: 'ReactJS', level: 80, icon: '⚛' },
    { name: 'Flask', level: 70, icon: '🌶️' },
    { name: 'React Native', level: 60, icon: '⚛' },
    { name: 'MySQL', level: 75, icon: '🐬' },
    { name: 'MongoDB', level: 85, icon: '🌿' },
   
  ],
  tools: [
    { name: 'Linux', level: 80, icon: '🐧' },
    { name: 'Git', level: 70, icon: '🧰' },
    { name: 'AWS', level: 60, icon: '☁️' },
    { name: 'Docker', level: 75, icon: '🐳' },
    { name: 'postman', level: 85, icon: '🅿️' },
  ],
};

export const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-semibold mb-6 section-title text-center">My Skills</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-700 rounded-lg shadow-md p-6 dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-4 text-white">Languages</h3>
          {skillsData.languages.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">
                  {skill.name} <span className="ml-2">{skill.icon}</span>
                </span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-700 rounded-lg shadow-md p-6 dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-4 text-white">Frameworks &amp; Databases</h3>
          {skillsData.frameworks.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">
                  {skill.name} <span className="ml-2">{skill.icon}</span>
                </span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-700 rounded-lg shadow-md p-6 dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-4 text-white">Tools &amp; Technologies</h3>
          {skillsData.tools.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">
                  {skill.name} <span className="ml-2">{skill.icon}</span>
                </span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
