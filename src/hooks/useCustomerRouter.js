import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useCustomerRouter = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const pushQuery = (query) => {
        console.log(query);
        const newQuery = new URLSearchParams(query).toString();
        navigate(`${pathname}?${newQuery}`);
    };
    return { pushQuery };
};

export default useCustomerRouter;
