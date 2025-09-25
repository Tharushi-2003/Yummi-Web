import React, { useState } from "react";
import Special from "./Component/Special";
import Menu from "./Component/Menu";
import Contact from "./Component/Contact";
import Header from "./Component/Header";
import "./App.css";

// Import your image and video files
import pizzaHomeImage from './pizza.jpg';
import leftVideo from './videos/Food01.mp4'; // Path to your left video
import rightVideo from './videos/Food02.mp4'; // Path to your right video

function App() {
  const [activeSection, setActiveSection] = useState("Home");

  const renderContent = () => {
    switch (activeSection) {
      case "Home":
        return (
          <div className="home-content-container">
            {/* Left side video */}
            <video className="home-side-media left" autoPlay muted loop playsInline>
              <source src={leftVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Central Pizza Image */}
            <img src={pizzaHomeImage} alt="Delicious Pizza" className="home-main-image" />

            {/* Right side video */}
            <video className="home-side-media right" autoPlay muted loop playsInline>
              <source src={rightVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      case "Specials":
        return <Special />;
      case "Menu":
        return <Menu />;
      case "Contact":
        return <Contact />;
      default:
        return (
          <div className="home-content-container">
            <video className="home-side-media left" autoPlay muted loop playsInline>
              <source src={leftVideo} type="video/mp4" />
            </video>
            <img src={pizzaHomeImage} alt="Delicious Pizza" className="home-main-image" />
            <video className="home-side-media right" autoPlay muted loop playsInline>
              <source src={rightVideo} type="video/mp4" />
            </video>
          </div>
        );
    }
  };

  return (
    <div>
      <Header setActiveSection={setActiveSection} activeSection={activeSection} />
      {renderContent()}
    </div>
  );
}

export default App;