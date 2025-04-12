import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-12">
      <h2 className="text-3xl font-semibold mb-6 section-title text-center">About Me</h2>
      <div className="container mx-auto px-4">
        <div className="bg-gray-700 rounded-lg shadow-md p-6 dark:bg-gray-800">
          <p className="text-gray-300 mb-4 text-lg">
            Hey there! I'm <span className="text-orange-400 font-semibold">Anand Mohan</span> — a passionate and curious developer driven by creativity, logic, and a deep desire to build meaningful tech.
            Whether it's crafting clean front-end interfaces or diving deep into back-end logic, I love turning complex problems into elegant solutions.
          </p>
          <p className="text-gray-300 mb-4 text-lg">
            I thrive in collaborative environments and enjoy learning from others as much as I enjoy sharing what I know.
            Currently focused on <span className="text-blue-400 font-medium">web development</span>, <span className="text-green-400 font-medium">machine learning</span>, and <span className="text-purple-400 font-medium">blockchain</span>,
            I aim to contribute to projects that push boundaries and make a positive impact on the world.
          </p>
          <p className="text-gray-300 text-lg">
            When I’m not coding, you’ll find me exploring new ideas, reading, or dreaming up the next project to bring to life.
          </p>
        </div>
      </div>
    </section>
  );
};
