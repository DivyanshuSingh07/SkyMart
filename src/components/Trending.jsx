import { useNavigate } from "react-router";

export default function Trending() {

    const navigate = useNavigate();

    return (
        <section className="trending">

            <div className="trending-banner">

                <div className="trending-content">

                    <p>Trending Collection</p>

                    <h1>
                        Electronics
                        <br />
                        Collection
                    </h1>

                    <span>
                        Discover premium accessories and
                        next-generation gaming gear.
                    </span>

                </div>

                <button
                    onClick={() =>
                        navigate(
                            "/shop?category=electronics"
                        )
                    }
                >
                    Explore Collection
                </button>

            </div>

        </section>
    );
}

