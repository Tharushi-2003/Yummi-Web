import React, { useState } from "react";
import Special from "./Component/Special";
import Menu from "./Component/Menu";
import Header from "./Component/Header";
import About from "./Component/About"; 
import "./App.css";
import Footer from "./Component/Footer";

import pizzaHomeImage from './pizza.jpg';
import leftVideo from './videos/Food01.mp4';
import rightVideo from './videos/Food02.mp4';


function App() {
  const [activeSection, setActiveSection] = useState("Home");

  const renderContent = () => {
    switch (activeSection) {
      case "Home":
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
      case "Specials":
        return <Special />;
      case "Menu":
        return <Menu />;
      case "About": 
        return <About />;
      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div>
      <Header setActiveSection={setActiveSection} activeSection={activeSection} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
