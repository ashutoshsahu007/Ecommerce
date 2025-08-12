import { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import AuthContext from "../store/auth-context";

const MainLayout = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Header setShowCart={setShowCart} />
      {showCart && authCtx.isLoggedIn && <Cart setShowCart={setShowCart} />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
