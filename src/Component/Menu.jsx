import React, { useState } from "react";
import "./Menu.css";
import RecipeModal from "./RecipeModal";

function Menu() {
  const allItems = [
    // Starters
    { id: 1, name: "Cheese Burger", description: "Juicy beef patty with cheddar and lettuce", ingredients: ["Beef patty","Cheddar cheese","Lettuce","Tomato","House sauce"], price: "Rs.599", image: "/images/burger.jpg", category: "Starters" },
    { id: 2, name: "Fresh Salad", description: "Crisp and fresh", ingredients: ["Lettuce","Cucumber","Tomato","Olive oil dressing"], price: "Rs.499", image: "/images/salad.jpg", category: "Starters" },
    { id: 3, name: "French Fries", description: "Golden crispy fries", ingredients: ["Potatoes","Salt","Ketchup"], price: "Rs.350", image: "/images/fries.jpg", category: "Starters" },
    { id: 4, name: "Spring Rolls", description: "Vegetable spring rolls with sauce", ingredients: ["Cabbage","Carrot","Spring roll wrapper","Sauce"], price: "Rs.400", image: "/images/spring-rolls.jpg", category: "Starters" },
    { id: 5, name: "Chicken Wings", description: "Spicy grilled chicken wings", ingredients: ["Chicken wings","Spices","Garlic","Chili sauce"], price: "Rs.650", image: "/images/chicken-wings.jpg", category: "Starters" },

    // Mains
    { id: 6, name: "Pizza", description: "Mozzarella, basil, tomato sauce", ingredients: ["Pizza dough","Tomato sauce","Mozzarella","Basil"], price: "Rs.1299", image: "/images/pizza.jpg", category: "Mains" },
    { id: 7, name: "Grilled Salmon", description: "Salmon with lemon butter", ingredients: ["Salmon fillet","Lemon","Butter","Herbs"], price: "Rs.1200", image: "/images/grilled-lemon-butter-salmon-9smb-7.jpg", category: "Mains" },
    { id: 8, name: "Chicken Steak", description: "Grilled chicken steak with herbs", ingredients: ["Chicken breast","Rosemary","Thyme","Garlic"], price: "Rs.1100", image: "/images/chicken-steak.jpg", category: "Mains" },
    { id: 9, name: "Beef Steak", description: "Succulent beef steak with garlic butter", ingredients: ["Beef","Garlic","Butter","Pepper"], price: "Rs.1500", image: "/images/beef-steak.jpg", category: "Mains" },
    { id: 10, name: "Veggie Pasta", description: "Penne pasta with fresh vegetables", ingredients: ["Penne","Zucchini","Carrot","Tomato","Olive oil"], price: "Rs.700", image: "/images/pasta-primavera-2.jpg", category: "Mains" },

    // Desserts
    { id: 11, name: "Chocolate Cake", description: "Rich chocolate sponge with cream layers", ingredients: ["Flour","Cocoa","Sugar","Eggs","Cream"], price: "Rs.799", image: "/images/cake.jpg", category: "Desserts" },
    { id: 12, name: "Ice Cream Sundae", description: "Vanilla ice cream with chocolate syrup", ingredients: ["Vanilla ice cream","Chocolate syrup","Nuts"], price: "Rs.450", image: "/images/icecream.jpg", category: "Desserts" },
    { id: 13, name: "Chocolate Lava Cake", description: "Warm molten chocolate cake", ingredients: ["Chocolate","Butter","Sugar","Eggs"], price: "Rs.600", image: "/images/lava-cake.jpg", category: "Desserts" },
    { id: 14, name: "Fruit Tart", description: "Tart with fresh seasonal fruits", ingredients: ["Pastry","Custard","Mixed fruits"], price: "Rs.550", image: "/images/fruit-tart.jpg", category: "Desserts" },
    { id: 15, name: "Cheesecake", description: "Classic creamy cheesecake", ingredients: ["Cream cheese","Sugar","Eggs","Graham cracker crust"], price: "Rs.700", image: "/images/cheesecake.jpg", category: "Desserts" },

    // Drinks
    { id: 16, name: "Coffee", description: "Hot espresso coffee", ingredients: ["Coffee beans","Water","Sugar","Milk"], price: "Rs.250", image: "/images/coffee.jpg", category: "Drinks" },
    { id: 17, name: "Lemon Juice", description: "Freshly squeezed lemon juice", ingredients: ["Lemon","Sugar","Water","Ice"], price: "Rs.300", image: "/images/lemonjuice.jpg", category: "Drinks" },
    { id: 18, name: "Milkshake", description: "Vanilla milkshake with whipped cream", ingredients: ["Milk","Vanilla ice cream","Whipped cream"], price: "Rs.400", image: "/images/milkshake.jpg", category: "Drinks" },
    { id: 19, name: "Iced Tea", description: "Refreshing iced tea with lemon", ingredients: ["Tea","Sugar","Lemon","Ice"], price: "Rs.350", image: "/images/iced-tea.jpg", category: "Drinks" },
    { id: 20, name: "Orange Juice", description: "Freshly squeezed orange juice", ingredients: ["Orange","Sugar","Water","Ice"], price: "Rs.300", image: "/images/orange-juice.jpg", category: "Drinks" },
  ];

  const [category, setCategory] = useState("All");
  const [selectedDish, setSelectedDish] = useState(null);

  const filteredItems = category === "All" ? allItems : allItems.filter(item => item.category === category);
  const categories = ["All", "Starters", "Mains", "Desserts", "Drinks"];

  return (
    <section className="menu">
      <h2>OUR MENU</h2>

      <div className="category-buttons">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={category === cat ? "active" : ""} 
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="menu-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>{item.price}</span>
              <button onClick={() => setSelectedDish(item)}>View Recipe</button>
            </div>
          </div>
        ))}
      </div>

      {selectedDish && (
        <RecipeModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
      )}
    </section>
  );
}

export default Menu;
