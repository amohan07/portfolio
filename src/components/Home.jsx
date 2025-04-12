import React from 'react';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <section id="home" className="py-16 min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        
        {/* Profile Image */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/profile.jpeg"
            alt="Anand Mohan"
            className="rounded-full w-64 h-64 object-cover shadow-2xl border-4 border-primary"
          />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Hello, I'm <span className="text-secondary">Anand Mohan</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Aspiring <span className="font-semibold">Software Developer</span> | Problem Solver | Tech Enthusiast.
            <br />
            I love building meaningful applications, exploring emerging tech, and solving real-world problems through code.
          </p>
          
          <a
            href="/resume.pdf"
            download
            className="mt-6 inline-block bg-primary hover:bg-secondary text-white font-semibold py-2 px-6 rounded-lg shadow transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};
