import React from "react";
import { FaPlay } from "react-icons/fa";

const AlbumPromo = () => {
  return (
    <div className="bg-gray-600 py-6 flex flex-col justify-center items-center gap-4">
      {/* Album Button */}
      <button className="text-white text-2xl border-2 border-cyan-400 px-6 py-3 hover:bg-cyan-500 hover:text-gray-900 transition-all">
        Get our Latest Album
      </button>

      {/* Play Circle */}
      <div className="w-18 h-18 border-4 border-cyan-400 rounded-full flex items-center justify-center">
        <FaPlay className="text-cyan-400 text-2xl" />
      </div>
    </div>
  );
};

export default AlbumPromo;
