import React, { useState, useCallback } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import EducationCarousel from "./components/Education";
import Projects from "./components/Projects";
import Certificate from "./components/Certificates";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode);
  }, []);

  return (
    <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-6">
        <About isDarkMode={isDarkMode} />
        <Work isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <EducationCarousel isDarkMode={isDarkMode} />
        <Certificate isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;