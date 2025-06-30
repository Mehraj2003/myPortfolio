import React from "react";
import myImage from '../assets/profile.jpg';
import resume from '../assets/mehraj resume-1.pdf'; 

const About = ({ isDarkMode }) => {
  return (
    <section id="about" className={`py-16 ${isDarkMode ? "bg-gray-800 text-gray-400" : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-gray-900"}`}>
      <h2 className={`text-4xl font-bold text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>About Me</h2>
      <div className="mt-6 flex flex-col md:flex-row items-center max-w-4xl mx-auto">
        <img src={myImage} alt="Mohd Mehraj Ahmed" className="w-48 h-48 rounded-full border-4 border-white shadow-lg mb-4 md:mb-0 md:mr-6" />
        <div className="text-center md:text-left">
          <p>
            I am a Highly Motivated 2024 Electronics and Communication Engineering graduate, passionate about software development and Full Stack Development. Skilled in building innovative, user-focused solutions with a commitment to continuous learning and teamwork.
          </p>
          <a href={resume} target="_blank" download className="mt-4 inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;