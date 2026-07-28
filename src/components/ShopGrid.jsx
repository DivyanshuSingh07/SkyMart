import ShopCard from "./ShopCard";

export default function ShopGrid({
    products
}) {

    return (

        <section className="shop-grid">

            {
                products.map(product => (

                    <ShopCard
                        key={product.id}
                        product={product}
                    />

                ))
            }

        </section>
    );
}