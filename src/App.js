import React, { useState } from "react";
import Special from "./Component/Special";
import Menu from "./Component/Menu";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("Specials");

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Yummi Restaurant</div>
        <ul className="nav-links">
          <li 
            className={activeSection === "Specials" ? "active" : ""}
            onClick={() => setActiveSection("Specials")}
          >
            Specials
          </li>
          <li 
            className={activeSection === "Menu" ? "active" : ""}
            onClick={() => setActiveSection("Menu")}
          >
            Menu
          </li>
        </ul>
      </nav>

      {/* Conditional Rendering */}
      {activeSection === "Specials" && <Special />}
      {activeSection === "Menu" && <Menu />}
    </div>
  );
}

export default App;
