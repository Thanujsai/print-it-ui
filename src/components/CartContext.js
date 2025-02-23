import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart data from localStorage
  const getInitialCart = () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  };

  const [cart, setCart] = useState(getInitialCart);

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


// example functionality

// 🔄 Example Flow
// Adding an Item
// Assume cart = [{ id: 1, name: "Item A" }].
// Calling addToCart({ id: 2, name: "Item B" }) triggers:
// setCart((prevCart) => [...prevCart, product]);

// prevCart is [ { id: 1, name: "Item A" } ], so:
// [...prevCart, product] 
// Becomes:
// [ { id: 1, name: "Item A" }, { id: 2, name: "Item B" } ]
// The new cart state updates with both items.
// Removing an Item
// Assume cart = [{ id: 1, name: "Item A" }, { id: 2, name: "Item B" }].
// Calling removeFromCart(1) triggers:
// setCart((prevCart) => prevCart.filter((item) => item.id !== 1));
// prevCart is [ { id: 1, name: "Item A" }, { id: 2, name: "Item B" } ].
// filter() removes Item A, leaving [ { id: 2, name: "Item B" } ].
// The new cart state updates with only Item B.
// ⚡ Why use prevCart?
// Prevents state overwrites when multiple updates happen quickly.
// Ensures updates are based on the most recent state.
// Makes React state updates predictable and efficient.
