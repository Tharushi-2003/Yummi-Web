import React, { useState, useEffect } from 'react';
import './Special.css'; 

export default function Special() {
  const dish1 = {
    title: "Grilled Salmon with Lemon Butter",
    desc: "Tender fillet, seared to perfection with roasted veggies and lemon-butter sauce.",
    price: "Rs.1200.00",
    image: "/images/grilled-lemon-butter-salmon-9smb-7.jpg"
  };

  const dish2 = {
    title: "Roasted Chicken with Herbs",
    desc: "Juicy chicken roasted with rosemary and thyme.",
    price: "Rs.900.00",
    image: "/images/Roasted-Chicken-Garlic-Herbs-06.jpg"
  };

  const dish3 = {
    title: "Veggie Pasta Primavera",
    desc: "Fresh vegetables tossed with penne pasta and light sauce.",
    price: "Rs.700.00",
    image: "/images/pasta-primavera-2.jpg"
  };

  const dish4 = {
    title: "Beef Steak with Garlic Butter",
    desc: "Succulent steak grilled to perfection with garlic butter topping.",
    price: "Rs.1500.00",
    image: "/images/images.jpg"
  };

  const dish5 = {
    title: "Chocolate Lava Cake",
    desc: "Warm chocolate cake with molten chocolate center, served with ice cream.",
    price: "Rs.600.00",
    image: "/images/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.webp"
  };

  const dishes = [dish1, dish2, dish3, dish4, dish5];
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [dishes.length]);

  const currentDish = dishes[currentIndex];

  return (
    <div className="specials-container">
      <h2 className="page-heading">Our Special Dishes</h2>

      <div className="dish-card-wrapper">
        
        <button 
          className="arrow left" 
          onClick={() => setCurrentIndex((prev) => (prev - 1 + dishes.length) % dishes.length)}
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
          onClick={() => setCurrentIndex((prev) => (prev + 1) % dishes.length)}
        >
          ❯
        </button>
      </div>
    </div>
  );
}
