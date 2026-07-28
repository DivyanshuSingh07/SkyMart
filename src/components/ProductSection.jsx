import {
    RiShoppingBagLine
} from "react-icons/ri";

export default function ProductSection({
    title,
    products
}) {
    return (
        <div className="product-section">

            <div className="product-header">

                <h2>{title}</h2>

                <span>See all →</span>

            </div>

            {
                products.map((product) => (

                    <div
                        className="product-card"
                        key={product.id}
                    >
                        <img
                            src={product.image}
                            alt=""
                        />

                        <div className="product-info">

                            <h4>
                                {product.name}
                            </h4>

                            <p>
                                ${product.price}
                            </p>

                        </div>

                        <button>
                            <RiShoppingBagLine />
                        </button>

                    </div>
                ))
            }

        </div>
    );
}