import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
/*
Styles import
*/
import "./styles/auth.css";
import "./index.css";
import "./styles/ThemePanel.css";
import "./styles/wishlist.css";
import "./styles/checkout.css";
import "./styles/productDetails.css";
import "./styles/theme.css";
import "./styles/shop.css";
import "./styles/about.css";
import "./styles/home.css";
import "./styles/shopCard.css";
import "./styles/shopGrid.css";
import "./styles/footer.css";

import { AuthProvider } from "./Context/AuthContext.jsx";

import { ProductProvider } from "./Context/ProductContext.jsx";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext.jsx";

import { ThemeProvider } from "./Context/ThemeContext";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <ThemeProvider>
              <App />
              <Toaster
                position="top-right"
                reverseOrder={false}
                gutter={12}
                containerStyle={{
                  top: 90,
                }}
                toastOptions={{
                  duration: 3000,

                  style: {
                    background: "#111",
                    color: "#fff",
                    border: "1px solid #262626",
                    borderRadius: "18px",
                    padding: "16px 20px",
                    minWidth: "300px",
                  },

                  success: {
                    iconTheme: {
                      primary: "#C6FF00",
                      secondary: "#000",
                    },
                  },
                }}
              />
            </ThemeProvider>
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>,
);
