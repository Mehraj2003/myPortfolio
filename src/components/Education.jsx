import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EducationCarousel = ({ isDarkMode }) => {
  const qualifications = [
    {
      title: "Bachelor's in Electronics and Communication",
      institution: "Muffakham Jah College of Engineering and Technology",
      year: "2020 - 2024",
      description: "Focused on software development, embedded systems, and full-stack development.",
    },
    {
      title: "Intermediate (Class 12)",
      institution: "Narayana Junior College",
      year: "2018 - 2020",
      description: "Studied Mathematics, Physics, and Chemistry with a focus on problem-solving and analysis.",
    },
    {
      title: "High School (Class 10)",
      institution: "Ravindra Bharathi School",
      year: "2018",
      description: "Achieved strong fundamentals in science, mathematics, and logical reasoning.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      id="education"
      className={`flex w-full pt-10 pb-10 justify-center ${isDarkMode ? "bg-gray-900" : "bg-gradient-to-r from-teal-300 via-blue-300 to-purple-300"}`}
    >
      <div className="max-w-6xl mx-auto p-4">
        <h2 className={`text-3xl font-bold text-center mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
          Education
        </h2>

        {/* Mobile View Carousel */}
        <div className="block md:hidden flex justify-center">
          <div className="w-screen max-w-md">
            <Slider {...settings}>
              {qualifications.map((qualification, index) => (
                <div
                  key={index}
                  className="p-4 flex justify-center items-center"
                >
                  <div className={`p-6 h-80 w-full flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-800"} shadow-lg rounded-lg`}>
                    <h3 className="text-xl font-semibold mb-2">
                      {qualification.title}
                    </h3>
                    <p className="font-medium">
                      {qualification.institution}
                    </p>
                    <p className="text-sm">{qualification.year}</p>
                    <p className="mt-3">
                      {qualification.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Desktop View Grid */}
        <div className="hidden md:flex flex-wrap justify-center">
          {qualifications.map((qualification, index) => (
            <div
              key={index}
              className="p-4 w-full sm:w-1/2 lg:w-1/3 flex justify-center"
            >
              <div className={`p-6 h-96 w-80 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-800"} shadow-lg rounded-lg`}>
                <h3 className="text-xl font-semibold mb-2">
                  {qualification.title}
                </h3>
                <p className="font-medium">
                  {qualification.institution}
                </p>
                <p className="text-sm">{qualification.year}</p>
                <p className="mt-3">
                  {qualification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCarousel;