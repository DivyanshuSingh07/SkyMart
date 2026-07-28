import {
    RiShoppingBagLine,
    RiBarChartBoxLine,
    RiStarLine,
    RiPriceTag3Line
}
from "react-icons/ri";

import {
    useCart
}
from "../Context/CartContext";

import {
    useProducts
}
from "../Context/ProductContext";

export default function Stats() {

    const { cart } = useCart();

    const { products } =
        useProducts();

    const totalValue =
        cart.reduce(

            (sum, item) =>

                sum +
                item.price *
                item.quantity,

            0
        );

    const categories =
        [
            ...new Set(
                products.map(
                    product =>
                        product.category
                )
            )
        ];

    const stats = [

        {
            icon:
                <RiShoppingBagLine />,

            value:
                cart.length,

            title:
                "Cart Items",

            subtitle:
                "In your bag"
        },

        {
            icon:
                <RiBarChartBoxLine />,

            value:
                `$${totalValue.toFixed(
                    2
                )}`,

            title:
                "Cart Value",

            subtitle:
                "Ready to checkout"
        },

        {
            icon:
                <RiStarLine />,

            value:
                products.length,

            title:
                "Products",

            subtitle:
                "Available Now"
        },

        {
            icon:
                <RiPriceTag3Line />,

            value:
                categories.length,

            title:
                "Categories",

            subtitle:
                "To Explore"
        }
    ];

    return (

        <section className="stats">

            {
                stats.map(
                    (
                        item,
                        index
                    ) => (

                        <div
                            key={index}
                            className="
                            stat-card"
                        >

                            <div
                                className="
                                stat-icon"
                            >
                                {
                                    item.icon
                                }
                            </div>

                            <div>

                                <h2>
                                    {
                                        item.value
                                    }
                                </h2>

                                <h3>
                                    {
                                        item.title
                                    }
                                </h3>

                                <p>
                                    {
                                        item.subtitle
                                    }
                                </p>

                            </div>

                        </div>
                    )
                )
            }

        </section>
    );
}
