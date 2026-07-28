import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

function addToCart(product){

    const existing =
    cart.find(
        item => item.id === product.id
    );

    if(existing){

        setCart(
            cart.map(item =>
                item.id === product.id
                ? {
                    ...item,
                    quantity:
                    item.quantity + 1
                }
                : item
            )
        );
    }
    else{

        setCart([
            ...cart,
            {
                ...product,
                quantity:1
            }
        ]);
    }

    toast.success(
        `${product.title} added to cart`
    );
    setIsCartOpen(true);
}

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));

    toast.error(
    "Item removed"
);
  }

  function increaseQuantity(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
    toast.success(
    "Quantity Increased"
);
  }

  function decreaseQuantity(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
    toast(
    "Quantity Decreased"
);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

// import {
//     createContext,
//     useContext,
//     useEffect,
//     useState
// } from "react";

// import API from "../services/api";

// const ProductContext = createContext();

// export function ProductProvider({ children }) {

//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {

//         async function fetchProducts() {

//             try {

//                 const response = await API.get("/products");

//                 setProducts(response.data);

//             } catch (error) {

//                 console.log(
//                     "Error Fetching Products:",
//                     error
//                 );

//             } finally {

//                 setLoading(false);

//             }
//         }

//         fetchProducts();

//     }, []);

//     return (
//         <ProductContext.Provider
//             value={{
//                 products,
//                 loading
//             }}
//         >
//             {children}
//         </ProductContext.Provider>
//     );
// }

// export function useProducts() {
//     return useContext(ProductContext);
// }

// import {
//     createContext,
//     useState,
//     useContext
// } from "react";

// const CartContext =
// createContext();

// export function CartProvider({
//     children
// }){

//     const [cart,
//     setCart] =
//     useState([]);

//     function addToCart(
//         product
//     ){

//         setCart(
//             prev=>[
//                 ...prev,
//                 product
//             ]
//         );
//     }

//     function removeFromCart(
//         id
//     ){

//         setCart(
//             prev=>
//             prev.filter(
//                 item=>
//                 item.id!==id
//             )
//         );
//     }

//     return(

//         <CartContext.Provider
//         value={{
//             cart,
//             addToCart,
//             removeFromCart
//         }}
//         >

//             {children}

//         </CartContext.Provider>
//     );
// }

// export function useCart(){

//     return useContext(
//         CartContext
//     );
// }
