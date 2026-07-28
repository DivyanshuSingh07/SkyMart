import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState([]);

    function addToWishlist(product) {

        const exists = wishlist.find(
            item => item.id === product.id
        );

        if (exists) return;

        setWishlist([
            ...wishlist,
            product
        ]);

        toast.success(
    "Added to Wishlist"
);
    }

    function removeFromWishlist(id) {

        setWishlist(
            wishlist.filter(
                item => item.id !== id
            )
        );

        toast.error(
    "Removed from Wishlist"
);
    }

    return (

        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(
        WishlistContext
    );
}