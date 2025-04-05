import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button onClick={() => setDarkMode(!darkMode)} className="transition-colors duration-300">
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-500" />
      )}
    </button>
  );
};
