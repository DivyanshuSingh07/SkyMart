import { useNavigate } from "react-router";

import {
    RiComputerLine,
    RiShirtLine,
    RiPriceTag3Line
}
from "react-icons/ri";

import {
    useProducts
}
from "../Context/ProductContext";

export default function Categories() {

    const navigate =
        useNavigate();

    const {
        products
    } = useProducts();

    const categories = [

        {
            icon:<RiComputerLine />,
            name:"electronics"
        },

        {
            icon:<RiPriceTag3Line />,
            name:"jewelery"
        },

        {
            icon:<RiShirtLine />,
            name:"men's clothing"
        },

        {
            icon:<RiShirtLine />,
            name:"women's clothing"
        }
    ];

    return (

        <section
            className="
            categories-section"
        >

            <div
                className="
                section-heading"
            >

                <h2>
                    Shop By Category
                </h2>

            </div>

            <div
                className="
                categories-grid"
            >

                {
                    categories.map(
                        item => {

                            const count =
                                products.filter(
                                    product =>
                                        product.category ===
                                        item.name
                                ).length;

                            return (

                                <div
                                    key={item.name}
                                    className="
                                    category-card"
                                    onClick={() =>
                                        navigate(
                                            `/shop?category=${item.name}`
                                        )
                                    }
                                >

                                    <div
                                        className="
                                        category-icon"
                                    >
                                        {item.icon}
                                    </div>

                                    <h3>
                                        {item.name}
                                    </h3>

                                    <p>
                                        {count}
                                        {" "}
                                        items
                                    </p>

                                </div>
                            );
                        }
                    )
                }

            </div>

        </section>
    );
}
