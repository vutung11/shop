import React, { useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import axios from "axios";
import Shop from "../components/Shop";
import Header from "../components/Header";
import Stayhome from "../components/Stayhome";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Pagination from "../components/Pagination";
import useQuery from "../hooks/useQuery";
import Sort from "../components/Sort";

const Home = () => {
    const [products, setProducts] = useState([]);
    const { search } = useLocation();
    const { page, sort } = useMemo(() => {
        const page = new URLSearchParams(search).get("page") || 1;
        const sort = new URLSearchParams(search).get("sort") || "-createdAt";
        return {
            page: Number(page),
            sort: sort,
        };
    }, [search]);
    const [limit, setLimit] = useState(8);
    const { data, loading, error } = useQuery(
        `/products?page=${page}&limit=${limit}&sort=${sort}`
    );
    useEffect(() => {
        if (data?.products) setProducts(data.products);
    }, [data?.products]);
    const totalPages = useMemo(() => {
        if (!data?.count) return 0;
        return Math.ceil(data.count / limit);
    }, [data?.count]);

    return (
        <div>
            <Header />
            <Stayhome />
            <Sort page={page} sort={sort} />
            {products && <Shop products={products} />}
            {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
            {error && <h2>Error...</h2>}
            <Pagination totalPages={totalPages} page={page} sort={sort} />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
