import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../assets/image.png"
import img1 from "../assets/c8ab2e41c52f7816a44eba1b9be23d19_FSA.jpg"
import img2 from "../assets/a5b0d40c-64ad-41a7-8d9e-f5d07e08e213.jpg"
import img3 from "../assets/62760006-71df-4493-8e79-3c7cae7132d6.jpg"

const Certificates = () => {
  const certificates = [
    { 
      image: img1, 
      title: "MERN STACK DEVELOPMENT", 
      issuer: "Full Stack Academy", 
      description: "Completed MERN Full Stack Development training at Full Stack Academy, gaining hands-on experience in building dynamic web applications." 
    },
    { 
      image: image, 
      title: "Full Stack Development Internship", 
      issuer: "Delta Sigma Technologies", 
      description: "Completed an 8-week Full Stack Development Internship at Delta Sigma Technologies, developing and deploying MERN stack projects." 
    },
    { 
      image: img2, 
      title: "Hack Revolution 2023", 
      issuer: "MJCET", 
      description: "Participated in Hack Revolution 2023 at MJCET as a member of Hypertext Assassins, gaining experience in teamwork, problem-solving, and software development." 
    },
    { 
      image: img3, 
      title: "Abdul Kalam Innovation Project Award 2024", 
      issuer: "MJCET", 
      description: "Participated in the Abdul Kalam Innovation Project Award 2024 at MJCET, organized by the ECE Department on June 14, 2024, showcasing my Smart Wheelchair innovation Project." 
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: "unslick" // Destroys slick on larger screens
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Certificates</h2>
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificates.map((certificate, index) => (
              <div key={index} className="p-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                  <img src={certificate.image} alt={certificate.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                  <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                  <p className="text-gray-700 mb-2">{certificate.issuer}</p>
                  <p className="text-gray-600">{certificate.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden">
          <Slider {...settings}>
            {certificates.map((certificate, index) => (
              <div key={index} className="p-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                  <img src={certificate.image} alt={certificate.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                  <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                  <p className="text-gray-700 mb-2">{certificate.issuer}</p>
                  <p className="text-gray-600">{certificate.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Certificates;