import React, { useState, useEffect } from 'react';
import './Special.css';

export default function Special() {
  const specials = [
    {
      title: "Grilled Salmon with Lemon Butter",
      desc: "Tender fillet with roasted veggies and lemon-butter sauce.",
      price: "Rs.1200.00",
      image: "/images/grilled-lemon-butter-salmon-9smb-7.jpg"
    },
    {
      title: "Roasted Chicken with Herbs",
      desc: "Juicy chicken roasted with rosemary and thyme.",
      price: "Rs.900.00",
      image: "/images/Roasted-Chicken-Garlic-Herbs-06.jpg"
    },
    {
      title: "Veggie Pasta Primavera",
      desc: "Fresh vegetables tossed with penne pasta and light sauce.",
      price: "Rs.700.00",
      image: "/images/pasta-primavera-2.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % specials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentDish = specials[currentIndex];

  return (
    <div className="specials-container">
      <h2 className="page-heading">OUR SPECIAL DISHES</h2>

      <div className="dish-card-wrapper">
        <button 
          className="arrow left" 
          onClick={() => setCurrentIndex((prev) => (prev - 1 + specials.length) % specials.length)}
        >
          ❮
        </button>

        <div className="dish-card">
          <img src={currentDish.image} alt={currentDish.title} className="dish-image" />
          <div className="dish-info">
            <h2 className="dish-title">{currentDish.title}</h2>
            <p className="dish-desc">{currentDish.desc}</p>
            <p className="dish-price">Price: {currentDish.price}</p>
          </div>
        </div>

        <button 
          className="arrow right" 
          onClick={() => setCurrentIndex((prev) => (prev + 1) % specials.length)}
        >
          ❯
        </button>
      </div>
    </div>
  );
}
