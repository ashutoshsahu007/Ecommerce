import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  addItem: () => {},
  removeItem: (item) => {},
  clearCart: (id) => {},
});

export default CartContext;

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex >= 0) {
        // Item already exists → update quantity
        const updatedCart = [...prev];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + item.quantity,
        };
        return updatedCart;
      } else {
        // Add new item
        return [...prev, item];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems: cartItems,
    addItem: addToCart,
    removeItem: removeFromCart,
    clearCart: clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
