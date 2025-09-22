import React from "react";
import "./RecipeModal.css";

function RecipeModal({ dish, onClose }) {
  if (!dish) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={dish.image} alt={dish.name} className="modal-image" />
        <h2>{dish.name}</h2>
        <p><strong>Description:</strong> {dish.description}</p>
        <p><strong>Ingredients:</strong></p>
        <ul>
          {dish.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>Price: {dish.price}</h3>
      </div>
    </div>
  );
}

export default RecipeModal;
