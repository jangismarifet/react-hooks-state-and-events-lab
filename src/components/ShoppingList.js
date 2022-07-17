import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [categorizedItems, setCategorizedItems] = useState(items);
  function handleSelect(event) {
    setSelectedCategory(event.target.value);
    if (selectedCategory !== "All") {
      setCategorizedItems(items.filter((item) => item.category === selectedCategory))
    }
    else {
      setCategorizedItems(items)
    }
    
  }
  console.log(selectedCategory);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categorizedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
