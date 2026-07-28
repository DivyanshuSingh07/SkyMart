import {
    useState
}
from "react";

import {
    useLocation
}
from "react-router";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ShopGrid from "../components/ShopGrid";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

import { useProducts } from "../Context/ProductContext";

import "../styles/shop.css";

export default function Shop() {

    const { products } = useProducts();

    const location =
    useLocation();

const queryParams =
    new URLSearchParams(
        location.search
    );

const initialCategory =
    queryParams.get(
        "category"
    ) || "all";

    const [category, setCategory] =
    useState(
        initialCategory
    );

    const [sortBy, setSortBy] =
        useState("latest");

    const [search, setSearch] =
        useState("");

    const [currentPage, setCurrentPage] =
        useState(1);

    const itemsPerPage = 20;

    let filteredProducts =
        [...products];

    // CATEGORY

    if (category !== "all") {

        filteredProducts =
            filteredProducts.filter(
                item =>
                    item.category === category
            );
    }

    // SEARCH

    if (search !== "") {

        filteredProducts =
            filteredProducts.filter(
                item =>
                    item.title
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            );
    }

    // SORTING

    if (sortBy === "price-low") {

        filteredProducts.sort(
            (a, b) =>
                a.price - b.price
        );
    }

    if (sortBy === "price-high") {

        filteredProducts.sort(
            (a, b) =>
                b.price - a.price
        );
    }

    const start =
        (currentPage - 1) *
        itemsPerPage;

    const end =
        start + itemsPerPage;

    const currentProducts =
        filteredProducts.slice(
            start,
            end
        );

    return (

        <>
            <Navbar />

            <section className="shop-page">

                <div className="shop-hero">

                    <h1>
                        Premium Collection
                    </h1>

                    <p>
                        Discover products crafted
                        for modern lifestyles.
                    </p>

                </div>

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                <div className="products-toolbar">

                    <h3>
                        {
                            filteredProducts.length
                        } Products Found
                    </h3>

                    <Filters
                        category={category}
                        setCategory={setCategory}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />

                </div>

                <ShopGrid
                    products={currentProducts}
                />

                <Pagination
                    total={
                        filteredProducts.length
                    }
                    itemsPerPage={
                        itemsPerPage
                    }
                    currentPage={
                        currentPage
                    }
                    setCurrentPage={
                        setCurrentPage
                    }
                />

            </section>

            <Footer />

        </>
    );
}
