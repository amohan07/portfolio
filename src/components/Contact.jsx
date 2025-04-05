import React from 'react';

export const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-semibold mb-6 section-title">Contact</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500 dark:text-white" id="name" type="text" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500 dark:text-white" id="email" type="email" placeholder="Your Email" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500 dark:text-white" id="message" rows="5" placeholder="Your Message"></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-600 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-secondary dark:hover:bg-primary" type="button">
            Send
          </button>
        </div>
      </form>
      <div className="mt-8 text-center">
        <a href="#" className="text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary mx-4">Email</a>
        <a href="#" className="text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary mx-4">LinkedIn</a>
        <a href="#" className="text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary mx-4">GitHub</a>
        <a href="#" className="text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary mx-4">Twitter</a>
      </div>
    </section>
  );
};
