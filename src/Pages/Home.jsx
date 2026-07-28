import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Categories from "../components/Categories";
// import ProductSection from "../components/ProductSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
// import Deals from "../components/Deals";
import Trending from "../components/Trending";
import Newsletter from "../components/Newsletter";
import ProductGrid from "../components/ProductGrid";

import "../styles/home.css";
import "../styles/theme.css";
// import SearchBar from "../components/SearchBar";

import { useProducts } from "../Context/ProductContext";

export default function Home() {

    const {
    products,
    loading
} = useProducts();


if (loading) {
    return (
        <h1
            style={{
                color: "white",
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",
            }}
        >
            Loading Products...
        </h1>
    );
}

    return (

        <main className="home">

            <Navbar />

            <Hero />

            <Banner />

            {/* <Deals /> */}

            <Stats />

            <Categories />

            {/* <div className="products">

                <ProductSection
                    title="Top Rated"
                    products={topRated}
                />

                <ProductSection
                    title="New Arrivals"
                    products={arrivals}
                />

            </div> */}

            <Trending />

            {/* <SearchBar /> */}

            <ProductGrid
                title="Top Rated"
                products={products}
            />

            <ProductGrid
                title="New Arrivals"
                products={[...products].reverse()}
            />

            <Features />

            <Newsletter />

            <Footer />

        </main>
    );
}

