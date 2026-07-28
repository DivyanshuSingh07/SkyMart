import { useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "../Context/CartContext";
import {
  RiShoppingCartLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

export default function ProductGrid({ title, products }) {
  const ITEMS_PER_VIEW = 5;

  const [currentIndex, setCurrentIndex] = useState(0);

  const { addToCart } = useCart();

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + ITEMS_PER_VIEW,
  );

  const navigate = useNavigate();

  function handleNext() {
    if (currentIndex + ITEMS_PER_VIEW < products.length) {
      setCurrentIndex((prev) => prev + ITEMS_PER_VIEW);
    }
  }

  function handlePrevious() {
    if (currentIndex - ITEMS_PER_VIEW >= 0) {
      setCurrentIndex((prev) => prev - ITEMS_PER_VIEW);
    }
  }

  return (
    <section className="product-grid-section">
      <div className="section-heading">
        <div className="heading-left">
          <h2>{title}</h2>

          <div className="slider-arrows">
            <button onClick={handlePrevious}>
              <RiArrowLeftSLine />
            </button>

            <button onClick={handleNext}>
              <RiArrowRightSLine />
            </button>
          </div>
        </div>

        <span>View All →</span>
      </div>

      <div className="product-grid">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="large-product-card"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <img src={product.image} alt={product.name} />

            <div className="product-content">
              <h3>{product.title}</h3>

              <p className="rating">{product.rating?.rate} ★</p>

              <h4>${product.price}</h4>

              <button
                onClick={(e) => {
                  e.stopPropagation();

                  addToCart(product);
                }}
              >
                <RiShoppingCartLine />
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
