import React from 'react';

export const Home = () => {
  return (
    <section id="home" className="py-16 min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full">
        <div className="md:w-1/2 pr-4 flex items-center justify-center">
          <img
            src="/profile.jpg"
            alt="Your Name"
            className="rounded-full w-48 h-48 object-cover shadow-lg"
          />
        </div>
        <div className="md:w-1/2 pl-4 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Your Name</h1>
          <p className="text-lg">Aspiring Software Developer | GATE Aspirant | Future Tech Entrepreneur</p>
          <a
            href="/resume.pdf"
            className="bg-blue-600 hover:bg-secondary text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline inline-block mt-4 text-sm"
            style={{ width: 'fit-content' }}
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};
