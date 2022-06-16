import React, { useState } from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectCategory, setSelectedCategory] = useState("All");
  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  const filteredItemsArray = items.filter((item => {
    if (selectCategory === "All") return true;
    else return item.category === selectCategory;
  }))
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleCategoryChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItemsArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
