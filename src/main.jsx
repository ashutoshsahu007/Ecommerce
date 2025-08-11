import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./store/auth-context";
import { CartContextProvider } from "./store/cart-context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
