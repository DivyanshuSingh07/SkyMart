import {
    RiCloseLine,
    RiDeleteBinLine
}
from "react-icons/ri";

import { useNavigate }
from "react-router";

import {
    useCart
}
from "../Context/CartContext";

export default function CartDrawer(){

    const navigate =
    useNavigate();

    const {
        cart,
        isCartOpen,
        setIsCartOpen,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useCart();

    const total =
    cart.reduce(
        (sum,item)=>
        sum +
        item.price *
        item.quantity,
        0
    );

    return(

        <>
            {
                isCartOpen &&

                <div
                className="cart-overlay"
                onClick={()=>
                    setIsCartOpen(false)
                }
                />
            }

            <aside
            className={`
                cart-drawer
                ${
                    isCartOpen
                    ? "open"
                    : ""
                }
            `}
            >

                <div
                className="drawer-header"
                >

                    <h2>
                        Cart
                    </h2>

                    <button
                    onClick={()=>
                    setIsCartOpen(false)
                    }
                    >
                        <RiCloseLine />
                    </button>

                </div>

                <div className="drawer-items">

                    {
                        cart.map(item=>

                            <div
                            key={item.id}
                            className="drawer-item"
                            >

                                <img
                                src={item.image}
                                />

                                <div>

                                    <h4>
                                        {item.title}
                                    </h4>

                                    <h3>
                                        $
                                        {item.price}
                                    </h3>

                                    <div
                                    className="
                                    quantity-controls"
                                    >

                                        <button
                                        onClick={()=>
                                        decreaseQuantity(
                                            item.id
                                        )}
                                        >
                                            -
                                        </button>

                                        <span>
                                            {
                                            item.quantity
                                            }
                                        </span>

                                        <button
                                        onClick={()=>
                                        increaseQuantity(
                                            item.id
                                        )}
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                                <button
                                className="
                                delete-btn"
                                onClick={()=>
                                removeFromCart(
                                    item.id
                                )}
                                >
                                    <RiDeleteBinLine />
                                </button>

                            </div>
                        )
                    }

                </div>

                <div
                className="
                drawer-footer"
                >

                    <h2>
                        Total:
                        ${
                        total.toFixed(2)
                        }
                    </h2>

                    <button
                    className="
                    checkout-btn"
                    onClick={()=>
                    {
                        navigate(
                            "/checkout"
                        );

                        setIsCartOpen(
                            false
                        );
                    }}
                    >
                        Checkout
                    </button>

                </div>

            </aside>

        </>
    );
}