import React from 'react';

const achievementsData = [
  {
    title: 'GATE Preparation',
    description: 'Progress in GATE preparation.',
    icon: '📚',
  },
  {
    title: 'Coding Contest Rank',
    description: 'Secured a good rank in a coding contest.',
    icon: '🏆',
  },
  {
    title: 'Coursera Certification',
    description: 'Completed a certification on Coursera.',
    icon: '📜',
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-12">
      <h2 className="text-3xl font-semibold mb-6 section-title text-center">
        Achievements &amp; Certifications
      </h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">
                {achievement.title} <span className="ml-2">{achievement.icon}</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
