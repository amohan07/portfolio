import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { DarkModeToggle } from './components/DarkModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('darkMode');
    return storedTheme === 'true' || false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white dark:bg-gray-800 shadow-md py-8 sticky top-0 z-10">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <nav className="flex space-x-6">
              <NavLink to="#home" smooth className="hover:text-primary dark:hover:text-secondary">Home</NavLink>
              <NavLink to="#about" smooth className="hover:text-primary dark:hover:text-secondary">About</NavLink>
              <NavLink to="#skills" smooth className="hover:text-primary dark:hover:text-secondary">Skills</NavLink>
              <NavLink to="#projects" smooth className="hover:text-primary dark:hover:text-secondary">Projects</NavLink>
              {/*<NavLink to="#achievements" smooth className="hover:text-primary dark:hover:text-secondary">Achievements</NavLink>*/}
              <NavLink to="#contact" smooth className="hover:text-primary dark:hover:text-secondary">Contact</NavLink>
            </nav>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </header>

        <main className="flex-grow">
          <Home />
          <About />
          <Skills />
          <Projects />
         {/* <Achievements />*/}
          <Contact />
        </main>

        <footer className="bg-gray-200 dark:bg-gray-700 text-center py-4">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
