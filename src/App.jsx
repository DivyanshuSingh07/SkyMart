import { Routes, Route, Navigate } from "react-router";

import Auth from "./Pages/Auth.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import Wishlist from "./Pages/Wishlist";
import ProductDetails from "./Pages/ProductDetails.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Profile from "./Pages/Profile.jsx";

import "./styles/cartDrawer.css";

import CartDrawer from "./components/CartDrawer";

import { useAuth } from "./Context/AuthContext.jsx";

export default function App() {
  const { user } = useAuth();

  return (
    <>
      <CartDrawer />
      <Routes>
        <Route path="/" element={<Auth />} />

        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/" replace />}
        />

        <Route
          path="/products/:id"
          element={user ? <ProductDetails /> : <Navigate to="/" replace />}
        />

        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/" />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/about" element={<About />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
