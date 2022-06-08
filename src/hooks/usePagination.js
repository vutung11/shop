import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCustomerRouter from "./useCustomerRouter";

const usePagination = ({ totalPages, page, sort }) => {
    const { pushQuery } = useCustomerRouter();
    const { firstArr, lastArr } = useMemo(() => {
        const newArr = [...Array(totalPages)].map((_, i) => i + 1);
        if (totalPages < 4) {
            return {
                firstArr: newArr,
                lastArr: [],
            };
        }
        if (totalPages - page >= 4) {
            return {
                firstArr: newArr.slice(page - 1, page + 2),
                lastArr: newArr.slice(totalPages - 1),
            };
        } else {
            return {
                firstArr: newArr.slice(totalPages - 4, totalPages),
                lastArr: [],
            };
        }
    }, [totalPages, page]);

    const isActive = (index) => {
        if (index === page) return "active";
        return "";
    };
    const prev = () => {
        const newPage = Math.max(page - 1, 1);
        pushQuery({ page: newPage, sort });
    };
    const next = () => {
        const newPage = Math.min(page + 1, totalPages);
        pushQuery({ page: newPage, sort });
    };
    const jump = (num) => {
        pushQuery({ page: num, sort });
    };
    return { lastArr, firstArr, next, prev, jump, isActive };
};

export default usePagination;
