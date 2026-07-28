import {
    useParams
} from "react-router";

import {
    useProducts
} from "../Context/ProductContext";

import {
    useCart
}
from "../Context/CartContext";

import "../styles/productDetails.css";
import Navbar from "../components/Navbar";
import { useState } from "react";

import {
    useWishlist
}
from "../Context/WishlistContext";

export default function ProductDetails() {

    const { id } = useParams();

    const {
    addToWishlist
} = useWishlist();

    const {
        products
    } = useProducts();

    const {
    addToCart
} = useCart();

    const product =
        products.find(
            item =>
            item.id === Number(id)
        );

        const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
        <Navbar />

        <section className="details-page">

            <div className="details-container">

                <div className="details-image">

                    <img
                        src={product.image}
                        alt={product.title}
                    />

                </div>

                <div className="details-content">

                    <p className="category">
                        {product.category}
                    </p>

                    <h1>
                        {product.title}
                    </h1>

                    <p className="rating">
                        {product.rating.rate}
                        ★
                    </p>

                    <h2>
                        ${product.price}
                    </h2>

                    <p className="description">
                        {product.description}
                    </p>

                    <div className="actions">

                        <button
                        onClick={() =>
                            addToCart(
                                product
                            )
                        }
                        >
                            Add To Cart
                        </button>

                        <button
                            className="wishlist-btn"
                            onClick={() =>
                                addToWishlist(product)
                            }
                        >
                            Wishlist
                        </button>

                        <div className="quantity-box">
                            <h3>Quantity</h3>

                            <div className="quantity-controls">
                                <button
                                    onClick={() =>
                                        quantity > 1 &&
                                        setQuantity(quantity - 1)
                                    }
                                >
                                    -
                                </button>

                                <span>{quantity}</span>

                                <button
                                    onClick={() =>
                                        setQuantity(quantity + 1)
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
        </>
        
    );
}