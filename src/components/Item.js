import React, { useState } from "react";

function Item({ name, category }) {
  function handleAddToCart() {
    setIsInCart(isInCart => !isInCart);
  }

  const [isInCart, setIsInCart] = useState(false);
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart"
  const cartClass = isInCart ? "in-cart" : "";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className={isInCart ? "remove" : "add"}>{buttonText}</button>
    </li >
  );
}

export default Item;

