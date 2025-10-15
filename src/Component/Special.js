import React, { useState } from 'react';
import './Special.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const specials = [
  {
    id: 1,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with rich molten chocolate center and a side of ice cream.',
    price: 'Rs. 800.00',
    image: '/images/lava-cake.jpg'
  },
  {
    id: 2,
    name: 'Grilled Salmon with Lemon Butter',
    description: 'Fresh greens, grilled chicken, and a zesty dressing for a healthy delight.',
    price: 'Rs. 950.00',
    image: '/images/grilled-lemon-butter-salmon-9smb-7.jpg'
  },
  {
    id: 3,
    name: 'Veggie Pasta Primavera',
    description: 'Fresh vegetables tossed with penne pasta and light sauce.',
    price: 'Rs. 1200.00',
    image: '/images/pasta-primavera-2.jpg'
  },
  {
    id: 4,
    name: 'Beef Steak with Garlic Butter',
    description: 'Succulent steak grilled to perfection with garlic butter topping.',
    price: 'Rs. 1200.00',
    image: '/images/images.jpg'
  },
  {
  id: 5,
    name: 'Roasted Chicken with Herbs',
    description: 'Juicy chicken roasted with rosemary and thyme.',
    price: 'Rs. 1200.00',
    image: '/images/Roasted-Chicken-Garlic-Herbs-06.jpg'
  }
  
];

const Special = () => {
  const [current, setCurrent] = useState(0);

  const nextDish = () => {
    setCurrent((prev) => (prev + 1) % specials.length);
  };

  const prevDish = () => {
    setCurrent((prev) => (prev - 1 + specials.length) % specials.length);
  };

  return (
    <div className="special-page">
      <h2 className="special-heading">OUR SPECIAL DISHES</h2>
      <div className="special-container">
        <button className="nav-btn left" onClick={prevDish}><FaChevronLeft /></button>
        <div className="special-card">
          <img src={specials[current].image} alt={specials[current].name} />
          <h3>{specials[current].name}</h3>
          <p>{specials[current].description}</p>
          <span className="price">Price: {specials[current].price}</span>
        </div>
        <button className="nav-btn right" onClick={nextDish}><FaChevronRight /></button>
      </div>
    </div>
  );
};

export default Special;
