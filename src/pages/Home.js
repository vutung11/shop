import React, { useContext, useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import axios from "axios";
import Shop from "../components/Shop";
import Pagination from "../components/Pagination";
import useQuery from "../hooks/useQuery";
import { Store } from "../context/Store";

const Home = () => {
    const [products, setProducts] = useState([]);
    const { page, sort } = useContext(Store);

    const [limit, setLimit] = useState(10);
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
            {products && <Shop products={products} />}
            {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
            {error && <h2>Error...</h2>}
            <Pagination totalPages={totalPages} />
        </div>
    );
};

export default Home;
