import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ProductInfo from "./ProductInfo";
import useQuery from "../hooks/useQuery";

const Prodetails = () => {
    const { id } = useParams();
    const { data: product, loading, error } = useQuery(`/products/${id}`);

    return (
        <>
            {product && <ProductInfo product={product} />}
            {loading && <h2>Loading...</h2>}
            {error && <h2>Error...</h2>}
        </>
    );
};

export default Prodetails;
