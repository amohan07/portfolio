import React from 'react';

export const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-semibold mb-6 section-title text-center">Contact</h2>
      <form
        className="max-w-lg mx-auto"
        action="https://getform.io/f/aroyjrpb"
        method="POST"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-start">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <a
          href="mailto:mohananand0610@gmail.com"
          className="text-blue-400 hover:text-blue-500 mx-4"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/anand-mohan-1a3471254/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-500 mx-4"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/amohan07"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500 mx-4"
        >
          GitHub
        </a>
        <a
          href="https://x.com/AnandMohan8064?t=-Ct57WYuwCN3VchACSe6SA"
          className="text-pink-400 hover:text-pink-500 mx-4"
        >
          Twitter
        </a>
      </div>
    </section>
  );
};
