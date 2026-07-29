import { RiShoppingCartLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";
import toast from "react-hot-toast";

import { logoutUser } from "../utils/localStorage";
import { useAuth } from "../Context/AuthContext";
import ThemePanel from "./ThemePanel";
import { RiHeartLine } from "react-icons/ri";
import { RiPaletteLine } from "react-icons/ri";

import { useWishlist } from "../Context/WishlistContext";

import { useCart } from "../Context/CartContext";
// import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();

  //     const [showThemes, setShowThemes] =
  // useState(false);

  const { user, setUser } = useAuth();

  const { wishlist } = useWishlist();

  const { cart } = useCart();

  function handleLogout() {
    toast("See you again!");
    logoutUser();
    setUser(null);
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-icon">⚡</div>

        <h2>
          Sky<span>Mart</span>
        </h2>
      </div>

      <div className="nav-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <div className="nav-actions">

        <div className="profile" onClick={() => navigate("/profile")}>
          <div className="avatar">
            {user?.profileImage ? (
              <img src={user.profileImage} alt="profile" />
            ) : (
              user?.fullName?.charAt(0) || "U"
            )}
          </div>

          <span>{user?.fullName}</span>
        </div>

        <button onClick={() => navigate("/wishlist")} className="wishlist-icon">
          <RiHeartLine />

          <span className="wishlist-count">{wishlist.length}</span>
        </button>

        <button onClick={() => navigate("/cart")} className="cart-btn">
          <RiShoppingCartLine />

          <span className="cart-count">{cart.length}</span>
        </button>
        <div className="theme-wrapper">
          <button className="theme-btn">
            <RiPaletteLine />
          </button>

          <ThemePanel />
        </div>

        <button onClick={handleLogout}>
          <RiLogoutBoxLine />
        </button>
      </div>
    </nav>
  );
}
