import React from "react";
import { FaYoutube, FaSpotify, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-400 text-white text-center py-8">
      <h2 className="text-4xl font-bold mb-4">The Generics</h2>
      <div className="flex justify-center space-x-6 text-2xl">
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600 transition"
        >
          <FaYoutube />
        </a>
        <a
          href="https://spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition"
        >
          <FaSpotify />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition"
        >
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
