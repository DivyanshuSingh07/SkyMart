import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router";

import Navbar from "../components/Navbar";

export default function Cart() {
    const navigate = useNavigate();

    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useCart();

    const subtotal = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    const shipping =
        cart.length > 0
            ? 15
            : 0;

    const tax =
        subtotal * 0.1;

    const total =
        subtotal +
        shipping +
        tax;

    return (
        <>
            <Navbar />

            <main className="cart-page">

                <h1>
                    Shopping Cart
                </h1>

                {
                    cart.length === 0 ? (

                        <div className="empty-cart">

                            <h2>
                                Your cart is empty
                            </h2>

                            <p>
                                Add some products to continue shopping.
                            </p>

                            <button
                                onClick={() =>
                                    navigate("/home")
                                }
                            >
                                Continue Shopping
                            </button>

                        </div>

                    ) : (

                        <div className="cart-layout">

                            <section className="cart-items">

                                {
                                    cart.map(
                                        (item) => (

                                            <div
                                                key={item.id}
                                                className="cart-item"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                />

                                                <div className="item-info">

                                                    <h3>
                                                        {item.title}
                                                    </h3>

                                                    <p>
                                                        $
                                                        {item.price}
                                                    </p>

                                                </div>

                                                <div className="quantity-controls">

                                                    <button
                                                        onClick={() =>
                                                            decreaseQuantity(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </button>

                                                    <span>
                                                        {
                                                            item.quantity
                                                        }
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            increaseQuantity(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                                <h4>
                                                    $
                                                    {
                                                        (
                                                            item.price *
                                                            item.quantity
                                                        ).toFixed(
                                                            2
                                                        )
                                                    }
                                                </h4>

                                                <button
                                                    className="remove-btn"
                                                    onClick={() =>
                                                        removeFromCart(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </button>

                                            </div>
                                        )
                                    )
                                }

                            </section>

                            <aside className="summary-card">

                                <h2>
                                    Order Summary
                                </h2>

                                <div className="summary-row">
                                    <span>
                                        Subtotal
                                    </span>

                                    <span>
                                        $
                                        {
                                            subtotal.toFixed(
                                                2
                                            )
                                        }
                                    </span>
                                </div>

                                <div className="summary-row">
                                    <span>
                                        Shipping
                                    </span>

                                    <span>
                                        $
                                        {
                                            shipping
                                        }
                                    </span>
                                </div>

                                <div className="summary-row">
                                    <span>
                                        Tax
                                    </span>

                                    <span>
                                        $
                                        {
                                            tax.toFixed(
                                                2
                                            )
                                        }
                                    </span>
                                </div>

                                <hr />

                                <div className="summary-row total">

                                    <span>
                                        Total
                                    </span>

                                    <span>
                                        $
                                        {
                                            total.toFixed(
                                                2
                                            )
                                        }
                                    </span>

                                </div>

                                <button
                                    className="checkout-btn"
                                    onClick={() =>
                                        navigate(
                                            "/checkout"
                                        )
                                    }
                                >
                                    Proceed To Checkout
                                </button>

                            </aside>

                        </div>

                    )
                }

            </main>
        </>
    );
}



// import { useCart } from "../Context/CartContext";
// import Navbar from "../components/Navbar";
// import { useNavigate } from "react-router";

// import {
//     RiDeleteBin6Line,
//     RiAddLine,
//     RiSubtractLine,
//     RiShoppingBagLine
// } from "react-icons/ri";

// export default function Cart() {
//     const navigate = useNavigate();

//     const {
//         cart,
//         increaseQuantity,
//         decreaseQuantity,
//         removeFromCart
//     } = useCart();

//     const subtotal = cart.reduce(
//         (sum, item) =>
//             sum + item.price * item.quantity,
//         0
//     );

//     const shipping = subtotal > 0 ? 15 : 0;
//     const tax = subtotal * 0.18;

//     const total =
//         subtotal +
//         shipping +
//         tax;

//     return (
//         <>
//             <Navbar />

//             <section className="cart-page">

//                 <h1>Shopping Cart</h1>

//                 {cart.length === 0 ? (
//                     <div className="empty-cart">

//                         <h2>
//                             Your cart is empty
//                         </h2>

//                         <p>
//                             Add some amazing products to begin shopping.
//                         </p>

//                         <button
//                             className="continue-btn"
//                             onClick={() =>
//                                 navigate("/home")
//                             }
//                         >
//                             Continue Shopping
//                         </button>

//                     </div>
//                 ) : (
//                     <>
//                         <div className="cart-items">

//                             {cart.map((item) => (
//                                 <div
//                                     key={item.id}
//                                     className="cart-item"
//                                 >
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                     />

//                                     <div className="item-info">

//                                         <h3>
//                                             {item.title}
//                                         </h3>

//                                         <p>
//                                             $
//                                             {item.price}
//                                         </p>

//                                     </div>

//                                     <div className="quantity-box">

//                                         <button
//                                             onClick={() =>
//                                                 decreaseQuantity(
//                                                     item.id
//                                                 )
//                                             }
//                                         >
//                                             <RiSubtractLine />
//                                         </button>

//                                         <span>
//                                             {item.quantity}
//                                         </span>

//                                         <button
//                                             onClick={() =>
//                                                 increaseQuantity(
//                                                     item.id
//                                                 )
//                                             }
//                                         >
//                                             <RiAddLine />
//                                         </button>

//                                     </div>

//                                     <h4>
//                                         $
//                                         {(
//                                             item.price *
//                                             item.quantity
//                                         ).toFixed(2)}
//                                     </h4>

//                                     <button
//                                         className="remove-btn"
//                                         onClick={() =>
//                                             removeFromCart(
//                                                 item.id
//                                             )
//                                         }
//                                     >
//                                         <RiDeleteBin6Line />
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="cart-summary">

//                             <h2>
//                                 Order Summary
//                             </h2>

//                             <div>
//                                 <span>
//                                     Subtotal
//                                 </span>

//                                 <span>
//                                     $
//                                     {subtotal.toFixed(
//                                         2
//                                     )}
//                                 </span>
//                             </div>

//                             <div>
//                                 <span>
//                                     Shipping
//                                 </span>

//                                 <span>
//                                     $
//                                     {shipping.toFixed(
//                                         2
//                                     )}
//                                 </span>
//                             </div>

//                             <div>
//                                 <span>
//                                     Tax (18%)
//                                 </span>

//                                 <span>
//                                     $
//                                     {tax.toFixed(
//                                         2
//                                     )}
//                                 </span>
//                             </div>

//                             <div className="grand-total">
//                                 <span>
//                                     Total
//                                 </span>

//                                 <span>
//                                     $
//                                     {total.toFixed(
//                                         2
//                                     )}
//                                 </span>
//                             </div>

//                             <div className="summary-actions">

//                                 <button
//                                     className="continue-btn"
//                                     onClick={() =>
//                                         navigate(
//                                             "/home"
//                                         )
//                                     }
//                                 >
//                                     Continue Shopping
//                                 </button>

//                                 <button
//                                     className="checkout-btn"
//                                     onClick={() =>
//                                         navigate(
//                                             "/checkout"
//                                         )
//                                     }
//                                 >
//                                     <RiShoppingBagLine />

//                                     Checkout
//                                 </button>

//                             </div>

//                         </div>
//                     </>
//                 )}
//             </section>
//         </>
//     );
// }