import React from "react";

const Projects = ({ isDarkMode }) => {
  return (
    <section id="projects" className={`py-16 ${isDarkMode ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-900"}`}>
      <h2 className={`text-4xl font-bold text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>Projects</h2>
      <div className="mt-8 max-w-4xl mx-auto flex flex-wrap justify-between">
        <div className={`w-full md:w-5/12 p-4 ${isDarkMode ? "bg-gray-900" : "bg-white"} shadow-lg rounded-lg`}>
          <h3 className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Groceries List</h3>
          <p className="mt-2">Built a grocery list app for easy item management and tracking. Utilized MongoDB, Express.js, React.js, and Node.js for full-stack development. Delivered a responsive, user-friendly solution with persistent data and edit/delete functionality.</p>
        </div>
        <div className={`w-full md:w-5/12 p-4 mt-4 md:mt-0 ${isDarkMode ? "bg-gray-900" : "bg-white"} shadow-lg rounded-lg`}>
          <h3 className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Student Department</h3>
          <p className="mt-2">Developed a web app for efficient management of student records across departments. Utilized MongoDB, Express.js, React.js, and Node.js for full-stack development. Enabled adding, editing, retrieving, and assigning students to departments.</p>
        <button className="caret-blue-400"><a className="" href="https://github.com/Mehraj2003/Student-Department/tree/main/studentDepartment">Project</a></button>
        </div>
      </div>
    </section>
  );
};

export default Projects;