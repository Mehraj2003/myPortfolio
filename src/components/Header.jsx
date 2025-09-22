import React, { useState } from "react";
import myImage from "../assets/profile.png";
import myResume from "../assets/mehraj resume-1.pdf";

const Header = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`py-6 shadow-md sticky top-0 z-50 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={myImage} alt="Mohd Mehraj Ahmed" className="w-12 h-12 rounded-full" />
          <h1 className={`text-3xl font-bold ml-2 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Mohd Mehraj Ahmed</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li><a href="#about" className={`hover:text-indigo-500 transition-colors ${isDarkMode ? "text-gray-400" : "text-gray-900"}`}>About</a></li>
            <li><a href="#work" className={`hover:text-indigo-500 transition-colors ${isDarkMode ? "text-gray-400" : "text-gray-900"}`}>Work</a></li>
            <li><a href="#projects" className={`hover:text-indigo-500 transition-colors ${isDarkMode ? "text-gray-400" : "text-gray-900"}`}>Projects</a></li>
            <li><a href="#contact" className={`hover:text-indigo-500 transition-colors ${isDarkMode ? "text-gray-400" : "text-gray-900"}`}>Contact</a></li>
            <li><a href={myResume} target="_blank" className={`hover:text-indigo-500 transition-colors ${isDarkMode ? "text-gray-400" : "text-gray-900"}`}>Resume</a></li>
          </ul>
        </nav>
        <button onClick={toggleTheme} className="ml-4 p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none sm:ml-6 sm:p-3">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button onClick={toggleMenu} className="md:hidden ml-4 p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-40 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4 mt-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#about" onClick={toggleMenu} className={`hover:text-indigo-500 transition-colors ${isDarkMode ? "text-gray-400" : "text-gray-900"}`}>About</a></li>
            <li><a href="#projects" onClick={toggleMenu} className={`hover:text-indigo-500 transition-colors ${isDarkMode ? "text-gray-400" : "text-gray-900"}`}>Projects</a></li>
            <li><a href="#work" onClick={toggleMenu} className={`hover:text-indigo-500 transition-colors ${isDarkMode ? "text-gray-400" : "text-gray-900"}`}>Work</a></li>
            <li><a href={myResume} target="_blank" onClick={toggleMenu} className={`hover:text-indigo-500 transition-colors ${isDarkMode ? "text-gray-400" : "text-gray-900"}`}>Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);