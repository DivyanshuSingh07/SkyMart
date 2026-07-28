import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import toast from "react-hot-toast";

import {
    getCurrentUser,
    getUsers,
    saveUsers
}
from "../utils/localStorage";

const WishlistContext =
    createContext();

export function WishlistProvider({
    children
}) {

    const currentUser =
        getCurrentUser();

    const [wishlist,
        setWishlist] =
        useState(
            currentUser?.wishlist || []
        );

    useEffect(() => {

        if (!currentUser) return;

        const users =
            getUsers();

        const updatedUsers =
            users.map(user =>

                user.id === currentUser.id

                    ? {
                        ...user,
                        wishlist
                    }

                    : user
            );

        saveUsers(
            updatedUsers
        );

    }, [wishlist]);

    function addToWishlist(
        product
    ) {

        const exists =
            wishlist.find(
                item =>
                    item.id === product.id
            );

        if (exists) {

            toast(
                "Already in Wishlist"
            );

            return;
        }

        setWishlist([

            ...wishlist,

            product
        ]);

        toast.success(
            "Added to Wishlist"
        );
    }

    function removeFromWishlist(
        id
    ) {

        setWishlist(

            wishlist.filter(
                item =>
                    item.id !== id
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


