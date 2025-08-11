import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Store from "./pages/Store";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import AuthContext from "./store/auth-context";
import { useContext } from "react";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/"
        element={authCtx.isLoggedIn ? <Store /> : <Navigate to="/login" />}
      />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route
        path="/login"
        element={!authCtx.isLoggedIn ? <Login /> : <Navigate to="/" />}
      />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
