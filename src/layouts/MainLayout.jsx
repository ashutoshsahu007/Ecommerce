import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GenericsHero from "./GenericsHero";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <GenericsHero />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
