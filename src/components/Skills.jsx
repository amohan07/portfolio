import React from 'react';

const skillsData = [
  { name: 'C++', level: 80 },
  { name: 'Python', level: 70 },
  { name: 'Web Development', level: 60 },
  { name: 'DSA', level: 75 },
  { name: 'DBMS', level: 85 },
  { name: 'OS', level: 70 },
  { name: 'CN', level: 65 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-semibold mb-6 section-title">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
