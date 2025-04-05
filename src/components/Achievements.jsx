import React from 'react';

const achievementsData = [
  { title: 'GATE Preparation', description: 'Progress in GATE preparation.' },
  { title: 'Coding Contest Rank', description: 'Secured a good rank in a coding contest.' },
  { title: 'Coursera Certification', description: 'Completed a certification on Coursera.' },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-12">
      <h2 className="text-3xl font-semibold mb-6 section-title">Achievements &amp; Certifications</h2>
      <ul>
        {achievementsData.map((achievement, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{achievement.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
