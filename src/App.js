import React, { useState } from "react";
import Special from "./Component/Special";
import Menu from "./Component/Menu";
import Contact from "./Component/Contact";
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
          <li
            className={activeSection === "Contact" ? "active" : ""}
            onClick={() => setActiveSection("Contact")}
          >
            Contact
          </li>
        </ul>
      </nav>

      {/* Conditional Rendering */}
      {activeSection === "Specials" && <Special />}
      {activeSection === "Menu" && <Menu />}
      {activeSection === "Contact" && <Contact />}
    </div>
  );
}

export default App;
