import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import Shop from "./Shop";

const Search = () => {
    const { value } = useParams();
    const [products, setProducts] = useState([]);
    const { data, loading, error } = useQuery(`/products?search=${value}`);

    useEffect(() => {
        if (data?.products) setProducts(data.products);
    }, [data?.products]);
    return (
        <>
            {products && <Shop products={products} />}
            {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
            {error && <h2>Error...</h2>}
        </>
    );
};

export default Search;
