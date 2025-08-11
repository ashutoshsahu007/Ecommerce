import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";

const MainLayout = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Header setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
