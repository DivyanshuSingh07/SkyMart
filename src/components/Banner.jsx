import { useNavigate } from "react-router";

export default function Banner() {

    const navigate = useNavigate();

    function handleDeals() {

        navigate(
            "/shop?category=electronics"
        );
    }

    return (

        <section className="banner">

            <div>

                <h2>
                    SUMMER SALE 2026
                </h2>

                <p>
                    Get up to 50% off on selected products.
                </p>

            </div>

            <button
                onClick={handleDeals}
            >
                Explore Deals
            </button>

        </section>
    );
}
