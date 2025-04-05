import React from 'react';

export const Resume = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold mb-6 section-title">Resume</h2>
      <a href="/resume.pdf" className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-secondary dark:hover:bg-primary" download>
        Download Resume
      </a>
    </section>
  );
};
