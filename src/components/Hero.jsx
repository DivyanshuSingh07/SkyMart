import { useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext";

export default function Hero() {
  const { user } = useAuth();

  const navigate = useNavigate();

  function handleViewProducts() {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="hero">
      <div className="hero-left">
        <span>GOOD MORNING 👋</span>

        <h1>
          Welcome back,
          <br />
          <span>{user?.fullName?.split(" ")[0]}</span>
        </h1>

        <p>
          Discover today's picks— hand curated products across electronics,
          fashion and more.
        </p>

        <div className="hero-buttons">
          <button className="primary" onClick={() => navigate("/shop")}>
            Shop Now
          </button>

          {/* <button
                        className="secondary"
                        onClick={() =>
                            navigate("/shop")
                        }
                    >
                        View Products
                    </button> */}

          <button className="secondary" onClick={handleViewProducts}>
            View Products
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="mini-card">
          <h2>20+</h2>

          <p>Products Available</p>
        </div>

        <div className="mini-card">
          <h2>Free</h2>

          <p>Delivery on ₹999+</p>
        </div>
      </div>
    </section>
  );
}
