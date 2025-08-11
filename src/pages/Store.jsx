import MainLayout from "../layouts/MainLayout";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import GenericsHero from "../layouts/GenericsHero";
import { productsArr } from "../Constant/constant";

const Store = () => {
  const cartCtx = useContext(CartContext);

  const handleAddToCart = (album) => {
    cartCtx.addItem(album);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <GenericsHero />
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
                  <button
                    onClick={() => handleAddToCart(album)}
                    className="bg-cyan-400 hover:bg-cyan-500 text-gray-800 font-semibold px-6 py-2 cursor-pointer rounded"
                  >
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
