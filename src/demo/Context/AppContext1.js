// AppContext.js
import React, { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider1 = ({ children }) => {
    const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <AppContext.Provider value={{ cart, addToCart }}>
    {children}
  </AppContext.Provider>
  );
};
