import React from "react";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Cart = ({ setShowCart }) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.cartItems;

  const handleRemove = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <div className="fixed top-16 right-0 w-[30rem] h-[80vh] bg-white shadow-xl overflow-y-auto z-100 px-6 border-l">
      {/* Header */}
      <div className="sticky top-0 py-2 border-b-1 bg-white">
        <div className="relative mb-6">
          <h2 className="text-4xl font-extrabold text-center font-[fantasy] tracking-wide">
            CART
          </h2>
          <button
            onClick={() => setShowCart(false)}
            className="absolute top-0 cursor-pointer right-0 text-2xl font-bold text-gray-600 hover:text-black"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Column Titles */}
      <div className="border-t  border-b py-2 flex font-bold justify-between px-2">
        <span>ITEM</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
      </div>

      {/* Items */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-4"
        >
          {/* Item */}
          <div className="flex items-center gap-2 w-[40%]">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-16 h-16 object-cover"
            />
            <span>{item.title}</span>
          </div>

          {/* Price */}
          <div className="w-[20%] text-center">${item.price.toFixed(2)}</div>

          {/* Quantity & Remove */}
          <div className="flex items-center gap-2 w-[35%] justify-end">
            <input
              type="number"
              value={item.quantity}
              min="1"
              className="w-12 border text-center py-1 px-2 rounded-md border-gray-300"
            />
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-500 cursor-pointer text-white px-2 py-1 rounded hover:bg-red-600"
            >
              REMOVE
            </button>
          </div>
        </div>
      ))}

      {/* Purchase Button */}
      <div className=" text-center sticky bottom-0  py-3 bg-white z-100 w-full">
        <button
          onClick={() => cartCtx.clearCart()}
          className="bg-blue-500 text-white cursor-pointer font-semibold px-6 py-2 rounded hover:bg-blue-600"
        >
          PURCHASE
        </button>
      </div>
    </div>
  );
};

export default Cart;
