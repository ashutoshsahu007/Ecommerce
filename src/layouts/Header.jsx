import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <nav className="flex space-x-8">
            <Link to="/home" className="hover:text-gray-300 transition-colors">
              HOME
            </Link>
            <Link to="/" className="hover:text-gray-300 transition-colors">
              STORE
            </Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              ABOUT
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <button className="text-white border border-white hover:bg-white hover:text-gray-800 bg-transparent px-3 py-1 text-sm rounded flex items-center">
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
