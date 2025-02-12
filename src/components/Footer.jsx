import React, { useState } from "react";
import emailjs from "emailjs-com";

const Footer = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_1y9pn1c", // Replace with your EmailJS service ID
      "template_wsc1dz6", // Replace with your EmailJS template ID
      formData,
      "raCqG3R8CRtR8dqQl" 
    ).then((response) => {
      console.log("SUCCESS!", response.status, response.text);
    }).catch((err) => {
      console.log("FAILED...", err);
    });
  };

  return (
    <footer id="contact" className={`py-12 text-center ${isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-900"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="md:w-1/2 text-left">
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Contact Me</h2>
            <div className={`p-6 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg`}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 ${isDarkMode ? "bg-gray-800 text-gray-300 border-gray-700 placeholder-white" : "bg-gray-200 text-gray-900 border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 ${isDarkMode ? "bg-gray-800 text-gray-300 border-gray-700 placeholder-white" : "bg-gray-200 text-gray-900 border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 ${isDarkMode ? "bg-gray-800 text-gray-300 border-gray-700 placeholder-white" : "bg-gray-200 text-gray-900 border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    placeholder="Your Message"
                  />
                </div>
                <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600 transition-colors">Submit</button>
              </form>
            </div>
          </div>
          <div className="md:w-1/2 text-left md:pl-8">
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Follow Me</h2>
            <p className="mb-2"><strong>Email:</strong> mohdmehrajahmed9@gmail.com</p>
            <p className="mb-2"><strong>Phone:</strong> 7995440610</p>
            <p className="mb-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mohd-mehraj-ahmed-340710201/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">MOHD MEHRAJ AHMED</a></p>
            <p className="mb-2"><strong>GitHub:</strong> <a href="https://github.com/Mehraj2003" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">Mehraj2003</a></p>
          </div>
        </div>
        <p className="text-sm mt-6">© 2025 Mohd Mehraj Ahmed. Built with React and Tailwind CSS.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/mohd-mehraj-ahmed-340710201/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">LinkedIn</a>
          <a href="https://github.com/Mehraj2003" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;