import { createContext, useState, useEffect } from "react";

const CartContext = createContext({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export default CartContext;

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const API_BASE = "https://crudcrud.com/api/faf10b35a0b849d994a01d5c41815fcf";
  const userEmail = "ppaskumar@gmail.com";

  // Helper: convert email to safe key
  const transformEmail = (email) => email.replace(/[@.]/g, "");

  const userKey = transformEmail(userEmail);

  // Load cart when component mounts
  useEffect(() => {
    if (!userEmail) return;
    fetch(`${API_BASE}/cart${userKey}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
      })
      .catch((err) => console.error("Error fetching cart:", err));
  }, [userEmail]);

  // Add item to cart & CrudCrud
  const addToCart = async (item) => {
    try {
      const existingItem = cartItems.find(
        (cartItem) => cartItem.id === item.id // or use title or another unique field
      );

      console.log(existingItem, "existingId");

      if (existingItem) {
        console.log("Inside Existing item");
        // Update quantity
        const updatedItem = {
          ...item,
          quantity: existingItem.quantity + 1,
        };

        console.log(updatedItem, "updatedItem");

        await fetch(`${API_BASE}/cart${userKey}/${existingItem._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedItem),
        });

        const updatedItemForLocal = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };

        setCartItems((prev) =>
          prev.map((cartItem) =>
            cartItem._id === existingItem._id ? updatedItemForLocal : cartItem
          )
        );
      } else {
        // Add as a new item
        const response = await fetch(`${API_BASE}/cart${userKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...item, quantity: 1 }),
        });

        const savedItem = await response.json();
        setCartItems((prev) => [...prev, savedItem]);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // Remove item from cart & CrudCrud
  const removeFromCart = async (localId) => {
    // optimistic update
    let previous = cartItems;
    setCartItems((prev) => prev.filter((i) => i.id !== localId));

    try {
      const item = previous.find((i) => i.id === localId);
      if (!item) return; // nothing to delete server-side

      const res = await fetch(`${API_BASE}/cart${userKey}/${item._id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
    } catch (error) {
      // rollback
      console.error("Delete failed, rolling back:", error);
      setCartItems(previous);
    }
  };

  // Clear cart for this user
  const clearCart = async () => {
    try {
      for (let item of cartItems) {
        await fetch(`${API_BASE}/cart${userKey}/${item._id}`, {
          method: "DELETE",
        });
      }
      setCartItems([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const contextValue = {
    cartItems,
    addItem: addToCart,
    removeItem: removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
