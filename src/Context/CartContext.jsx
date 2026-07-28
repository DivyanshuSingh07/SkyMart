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

const CartContext =
    createContext();

export function CartProvider({
    children
}) {

    const currentUser =
        getCurrentUser();

    const [cart, setCart] =
        useState(
            currentUser?.cart || []
        );

    const [isCartOpen,
        setIsCartOpen] =
        useState(false);

    useEffect(() => {

        if (!currentUser) return;

        const users =
            getUsers();

        const updatedUsers =
            users.map(user =>

                user.id === currentUser.id
                    ? {
                        ...user,
                        cart
                    }
                    : user
            );

        saveUsers(
            updatedUsers
        );

    }, [cart]);

    function addToCart(
        product
    ) {

        const existing =
            cart.find(
                item =>
                    item.id === product.id
            );

        if (existing) {

            setCart(

                cart.map(
                    item =>

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

        else {

            setCart([

                ...cart,

                {
                    ...product,
                    quantity: 1
                }
            ]);
        }

        toast.success(
            `${product.title} added to cart`
        );

        setIsCartOpen(
            true
        );
    }

    function removeFromCart(
        id
    ) {

        setCart(

            cart.filter(
                item =>
                    item.id !== id
            )
        );

        toast.error(
            "Item removed"
        );
    }

    function increaseQuantity(
        id
    ) {

        setCart(

            cart.map(
                item =>

                    item.id === id

                        ? {
                            ...item,
                            quantity:
                            item.quantity + 1
                        }

                        : item
            )
        );

        toast.success(
            "Quantity Increased"
        );
    }

    function decreaseQuantity(
        id
    ) {

        setCart(

            cart.map(
                item =>

                    item.id === id

                        ? {
                            ...item,
                            quantity:
                            Math.max(
                                1,
                                item.quantity - 1
                            )
                        }

                        : item
            )
        );

        toast(
            "Quantity Decreased"
        );
    }

    function clearCart() {

        setCart([]);
    }

    return (

        <CartContext.Provider
            value={{

                cart,

                addToCart,

                removeFromCart,

                increaseQuantity,

                decreaseQuantity,

                clearCart,

                isCartOpen,

                setIsCartOpen
            }}
        >

            {children}

        </CartContext.Provider>
    );
}

export function useCart() {

    return useContext(
        CartContext
    );
}

