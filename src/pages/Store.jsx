import React from "react";
import MainLayout from "../layouts/MainLayout";

const Store = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}

      {/* Music Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            MUSIC
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {productsArr.map((album, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-2xl font-semibold mb-6 text-gray-700">
                  {album.title}
                </h3>

                <div className="mb-6">
                  <img
                    src={album.imageUrl || "/placeholder.svg"}
                    alt={album.title}
                    width={300}
                    height={300}
                    className="mx-auto rounded-lg shadow-lg"
                  />
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <span className="text-xl font-medium text-gray-700">
                    ${album.price}
                  </span>
                  <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-800 font-semibold px-6 py-2 rounded">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Store;
