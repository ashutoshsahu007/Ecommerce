import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = ({ setShowCart }) => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <nav className="flex space-x-8">
            <NavLink
              to="/home"
              className={({ isActive }) => {
                return `hover:text-gray-300 transition-colors ${
                  isActive ? "text-white font-bold underline" : ""
                }`;
              }}
            >
              HOME
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-colors ${
                  isActive ? "text-white font-bold underline" : ""
                }`
              }
            >
              STORE
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-colors ${
                  isActive ? "text-white font-bold underline" : ""
                }`
              }
            >
              ABOUT
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-colors ${
                  isActive ? "text-white font-bold underline" : ""
                }`
              }
            >
              CONTACT
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-colors ${
                  isActive ? "text-white font-bold underline" : ""
                }`
              }
            >
              LOGIN
            </NavLink>
          </nav>

          <div className="flex items-center  space-x-2">
            <button
              onClick={() => setShowCart(true)}
              className="text-white border cursor-pointer border-white hover:bg-white hover:text-gray-800 bg-transparent px-3 py-1 text-sm rounded flex items-center"
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              cart
              <span className="ml-1 bg-cyan-400 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
