import { RiShoppingCartLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { useNavigate } from "react-router";

import { useCart } from "../Context/CartContext";

export default function ShopCard({ product }) {

    const navigate = useNavigate();

    const { addToCart } = useCart();

    return (

        <div className="shop-card">

            <img
                src={product.image}
                alt={product.title}
            />

            <div className="shop-card-content">

                <p className="category">
                    {product.category}
                </p>

                <h3>
                    {product.title}
                </h3>

                <p className="rating">
                    ★★★★★
                </p>

                <h4>
                    ${product.price}
                </h4>

                <div className="shop-actions">

                    <button
                        onClick={() =>
                            navigate(
                                `/products/${product.id}`
                            )
                        }
                    >
                        <RiEyeLine />
                        Details
                    </button>

                    <button
                        onClick={() =>
                            addToCart(product)
                        }
                    >
                        <RiShoppingCartLine />
                        Cart
                    </button>

                </div>

            </div>

        </div>
    );
}