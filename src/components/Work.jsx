import React from "react";

const Work = ({ isDarkMode }) => {
  return (
    <section id="work" className={`py-16 ${isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-900"}`}>
      <h2 className={`text-4xl font-bold text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>Work Experience</h2>
      <div className="mt-8 max-w-7xl mx-auto flex flex-wrap justify-between space-y-8 md:space-y-0">
        <div className={`w-full md:w-5/12 lg:w-5/12 p-6 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg`}>
          <h3 className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Full Stack Development Internship | Delta Sigma Technologies</h3>
          <p className="text-gray-500">May 2023 - Jul 2023</p>
          <ul className="list-disc list-inside mt-4 space-y-3">
            <li>Completed an 8-week Full Stack Development Internship.</li>
            <li>Developed four MERN stack projects, including Groceries List, Writeups Platform, and Student Department (team project).</li>
            <li>Gained hands-on experience in building and deploying full-stack applications.</li>
          </ul>
        </div>
        <div className={`w-full md:w-5/12 lg:w-5/12 p-6 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg`}>
          <h3 className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>MERN Stack Developer Trainee | Full Stack Academy</h3>
          <p className="text-gray-500">Aug 2024 – Dec 2024</p>
          <ul className="list-disc list-inside mt-4 space-y-3">
            <li>Gained hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.</li>
            <li>Developed and deployed dynamic, user-friendly applications with a focus on performance and scalability.</li>
            <li>Worked on real-world projects, implementing authentication, RESTful APIs, and state management.</li>
            <li>Strengthened problem-solving skills by debugging and optimizing code for better efficiency.</li>
            <li>Collaborated with peers in an agile environment, enhancing teamwork and development practices.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;