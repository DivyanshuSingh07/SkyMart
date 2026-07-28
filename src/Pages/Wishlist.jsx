import Navbar from "../components/Navbar";

import { useNavigate } from "react-router";

import { useWishlist }
from "../Context/WishlistContext";

import { useCart }
from "../Context/CartContext";

export default function Wishlist() {

    const navigate = useNavigate();

    const {
        wishlist,
        removeFromWishlist
    } = useWishlist();

    const {
        addToCart
    } = useCart();

    const totalValue =
    wishlist.reduce(
        (sum,item)=>
        sum + item.price,
        0
    );

    return (
        <>
            <Navbar />

            <section className="wishlist-page">

                <div className="wishlist-header">

                    <div>
                        <h1>
                            My Wishlist
                        </h1>

                        <p>
                            {wishlist.length}
                            {" "}saved items
                        </p>
                    </div>

                    <div className="wishlist-stats">

                        <h2>
                            $
                            {
                                totalValue.toFixed(2)
                            }
                        </h2>

                        <span>
                            Total Value
                        </span>

                    </div>

                </div>

                {
                    wishlist.length === 0 ? (

                        <div className="empty-wishlist">

                            <h2>
                                Your wishlist is empty.
                            </h2>

                            <p>
                                Save products you love.
                            </p>

                        </div>

                    ) : (

                        wishlist.map(item => (

                            <div
                                className="wishlist-item"
                                key={item.id}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                />

                                <div
                                    className="wishlist-content"
                                >
                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p className="rating">
                                        ★★★★★
                                    </p>

                                    <p className="price">
                                        ${item.price}
                                    </p>

                                    <span className="category">
                                        {
                                            item.category
                                        }
                                    </span>
                                </div>

                                <div
                                    className="wishlist-actions"
                                >

                                    <button
                                        className="cart-button"
                                        onClick={() =>
                                            addToCart(item)
                                        }
                                    >
                                        Move To Cart
                                    </button>

                                    <button
                                        className="view-button"
                                        onClick={() =>
                                            navigate(
                                                `/products/${item.id}`
                                            )
                                        }
                                    >
                                        View
                                    </button>

                                    <button
                                        className="remove-button"
                                        onClick={() =>
                                            removeFromWishlist(
                                                item.id
                                            )
                                        }
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>
                        ))
                    )}

            </section>
        </>
    );
}



// import Navbar from "../components/Navbar";

// import {
//     useWishlist
// }
// from "../Context/WishlistContext";

// import {
//     useCart
// }
// from "../Context/CartContext";

// export default function Wishlist() {

//     const {
//         wishlist,
//         removeFromWishlist
//     } = useWishlist();

//     const {
//         addToCart
//     } = useCart();

//     return (

//         <>
//             <Navbar />

//             <section className="wishlist-page">

//                 <h1>
//                     Wishlist
//                 </h1>

//                 {
//                     wishlist.map(
//                         item => (

//                             <div
//                                 className="wishlist-item"
//                                 key={item.id}
//                             >

//                                 <img
//                                     src={item.image}
//                                 />

//                                 <div>

//                                     <h3>
//                                         {item.title}
//                                     </h3>

//                                     <p>
//                                         ${item.price}
//                                     </p>

//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         addToCart(item)
//                                     }
//                                 >
//                                     Add To Cart
//                                 </button>

//                                 <button
//                                     onClick={() =>
//                                         removeFromWishlist(
//                                             item.id
//                                         )
//                                     }
//                                 >
//                                     Remove
//                                 </button>

//                             </div>
//                         )
//                     )
//                 }

//             </section>
//         </>
//     );
// }